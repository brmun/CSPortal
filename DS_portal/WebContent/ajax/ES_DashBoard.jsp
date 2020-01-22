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
	String Notice_No = request.getParameter("Notice_No");
	
// 	if ( t != null )
// 		t = new String(t.getBytes("ISO8859_1"), "UTF-8");
	
// 	if ( Notice_No != null )
// 		Notice_No = new String(Notice_No.getBytes("ISO8859_1"), "UTF-8");

	
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
	
	String url = "http://10.10.10.229:9200/sc_ticket_idx/_search";
	String jsonStr = "";

	if ( type.equals("getMainNotice") )
	{
		
	url = "http://10.10.10.229:9200/sc_notice_idx/_search";
	jsonStr = "{" + 
			"		" + 
			"		\"size\" : 5," + 
			"		\"sort\" : [" + 
			"			{ \"timeCreated\" : {\"order\" : \"desc\"}}," + 
			"			\"_score\"" + 
			"		]," + 
			"		\"_source\": [\"division\",\"timeCreated\",\"timeUpdated\",\"title\",\"type\",\"Content\"]," + 
			"		\"query\": {" + 
			"			\"match_all\" : {}" + 
			"		}" + 
			"	}";
	}
	
	if ( type.equals("getNoticeContent") )
	{
		
	url = "http://10.10.10.229:9200/sc_notice_idx/_search";
	jsonStr = "{" + 
			"		\"_source\": [\"division\",\"timeCreated\",\"timeUpdated\",\"title\",\"type\",\"Content\"]," + 
			"		\"query\": {" + 
			"			\"bool\": {" + 
			"				\"must\": " + 
			"					{ \"match\": { \"_id\": \""+Notice_No+"\" } }" + 
			"		}" + 
			"	}}";
	}


	
	if ( type.equals("machart") )
	{
	  if ( step.equals("1") )
	  {
		  if ( "\"all\"".equals(t))
		  {
			  jsonStr = "{" + 
						"		\"size\": 0," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"				\"must\": [" + 
						"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
						"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
						"					]," + 
						"		        \"must_not\": [" + 
						"		        	{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"		        ]," + 
						"		        \"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"now-90d/d\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
						"	    		}" + 
						"		}," + 
						"		\"aggs\": {" + 
						"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	    }" + 
						"	}";
		}else{
			jsonStr = "{" + 
				"		\"size\": 0," + 
				"		\"query\": {" + 
				"			\"bool\": {" + 
				"				\"must\": [" + 
				"					{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
				"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
				"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
				"					]," + 
				"		        \"must_not\": [" + 
				"		        	{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
				"		        ]," + 
				"		        \"filter\": {" + 
				"		        	\"range\": {" + 
				"		            		\"CREATED_TIME\": {" + 
				"		    					\"gte\": \"now-90d/d\"," + 
				"		    					\"lt\": \"now\"	" + 
				"		        				}" + 
				"		    			}" + 
				"	    			}" + 
				"	    		}" + 
				"		}," + 
				"		\"aggs\": {" + 
				"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
				"	    }" + 
				"	}";
		}
	  }

		 else if ( step.equals("2") )
		 {
			 if ( "\"all\"".equals(t))
			  {
				 jsonStr = "{" + 
							"		\"size\": 0," + 
							"		\"query\": {" + 
							"		        \"bool\": {" + 
							"		            \"must\":[" + 
							"						{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
							"						]," + 
							"		            \"must_not\": [" + 
							"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
							"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }," + 
							"						{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
							"		            ]," + 
							"		            \"filter\": [" + 
							"		            ]" + 
							"		        }" + 
							"		    }," + 
							"		    \"aggs\": {" + 
							"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
							"		    }" + 
							"	}";
			  }else{
				  jsonStr = "{" + 
							"		\"size\": 0," + 
							"		\"query\": {" + 
							"		        \"bool\": {" + 
							"		            \"must\":[" + 
							"		                { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
							"						{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
							"						]," + 
							"		            \"must_not\": [" + 
							"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
							"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }," + 
							"						{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
							"		            ]," + 
							"		            \"filter\": [" + 
							"		            ]" + 
							"		        }" + 
							"		    }," + 
							"		    \"aggs\": {" + 
							"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
							"		    }" + 
							"	}";
			  }
		}
	}
	
	if ( type.equals("getMainMaList") )
	{
		if ( "\"all\"".equals(t))
		  {
			 jsonStr = "{" + 
						"		\"size\": 9999," + 
						"		\"sort\" : [" + 
						"			{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"				\"must\": [" +  
						"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
						"					]," + 
						"				\"must_not\": [" + 
						"					{ \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
						"					{ \"match\": { \"STATUS_KO\": \"해결함\" } }," +
						"					{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" +
						"				]," + 
						"				\"filter\": [" + 
						"				]" + 
						"			}" + 
						"		}" + 
						"	}";
		  }else{
			  jsonStr = "{" + 
						"		\"size\": 9999," + 
						"		\"sort\" : [" + 
						"			{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
						"			\"_score\"" + 
						"		]," + 
						"		\"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\"]," + 
						"		\"query\": {" + 
						"			\"bool\": {" + 
						"				\"must\": [" + 
						"					{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
						"					]," + 
						"				\"must_not\": [" + 
						"					{ \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
						"					{ \"match\": { \"STATUS_KO\": \"해결함\" } }," +
						"					{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" +
						"				]," + 
						"				\"filter\": [" + 
						"				]" + 
						"			}" + 
						"		}" + 
						"	}";
		  }
	}
	
	if ( type.equals("aging") )
	{
		System.out.println("agin1g : "+t);
		System.out.println(t + " " + t.length());
		if ( "\"all\"".equals(t))
		  {
			System.out.println("1");
			jsonStr = "{" + 
						"		\"size\" : 9999," + 
						"		\"_source\" : [\"CREATED_TIME\"]," + 
						"		\"sort\" : [" + 
						"				{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
						"				\"_score\"" + 
						"			]," + 
						"			\"query\": {" + 
						"			        \"bool\": {" + 
						"			            \"must\":[" + 
						"							{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"			                {\"term\" : { \"CATEGORY_KO\" : \"장애\"}}" + 
						"							]," + 
						"			            \"must_not\": [" + 
						"			                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
						"			                { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
						"			            ]," + 
						"			            \"filter\": {" + 
						"			        	" + 
						"		    			}" + 
						"			        }" + 
						"			    }" + 
						"		}";
		  }else{
			  System.out.println("2");
			  jsonStr = "{" + 
						"		\"size\" : 9999," + 
						"		\"_source\" : [\"CREATED_TIME\"]," + 
						"		\"sort\" : [" + 
						"				{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
						"				\"_score\"" + 
						"			]," + 
						"			\"query\": {" + 
						"			        \"bool\": {" + 
						"			            \"must\":[" + 
						"			                { \"terms\": { \"ACCOUNT_NAME\":  ["+t+"]  } }," + 
						"							{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"			                {\"term\" : { \"CATEGORY_KO\" : \"장애\"}}" + 
						"							]," + 
						"			            \"must_not\": [" + 
						"			                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
						"			                { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
						"			            ]," + 
						"			            \"filter\": {" + 
						"			        	" + 
						"		    			}" + 
						"			        }" + 
						"			    }" + 
						"		}";
		  }
	}
	
	if ( type.equals("top10") )
	{
		jsonStr = "{ " + 
				"	\"size\": 0, " + 
				"	\"query\": { " + 
				"		\"bool\": { " + 
				"			\"must\": [ " + 
				"				], " + 
				"	        \"must_not\": [ " + 
				"	        { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
				"	        ], " +
				"				\"filter\": {" + 
				"		        	\"range\": {" + 
				"		            		\"CREATED_TIME\": {" + 
				"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
				"		    					\"lt\": \"now\"	" + 
				"		        				}" + 
				"		    			}" + 
				"	    			}" + 
				"    		} " + 
				"	}, " + 
				"	\"aggs\": { " + 
				"          \"고객사별 건수\": {\"terms\": { \"field\": \"ACCOUNT_NAME\"}} " + 
				"    } " + 
				"}";
	}
	if ( type.equals("ptop10") )
	{
		jsonStr = "{ " + 
				"	\"size\": 0, " + 
				"	\"query\": { " + 
				"		\"bool\": { " + 
				"			\"must\": [ " + 
				"		       { \"terms\": { \"CATEGORY_KO\": [\"장애\"] } }" + 
				"				], " + 
				"	        \"must_not\": [ " + 
				"	        { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
				"	        ], " +
				"				\"filter\": {" + 
				"		        	\"range\": {" + 
				"		            		\"CREATED_TIME\": {" + 
				"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
				"		    					\"lt\": \"now\"	" + 
				"		        				}" + 
				"		    			}" + 
				"	    			}" + 
				"    		} " + 
				"	}, " + 
				"	\"aggs\": { " + 
				"          \"고객사별 건수\": {\"terms\": { \"field\": \"ACCOUNT_NAME\"}} " + 
				"    } " + 
				"}";
	}
	if ( type.equals("ownername10") )
	{
		jsonStr = "{ " + 
				"	\"size\": 0, " + 
				"	\"query\": { " + 
				"		\"bool\": { " + 
				"			\"must\": [ " + 
				"				" + 
				"				], " + 
				"	        \"must_not\": [ " + 
				"	        { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }," + 
				"	        { \"terms\": { \"STATUS_KO\": [\"해결함\", \"닫힘\"]}}" + 
				"	        ], " + 
						"				\"filter\": {" + 
						"		        	\"range\": {" + 
						"		            		\"CREATED_TIME\": {" + 
						"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
						"		    					\"lt\": \"now\"	" + 
						"		        				}" + 
						"		    			}" + 
						"	    			}" + 
				"    		} " + 
				"	}, " + 
				"	\"aggs\": { " + 
				"          \"Top10\": {\"terms\": { \"field\": \"OWNER_NAME\"}} " + 
				"    } " + 
				"}";
	}
	if ( type.equals("getagingMaList") )
	{
		jsonStr = "{" + 
				"		\"size\" : 10," + 
				"		\"_source\": [\"TITLE\",\"TICKET_ID\",\"TICKET_NO\",\"CREATED_TIME\",\"CREATOR_NAME\",\"RECEPTION_TYPE\",\"CATEGORY_KO\",\"SOLUTION\",\"RESPONSE_TYPE\",\"SUPPORT_REQUESTOR\",\"DESCRIPTION\",\"END_DATE\",\"OWNER_NAME\",\"CONTACT_NAME\",\"PRIORITY_KO\",\"STATUS_KO\",\"MODIFIED_TIME\"]," + 
				"		\"sort\" : [" + 
				"				{ \"CREATED_TIME\" : {\"order\" : \"asc\"}}," + 
				"				\"_score\"" + 
				"			]," + 
				"			\"query\": {" + 
				"			        \"bool\": {" + 
				"			            \"must\":[" + 
				"		      				 { \"terms\": { \"CATEGORY_KO\": [\"장애\"] } }" + 
				"							]," + 
				"			            \"must_not\": [" + 
				"	       					{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }," + 
				"	       					{ \"terms\": { \"STATUS_KO\": [\"해결함\", \"닫힘\"]}}" + 
				"			            ]," + 
				"			            \"filter\": {" + 
				"			        	" + 
				"		    			}" + 
				"			        }" + 
				"			    }" + 
				"		}";
	}
	if ( type.equals("SERes") )
	{
		jsonStr = "{" + 
				"\"size\" : 9999," + 
				"\"_source\" : [\"time1\",\"time2\",\"time3\",\"time4\",\"time5\",\"CREATOR_NAME\",\"OWNER_NAME\"]," + 
				"  \"aggs\": {" + 
				"    \"생성건수\": {" + 
				"      \"terms\": {" + 
				"        \"field\": \"CREATOR_NAME\"" + 
				"      }" + 
				"    }," + 
				"    \"할당건수\":{" + 
				"     \"terms\": {" + 
				"        \"field\": \"OWNER_NAME\"" + 
				"      }" + 
				"     }" + 
				"  }," + 
				"\"query\": { " + 
				"    \"bool\": { " + 
				"      \"must\": " + 
				"        [" + 
				"         " + 
				"           { \"terms\": {  \"OWNER_NAME\": [  \"문병린\",\"정일형\", \"윤형석\", \"김성남\", \"박진원\", \"박웅\",\"양창호\", \"김준용\", \"김영광\", \"조광현\"]     } }" + 
				"        ]," + 
				"        \"filter\": { " + 
				"        \"range\": { " + 
				"          \"CREATED_TIME\": { " + 
				"            \"gte\": \"now-365d/d\", " + 
				"            \"lt\": \"now\" " + 
				"          } " + 
				"        } " + 
				"      } " + 
				"        }" + 
				"}" + 
				"}";	
	}
	
	if ( type.equals("matotalchart"))
	{
		System.out.println(t);
		if ( "\"all\"".equals(t))
		  {
			jsonStr = "{" + 
					"		\"size\": 0," + 
					"		\"query\": {" + 
					"			\"bool\": {" + 
					"				\"must\": [" + 
					"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
					"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
					"					]," + 
					"		        \"must_not\": [" + 
					"		        	{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"		        ]," + 
					"		        \"filter\": {" + 
					"		        	\"range\": {" + 
					"		            		\"CREATED_TIME\": {" + 
					"		    					\"gte\": \"now-90d/d\"," + 
					"		    					\"lt\": \"now\"	" + 
					"		        				}" + 
					"		    			}" + 
					"	    			}" + 
					"	    		}" + 
					"		}," + 
					"		\"aggs\": {" + 
					"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
					"	    }" + 
					"	}";
		  }else{
			jsonStr = "{" + 
					"		\"size\": 0," + 
					"		\"query\": {" + 
					"			\"bool\": {" + 
					"				\"must\": [" + 
					"					{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
					"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
					"					{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
					"					]," + 
					"		        \"must_not\": [" + 
					"		        	{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"		        ]," + 
					"		        \"filter\": {" + 
					"		        	\"range\": {" + 
					"		            		\"CREATED_TIME\": {" + 
					"		    					\"gte\": \"now-90d/d\"," + 
					"		    					\"lt\": \"now\"	" + 
					"		        				}" + 
					"		    			}" + 
					"	    			}" + 
					"	    		}" + 
					"		}," + 
					"		\"aggs\": {" + 
					"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
					"	    }" + 
					"	}";
		  }
	}
	
	if ( type.equals("matotalchart2"))
	{
		if ( "\"all\"".equals(t))
		  {
			jsonStr = "{" + 
					"		\"size\": 0," + 
					"		\"query\": {" + 
					"		        \"bool\": {" + 
					"		            \"must\":[" + 
					"						{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
					"						]," + 
					"		            \"must_not\": [" + 
					"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
					"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }," + 
					"						{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"		            ]," + 
					"		            \"filter\": [" + 
					"		            ]" + 
					"		        }" + 
					"		    }," + 
					"		    \"aggs\": {" + 
					"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
					"		    }" + 
					"	}";
		  }else{
			jsonStr = "{" + 
					"		\"size\": 0," + 
					"		\"query\": {" + 
					"		        \"bool\": {" + 
					"		            \"must\":[" + 
					"		                { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
					"						{\"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}" + 
					"						]," + 
					"		            \"must_not\": [" + 
					"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
					"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }," + 
					"						{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"		            ]," + 
					"		            \"filter\": [" + 
					"		            ]" + 
					"		        }" + 
					"		    }," + 
					"		    \"aggs\": {" + 
					"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
					"		    }" + 
					"	}";
		  }
		
	}
	
	if ( type.equals("dailychart"))
	{
		if ( "\"all\"".equals(t))
		 {
			jsonStr = "{ " + 
					"  \"size\": 0," + 
					"  \"query\": { " + 
					"    \"bool\": { " + 
					"      \"must\": [ " + 
					"        { \"terms\": {  \"CREATOR_NAME\": [\"문병린\", \"정일형\", \"윤형석\", \"김성남\", \"박진원\", \"박웅\", \"양창호\", \"김준용\", \"김영광\", \"조광현\", \"김동훈\", \"최신덕\", \"김싸라기\" ] } }" + 
					"      ], " + 
					"      \"must_not\": [ " + 
					"        { " + 
					"          \"terms\": { " + 
					"            \"CATEGORY_KO\": [ \"배포지원요청\", \"영업제안서지원\", \"유지보수이관요청\", \"사내보안지원\", \"사내전산지원\", \"디자인 요청\", \"유지보수해외지원\", \"POC/데몬\", \"내부업무/기타\"             ]" + 
					"          } " + 
					"        } " + 
					"      ], " + 
					"      \"filter\": { " + 
					"        \"range\": { " + 
					"          \"CREATED_TIME\": { " + 
					"            \"gte\": "+timeFrom+"," + 
					"            \"lt\": "+timeTo+"" + 
					"          } " + 
					"        } " + 
					"      } " + 
					"    } " + 
					"  }, " + 
					"  \"aggs\": { " + 
					"    \"분류별 건수\": { " + 
					"      \"terms\": { " + 
					"        \"field\": \"CATEGORY_KO\" " + 
					"      } " + 
					"    } " + 
					"  } " + 
					"}";	
		}else{
			jsonStr = "{ " + 
					"  \"size\": 0," + 
					"  \"query\": { " + 
					"    \"bool\": { " + 
					"      \"must\": [ " + 
					"		{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }, " + 
					"        { \"terms\": {  \"CREATOR_NAME\": [\"문병린\", \"정일형\", \"윤형석\", \"김성남\", \"박진원\", \"박웅\", \"양창호\", \"김준용\", \"김영광\", \"조광현\", \"김동훈\", \"최신덕\", \"김싸라기\" ] } }" + 
					"      ], " + 
					"      \"must_not\": [ " + 
					"        { " + 
					"          \"terms\": { " + 
					"            \"CATEGORY_KO\": [ \"배포지원요청\", \"영업제안서지원\", \"유지보수이관요청\", \"사내보안지원\", \"사내전산지원\", \"디자인 요청\", \"유지보수해외지원\", \"POC/데몬\", \"내부업무/기타\"             ]" + 
					"          } " + 
					"        } " + 
					"      ], " + 
					"      \"filter\": { " + 
					"        \"range\": { " + 
					"          \"CREATED_TIME\": { " + 
					"            \"gte\": "+timeFrom+"," + 
					"            \"lt\": "+timeTo+"" + 
					"          } " + 
					"        } " + 
					"      } " + 
					"    } " + 
					"  }, " + 
					"  \"aggs\": { " + 
					"    \"분류별 건수\": { " + 
					"      \"terms\": { " + 
					"        \"field\": \"CATEGORY_KO\" " + 
					"      } " + 
					"    } " + 
					"  } " + 
					"}";
		}
	}
