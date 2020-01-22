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
	String t = request.getParameter("t");
	String Ticket_id = request.getParameter("Ticket_id");
	String title = request.getParameter("title");
	String state = request.getParameter("state");
	
// 	if (title != null)
// 		title = new String(title.getBytes("ISO8859_1"), "UTF-8");
	
	
// 	if (state != null)
// 		state = new String(state.getBytes("ISO8859_1"), "UTF-8");
		
// 	if ( t != null )
// 		t = new String(t.getBytes("ISO8859_1"), "UTF-8");
	
// 	System.out.println(t);
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

	if ( "\"all\"".equals(t))
	{
		if ( type.equals("MainMaStatTotal") )
		{
			jsonStr = "{\"size\":10,\"query\": {\"bool\":{\"must\": ["
	            + "{\"terms\":{\"CREATOR_NAME\": [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}],"
	            + "\"must_not\":[{\"terms\":{\"CATEGORY_KO\":[\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"POC/데몬\",\"내부업무/기타\"]}}],"
	            + "\"filter\":{}}},"
	            + "\"aggs\":{\"분류별 건수\":{\"terms\":{\"field\":\"CATEGORY_KO\"}}}"
	            + "}";
	}
		
		if ( type.equals("MaListDetailSearch") )
		{
			jsonStr = "{" + 
					"  \"from\": "+offset+"," + 
					"  \"size\": "+size+"," + 
					"  \"sort\": [" + 
					"    {" + 
					"      \"CREATED_TIME\": {" + 
					"        \"order\": \"desc\"" + 
					"      }" + 
					"    }" + 
					"  ]," + 
					"  \"_source\": [" + 
					"    \"TICKET_NO\"," + 
					"    \"CREATED_TIME\"," + 
					"    \"TITLE\"," + 
					"    \"CATEGORY_KO\"," + 
					"    \"STATUS_KO\"," + 
					"    \"MODIFIED_TIME\"," + 
					"    \"SUPPORT_REQUESTOR\"," + 
					"    \"CONTACT_NAME\"," +
					"    \"PRIORITY_KO\"" + 
					"  ]," + 
					"  \"query\": {" + 
					"    \"bool\": {" + 
					"      \"must\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CREATOR_NAME\": [" + 
					"              \"문병린\"," + 
					"              \"정일형\"," + 
					"              \"윤형석\"," + 
					"              \"김성남\"," + 
					"              \"박진원\"," + 
					"              \"박웅\"," + 
					"              \"양창호\"," + 
					"              \"김준용\"," + 
					"              \"김영광\"," + 
					"              \"조광현\"," + 
					"              \"김동훈\"," + 
					"              \"최신덕\"," + 
					"              \"김싸라기\"" + 
					"            ]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"query_string\": {" + 
					"            \"fields\": ["+filters+"" + 
					"            ]," + 
					"            \"query\": "+searchKeyword+"" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"must_not\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CATEGORY_KO\": [" + 
					"              \"배포지원요청\"," + 
					"              \"영업제안서지원\"," + 
					"              \"유지보수이관요청\"," + 
					"              \"사내보안지원\"," + 
					"              \"사내전산지원\"," + 
					"              \"디자인 요청\"," + 
					"              \"유지보수해외지원\"," + 
					"              \"POC/데몬\"," + 
					"              \"내부업무/기타\"" + 
					"            ]" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"filter\": {" + 
					"        \"range\": {" + 
					"          \"CREATED_TIME\": {" + 
					"            \"gte\": "+timeFrom+"," + 
					"            \"lt\": "+timeTo+"" + 
					"          }" + 
					"        }" + 
					"      }" + 
					"    }" + 
					"  }," + 
					"  \"aggs\": {" + 
					"    \"분류별 건수\": {" + 
					"      \"terms\": {" + 
					"        \"field\": \"CATEGORY_KO\"" + 
					"      }" + 
					"    }" + 
					"  }" + 
					"}";
		}
		
		if ( type.equals("MaListSearch") )
		{
			jsonStr = "{" + 
					"  \"from\": "+offset+"," + 
					"  \"size\": "+size+"," + 
					"  \"sort\": [" + 
					"    {" + 
					"      \"CREATED_TIME\": {" + 
					"        \"order\": \"desc\"" + 
					"      }" + 
					"    }" + 
					"  ]," + 
					"  \"_source\": [" + 
					"    \"TICKET_NO\"," + 
					"    \"CREATED_TIME\"," + 
					"    \"TITLE\"," + 
					"    \"CATEGORY_KO\"," + 
					"    \"STATUS_KO\"," + 
					"    \"MODIFIED_TIME\"," + 
					"    \"SUPPORT_REQUESTOR\"," + 
					"    \"CONTACT_NAME\"," +
					"    \"PRIORITY_KO\"" + 
					"  ]," + 
					"  \"query\": {" + 
					"    \"bool\": {" + 
					"      \"must\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CREATOR_NAME\": [" + 
					"              \"문병린\"," + 
					"              \"정일형\"," + 
					"              \"윤형석\"," + 
					"              \"김성남\"," + 
					"              \"박진원\"," + 
					"              \"박웅\"," + 
					"              \"양창호\"," + 
					"              \"김준용\"," + 
					"              \"김영광\"," + 
					"              \"조광현\"," + 
					"              \"김동훈\"," + 
					"              \"최신덕\"," + 
					"              \"김싸라기\"" + 
					"            ]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"query_string\": {" + 
					"            \"fields\": [" + 
					"              \"TITLE\"," + 
					"              \"TICKET_NO\"," + 
					"              \"SUPPORT_REQUESTOR\"" + 
					"            ]," + 
					"            \"query\": "+searchKeyword+"" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"must_not\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CATEGORY_KO\": [" + 
					"              \"배포지원요청\"," + 
					"              \"영업제안서지원\"," + 
					"              \"유지보수이관요청\"," + 
					"              \"사내보안지원\"," + 
					"              \"사내전산지원\"," + 
					"              \"디자인 요청\"," + 
					"              \"유지보수해외지원\"," + 
					"              \"POC/데몬\"," + 
					"              \"내부업무/기타\"" + 
					"            ]" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"filter\": {}" + 
					"    }" + 
					"  }," + 
					"  \"aggs\": {" + 
					"    \"분류별 건수\": {" + 
					"      \"terms\": {" + 
					"        \"field\": \"CATEGORY_KO\"" + 
					"      }" + 
					"    }" + 
					"  }" + 
					"}";
		}
		
		if ( type.equals("MaContent") )
		{
			jsonStr = "{" + 
					"		\"_source\": [\"TITLE\",\"TICKET_ID\",\"TICKET_NO\",\"CREATED_TIME\",\"CREATOR_NAME\",\"RECEPTION_TYPE\",\"CATEGORY_KO\",\"SOLUTION\",\"RESPONSE_TYPE\",\"SUPPORT_REQUESTOR\",\"DESCRIPTION\",\"END_DATE\",\"OWNER_NAME\",\"CONTACT_NAME\",\"PRIORITY_KO\",\"STATUS_KO\",\"REQ_DETAIL\",\"status1\",\"status2\",\"status3\",\"status4\"]," + 
					"		\"query\": {" + 
					"			\"bool\": {" + 
					"				\"must\": " + 
					"					{ \"match\": { \"TICKET_NO\": \""+ticket_no+"\"" +
					"         } }," + 
					"				\"must_not\": [" + 
					"					{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"				]," + 
					"				\"filter\": [" + 
					"				]" + 
					"			}" + 
					"		}"+
					"}";
		}
		
		if ( type.equals("MaComment") )
		{	
		url = "http://10.10.10.229:9200/sc_comment_idx/_search";
		jsonStr = "{" + 
				"	\"sort\" : { \"COMMENTS_ID\" : {\"order\" : \"DESC\"}}," + 
				"	\"_source\": [\"COMMENT_CONTENT\",\"CREATEDDATE\",\"LAST_NAME\",\"COMMENTS_ID\",\"PARENT_COMMENTS_ID\"]," + 
				"	\"query\": " + 
				"		{ \"bool\": " + 
				"			{ \"must\":[" + 
				"				{ \"term\": {\"TICKETID\" : "+Ticket_id+" } }," + 
				"				{\"term\" : { \"PARENT_COMMENTS_ID\" : \"0\"	}}" + 
				"				]" + 
				"			," + 
				"			\"must_not\": " + 
				"				[ " + 
				"				]," + 
				"			\"filter\": []" + 
				"			}" + 
				"		}" + 
				"}";
		}
		
		if ( type.equals("Macomment2") )
		{	
		url = "http://10.10.10.229:9200/sc_comment_idx/_search";
		jsonStr = "{" + 
				"	\"sort\" : { \"PARENT_COMMENTS_ID\" : {\"order\" : \"ASC\"}}," + 
				"	\"_source\": [\"COMMENT_CONTENT\",\"CREATEDDATE\",\"LAST_NAME\",\"COMMENTS_ID\",\"PARENT_COMMENTS_ID\"]," + 
				"	\"query\": " + 
				"		{ \"bool\": " + 
				"			{ \"must\":[" + 
				"				{ \"term\": {\"PARENT_COMMENTS_ID\" : "+Ticket_id+" } }" + 
				"				]" + 
				"			," + 
				"			\"must_not\": " + 
				"				[ " + 
				"				]," + 
				"			\"filter\": []" + 
				"			}" + 
				"		}" + 
				"}";
		}
		
		if ( type.equals("MaList") )
		{
		
			
			if ( status.equals("none") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("category") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : [\""+category+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("stat") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : [\""+stat+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("all") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : [\""+category+"\"" +
						"											]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : [\""+stat+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("p") )
			{
	
				stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
				category ="\"장애\"";
	
				if(title.equals("1주내")){
					timeFrom = "\"now-7d/d\"";
					timeTo = "\"now\"";
				}else if(title.equals("2주내")){
					timeFrom = "\"now-14d/d\"";
					timeTo = "\"now-7d/d\"";
				}else if(title.equals("3주내")){
					timeFrom = "\"now-21d/d\"";
					timeTo = "\"now-14d/d\"";
				}else if(title.equals("4주내")){
					timeFrom = "\"now-28d/d\"";
					timeTo = "\"now-21d/d\"";
				}else if(title.equals("1달이상")){
					timeFrom = "\"now-999d/d\"";
					timeTo = "\"now-28d/d\"";
				}else if(title.equals("장애")){
					category ="\"장애\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기능문의")){
					category ="\"기능문의\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기술지원")){
					category ="\"기술지원요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("추가개발")){
					category ="\"추가개발요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("정기점검")){
					category ="\"정기점검\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기타")){
					category ="\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기타")){
					category ="\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("진행")){
					System.out.println(title);
					category ="\"장애\",\"기능문의\",\"기술지원요청\",\"추가개발요청\",\"정기점검\",\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
					timeFrom = "\"now-999d/d\"";
					timeTo = "\"now\"";
				}else if(title.equals("완료")){
					category ="\"장애\",\"기능문의\",\"기술지원요청\",\"추가개발요청\",\"정기점검\",\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					stat ="\"닫힘\",\"해결함\"";
					timeFrom = "\"now-90d/d\"";
					timeTo = "\"now\"";
				}
				System.out.println(title);
				System.out.println(category);
				System.out.println(timeFrom);
				System.out.println(timeTo);
				System.out.println(stat);
				
	
				jsonStr = "{" + 
						
						"			\"size\": 9999," + 
						"			\"sort\" : [	{ \"CREATED_TIME\" : {\"order\" : \"desc\"}},\"_score\"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : ["+category+"" +
						"											]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : ["+stat+"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
		}
	}
	else{

		if ( type.equals("MainMaStatTotal") )
		{
				jsonStr = "{\"size\":10,\"query\": {\"bool\":{\"must\": ["
		            + "{\"terms\":{\"ACCOUNT_NAME\": ["+t+"]}},"
		            + "{\"terms\":{\"CREATOR_NAME\": [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}],"
		            + "\"must_not\":[{\"terms\":{\"CATEGORY_KO\":[\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"POC/데몬\",\"내부업무/기타\"]}}],"
		            + "\"filter\":{}}},"
		            + "\"aggs\":{\"분류별 건수\":{\"terms\":{\"field\":\"CATEGORY_KO\"}}}"
		            + "}";
		}
		
		if ( type.equals("MaListDetailSearch") )
		{
			jsonStr = "{" + 
					"  \"from\": "+offset+"," + 
					"  \"size\": "+size+"," + 
					"  \"sort\": [" + 
					"    {" + 
					"      \"CREATED_TIME\": {" + 
					"        \"order\": \"desc\"" + 
					"      }" + 
					"    }" + 
					"  ]," + 
					"  \"_source\": [" + 
					"    \"TICKET_NO\"," + 
					"    \"CREATED_TIME\"," + 
					"    \"TITLE\"," + 
					"    \"CATEGORY_KO\"," + 
					"    \"STATUS_KO\"," + 
					"    \"MODIFIED_TIME\"," + 
					"    \"SUPPORT_REQUESTOR\"," + 
					"    \"CONTACT_NAME\"," +
					"    \"PRIORITY_KO\"" +
					"  ]," + 
					"  \"query\": {" + 
					"    \"bool\": {" + 
					"      \"must\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"ACCOUNT_NAME\": ["+t+"]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CREATOR_NAME\": [" + 
					"              \"문병린\"," + 
					"              \"정일형\"," + 
					"              \"윤형석\"," + 
					"              \"김성남\"," + 
					"              \"박진원\"," + 
					"              \"박웅\"," + 
					"              \"양창호\"," + 
					"              \"김준용\"," + 
					"              \"김영광\"," + 
					"              \"조광현\"," + 
					"              \"김동훈\"," + 
					"              \"최신덕\"," + 
					"              \"김싸라기\"" + 
					"            ]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"query_string\": {" + 
					"            \"fields\": ["+filters+"" + 
					"            ]," + 
					"            \"query\": "+searchKeyword+"" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"must_not\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CATEGORY_KO\": [" + 
					"              \"배포지원요청\"," + 
					"              \"영업제안서지원\"," + 
					"              \"유지보수이관요청\"," + 
					"              \"사내보안지원\"," + 
					"              \"사내전산지원\"," + 
					"              \"디자인 요청\"," + 
					"              \"유지보수해외지원\"," + 
					"              \"POC/데몬\"," + 
					"              \"내부업무/기타\"" + 
					"            ]" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"filter\": {" + 
					"        \"range\": {" + 
					"          \"CREATED_TIME\": {" + 
					"            \"gte\": "+timeFrom+"," + 
					"            \"lt\": "+timeTo+"" + 
					"          }" + 
					"        }" + 
					"      }" + 
					"    }" + 
					"  }," + 
					"  \"aggs\": {" + 
					"    \"분류별 건수\": {" + 
					"      \"terms\": {" + 
					"        \"field\": \"CATEGORY_KO\"" + 
					"      }" + 
					"    }" + 
					"  }" + 
					"}";
		}
		
		if ( type.equals("MaListSearch") )
		{
			jsonStr = "{" + 
					"  \"from\": "+offset+"," + 
					"  \"size\": "+size+"," + 
					"  \"sort\": [" + 
					"    {" + 
					"      \"CREATED_TIME\": {" + 
					"        \"order\": \"desc\"" + 
					"      }" + 
					"    }" + 
					"  ]," + 
					"  \"_source\": [" + 
					"    \"TICKET_NO\"," + 
					"    \"CREATED_TIME\"," + 
					"    \"TITLE\"," + 
					"    \"CATEGORY_KO\"," + 
					"    \"STATUS_KO\"," + 
					"    \"MODIFIED_TIME\"," + 
					"    \"SUPPORT_REQUESTOR\"," + 
					"    \"CONTACT_NAME\"," +
					"    \"PRIORITY_KO\"" +
					"  ]," + 
					"  \"query\": {" + 
					"    \"bool\": {" + 
					"      \"must\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"ACCOUNT_NAME\": ["+t+"]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CREATOR_NAME\": [" + 
					"              \"문병린\"," + 
					"              \"정일형\"," + 
					"              \"윤형석\"," + 
					"              \"김성남\"," + 
					"              \"박진원\"," + 
					"              \"박웅\"," + 
					"              \"양창호\"," + 
					"              \"김준용\"," + 
					"              \"김영광\"," + 
					"              \"조광현\"," + 
					"              \"김동훈\"," + 
					"              \"최신덕\"," + 
					"              \"김싸라기\"" + 
					"            ]" + 
					"          }" + 
					"        }," + 
					"        {" + 
					"          \"query_string\": {" + 
					"            \"fields\": [" + 
					"              \"TITLE\"," + 
					"              \"TICKET_NO\"," + 
					"              \"SUPPORT_REQUESTOR\"" + 
					"            ]," + 
					"            \"query\": "+searchKeyword+"" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"must_not\": [" + 
					"        {" + 
					"          \"terms\": {" + 
					"            \"CATEGORY_KO\": [" + 
					"              \"배포지원요청\"," + 
					"              \"영업제안서지원\"," + 
					"              \"유지보수이관요청\"," + 
					"              \"사내보안지원\"," + 
					"              \"사내전산지원\"," + 
					"              \"디자인 요청\"," + 
					"              \"유지보수해외지원\"," + 
					"              \"POC/데몬\"," + 
					"              \"내부업무/기타\"" + 
					"            ]" + 
					"          }" + 
					"        }" + 
					"      ]," + 
					"      \"filter\": {}" + 
					"    }" + 
					"  }," + 
					"  \"aggs\": {" + 
					"    \"분류별 건수\": {" + 
					"      \"terms\": {" + 
					"        \"field\": \"CATEGORY_KO\"" + 
					"      }" + 
					"    }" + 
					"  }" + 
					"}";
		}
		
		if ( type.equals("MaContent") )
		{
			jsonStr = "{" + 
					"		\"_source\": [\"TITLE\",\"TICKET_ID\",\"TICKET_NO\",\"CREATED_TIME\",\"CREATOR_NAME\",\"RECEPTION_TYPE\",\"CATEGORY_KO\",\"SOLUTION\",\"RESPONSE_TYPE\",\"SUPPORT_REQUESTOR\",\"DESCRIPTION\",\"END_DATE\",\"OWNER_NAME\",\"CONTACT_NAME\",\"PRIORITY_KO\",\"STATUS_KO\",\"REQ_DETAIL\",\"status1\",\"status2\",\"status3\",\"status4\"]," + 
					"		\"query\": {" + 
					"			\"bool\": {" + 
					"				\"must\": " + 
					"					{ \"match\": { \"TICKET_NO\": \""+ticket_no+"\"" +
					"         } }," + 
					"				\"must_not\": [" + 
					"					{ \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
					"				]," + 
					"				\"filter\": [" + 
					"				]" + 
					"			}" + 
					"		}"+
					"}";
		}
		
		if ( type.equals("MaComment") )
		{	
		url = "http://10.10.10.229:9200/sc_comment_idx/_search";
		jsonStr = "{" + 
				"	\"sort\" : { \"COMMENTS_ID\" : {\"order\" : \"DESC\"}}," +  
				"	\"_source\": [\"COMMENT_CONTENT\",\"CREATEDDATE\",\"LAST_NAME\",\"COMMENTS_ID\",\"PARENT_COMMENTS_ID\"]," + 
				"	\"query\": " + 
				"		{ \"bool\": " + 
				"			{ \"must\":[" + 
				"				{ \"term\": {\"TICKETID\" : "+Ticket_id+" } }," + 
				"				{\"term\" : { \"PARENT_COMMENTS_ID\" : \"0\"	}}" + 
				"				]" + 
				"			," + 
				"			\"must_not\": " + 
				"				[ " + 
				"				]," + 
				"			\"filter\": []" + 
				"			}" + 
				"		}" + 
				"}";
		}
		
		if ( type.equals("Macomment2") )
		{	
		url = "http://10.10.10.229:9200/sc_comment_idx/_search";
		jsonStr = "{" + 
				"	\"sort\" : { \"PARENT_COMMENTS_ID\" : {\"order\" : \"ASC\"}}," + 
				"	\"_source\": [\"COMMENT_CONTENT\",\"CREATEDDATE\",\"LAST_NAME\",\"COMMENTS_ID\",\"PARENT_COMMENTS_ID\"]," + 
				"	\"query\": " + 
				"		{ \"bool\": " + 
				"			{ \"must\":[" + 
				"				{ \"term\": {\"PARENT_COMMENTS_ID\" : "+Ticket_id+" } }" + 
				"				]" + 
				"			," + 
				"			\"must_not\": " + 
				"				[ " + 
				"				]," + 
				"			\"filter\": []" + 
				"			}" + 
				"		}" + 
				"}";
		}
		
		if ( type.equals("MaList") )
		{
		
			
			if ( status.equals("none") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("category") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : [\""+category+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("stat") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : [\""+stat+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("all") )
			{
				
				jsonStr = "{" + 
						"			\"from\": "+offset+"," + 
						"			\"size\": "+size+"," + 
						"			\"sort\" : ["+decoded+"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\",\"PRIORITY_KO\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : [\""+category+"\"" +
						"											]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : [\""+stat+"\"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
			else if ( status.equals("p") )
			{
	
				stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
				category ="\"장애\"";
	
				if(title.equals("1주내")){
					timeFrom = "\"now-7d/d\"";
					timeTo = "\"now\"";
				}else if(title.equals("2주내")){
					timeFrom = "\"now-14d/d\"";
					timeTo = "\"now-7d/d\"";
				}else if(title.equals("3주내")){
					timeFrom = "\"now-21d/d\"";
					timeTo = "\"now-14d/d\"";
				}else if(title.equals("4주내")){
					timeFrom = "\"now-28d/d\"";
					timeTo = "\"now-21d/d\"";
				}else if(title.equals("1달이상")){
					timeFrom = "\"now-999d/d\"";
					timeTo = "\"now-28d/d\"";
				}else if(title.equals("장애")){
					category ="\"장애\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기능문의")){
					category ="\"기능문의\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기술지원")){
					category ="\"기술지원요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("추가개발")){
					category ="\"추가개발요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("정기점검")){
					category ="\"정기점검\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기타")){
					category ="\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("기타")){
					category ="\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					if(state.equals("1")){
						stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
						timeFrom = "\"now-999d/d\"";
						timeTo = "\"now\"";
					}else if(state.equals("0")){
						stat ="\"닫힘\",\"해결함\"";
						timeFrom = "\"now-90d/d\"";
						timeTo = "\"now\"";
					}	
				}else if(title.equals("진행")){
					System.out.println(title);
					category ="\"장애\",\"기능문의\",\"기술지원요청\",\"추가개발요청\",\"정기점검\",\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					stat ="\"담당할당\",\"진행중\",\"개발\",\"오픈\"";
					timeFrom = "\"now-999d/d\"";
					timeTo = "\"now\"";
				}else if(title.equals("완료")){
					category ="\"장애\",\"기능문의\",\"기술지원요청\",\"추가개발요청\",\"정기점검\",\"패키징요청\",\"영업문의\",\"영업지원\",\"기술자료요청\"";
					stat ="\"닫힘\",\"해결함\"";
					timeFrom = "\"now-90d/d\"";
					timeTo = "\"now\"";
				}
				System.out.println(title);
				System.out.println(category);
				System.out.println(timeFrom);
				System.out.println(timeTo);
				System.out.println(stat);
				
	
				jsonStr = "{" + 
						
						"			\"size\": 9999," + 
						"			\"sort\" : [	{ \"CREATED_TIME\" : {\"order\" : \"desc\"}},\"_score\"]," + 
						"	         \"_source\": [\"TICKET_NO\",\"CREATED_TIME\",\"TITLE\", \"CATEGORY_KO\", \"STATUS_KO\",\"MODIFIED_TIME\",\"SUPPORT_REQUESTOR\",\"CONTACT_NAME\"]," + 
						"	         \"query\": {" + 
						"	            \"bool\": {" + 
						"	            	\"must\": [" + 
						"	                    { \"terms\": { \"ACCOUNT_NAME\": ["+t+"] } }," + 
						"	                    { \"terms\": { \"CREATOR_NAME\" : [\"문병린\",\"정일형\",\"윤형석\",\"김성남\",\"박진원\",\"박웅\",\"양창호\",\"김준용\",\"김영광\",\"조광현\",\"김동훈\",\"최신덕\",\"김싸라기\"]}}," + 
						"	                    { \"terms\" : { \"CATEGORY_KO\" : ["+category+"" +
						"											]}}," + 
						"	                    { \"terms\" : { \"STATUS_KO\" : ["+stat+"" +
						"											]}}," + 
						"	                    { \"query_string\" : {" + 
						"	                    	\"fields\" : [" + 
						"	                    		\"TITLE\"," + 
						"	                    		\"TICKET_NO\"," + 
						"	                    		\"SUPPORT_REQUESTOR\"" + 
						"	                    		]," + 
						"	                    		\"query\" : \"**\""+ 
						"	                    		}" + 
						"	                     }" + 
						"	                 ]," + 
						"	                 \"must_not\": [" + 
						"	                	 { \"terms\": { \"CATEGORY_KO\": [\"배포지원요청\",\"영업제안서지원\",\"유지보수이관요청\",\"사내보안지원\",\"사내전산지원\",\"디자인 요청\",\"유지보수해외지원\",\"POC/데몬\",\"내부업무/기타\"] } }" + 
						"	                	 ]," + 
						"	                	 \"filter\": {" + 
						"	                		 \"range\": {" + 
						"	                			 \"CREATED_TIME\": {" + 
						"            										\"gte\": "+timeFrom+"," + 
						"            										\"lt\": "+timeTo+"" + 
						"	                              }" + 
						"	            		 	}" + 
						"	                	 }" + 
						"	            	}" + 
						"	         	}," + 
						"	         	\"aggs\": {" + 
						"	    	          \"분류별 건수\": {\"terms\": { \"field\": \"CATEGORY_KO\"}}" + 
						"	      		}" + 
						"		}";
			}
		}
	}

	String res = webApi.post(url, jsonStr.toString(), "application/json;", "UTF-8", 30000);
  result = (JSONObject) JSONValue.parse(res);
 	System.out.println(result);
 	System.out.println("type : "+type + " jsonStr : "+jsonStr.toString());
%>
<%=result %>
