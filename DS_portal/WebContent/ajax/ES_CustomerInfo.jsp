<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="org.json.simple.*"%>

<%-- <%@page import="net.minidev.json.JSONValue"%> --%>
<%@ page import="com.softcamp.customer.portal.ajax.WebAPIClient" %>
<%@page import="java.net.URLDecoder"%>
<%
	WebAPIClient webApi = new WebAPIClient();
	JSONObject result = new JSONObject();
	JSONObject jsont = new JSONObject();
	JSONArray arr = new JSONArray();
	String decoded = "";
	
	String type = request.getParameter("type"); // API 이름
	
	String offset = request.getParameter("offset");
	String size = request.getParameter("size");
	String filters = request.getParameter("filters");
	String searchKeyword = request.getParameter("searchKeyword");
	String timeFrom = request.getParameter("timeFrom");
	String timeTo = request.getParameter("timeTo");
	String ticket_no = request.getParameter("ticket_no");
	String status = request.getParameter("status");
	String array = request.getParameter("array");
	String category = request.getParameter("categoryFilter");
	String stat = request.getParameter("statFilter");
	String step = request.getParameter("step");
	String t = request.getParameter("t");
	String year = "2019";
			
// 	if ( t != null )
// 		t = new String(t.getBytes("ISO8859_1"), "UTF-8");
	
	
	if ( array != null )
	{
		jsont = (JSONObject) JSONValue.parse(array);
		arr =  (JSONArray)jsont.get("type");
		decoded = URLDecoder.decode(arr.get(0).toString(), "UTF-8");	
	}

// 	if ( filters != null )
// 		filters = new String(filters.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( searchKeyword != null )
// 		searchKeyword = new String(searchKeyword.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( category != null )
// 		category = new String(category.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( stat != null )
// 		stat = new String(stat.getBytes("ISO8859_1"), "UTF-8");
	
	
	String url = "http://10.10.10.229:9200/sc_customerdetail_idx/_search";
	
	
	
	String jsonStr = "";
	
	if ( type.equals("getsupportList") )
	{
		jsonStr = "{" + 
				"		\"size\" : 5000," + 
				"		\"sort\" : [" + 
				"			{ \"company_id\" : {\"order\" : \"ASC\"}}" + 
				"		]," + 
				"		\"_source\": [\"company_id\",\"sales\",\"ma_cm\",\"sales2\"]," + 
				"		\"query\": {" + 
				"			\"match\" : {\"company_name\" : \""+t+"\" }" + 
				"		}" + 
				"	}";
	}

	if ( type.equals("getCustomerInfo") )
	{
		jsonStr = "{" + 
				"		\"size\" : 5000," + 
				"		\"sort\" : [" + 
				"			{ \"company_id\" : {\"order\" : \"ASC\"}}" + 
				"		]," + 
				"		\"_source\": [\"service_cost\"]," + 
				"		\"query\": {" + 
				"			\"match\" : {\"company_name\" : \""+t+"\" }" + 
				"		}" + 
				"	}";
	}
	
	if ( type.equals("getLisenceList1") )
	{
		
		jsonStr = "{" + 
				"	" + 
				"		\"_source\": [\"company_id\"]," + 
				"		\"query\": {" + 
				"			\"match\" : {\"company_name\" :\""+t+"\"}" + 
				"		}" + 
				"	}";
	}
	
	if ( type.equals("getLisenceList2") )
	{
		url= "http://10.10.10.229:9200/sc_product_idx/_search";
		jsonStr = "{" + 
				"		\"size\" : 5000," + 
				"		\"sort\" : { \"product_name\" : {\"order\" : \"ASC\"}}," + 
				"		\"_source\": [\"company_name\",\"product_name\",\"version\",\"contract_quantity\",\"jan\",\"feb\",\"mar\",\"apr\",\"may\",\"jun\",\"jul\",\"aug\",\"sep\",\"oct\",\"nov\",\"dec\",\"year\"]," + 
				"		\"query\": {" +
				"		\"bool\" : { \"must\" : [" +
				"			{\"match\" : {\"company_name\" : \""+t+"\"}}," +
				"           {\"match\" : {\"year\" : \""+year+"\"}}]" + 
				"		}}" + 
				"	}";
	}
	
	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
 	System.out.println(result);
 	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