if ( type.equals("getNoticeList"))
	{
		url = "http://10.10.10.229:9200/sc_notice_idx/_search";
		jsonStr = "";
		
		jsonStr = "{" + 
				"		" + 
				"		\"size\" : 9999," + 
				"		\"sort\" : [" + 
				"			{ \"timeCreated\" : {\"order\" : \"desc\"}}," + 
				"			\"_score\"" + 
				"		]," + 
				"		\"_source\": [\"division\",\"timeCreated\",\"timeUpdated\",\"title\",\"type\",\"Content\"]," + 
				"		\"query\": {" + 
				"			\"match_all\" : {}" + 
				"		}" + 
				"	}";
		
	}




if ( type.equals("salsechart") )
{
  if ( step.equals("1") )
  {
	  if ( "\"all\"".equals(t))
	  {
		  jsonStr = "{ " + 
					"		\"size\": 0, " + 
					"		\"query\": { " + 
					"			\"bool\": { " + 
					"				\"must\": [ " + 
					"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }, " + 
					"					{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}} " + 
					"					], " + 
					"		        \"must_not\": [ " + 
					"		        	" + 
					"		        ], " + 
					"		        \"filter\": { " + 
					"		        	\"range\": { " + 
					"		            		\"CREATED_TIME\": { " + 
					"		    					\"gte\": \"now-180d/d\", " + 
					"		    					\"lt\": \"now\"	 " + 
					"		        				} " + 
					"		    			} " + 
					"	    			} " + 
					"	    		} " + 
					"		}, " + 
					"		\"aggs\": { " + 
					"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}} " + 
					"	    } " + 
					"	} ";
	}
  }

	 else if ( step.equals("2") )
	 {
		 if ( "\"all\"".equals(t))
		  {
			 
			 jsonStr = "{ " + 
						"		\"size\": 0, " + 
						"		\"query\": { " + 
						"			\"bool\": { " + 
						"				\"must\": [ " + 
						"					{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}} " + 
						"					], " + 
						"		        \"must_not\": [ " + 
						"						 { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
						"					     { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
						"		        ], " + 
						"		        \"filter\": { " + 
						"	    			} " + 
						"	    		} " + 
						"		}, " + 
						"		\"aggs\": { " + 
						"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}} " + 
						"	    } " + 
						"	} ";
		  }
	}
}

