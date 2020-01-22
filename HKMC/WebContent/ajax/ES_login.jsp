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
	String email = request.getParameter("email");
	String domain = request.getParameter("domain");
	String today = request.getParameter("today");
	String searchKeyword = request.getParameter("searchKeyword");

// 	if ( email != null )
// 		email = new String(email.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( domain != null )
// 		domain = new String(domain.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( searchKeyword != null )
// 		searchKeyword = new String(searchKeyword.getBytes("ISO8859_1"), "UTF-8");
	
	String url = "http://10.10.10.229:9200/hkmc_usergroup_info/_search";

	
	String jsonStr = "";
	
	if ( type.equals("checkIDPW") )
	{
		jsonStr = "{" + 
				"			\"size\": 1," + 
				"			\"_source\": [\"userid\", \"username\", \"userpw\", \"right\", \"domain\"]," + 
				"			\"query\": {" + 
				"				\"bool\": {" + 
				"					\"must\": " + 
				"						{\"match\": " + 
				"							{ \"userid\": \""+email+"\"}" + 
				"						}," + 
				"					\"must_not\": [" + 
				"						" + 
				"					]," + 
				"					\"filter\": [" + 
				"					]" + 
				"				}" + 
				"			}" + 
				"		}";
	}
	
	if ( type.equals("checkIDPW2") )
	{
		jsonStr = "{" + 
				"											\"size\": 1," + 
				"											\"_source\": [\"crmdomain\",\"right\"]," + 
				"											\"query\": {" + 
				"												\"bool\": {" + 
				"													\"must\": [" + 
				"														{\"term\": " + 
				"															{ \"domain\": \""+domain+"\"}" + 
				"														}," + 
				"														{\"match\": " + 
				"															{\"division\" : 0 }" + 
				"														}" + 
				"														]," + 
				"													\"must_not\": [" + 
				"													]," + 
				"													\"filter\": [" + 
				"													]" + 
				"												}" + 
				"											}" + 
				"										}";
	}
	
	if ( type.equals("domain_list") )
	{
		
		jsonStr = "{" + 
				"						\"_source\": [\"domain\",\"crmdomain\"]," + 
				"						\"query\": {" + 
				"							\"bool\": {" + 
				"								\"must\": " + 
				"									{\"match\": {\"division\" : 0 } }," + 
				"								\"must_not\": [" + 
				"									" + 
				"								]," + 
				"								\"filter\": [" + 
				"								]" + 
				"							}" + 
				"						}" + 
				"					}";
	}
	

	if ( type.equals("PWCH") )
	{
		
		jsonStr = "{" + 
				"			\"size\": 1," + 
				"			\"_source\": [\"username\"]," + 
				"			\"query\": {" + 
				"				\"bool\": {" + 
				"					\"must\": " + 
				"						{\"match\": " + 
				"							{ \"userid\": \""+email+"\"}" + 
				"						}," + 
				"					\"must_not\": [" + 
				"						" + 
				"					]," + 
				"					\"filter\": [" + 
				"					]" + 
				"				}" + 
				"			}" + 
				"		}";
	}

	if ( type.equals("domain_search") )
	{
		
		jsonStr = "{ " + 
				"  \"size\": 9999," + 
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
				"        { \"query_string\": { \"fields\": [\"domain\"], \"query\": "+searchKeyword+" } } " + 
				"      ], " + 
				"      \"must_not\": [ " + 
				"            ] " + 
				"     } " + 
				"    } " + 
				"} ";
	}
	
	if ( type.equals("login_log") )
	{
		
		url = "http://10.10.10.229:9200/log_idx/login_log";
		
		jsonStr = "{" + 
				"		\"logtype\" : \"login\"," + 
				"		\"userid\" : "+email+"," + 
				"		\"ComPany_name\" : "+domain+"," + 
				"		\"log_time\" : "+today+"" + 
				"	}	 ";
	}
	
	
	
String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
//  	System.out.println(result);
//  	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
