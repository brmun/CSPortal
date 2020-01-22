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
	
	String url = "http://10.10.10.229:9200/hanwha_usergroup_info/_search";
	String jsonStr = "";
	
// 	if ( type.equals("addDomain2") )
// 	{
// 	  if ( step.equals("none") )
// 	  	{
// 	  	jsonStr = "{	" + 
// 				"		\"_source\": [\"domain\"]," + 
// 				"		\"query\": {" + 
// 				"			\"bool\": {" + 
// 				"				\"must\": " + 
// 				"					{\"match\" : {\"division\" : 0 }}," + 
// 				"				\"must_not\": [" + 
// 				"				]," + 
// 				"				\"filter\": [" + 
// 				"				]" + 
// 				"			}" + 
// 				"		}" + 
// 				"	}";
// 		}
// 	else
// 		{
//  		jsonStr = "{	\"_source\": [\"company_name\"]," + 
// 				"	\"query\": " + 
// 				"		{\"bool\": " + 
// 				"			{\"must\":" + 
// 				"				{\"match_all\" : {} }," + 
// 				"			\"must_not\": [" + 
// 				"				{\"terms\": " + 
// 				"					{\"company_name\" : ["+domain+"]}" + 
// 				"				}" + 
// 				"			]," + 
// 				"			\"filter\": {\"term\" : {\"division\" : 0}}}" + 
// 				"		}" + 
// 				"}";
// 		}
// 	}
	

	if ( type.equals("getDomainList") )
	{
		if (searchKeyword.equals("none"))
		{
		jsonStr = "{" + 
				"						\"size\": "+size+"," + 
				"						\"from\": "+offset+"," + 
				"						\"_source\": [\"domain\", \"isLocal\", \"isCaseIgnore\", \"isDefault\" , \"crmdomain\", \"timeCreated\", \"timeUpdated\"]," + 
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
		else
		{
			
			jsonStr = "{" + 
					"						\"size\": "+size+"," + 
					"						\"from\": "+offset+"," + 
					"						\"_source\": [\"domain\", \"isLocal\", \"isCaseIgnore\", \"isDefault\" , \"crmdomain\", \"timeCreated\", \"timeUpdated\"]," + 
					"						\"query\": {" + 
					"							\"bool\": {" + 
					"								\"must\": [" + 
					"									{\"match\": {\"division\" : 0 } }," +
					"     								{\"query_string\": {\"fields\": [\"domain\"]," + 
					"											            \"query\": \"*"+searchKeyword+"*\"}" + 
					"        							}" + 
					"							    ]," + 
					"								\"must_not\": [" + 
					"									" + 
					"								]," + 
					"								\"filter\": [" + 
					"								]" + 
					"							}" + 
					"						}" + 
					"					}";
		}
	}
	
	
	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
//  	System.out.println(result);
//  	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