if ( type.equals("salse_matotalchart"))
{
	System.out.println(t);
	if ( "\"all\"".equals(t))
	  {
		jsonStr = "{" + 
				"		\"size\": 0," + 
				"		\"query\": {" + 
				"			\"bool\": {" + 
				"				\"must\": [" + 
				"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
				"					{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" + 
				"					]," + 
				"		        \"must_not\": [" + 
				"		        ]," + 
				"		        \"filter\": {" + 
				"		        	\"range\": {" + 
				"		            		\"CREATED_TIME\": {" + 
				"		    					\"gte\": \"now-180d/d\"," + 
				"		    					\"lt\": \"now\"	" + 
				"		        				}" + 
				"		    			}" + 
				"	    			}" + 
				"	    		}" + 
				"		}," + 
				"		\"aggs\": {" + 
				"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
				"	    }" + 
				"	}";
	  }else{
		jsonStr = "{" + 
				"		\"size\": 0," + 
				"		\"query\": {" + 
				"			\"bool\": {" + 
				"				\"must\": [" + 
				"					{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
				"					{ \"terms\": { \"STATUS_KO\": [\"닫힘\",\"해결함\"] } }," + 
				"					{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" + 
				"					]," + 
				"		        \"must_not\": [" + 
				"		        ]," + 
				"		        \"filter\": {" + 
				"		        	\"range\": {" + 
				"		            		\"CREATED_TIME\": {" + 
				"		    					\"gte\": \"now-180d/d\"," + 
				"		    					\"lt\": \"now\"	" + 
				"		        				}" + 
				"		    			}" + 
				"	    			}" + 
				"	    		}" + 
				"		}," + 
				"		\"aggs\": {" + 
				"	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
				"	    }" + 
				"	}";
	  }
}

