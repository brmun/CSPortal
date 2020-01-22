package com.softcamp.customer.portal.ajax;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import net.minidev.json.JSONObject;

import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.config.RequestConfig.Builder;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.simple.JSONValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <pre>
 * WebAPI Ŭ���̾�Ʈ Ŭ����
 * </pre>
 *
 * @Author ����ȣ
 * @Date 2016-10-13
 */
public class WebAPIClient
{
	static Logger logger = LoggerFactory.getLogger(WebAPIClient.class);
	static SSLContext ctx = null;
	
	static {
		if ( logger.isDebugEnabled() )
		{
			System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.SimpleLog");
			System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.http.wire", "DEBUG");
			System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.http.impl.conn", "debug");
		}
		
//		System.setErr(new PrintStream(new LoggerOutputStream(logger, Level.ERROR), true));
		
		TrustManager[ ] certs = new TrustManager[ ]
		{
			new X509TrustManager() {
				@Override
				public X509Certificate[] getAcceptedIssuers() {
					return null;
				}
				@Override
				public void checkServerTrusted(X509Certificate[] chain, String authType)
					throws CertificateException {
				}
				@Override
				public void checkClientTrusted(X509Certificate[] chain, String authType)
					throws CertificateException {
				}
			}
		};
		
		try {
			ctx = SSLContext.getInstance("TLS");
			ctx.init(null, certs, new SecureRandom());
		} catch ( java.security.GeneralSecurityException ex ) {
			ex.printStackTrace();
			throw new RuntimeException(ex);
		}
	}

	/**
	 * POST ��û ó�� (timeout 10��)
	 * 
	 * @param url ��û�� POST URL �ּ�
	 * @param jsonData POST ��û �����Ϳ� ������ JSON ���ڿ� (�⺻ �������ڵ� UTF-8)
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception
	 */
	public String postJSON(String url, String jsonData) throws Exception
	{
		return postJSON(url, jsonData, "UTF-8", 10000);
	}

	/**
	 * JSON ������ ����� POST ��û ó��
	 * 
	 * @param url ��û�� POST URL �ּ�
	 * @param jsonData POST ��û �����Ϳ� ������ JSON ���ڿ�
	 * @param encoding ��û �������� encoding ����(��. UTF-8)
	 * @param timeoutMilli ����/HTTP �ð�����(milli ��)
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception
	 */
	public String postJSON(String url, String jsonData, String encoding, int timeoutMilli) throws Exception
	{
		return post(url, jsonData, "application/json", encoding, timeoutMilli);
	}
	
	/**
	 * Form ������ ����� POST ��û ó��
	 * 
	 * @param url ��û�� POST URL �ּ�
	 * @param postData POST ��û �����Ϳ� ������ FORM ���ڿ�
	 * @param encoding ��û �������� encoding ����(��. UTF-8)
	 * @param timeoutMilli ����/HTTP �ð�����(milli ��)
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception
	 */
	public String postForm(String url, String postData, String encoding, int timeoutMilli) throws Exception
	{
		return post(url, postData, "application/x-www-form-urlencoded", encoding, timeoutMilli);
	}
	
	/**
	 * POST ��û ó��
	 * 
	 * @param url ��û�� POST URL �ּ�
	 * @param postData POST ��û �����Ϳ� ������ ���ڿ�
	 * @param contentType POST �������� content-type
	 * @param encoding POST �������� ���� ���ڵ�(��. UTF-8)
	 * @param timeoutMilli ����/HTTP �ð�����(milli ��)
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception
	 */
	public String post(String url, String postData, String contentType, String encoding, int timeoutMilli) throws Exception
	{
		HttpPost post = new HttpPost(url);
		logger.debug("POST : " + post.getURI());

		StringEntity input;
		if ( encoding != null && encoding.length() > 0 )
		{
			input = new StringEntity(postData, Charset.forName(encoding));
			input.setContentEncoding(encoding);
		}
		else
			input = new StringEntity(postData);
		
		input.setContentType(contentType);
		
		post.setEntity(input);
		
		return request(post, timeoutMilli);
	}
	
	/**
	 * GET ��û ó�� (timeout 10��)
	 * 
	 * @param url ��û�� GET URL �ּ�
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception 
	 */
	public String get(String url) throws Exception
	{
		return get(url, 10000);
	}

	/**
	 * GET ��û ó��
	 * @param url ��û�� GET URL �ּ�
	 * @param timeoutMilli ����/HTTP �ð�����(milli ��)
	 * @return URL���� �����ִ� ���ڿ�
	 * @throws Exception 
	 */
	public String get(String url, int timeoutMilli) throws Exception
	{
		HttpGet get = new HttpGet(url);
		logger.debug("GET : " + get.getURI());

		return request(get, timeoutMilli);
	}
 	
	private String request(HttpRequestBase req, int timeoutMilli) throws Exception
	{
		CloseableHttpClient client = HttpClients.custom()
												.setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
												.setSSLContext(ctx)
												.build();
		
		Builder builder = RequestConfig.custom();
        builder.setConnectTimeout(timeoutMilli);
        builder.setSocketTimeout(timeoutMilli);
        RequestConfig config = builder.build();								

        req.setConfig(config);
		
		CloseableHttpResponse response = null;

		int code = 0;
		try
		{	
			response = client.execute(req);
			code = response.getStatusLine().getStatusCode();
			logger.debug("Response Code : " + code);
			
			BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent(), "UTF-8"));
			
			StringBuffer result = new StringBuffer();
			String line = "";
			while ((line = rd.readLine()) != null) {
				result.append(line);
			}
			
			if ( code/100 != 2 )
				throw new Exception("Invalid HTTP Code:"+code+", "+result.toString());
			
			return result.toString();
		} finally {
			if ( response != null )
			{
				try {
					response.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
 
	// Test
	public static void main(String[] args)
	{
		WebAPIClient p = new WebAPIClient();
		JSONObject result = new JSONObject();
		
		String res;
		String url = "http://10.10.10.229:9200/sc_ticket_idx/_search";
		Integer offset = 1;
		String searchKeyword = "*t*";
		String jsonStr = "";
		jsonStr = "{ " + 
				"  \"sort\": [ " + 
				"    { " + 
				"      \"domain\": { " + 
				"        \"order\": \"asc\" " + 
				"      } " + 
				"    } " + 
				"  ], " + 
				"  \"_source\": [ \"domain\",\"crmdomain\"  ], " + 
				"  \"query\": { " + 
				"    \"bool\": { " + 
				"      \"must\": [ " + 
				"        { \"match\": { \"division\": 0 } }, " + 
				"        { \"query_string\": { \"fields\": [\"domain\"], \"query\": \"*다이*\" } } " + 
				"      ], " + 
				"      \"must_not\": [ " + 
				"            ] " + 
				"     } " + 
				"    } " + 
				"} ";
		
		try {
			System.out.println(jsonStr);
			res = p.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
//			result = (JSONObject) JSONValue.parse(res);	
			System.out.println(res);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
