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
	String PROJECT_ID = request.getParameter("PROJECT_ID");
	String CF_POTENTIALS_ID = request.getParameter("CF_POTENTIALS_ID");
	
// 	if ( t != null )
// 		t = new String(t.getBytes("ISO8859_1"), "UTF-8");
	
// 	System.out.println("t : "+t);
	
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
	
	
	String url = "http://10.10.10.229:9200/sc_project_idx/_search";
	
	System.out.println("decoded  :  "+decoded);
	
	
	String jsonStr = "";
	
	if ( "\"all\"".equals(t))
	  {
		if ( type.equals("getProjectList") )
		{
			
			if ( status.equals("none") )
			{
				
				jsonStr = "{" + 
						"		\"from\": "+offset+"," + 
						"		\"size\": "+size+"," + 
						"		\"sort\" : [" + 
						"			{ \"TYPE_KO\" : {\"order\" : \"ASC\"}},{ \"START_DATE\" : {\"order\" : \"ASC\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"				\"must_not\": [" + 
						"					" + 
						"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
						"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
						"				]," + 
						"				\"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
						"			}" + 
						"		}" + 
						"	}";
			}
			else if ( status.equals("category") )
			{
				
				jsonStr = "{" + 
						"		\"from\": "+offset+"," + 
						"		\"size\": "+size+"," + 
						"		\"sort\" : [" + 
						"			{ \"TYPE_KO\" : {\"order\" : \"ASC\"}},{ \"START_DATE\" : {\"order\" : \"ASC\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"	            \"must\": [" + 
						"	                    { \"terms\" : { \"STATUS\" : [\""+category+"\"" +
						"											]}}]," + 
						"				\"must_not\": [" + 
						"					" + 
						"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
						"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
						"				]," + 
						"				\"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
						"			}" + 
						"		}" + 
						"	}";
			}
			else if ( status.equals("stat") )
			{
				
				jsonStr = "{" + 
						"		\"from\": "+offset+"," + 
						"		\"size\": "+size+"," + 
						"		\"sort\" : [" + 
						"			{ \"TYPE_KO\" : {\"order\" : \"ASC\"}},{ \"START_DATE\" : {\"order\" : \"ASC\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"	            \"must\": [" + 
						"	                    { \"terms\" : { \"TYPE_KO\" : [\""+stat+"\"" +
						"											]}}]," + 
						"				\"must_not\": [" + 
						"					" + 
						"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
						"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
						"				]," + 
						"				\"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
						"			}" + 
						"		}" + 
						"	}";
			}
			else if ( status.equals("all") )
			{
				
				jsonStr = "{" + 
						"		\"from\": "+offset+"," + 
						"		\"size\": "+size+"," + 
						"		\"sort\" : [" + 
						"			{ \"TYPE_KO\" : {\"order\" : \"ASC\"}},{ \"START_DATE\" : {\"order\" : \"ASC\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"	            \"must\": [" + 
						"	                    { \"terms\" : { \"STATUS\" : [\""+category+"\"" +
						"											]}}," +
						"						{ \"terms\" : { \"TYPE_KO\" : [\""+stat+"\"" +
						"											]}}]," + 
						"				\"must_not\": [" + 
						"					" + 
						"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
						"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
						"				]," + 
						"				\"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
						"			}" + 
						"		}" + 
						"	}";
			}
		}
		
		if ( type.equals("getProjectContent") )
		{
			url = "";
			url = "http://10.10.10.229:9200/sc_projectmilestone_idx/_search";
			
			jsonStr = "{" + 
					"		\"sort\" : [ " + 
					"					{ \"PROJECTMILESTONE_DATE\" : {\"order\" : \"ASC\"}}, " + 
					"					\"_score\" " + 
					"				]," + 
					"		\"_source\": [\"PROJECTMILESTONE_NAME\", \"DESCRIPTION\",\"OWNER_NAME\",\"PROJECT_NAME\",\"PROJECTMILESTONE_DATE\"]," + 
					"		\"query\": {" + 
					"			\"bool\": {" + 
					"				\"must\": [" + 
					"					{ \"match\": { \"PROJECT_ID\": "+PROJECT_ID+" } }" + 
					"					]," + 
					"				\"must_not\": [" + 
					"					" + 
					"				]," + 
					"				\"filter\": [" + 
					"				]" + 
					"			}" + 
					"		}" + 
					"	}";
		}
		if ( type.equals("tickets") )
		{
			System.out.println("asdlkjfasdlkj : "+decoded);
			url = "";
			url = "http://10.10.10.229:9200/sc_ticket_idx/_search";
			jsonStr = "{" + 
					
							"			\"size\": 9999," + 
							"			\"sort\" : ["+decoded+"]," + 
							"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\"]," + 
							"	         \"query\": {" + 
							"	            \"bool\": {" + 
							"	            	\"must\": [" +
							"	                    { \"match\": { \"CF_POTENTIALS_ID\" : "+PROJECT_ID+"}}" + 
							"	                 ]," + 
							"	                 \"must_not\": [" + 
							"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }," +
							" 						{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }" +
							"	                	 ]" + 
							"	            	}" + 
							"	         	}" + 
							"		}";
	  	}
	  }else{
		  if ( type.equals("getProjectList") )
			{
			  if ( status.equals("none") )
				{
					
					jsonStr = "{" + 
							"		\"from\": "+offset+"," + 
							"		\"size\": "+size+"," + 
							"			\"sort\" : ["+decoded+"]," + 
							"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
							"		\"query\": {" + 
							"			\"bool\": {" + 
							"	            \"must\": [" + 
							"					{ \"terms\": { \"LINK_NAME\":  ["+t+"]  } }]," + 
							"				\"must_not\": [" + 
							"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
							"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
							"				]," + 
							"				\"filter\": {" + 
							"		        	\"range\": {" + 
							"		            		\"CREATED_TIME\": {" + 
							"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
							"		    					\"lt\": \"now\"	" + 
							"		        				}" + 
							"		    			}" + 
							"	    			}" + 
							"			}" + 
							"		}" + 
							"	}";
				}
				else if ( status.equals("category") )
				{
					
					jsonStr = "{" + 
							"		\"from\": "+offset+"," + 
							"		\"size\": "+size+"," + 
							"			\"sort\" : ["+decoded+"]," + 
							"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
							"		\"query\": {" + 
							"			\"bool\": {" + 
							"	            \"must\": [" + 
							"					{ \"terms\": { \"LINK_NAME\":  ["+t+"]  } }," + 
							"	                    { \"terms\" : { \"STATUS\" : [\""+category+"\"" +
							"											]}}]," + 
							"				\"must_not\": [" + 
							"					" + 
							"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
							"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
							"				]," + 
							"				\"filter\": {" + 
							"		        	\"range\": {" + 
							"		            		\"CREATED_TIME\": {" + 
							"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
							"		    					\"lt\": \"now\"	" + 
							"		        				}" + 
							"		    			}" + 
							"	    			}" + 
							"			}" + 
							"		}" + 
							"	}";
				}
				else if ( status.equals("stat") )
				{
					
					jsonStr = "{" + 
							"		\"from\": "+offset+"," + 
							"		\"size\": "+size+"," + 
							"			\"sort\" : ["+decoded+"]," + 
							"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
							"		\"query\": {" + 
							"			\"bool\": {" + 
							"	            \"must\": [" + 
							"					{ \"terms\": { \"LINK_NAME\":  ["+t+"]  } }," + 
							"	                    { \"terms\" : { \"TYPE_KO\" : [\""+stat+"\"" +
							"											]}}]," + 
							"				\"must_not\": [" + 
							"					" + 
							"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
							"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
							"				]," + 
							"				\"filter\": {" + 
							"		        	\"range\": {" + 
							"		            		\"CREATED_TIME\": {" + 
							"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
							"		    					\"lt\": \"now\"	" + 
							"		        				}" + 
							"		    			}" + 
							"	    			}" + 
							"			}" + 
							"		}" + 
							"	}";
				}
				else if ( status.equals("all") )
				{
					
					jsonStr = "{" + 
							"		\"from\": "+offset+"," + 
							"		\"size\": "+size+"," + 
							"		\"sort\" : [" + 
							"			{ \"TYPE_KO\" : {\"order\" : \"ASC\"}},{ \"START_DATE\" : {\"order\" : \"ASC\"}}," + 
							"			\"_score\"" + 
							"		]," + 
							"		\"_source\": [\"PROJECT_ID\",\"TYPE_KO\",\"PROJECT_NAME\", \"OWNER_NAME\",\"SALES_REPRESENTATIVE\",\"STATUS\",\"PROGRESS\", \"START_DATE\",\"CONTRACT_END_DATE\",\"POTENTIAL_ID\"]," + 
							"		\"query\": {" + 
							"			\"bool\": {" + 
							"	            \"must\": [" + 
							"					{ \"terms\": { \"LINK_NAME\":  ["+t+"]  } }," + 
							"	                    { \"terms\" : { \"STATUS\" : [\""+category+"\"" +
							"											]}}," +
							"						{ \"terms\" : { \"TYPE_KO\" : [\""+stat+"\"" +
							"											]}}]," + 
							"				\"must_not\": [" + 
							"					" + 
							"					{ \"terms\": { \"STATUS\": [\"(P)검수 및 종료\",\"(I)오픈 및 종료\"] } }," +
							"					{ \"terms\": { \"TYPE_KO\": [\"기타\",\"\"] } }" + 
							"				]," + 
							"				\"filter\": {" + 
							"		        	\"range\": {" + 
							"		            		\"CREATED_TIME\": {" + 
							"		    					\"gte\": \"2018-01-01 00:00:00\"," + 
							"		    					\"lt\": \"now\"	" + 
							"		        				}" + 
							"		    			}" + 
							"	    			}" + 
							"			}" + 
							"		}" + 
							"	}";
				}
				
			}
			
			if ( type.equals("getProjectContent") )
			{
				url = "";
				url = "http://10.10.10.229:9200/sc_projectmilestone_idx/_search";
				
				jsonStr = "{" + 
						"		\"sort\" : [ " + 
						"					{ \"PROJECTMILESTONE_DATE\" : {\"order\" : \"ASC\"}}, " + 
						"					\"_score\" " + 
						"				]," + 
						"		\"_source\": [\"PROJECTMILESTONE_NAME\", \"DESCRIPTION\",\"OWNER_NAME\",\"PROJECT_NAME\",\"PROJECTMILESTONE_DATE\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"				\"must\": [" + 
						"					{ \"match\": { \"PROJECT_ID\": "+PROJECT_ID+" } }" + 
						"					]," + 
						"				\"must_not\": [" + 
						"					" + 
						"				]," + 
						"				\"filter\": [" + 
						"				]" + 
						"			}" + 
						"		}" + 
						"	}";
			}
			if ( type.equals("tickets") )
			{
				System.out.println("111111 : "+decoded);
				url = "";
				url = "http://10.10.10.229:9200/sc_ticket_idx/_search";
				jsonStr = "{" + 
						
								"			\"size\": 9999," + 
								"			\"sort\" : ["+decoded+"]," + 
								"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\"]," + 
								"	         \"query\": {" + 
								"	            \"bool\": {" + 
								"	            	\"must\": [" +
								"	                    { \"match\": { \"CF_POTENTIALS_ID\" : "+PROJECT_ID+"}}" + 
								"	                 ]," + 
								"	                 \"must_not\": [" + 
								"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }," +
								" 						{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }" +
								"	                	 ]" + 
								"	            	}" + 
								"	         	}" + 
								"		}";
		  	}
	  }
	
	
	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
 	System.out.println(result);
 	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