if ( type.equals("salse_matotalchart2"))
{
	if ( "\"all\"".equals(t))
	  {
		jsonStr = "{" + 
				"		\"size\": 0," + 
				"		\"query\": {" + 
				"		        \"bool\": {" + 
				"		            \"must\":[" + 
				"						{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" + 
				"						]," + 
				"		            \"must_not\": [" + 
				"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
				"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }" +  
				"		            ]," + 
				"		            \"filter\": [" + 
				"		            ]" + 
				"		        }" + 
				"		    }," + 
				"		    \"aggs\": {" + 
				"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
				"		    }" + 
				"	}";
	  }else{
		jsonStr = "{" + 
				"		\"size\": 0," + 
				"		\"query\": {" + 
				"		        \"bool\": {" + 
				"		            \"must\":[" + 
				"		                { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
				"						{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" + 
				"						]," + 
				"		            \"must_not\": [" + 
				"		                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
				"		                { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
				"		            ]," + 
				"		            \"filter\": [" + 
				"		            ]" + 
				"		        }" + 
				"		    }," + 
				"		    \"aggs\": {" + 
				"		          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
				"		    }" + 
				"	}";
	  }
	
}


if ( type.equals("salse_dailychart"))
{
	if ( "\"all\"".equals(t))
	 {
		jsonStr = "{ " + 
				"  \"size\": 0," + 
				"  \"query\": { " + 
				"    \"bool\": { " + 
				"      \"must\": [ " + 
				"        { \"terms\": {  \"CREATOR_NAME\": [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"] } }" + 
				"      ], " + 
				"      \"must_not\": [ " + 
				"        { " + 
				"          \"terms\": { " + 
				"            \"CATEGORY_KO\": [ \"배포지원요청\", \"영업제안서지원\", \"유지보수이관요청\", \"사내보안지원\", \"사내전산지원\", \"디자인 요청\", \"유지보수해외지원\", \"POC/데몬\", \"내부업무/기타\"             ]" + 
				"          } " + 
				"        } " + 
				"      ], " + 
				"      \"filter\": { " + 
				"        \"range\": { " + 
				"          \"CREATED_TIME\": { " + 
				"            \"gte\": "+timeFrom+"," + 
				"            \"lt\": "+timeTo+"" + 
				"          } " + 
				"        } " + 
				"      } " + 
				"    } " + 
				"  }, " + 
				"  \"aggs\": { " + 
				"    \"분류별 건수\": { " + 
				"      \"terms\": { " + 
				"        \"field\": \"CATEGORY_KO\" " + 
				"      } " + 
				"    } " + 
				"  } " + 
				"}";	
	}else{
		jsonStr = "{ " + 
				"  \"size\": 0," + 
				"  \"query\": { " + 
				"    \"bool\": { " + 
				"      \"must\": [ " + 
				"		{ \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }, " + 
				"        { \"terms\": {  \"CREATOR_NAME\": [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"] } }" + 
				"      ], " + 
				"      \"must_not\": [ " + 
				"        { " + 
				"          \"terms\": { " + 
				"            \"CATEGORY_KO\": [ \"배포지원요청\", \"영업제안서지원\", \"유지보수이관요청\", \"사내보안지원\", \"사내전산지원\", \"디자인 요청\", \"유지보수해외지원\", \"POC/데몬\", \"내부업무/기타\"             ]" + 
				"          } " + 
				"        } " + 
				"      ], " + 
				"      \"filter\": { " + 
				"        \"range\": { " + 
				"          \"CREATED_TIME\": { " + 
				"            \"gte\": "+timeFrom+"," + 
				"            \"lt\": "+timeTo+"" + 
				"          } " + 
				"        } " + 
				"      } " + 
				"    } " + 
				"  }, " + 
				"  \"aggs\": { " + 
				"    \"분류별 건수\": { " + 
				"      \"terms\": { " + 
				"        \"field\": \"CATEGORY_KO\" " + 
				"      } " + 
				"    } " + 
				"  } " + 
				"}";
	}
}

