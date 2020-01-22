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
	String newId = request.getParameter("newId");
	String newname = request.getParameter("newname");
	String confirmPassword = request.getParameter("confirmPassword");
	String right = request.getParameter("right");
	String today = request.getParameter("today");
	String domain = request.getParameter("domain");
	String size = request.getParameter("size");
	String usertype = request.getParameter("usertype");
	String searchKeyword = request.getParameter("searchKeyword");
	
// 	if ( domain != null )
// 		domain = new String(domain.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( newname != null )
// 		newname = new String(newname.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( confirmPassword != null )
// 		confirmPassword = new String(confirmPassword.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( searchKeyword != null )
// 		searchKeyword = new String(searchKeyword.getBytes("ISO8859_1"), "UTF-8");
	
	
	String url = "http://10.10.10.229:9200/hanwha_usergroup_info/_search";
	String jsonStr = "";
	
	if ( type.equals("admin_addDel") )
	{
		jsonStr = "{" + 
				"						\"size\": 9999," +
				"			\"sort\": [  {\"domain\": {\"order\": \"asc\" } } ]," + 
				"						\"_source\": [\"domain\"]," + 
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
	
	if ( type.equals("addDomain") )
	{
	url= "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup";
	jsonStr = "{" + 
			"				\"division\" : 2," + 
			"				\"userid\" : \""+newId+"\"," + 
			"				\"username\" : "+newname+"," + 
			"				\"userpw\": "+confirmPassword+"," + 
			"				\"domain\" : "+domain+"," + 
			"				\"right\" : "+right+"," + 
			"				\"timeCreated\" : "+today+""+ 
			"		}";
	}
	
	if ( type.equals("header") )
	{	
		jsonStr = "{" + 
				"			\"size\" : 9999," + 
				"			\"sort\": [  {\"domain\": {\"order\": \"asc\" } } ]," + 
				"							\"_source\": [\"domain\",\"crmdomain\"]," + 
				"							\"query\": {" + 
				"								\"bool\": {" + 
				"									\"must\": " + 
				"										{\"match\": {\"division\" : 0 } }," + 
				"									\"must_not\": [" + 
				"										" + 
				"									]," + 
				"									\"filter\": [" + 
				"									]" + 
				"								}" + 
				"							}" + 
				"						}";
	}
	
	if ( type.equals("getDomainAdminList") )
	{
		if (usertype.equals("2"))
		{
			if (searchKeyword.equals("none"))
			{
			jsonStr = "{" + 
					"						\"size\": "+size+"," + 
					"						\"from\": "+offset+"," + 
					"						\"_source\": [\"domain\", \"userid\", \"username\", \"right\", \"language\" , \"timeCreated\"]," + 
					"						\"query\": {" + 
					"							\"bool\": {" + 
					"								\"must\": " + 
					"									{\"match\": {\"division\" : 2 } }," + 
					"								\"must_not\": [" + 
					"									" + 
					"								]," + 
					"								\"filter\": [" + 
					"								]" + 
					"							}" + 
					"						}" + 
					"					}";
			}else{
			jsonStr = "{" + 
					"						\"size\": "+size+"," + 
					"						\"from\": "+offset+"," + 
					"						\"_source\": [\"domain\", \"userid\", \"username\", \"right\", \"language\" , \"timeCreated\",\"division\"]," + 
					"						\"query\": {" + 
					"							\"bool\": {" + 
					"								\"must\": [" + 
					"									{\"match\": {\"division\" : 2 } }," + 
					"									{\"query_string\": {\"fields\": [\"domain\",\"userid\"]," + 
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
		}else{
			if (searchKeyword.equals("none"))
			{
				jsonStr = "{" + 
						"						\"size\": "+size+"," + 
						"						\"from\": "+offset+"," + 
						"						\"_source\": [\"domain\", \"userid\", \"username\", \"right\", \"language\" , \"timeCreated\"]," + 
						"						\"query\": {" + 
						"							\"bool\": {" + 
						"								\"must\": [ " + 
						"									{\"match\": {\"division\" : 2 } }," +
						"									{\"terms\": {\"right\" : [3,4] } }]," +
						"								\"must_not\": [" + 
						"								]," + 
						"								\"filter\": [" + 
						"								]" + 
						"							}" + 
						"						}" + 
						"					}";
			}else{
			jsonStr = "{" + 
					"						\"size\": "+size+"," + 
					"						\"from\": "+offset+"," + 
					"						\"_source\": [\"domain\", \"userid\", \"username\", \"right\", \"language\" , \"timeCreated\",\"division\"]," + 
					"						\"query\": {" + 
					"							\"bool\": {" + 
					"								\"must\": [" + 
					"									{\"match\": {\"division\" : 2 } }," + 
					"									{\"query_string\": {\"fields\": [\"domain\",\"userid\"]," + 
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

	}
	
	
	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
// 	System.out.println(result);
// 	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