if ( type.equals("salse_aging") )
{
	System.out.println("agin1g : "+t);
	System.out.println(t + " " + t.length());
	if ( "\"all\"".equals(t))
	  {
		System.out.println("1");
		jsonStr = "{" + 
					"		\"size\" : 9999," + 
					"		\"_source\" : [\"CREATED_TIME\"]," + 
					"		\"sort\" : [" + 
					"				{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
					"				\"_score\"" + 
					"			]," + 
					"			\"query\": {" + 
					"			        \"bool\": {" + 
					"			            \"must\":[" + 
					"							{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}," + 
					"			                {\"term\" : { \"CATEGORY_KO\" : \"장애\"}}" + 
					"							]," + 
					"			            \"must_not\": [" + 
					"			                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
					"			                { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
					"			            ]," + 
					"			            \"filter\": {" + 
					"			        	" + 
					"		    			}" + 
					"			        }" + 
					"			    }" + 
					"		}";
	  }else{
		  System.out.println("2");
		  jsonStr = "{" + 
					"		\"size\" : 9999," + 
					"		\"_source\" : [\"CREATED_TIME\"]," + 
					"		\"sort\" : [" + 
					"				{ \"CREATED_TIME\" : {\"order\" : \"desc\"}}," + 
					"				\"_score\"" + 
					"			]," + 
					"			\"query\": {" + 
					"			        \"bool\": {" + 
					"			            \"must\":[" + 
					"			                { \"terms\": { \"ACCOUNT_NAME\":  ["+t+"]  } }," + 
					"							{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}," + 
					"			                {\"term\" : { \"CATEGORY_KO\" : \"장애\"}}" + 
					"							]," + 
					"			            \"must_not\": [" + 
					"			                { \"match\": { \"STATUS_KO\": \"닫힘\" } }," + 
					"			                { \"match\": { \"STATUS_KO\": \"해결함\" } }" + 
					"			            ]," + 
					"			            \"filter\": {" + 
					"			        	" + 
					"		    			}" + 
					"			        }" + 
					"			    }" + 
					"		}";
	  }
}

if ( type.equals("salse_top10") )
{
	jsonStr = "{ " + 
			"	\"size\": 0, " + 
			"	\"query\": { " + 
			"		\"bool\": { " + 
			"			\"must\": [ " + 
			"				{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" +
			"				], " + 
			"	        \"must_not\": [ " + 
			"	        ], " +
			"				\"filter\": {" + 
			"		        	\"range\": {" + 
			"		            		\"CREATED_TIME\": {" + 
			"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
			"		    					\"lt\": \"now\"	" + 
			"		        				}" + 
			"		    			}" + 
			"	    			}" + 
			"    		} " + 
			"	}, " + 
			"	\"aggs\": { " + 
			"          \"고객사별 건수\": {\"terms\": { \"field\": \"ACCOUNT_NAME\"}} " + 
			"    } " + 
			"}";
}

if ( type.equals("salse_ptop10") )
{
	jsonStr = "{ " + 
			"	\"size\": 0, " + 
			"	\"query\": { " + 
			"		\"bool\": { " + 
			"			\"must\": [ " + 
			"		       {\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" + 
			"				], " + 
			"	        \"must_not\": [ " + 
			"	        ], " +
			"				\"filter\": {" + 
			"		        	\"range\": {" + 
			"		            		\"CREATED_TIME\": {" + 
			"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
			"		    					\"lt\": \"now\"	" + 
			"		        				}" + 
			"		    			}" + 
			"	    			}" + 
			"    		} " + 
			"	}, " + 
			"	\"aggs\": { " + 
			"          \"고객사별 건수\": {\"terms\": { \"field\": \"CREATOR_NAME\"}} " + 
			"    } " + 
			"}";
}
if ( type.equals("salse_ownername10") )
{
	jsonStr = "{ " + 
			"	\"size\": 0, " + 
			"	\"query\": { " + 
			"		\"bool\": { " + 
			"			\"must\": [ " + 
			"				{\"terms\": { \"CREATOR_NAME\" : [\"김종필\",\"이형석\",\"노영준\",\"이승훈\",\"임성택\",\"김형준_영업\",\"신계영\",\"이덕수\",\"이선우\",\"이영직\",\"이태훈\",\"홍승완\",\"손도영\"]}}" +
			"				], " + 
			"	        \"must_not\": [ " + 
			"	        { \"terms\": { \"STATUS_KO\": [\"해결함\", \"닫힘\"]}}" + 
			"	        ], " + 
					"				\"filter\": {" + 
					"		        	\"range\": {" + 
					"		            		\"CREATED_TIME\": {" + 
					"		    					\"gte\": \"2019-01-01 00:00:00\"," + 
					"		    					\"lt\": \"now\"	" + 
					"		        				}" + 
					"		    			}" + 
					"	    			}" + 
			"    		} " + 
			"	}, " + 
			"	\"aggs\": { " + 
			"          \"Top10\": {\"terms\": { \"field\": \"OWNER_NAME\"}} " + 
			"    } " + 
			"}";
}
	
	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
 	System.out.println(result);
	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
