//var mailFlags = "getMailList";
var maFlags = "";
var imgDivisionFlags = false;

function MaList(){
	$(".content").empty();
	$(".content").load("MaList.jsp");
}

function GetInit(){
	//getMainMaStatTotal();
	//test();
}
function getMaList(item,title)
{
	var ACCOUNT_NAME = $("#crmdomain_flag").val();

	
	var test = ACCOUNT_NAME.split(';');

	A = '"';

	for ( var i=0; i<test.length;i++ )
	{
		console.log(test[i])
		if(test[i] != "")
		{
		A += test[i]
			if(i<test.length-1 && test[i+1] != "")
			{
					A += '","'
				
			}
			else{
				A += '"'
			}
		}
	}
	
	var title = title;
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var crmdomain = $("#crmdomain_flag").val();
//	console.log(crmdomain)
	var sorting = $("#order").val();
	var sortName = $("#orderBy").val();
	var timeFrom = "now-360d/d", timeTo = "now";
	var timeRange = {};
	var now = new Date();
	var ES_URL = "";
	
	size = parseInt($('#pageSize').val());

	
	offset = parseInt($('#pageIdx').val());
	
	var statFilter = $("#stat_filter").val();
	var categoryFilter = $("#category_filter").val();
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}

	if($("#status_week").prop("checked")){
			periodTimestamp(-7, timeRange);
			timeFrom = getTimeStamp(timeRange.from);
			timeTo = getTimeStamp(timeRange.to);
			title = null
		}else if($("#status_month").prop("checked")){
			periodTimestamp(-30, timeRange);
			timeFrom = getTimeStamp(timeRange.from);
			timeTo = getTimeStamp(timeRange.to);
			title = null
		}else if($("#status_period").prop("checked")){
			var searchDetailDate = new Array();
			if($("#reservation").val() != undefined || $("#reservation").val() != null){
				searchDetailDate = $("#reservation").val().split(' - ');
				var selectTimeFrom = new Date(searchDetailDate[0]);
				var selectTimeTo = new Date(searchDetailDate[1]);
				timeFrom = selectTimeFrom.valueOf() + now.getTimezoneOffset() * 60000;
				timeTo = selectTimeTo.valueOf() + (now.getTimezoneOffset() * 60000) + (86400000-1);
				timeFrom = getTimeStamp(timeFrom);
				timeTo = getTimeStamp(timeTo);
				title = null
			}	
	}
	

	
	if ( offset == null )
		offset = 0;
	
	if ( sorting == "" || sorting == null )
		sorting = "DESC";
	
	var array = new Array();
	var order = { "order" : sorting };
	var sort = { };
	sort[sortName] = order;
	array.push(sort)
	
	searchType = $("#searchType").val();
	if (statFilter == "null" && categoryFilter == "null" )
	{
//		console.log(A);
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_MaList.jsp?type=MaList&title="+title+"&status=none&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	else if ( statFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_MaList.jsp?type=MaList&status=category&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&categoryFilter="+categoryFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	else if ( categoryFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_MaList.jsp?type=MaList&status=stat&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&statFilter="+statFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	
	else
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_MaList.jsp?type=MaList&status=all&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&categoryFilter="+categoryFilter+"&statFilter="+statFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}

	
	
	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1;
			data = JSON.parse(data.trim());
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					if ( value.total == 0)
					{
					$("#recCount").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
			
					}else{
					$("#recCount").text(numberWithCommas(value.total));
					
					for ( var i=0; i<hits.length;i++ )
					{
						if(hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당" )
						{
							 isOrigin = "false";
						}else if(hits[i]._source.STATUS_KO == "진행중"){
							isOrigin = "2";
						}else if(hits[i]._source.STATUS_KO == "개발"){
							isOrigin = "3";
						}else if(hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" ){
							isOrigin = "1";
						}
						
						html += "<tr>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
							}
						else if ( hits[i]._source.STATUS_KO == "닫힘" )
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "해결함" )
						{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>조치</span></div></td>";
						}
						else if (hits[i]._source.STATUS_KO == "개발")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>개발</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>분석</span></div></td>";
							}
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; \" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						if (hits[i]._source.PRIORITY_KO == "P1"){
							html += "  <td style=\"cursor: pointer; background-color: #ff0707;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}else{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
							}
						html += "</tr>";
						cnt ++;
					}
					}
					
					$("#MaList").empty();
					$("#MaList").html(html);
				}
				else if (key == "aggregations" )
				{
				}
			});
		},
		error : function(xhr, status, error) {
		},
		complete : function(data) {
			setPageIdx();
		}
	});
}

//유비보수 현황 상세 정보 보여주기
function getMaContent(Ticket_No,isOrigin,statusing) {
	var Ticket_No = (Ticket_No);
	var isOriginal = isOrigin;
	var statusing = statusing;
	
//	if ( isOrigin == "" || isOrigin == null )
//		isOriginal = false;
//	else
//		isOriginal = isOrigin;
	
	$.ajax({
		type: "POST",
		url: "/sk/ajax/ES_MaList.jsp?type=MaContent&ticket_no="+Ticket_No+"",
		contentType: "application/json; charset=UTF-8",
		dataType: "text",
		timeout: 30000,
		async: false,
		success: function(data){
			var html="";
			data = JSON.parse(data.trim());
			$.each(data, function(key, value){
				
				if ( key == "hits" )
				{
					hits = value.hits;
				
				//100%
				html  = "<div class=\"modal-dialog\" style=\"min-width: 100%; max-width: 100%;\">";
				html += "  <div class=\"modal-content\">";
				html += "    <div class=\"modal-header\">";
				html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
				html += "        <span aria-hidden=\"true\">&times;</span></button>";
				html += "      <h4 class=\"modal-title\"><span class=\"i18n-maillist-list-etc-menu-eml-down\"></span><span>상세 정보</span></h4>";
				html += "    </div>";
				html += "    <div class=\"modal-body\">";
				html += "      <div id=\"divMaTitle\" style=\"display:flex\">";
				html += "        <div style=\"flex:2\">";
				html += "          <span style=\"line-height: 2; font-size: 19px;\">&nbsp;</span><span style=\"line-height: 2; font-size: 25px;\">제목 : </span><span style=\"line-height: 2; font-size: 25px;\">"+hits[0]._source.TITLE+"</span>";
				html += "        </div>";
				html += "      </div>";
				html += "      <hr>";
				html += "      <div id=\"divMaInfo\" style=\"display: flex;\">";
				// 정보 자측
				html += "        <div style=\"flex:2\">";
				html += "          <table class=\"maInfo\">";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-ticketno\"></span></th>";
				// 접수번호 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 15px;\" data-tooltip-text=\"시스템에서 자동 할당되는 번호로 문의시 해당 번호를 알려주시면 빠르게 확인이 가능합니다.\">"+hits[0]._source.TICKET_NO+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-catogryko\"></span></th>";
				// 접수유형 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background-color: #757575;\"><span style=\"line-height: 2; font-size: 16px; color: #fafcfd;\" data-tooltip-text=\"접수 건의 유형 정보\">"+hits[0]._source.CATEGORY_KO+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-createdtime\"></span></th>";
				// 접수일 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 16px;\">"+hits[0]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-supptotrequestor\"></span></th>";
				// 접수자 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 16px;\">"+hits[0]._source.SUPPORT_REQUESTOR+"</span></div></td>";
				html += "            </tr>";
				
				
				if ( hits[0]._source.CATEGORY_KO == "장애")
				{
					html += "            <tr>";
					html += "              <th><span class=\"i18n-malist-ma-view-STATUS_KO\"></span></th>";
					// 진행상태 i18n-maillist-mail-view-send 값 변경
					if (hits[0]._source.STATUS_KO == "오픈" || hits[0]._source.STATUS_KO == "담당할당")
						{
							html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"active\"><p>접수</p></li>      <li class=\"undone\"><p>분석</p></li>      <li class=\"undone\"><p>개발</p></li>      <li class=\"undone\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					else if (hits[0]._source.STATUS_KO == "해결함" )
						{
						html += "              <td> <div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"done\"><p>분석</p></li>      <li class=\"done\"><p>개발</p></li>      <li class=\"active\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></div></li></td>";
						}
					else if(hits[0]._source.STATUS_KO == "닫힘")
						{
						html += "              <td> <div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"done\"><p>분석</p></li>      <li class=\"done\"><p>개발</p></li>      <li class=\"done\"><p>조치</p></li> <li class=\"active\"><p>완료</p></li> </div></td>";
						}
					else if (hits[0]._source.STATUS_KO == "개발")
						{
						html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"done\"><p>분석</p></li>      <li class=\"active\"><p>개발</p></li>      <li class=\"undone\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					else
						{
						html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"active\"><p>분석</p></li>      <li class=\"undone\"><p>개발</p></li>      <li class=\"undone\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					html += "            </tr>";
				}else{
					html += "            <tr>";
					html += "              <th><span class=\"i18n-malist-ma-view-STATUS_KO\"></span></th>";
					// 진행상태 i18n-maillist-mail-view-send 값 변경
					if (hits[0]._source.STATUS_KO == "오픈" || hits[0]._source.STATUS_KO == "담당할당")
						{
							html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"active\"><p>접수</p></li>      <li class=\"undone\"><p>진행</p></li>            <li class=\"undone\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					else if (hits[0]._source.STATUS_KO == "해결함" )
						{
						html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"done\"><p>진행</p></li>            <li class=\"active\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					else if(hits[0]._source.STATUS_KO == "닫힘")
						{
						html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"done\"><p>진행</p></li>            <li class=\"done\"><p>조치</p></li> <li class=\"active\"><p>완료</p></li></div> </td>";
						}
					else
						{
						html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"steps\"><li class=\"done\"><p>접수</p></li>      <li class=\"active\"><p>진행</p></li>            <li class=\"undone\"><p>조치</p></li> <li class=\"undone\"><p>완료</p></li></div> </td>";
						}
					html += "            </tr>";
				}
			
				html += "          </table>";
				html += "        </div>";
				// 정보 우측
				html += "        <div style=\"flex:2\">";
				html += "          <table class=\"maInfo\">";
				html += "              <th><span class=\"i18n-malist-ma-view-PRIORITY_KO\"></span></th>";
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background-color: #757575;\" data-tooltip-text=\"P1 : 긴급진행(전사적이거나 보안적인 결함등) P2 : 회피책제시가 가능한 수준                       P3 : 서비스운용에 영향이 없는 상황                     P4 : 일상 진행(단순장애등) \"><span style=\"line-height: 2; font-size: 15px; color: #fafcfd;\">"+hits[0]._source.PRIORITY_KO+"</span></div></td>";
				// 진행등급 i18n-maillist-mail-view-send 값 변경
//				if ( hits[0]._source.PRIORITY_KO == "P4" )
//				{
//					html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"prioritys\"><li class=\"active\"><p>Priority 4</p></li>      <li class=\"undone\"><p>Priority 3</p></li>      <li class=\"undone\"><p>Priority 2</p></li>      <li class=\"undone\"><p>Priority 1</p></li></div> </td>";
//				}
//				else if ( hits[0]._source.PRIORITY_KO == "P3" )
//				{
//					html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"prioritys\"><li class=\"undone\"><p>Priority 4</p></li>      <li class=\"active\"><p>Priority 3</p></li>      <li class=\"undone\"><p>Priority 2</p></li>      <li class=\"undone\"><p>Priority 1</p></li></div> </td>";				
//					}
//				else if ( hits[0]._source.PRIORITY_KO == "P2" )
//				{
//					html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"prioritys\"><li class=\"undone\"><p>Priority 4</p></li>      <li class=\"undone\"><p>Priority 3</p></li>      <li class=\"active\"><p>Priority 2</p></li>      <li class=\"undone\"><p>Priority 1</p></li></div> </td>";				
//					}
//				else
//				{
//					html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; background: white; line-height: normal\"><ul class=\"prioritys\"><li class=\"undone\"><p>Priority 4</p></li>      <li class=\"undone\"><p>Priority 3</p></li>      <li class=\"undone\"><p>Priority 2</p></li>      <li class=\"active\"><p>Priority 1</p></li></div> </td>";				
//					}
				html += "            </tr>";
				
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-enddate\"></span></th>";
				// 처리일 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px; \"><span style=\"line-height: 2; font-size: 15px;\">"+hits[0]._source.END_DATE+"</span></div></td>";
				html += "            </tr>";
//				html += "            <tr>";
//				html += "              <th><span class=\"i18n-malist-ma-view-creatorname\"></span></th>";
				// 상담원 i18n-maillist-mail-view-send 값 변경
//				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\">"+hits[0]._source.CREATOR_NAME+"</span></div></td>";
//				html += "            </tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-ownername\"></span></th>";
				// 담당자 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 15px;\">"+hits[0]._source.OWNER_NAME+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-receptiontype\"></span></th>";
				// 접수방법 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 16px;\">"+hits[0]._source.RECEPTION_TYPE+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-malist-ma-view-responsetype\"></span></th>";
				// 처리방법 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 15px;\">"+hits[0]._source.RESPONSE_TYPE+"</span></div></td>";
				html += "            </tr>";
				html += "          </table>";
				html += "        </div>";
				html += "      </div>";
				html += "      <hr>";
				html += " <span style=\"line-height: 2; font-size: 25px;\">< 단계별 상세 내역 ></span>";
				html += "      <div class=\"nav-tabs-custom\">";
			    html += "        <ul class=\"nav nav-tabs\">";
			    if ( hits[0]._source.CATEGORY_KO == "장애")
			    	{
			    	if ( !isOriginal )
				    {
				    	html += "          <li class=\"active\" id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"\">접수 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"\">분석 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent2\"><a href=\"#Comment_Content2\" data-toggle=\"tab\"><span class=\"\">개발 내역</span></a></li>";
				    	html += "          <li id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"\">조치 내역</span></a></li>";
						
				    }
				    else if ( isOriginal == "2" )
				    {
				    	html += "          <li id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"\">접수 내역</span></a></li>";
				    	html += "          <li class=\"active\" id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"\">분석 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent2\"><a href=\"#Comment_Content2\" data-toggle=\"tab\"><span class=\"\">개발 내역</span></a></li>";
				    	html += "          <li id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"\">조치 내역</span></a></li>";
						
				    	
				    }
				    else if ( isOriginal == "3" )
				    {
				    	html += "          <li id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"\">접수 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"\">분석 내역</span></a></li>";
				    	html += "          <li class=\"active\" id=\"CommentContent2\"><a href=\"#Comment_Content2\" data-toggle=\"tab\"><span class=\"\">개발 내역</span></a></li>";
				    	html += "          <li id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"\">조치 내역</span></a></li>";
						
				    	
				    }
				    else if ( isOriginal == "1" )
				    {
				    	html += "          <li id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"\">접수 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"\">분석 내역</span></a></li>";
				    	html += "          <li id=\"CommentContent2\"><a href=\"#Comment_Content2\" data-toggle=\"tab\"><span class=\"\">개발 내역</span></a></li>";
				    	html += "          <li class=\"active\" id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"\">조치 내역</span></a></li>";
						
				    }
			    }
			    else
			    {
			    	
				    if ( !isOriginal )
				    {
				    	html += "          <li class=\"active\" id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-reception-message\"></span></a></li>";
				    	html += "          <li id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-comment-message\"></span></a></li>";
				    	html += "          <li id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-response-message\"></span></a></li>";
						
				    }
				    else if ( isOriginal == "2" || isOriginal == "3")
				    {
				    	html += "          <li id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-reception-message\"></span></a></li>";
				    	html += "          <li class=\"active\" id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-comment-message\"></span></a></li>";
				    	html += "          <li id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-response-message\"></span></a></li>";
				    	
				    	
				    }
				    else if ( isOriginal == "1" )
				    {
				    	html += "          <li id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-reception-message\"></span></a></li>";
				    	html += "          <li id=\"CommentContent\"><a href=\"#Comment_Content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-comment-message\"></span></a></li>";
				    	html += "          <li class=\"active\" id=\"originalContent\"><a href=\"#Original_content\" data-toggle=\"tab\"><span class=\"i18n-malist-ma-response-message\"></span></a></li>";
						
				    }
			    }
			    html += "        </ul>";
			    html += "        <br/>";
//				html += "        <div id=\"divContent\" style=\"min-width: 900px; max-width: 1000px; height: 50%;\">";
				html += "        <div id=\"divContent\" style=\"display: flex;\">";
				html += "          <div class=\"tab-content\">";
				
				html += "            <div class=\"active tab-pane\" id=\"Quarantine_content\" style=\"position: relative;\">";
				if ( !isOriginal )
				{
					console.log("접수");
					if ( hits[0]._source.CATEGORY_KO == "추가개발요청")
					{
						
					html += "              <div style=\"white-space:pre;\">■ 개발 요구 상세<br>"+hits[0]._source.REQ_DETAIL+"<br><br><br>■ 고객의 개발 요건<br>";
						if (hits[0]._source.status1 == "")
						{
							html += "<span style =\"color: #cfc6c6;\">요약내용에 포함.</span>";		
						}
						else
						{
							html += hits[0]._source.status1
						}
					html += "</div>";
					$("#Original_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					}
					else
					{
					html += "              <div style=\"white-space:pre; word-break: break-all;\">■ 접수 요약<br>"+hits[0]._source.DESCRIPTION+"<br><br><br>■ 고객 접수 내용<br>";
						
						if (hits[0]._source.status1 == "")
						{
							html += "<span style =\"color: #cfc6c6;\">요약내용에 포함.</span>";		
						}
						else
						{
							html += hits[0]._source.status1
						}
					html += "</div>";
					$("#Original_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					$("#Comment_Content2").removeClass("active");
					}
				}
				
				html += "            </div>";
				html += "            <div class=\"active tab-pane\" id=\"Original_content\">";
				
				if ( isOriginal =="1")
				{
					console.log("완료");
					if ( hits[0]._source.CATEGORY_KO == "추가개발요청")
					{
						if (hits[0]._source.status4 == "")
						{
							html += "<span style =\"color: #cfc6c6;\">내용 기입 전이거나 개발 진행 중 입니다.</span>";		
						}
						else
						{
							html += hits[0]._source.status4
						}
					$("#Original_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					}else{
					
					html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all;\">■ 조치 요약<br><span style=\"word-break: break-all;\">"+hits[0]._source.SOLUTION+"</span><br><br><br>■ 조치 진행 내용<br>";
						if (hits[0]._source.status4 == "")
						{
							html += "<span style =\"color: #cfc6c6;\">내용 기입 전이거나 요약 내용으로 완료.</span>";		
						}
						else
						{
							html += hits[0]._source.status4
						}
	//				html += "              <pre style=\"height: 100%\">"+hits[0]._source.SOLUTION+"</pre>";	
					html += "            </div>";
					
					$("#Quarantine_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					$("#Comment_Content2").removeClass("active");
					}
				}
				
				html += "            </div>";
				html += "            <div class=\"active tab-pane\" id=\"Comment_Content\">";
				
				if ( isOriginal == "2" )
				{
					console.log("진행");
					if ( hits[0]._source.CATEGORY_KO != "장애")
					{
						if (hits[0]._source.status2 == "")
						{
							html += "	<div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; color: #cfc6c6;\">내용 기입 전이거나 진행이 필요 없는 단계 입니다.</div>";	
						}
						else
						{
						
						html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex;\">"+hits[0]._source.status2+"</div>";
						}
						$("#Original_content").removeClass("active");
						$("#Comment_Content").removeClass("active");
					
					}else{
						if (hits[0]._source.status2 == "")
						{
							html += "	<div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; color: #cfc6c6;\">내용 기입 전이거나 진행이 필요 없는 단계 입니다.</div>";	
						}
						else
						{
	//					console.log("진행");
						html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex;\">"+hits[0]._source.status2+"</div>";
						}
					}
////					html += "        <div id=\"divContent\" style=\"min-width: 900px; max-width: 1000px; height: 50%;\">";
////					html += "        <div id=\"divContent\" style=\"display: flex;\">";
////					html += "          <div class=\"tab-content\">";
////					// 진행상테 상세 시작
////					html += "      <div class=\"nav-tabs-custom\">";
//				    html += "        <ul class=\"nav nav-tabs\">";
//				    
//			    	 if ( statusing =="1" )
//					    {
//					    	html += "          <li class=\"active\" id=\"statusing1\"><a href=\"#statusing1_content\" data-toggle=\"tab\" style=\"background-color: #b8b7f6;\"><span class=\"\" data-tooltip-text=\"접수단계에서 체크된 내용\">접수확인</span></a></li>";
//					    	html += "          <li id=\"statusing2\"><a href=\"#statusing2_Content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"엔지니어 분석 진행 내용\">1차분석</span></a></li>";
//					    	html += "          <li id=\"statusing3\"><a href=\"#statusing3_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"개발자 분석 진행 내용\">개발분석</span></a></li>";
//					    	html += "          <li id=\"statusing4\"><a href=\"#statusing4_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"완료를 위한 진행 내역\">조치사항</span></a></li>";
//							
//					    }
//					    else if ( statusing == "2" )
//					    {
//					    	html += "          <li id=\"statusing1\"><a href=\"#statusing1_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"접수단계에서 체크된 내용\">접수확인</span></a></li>";
//					    	html += "          <li class=\"active\" id=\"statusing2\"><a href=\"#statusing2_Content\" data-toggle=\"tab\" style=\"background-color: #b8b7f6;\"><span class=\"\" data-tooltip-text=\"엔지니어 분석 진행된 내용\">1차분석</span></a></li>";
//					    	html += "          <li id=\"statusing3\"><a href=\"#statusing3l_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"개발자 분석 진행 내용\">개발분석</span></a></li>";
//					    	html += "          <li id=\"statusing4\"><a href=\"#statusing4_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"완료를 위한 진행 내역\">조치사항</span></a></li>";
//					    	
//					    }
//					    else if ( statusing == "3" )
//					    {
//					    	html += "          <li id=\"statusing1\"><a href=\"#statusing1_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"접수단계에서 체크된 내용\">접수확인</span></a></li>";
//					    	html += "          <li id=\"statusing2\"><a href=\"#statusing2_Content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"엔지니어 분석 진행된 내용\">1차분석</span></a></li>";
//					    	html += "          <li class=\"active\" id=\"statusing3\"><a href=\"#statusing3l_content\" data-toggle=\"tab\" style=\"background-color: #b8b7f6;\"><span class=\"\" data-tooltip-text=\"개발자 분석 진행 내용\">개발분석</span></a></li>";
//					    	html += "          <li id=\"statusing4\"><a href=\"#statusing4_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"완료를 위한 진행 내역\">조치사항</span></a></li>";
//							
//					    }
//					    else if ( statusing == "4" )
//					    {
//					    	html += "          <li id=\"statusing1\"><a href=\"#statusing1_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"접수단계에서 체크된 내용\">접수확인</span></a></li>";
//					    	html += "          <li id=\"statusing2\"><a href=\"#statusing2_Content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"엔지니어 분석 진행된 내용\">1차분석</span></a></li>";
//					    	html += "          <li id=\"statusing3\"><a href=\"#statusing3l_content\" data-toggle=\"tab\"><span class=\"\" data-tooltip-text=\"개발자 분석 진행 내용\">개발분석</span></a></li>";
//					    	html += "          <li class=\"active\" id=\"statusing4\"><a href=\"#statusing4_content\" data-toggle=\"tab\" style=\"background-color: #b8b7f6;\"><span class=\"\" data-tooltip-text=\"완료를 위한 진행 내역\">조치사항</span></a></li>";
//							
//					    }
//			    	 	html += "        </ul>";
//			    	// 진행상테 상세 끝
//					
//					html += "            <div class=\"active tab-pane\" id=\"statusing1_content\">";
//					// 진행상테 상세 시작
//						if ( statusing =="1" )
//					    {
//							html += "              <div id=\"divMaTitle\" style=\"white-space:pre; display:flex;\">"+hits[0]._source.status1+"</div>";	
//					    	$("#statusing2_Content").removeClass("active");
//					    	$("#statusing3_Content").removeClass("active");
//					    	$("#statusing4_Content").removeClass("active");
//							
//					    }
//						html += "            </div>";
//						html += "            <div class=\"active tab-pane\" id=\"statusing2_content\">";
//					    if ( statusing == "2" )
//					    {
//					    	html += "              <div id=\"divMaTitle\" style=\"white-space:pre; display:flex;\">"+hits[0]._source.status2+"</div>";	
//					    	$("#statusing1_Content").removeClass("active");
//					    	$("#statusing3_Content").removeClass("active");
//					    	$("#statusing4_Content").removeClass("active");
//					    }
//						html += "            </div>";
//						html += "            <div class=\"active tab-pane\" id=\"statusing3_content\">";
//					    if ( statusing == "3" )
//					    {
//					    	html += "              <div id=\"divMaTitle\" style=\"white-space:pre; display:flex;\">"+hits[0]._source.status3+"</div>";	
//					    	$("#statusing1_Content").removeClass("active");
//					    	$("#statusing2_Content").removeClass("active");
//					    	$("#statusing4_Content").removeClass("active");
//					    }
//						html += "            </div>";
//						html += "            <div class=\"active tab-pane\" id=\"statusing4_content\">";
//					    if ( statusing == "4" )
//					    {
//					    	html += "              <div id=\"divMaTitle\" style=\"white-space:pre; display:flex;\">"+hits[0]._source.status4+"</div>";	
//					    	$("#statusing1_Content").removeClass("active");
//					    	$("#statusing2_Content").removeClass("active");
//					    	$("#statusing3_Content").removeClass("active");
//					    }
//					    html += "            </div>";
			    	// 진행상테 상세 끝
//					console.log("코멘트조건문");
//					$.ajax({
//						type: "POST",
//						url: "/sk/ajax/ES_MaList.jsp?type=MaComment&Ticket_id="+hits[0]._source.TICKET_ID+"",
//						contentType: "application/json; charset=UTF-8",
//						dataType: "text",
//						async: false,
//						timeout: 30000,
//						success: function(data){
//							console.log("1차코멘트쿼리있음");
//							data = JSON.parse(data.trim());
//							$.each(data, function(key, value){
//								
//								if ( key == "hits" )
//								{
//									hits1 = value.hits;
//									
//									
//									html += "<div class=\"commentsBody\"><div class=\"recentCommentsBody container-fluid\">";
//									html += "	<ul class=\"unstyled\">";
//									
//									for ( var i=0; i<hits1.length;i++ )
//									{
//										console.log("1차"+i+"번째");
//									html += "		<li class=\"commentDetails\">";
//									html += "			<div class=\"commentDetails\">";
//									html += "				<div class=\"singleComment\">";
//									html += "					<div class=\"row\">";
//									html += "						<div class=\"col-lg-12\">";
//									html += "							<div class=\"media\">";
//									html += "								<div class=\"media-body\" style=\"width:100%\">";
//									html += "									<div class=\"comment\" style=\"line-height:1;\">";
//									html += "										<span class=\"creatorName\">"+hits1[i]._source.LAST_NAME+"</span>&nbsp;&nbsp;";
//									html += "										<span class=\"commentTime text-muted cursorDefault\"><small>"+hits1[i]._source.CREATEDDATE+"</small></span>";
//									html += "					 					<div class=\"commentInfoContentBlock\">";
//									html += "											<br>";
//									html += "											<span class=\"commentInfoContent\" data-maxlength=\"200\">"+hits1[i]._source.COMMENT_CONTENT+"</span>";
//									html += "										</div>&nbsp;"
//									html += "										<div class=\"commentActionsContainer\" style=\"margin-top: 2px;\">";
//									html += "										<span></span>";
//									html += "										</div>";
//									html += "										<br>";
//									html += "									</div>";
//									html += "								</div>";
//									html += "							</div>";
//									html += "						</div>";
//									html += "					</div>";
//									html += "				</div>";
//									html += "			</div>";
//									html += "		<hr style=\"margin-top:0; margin-bottom: 10px;\">";
//									    
//										var PARENT = hits1[i]._source.COMMENTS_ID;
//										console.log(hits1[i]._source.COMMENTS_ID)
//									    	$.ajax({
//											type: "POST",
//											url: "/sk/ajax/ES_MaList.jsp?type=Macomment2&Ticket_id="+hits1[i]._source.COMMENTS_ID+"",
//											contentType: "application/json; charset=UTF-8",
//											dataType: "text",
//											async: false,
//											timeout: 30000,
//											success: function(data){
//												console.log(PARENT+"2차코멘트있음");
//												data = JSON.parse(data.trim());
//												$.each(data, function(key, value){
//													
//													if ( key == "hits" )
//													{
//														
//														hits2 = value.hits;
//														console.log("hits2.length : "+hits2.length);
//														for ( var j=0; j<hits2.length;j++ )
//														{
//															html += "	<ul class=\"unstyled\">";
//															html += "		<li class=\"commentDetails\">";
//															console.log("2차"+j+"번 코멘트");
//															if (PARENT == hits2[j]._source.PARENT_COMMENTS_ID)
//															{
//																console.log(PARENT+"의"+j+"번 코멘트");
//															
//															html += "			<div class=\"commentDetails\">";
//															html += "				<div class=\"singleComment\">";
//															html += "					<div class=\"row\">";
//															html += "						<div class=\"col-lg-12\">";
//															html += "							<div class=\"media\">";
//															html += "								<div class=\"media-body\" style=\"width:100%\">";
//															html += "									<div class=\"comment\" style=\"line-height:1;\">";
//															html += "										<span class=\"creatorName\">"+hits2[j]._source.LAST_NAME+"</span>&nbsp;&nbsp;";
//															html += "										<span class=\"commentTime text-muted cursorDefault\"><small>"+hits2[j]._source.CREATEDDATE+"</small></span>";
//															html += "					 					<div class=\"commentInfoContentBlock\">";
//															html += "											<br>";
//															html += "											<span class=\"commentInfoContent\" data-maxlength=\"200\">"+hits2[j]._source.COMMENT_CONTENT+"</span>";
//															html += "										</div>&nbsp;"
//															html += "										<div class=\"commentActionsContainer\" style=\"margin-top: 2px;\">";
//															html += "										<span></span>";
//															html += "										</div>";
//															html += "										<br>";
//															html += "									</div>";
//															html += "								</div>";
//															html += "							</div>";
//															html += "						</div>";
//															html += "					</div>";
//															html += "				</div>";
//															html += "			</div>";
//															html += "		<hr style=\"margin-top:0; margin-bottom: 10px;\">";
//
//															}
//															
//															var PARENT2 = hits2[j]._source.COMMENTS_ID;
//															console.log(hits2[j]._source.COMMENTS_ID)
//														    	$.ajax({
//																type: "POST",
//																url: "/sk/ajax/ES_MaList.jsp?type=Macomment2&Ticket_id="+hits2[j]._source.COMMENTS_ID+"",
//																contentType: "application/json; charset=UTF-8",
//																dataType: "text",
//																async: false,
//																timeout: 30000,
//																success: function(data){
//																	console.log(PARENT2+"3차코멘트있음");
//																	data = JSON.parse(data.trim());
//																	$.each(data, function(key, value){
//																		
//																		if ( key == "hits" )
//																		{
//																			
//																			hits3 = value.hits;
//																			console.log("hits3.length : "+hits3.length);
//																			for ( var k=0; k<hits3.length;k++ )
//																			{
//																				html += "	<ul class=\"unstyled\">";
//																				html += "		<li class=\"commentDetails\">";
//																				console.log("3차"+k+"번 코멘트");
//																				if (PARENT2 == hits3[k]._source.PARENT_COMMENTS_ID)
//																				{
//																					console.log(PARENT2+"의"+k+"번 코멘트");
//																				
//																				html += "			<div class=\"commentDetails\">";
//																				html += "				<div class=\"singleComment\">";
//																				html += "					<div class=\"row\">";
//																				html += "						<div class=\"col-lg-12\">";
//																				html += "							<div class=\"media\">";
//																				html += "								<div class=\"media-body\" style=\"width:100%\">";
//																				html += "									<div class=\"comment\" style=\"line-height:1;\">";
//																				html += "										<span class=\"creatorName\">"+hits3[k]._source.LAST_NAME+"</span>&nbsp;&nbsp;";
//																				html += "										<span class=\"commentTime text-muted cursorDefault\"><small>"+hits3[k]._source.CREATEDDATE+"</small></span>";
//																				html += "					 					<div class=\"commentInfoContentBlock\">";
//																				html += "											<br>";
//																				html += "											<span class=\"commentInfoContent\" data-maxlength=\"200\">"+hits3[k]._source.COMMENT_CONTENT+"</span>";
//																				html += "										</div>&nbsp;"
//																				html += "										<div class=\"commentActionsContainer\" style=\"margin-top: 2px;\">";
//																				html += "										<span></span>";
//																				html += "										</div>";
//																				html += "										<br>";
//																				html += "									</div>";
//																				html += "								</div>";
//																				html += "							</div>";
//																				html += "						</div>";
//																				html += "					</div>";
//																				html += "				</div>";
//																				html += "			</div>";
//																				html += "		<hr style=\"margin-top:0; margin-bottom: 10px;\">";
//																	
//																				}
//																				html += " 		</li>";	
//																				html += "	</ul>";
//																			}
//																			
//																			
//																		}
//																	});
//																}
//														    	});
//															html += " 		</li>";	
//															html += "	</ul>";
//														}
//														
//														
//													}
//												});
//											}
//										});
//									
//									html += " 		</li>";	
//									}
//									html += "	</ul>";
//									
//									
//									
//								}
//							});
//						}
//				
//					});
					
					
					
					
					$("#Quarantine_content").removeClass("active");
					$("#Original_content").removeClass("active");
					$("#Comment_Content2").removeClass("active");
//					html += "    </div>";
//					html += "    </div>";
//					html += "    </div>";
				
				}
				html += "            </div>";
				html += "            <div class=\"active tab-pane\" id=\"Comment_Content2\">";
				
				if ( isOriginal == "3" )
				{
					
					if ( hits[0]._source.CATEGORY_KO != "장애")
					{
						if (hits[0]._source.status3 == "" && hits[0]._source.status2 == "" )
						{
							html += "	<div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; color: #cfc6c6;\">내용 기입 전이거나 진행이 필요 없는 단계 입니다.</div>";	
						}
						else
						{
							if ( hits[0]._source.status3 == "" )
							{
								html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex;\">"+hits[0]._source.status2+"</div>";
							}
							else
							{
								html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex;\">"+hits[0]._source.status3+"<br><br>"+hits[0]._source.status2+"</div>"; 
							}
						}
						$("#Original_content").removeClass("active");
						$("#Comment_Content").removeClass("active");
					
					}else{
						if (hits[0]._source.status3 == "")
						{
							html += "	<div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex; color: #cfc6c6;\">내용 기입 전이거나 진행이 필요 없는 단계 입니다.</div>";	
						}
						else
						{
	//					console.log("개발");
						html += "              <div id=\"divMaTitle\" style=\"white-space:pre; word-break: break-all; display:flex;\">"+hits[0]._source.status3+"</div>";
						}
					$("#Quarantine_content").removeClass("active");
					$("#Original_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					}
				}
				
				html += "            </div>";
				html += "          </div>";
				html += "      </div>";
				
				html += "    <div class=\"modal-footer\">";
				html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-maillist-close\"></span></button>";
				html += "    </div>";
				html += "  </div>";
				html += "</div>";
				
				$("#modal-malist-maContent").empty();
				$("#modal-malist-maContent").append(html);
				$("#modal-malist-maContent").modal();
				
				$("#quarantineContent").click(function () {
					$("#Comment_Content2").removeClass("active");
					$("#Quarantine_content").addClass("active");
					$("#Original_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					$("#isOriginalVal").val(false);
					getMaContent(Ticket_No,false);	
				});
				
				$("#originalContent").click(function () {
					$("#Comment_Content2").removeClass("active");
					$("#Original_content").addClass("active");
					$("#Quarantine_content").removeClass("active");
					$("#Comment_Content").removeClass("active");
					$("#isOriginalVal").val(1);
					getMaContent(Ticket_No,1);
				});
				
				$("#CommentContent").click(function () {
					$("#Comment_Content2").removeClass("active");
					$("#Comment_Content").addClass("active");
					$("#Quarantine_content").removeClass("active");
					$("#Original_content").removeClass("active");
					$("#isOriginalVal").val(2);
					getMaContent(Ticket_No,2);
				});
				$("#CommentContent2").click(function () {
					$("#Comment_Content2").addClass("active");
					$("#Comment_Content").removeClass("active");
					$("#Quarantine_content").removeClass("active");
					$("#Original_content").removeClass("active");
					$("#isOriginalVal").val(3);
					getMaContent(Ticket_No,3);
				});
				
//				$("#statusing1").click(function () {
//					$("#statusing1_content").addClass("active");
//					$("#statusing2_content").removeClass("active");
//					$("#statusing3_content").removeClass("active");
//					$("#statusing4_content").removeClass("active");
//					$("#isOriginalVal").val(2);
//					getMaContent(Ticket_No,2,1);
//				});
//				
//				$("#statusing2").click(function () {
//					$("#statusing1_content").removeClass("active");
//					$("#statusing2_content").addClass("active");
//					$("#statusing3_content").removeClass("active");
//					$("#statusing4_content").removeClass("active");
//					$("#isOriginalVal").val(2);
//					getMaContent(Ticket_No,2,2);
//				});
//				
//				$("#statusing3").click(function () {
//					$("#statusing1_content").removeClass("active");
//					$("#statusing2_content").removeClass("active");
//					$("#statusing3_content").addClass("active");
//					$("#statusing4_content").removeClass("active");
//					$("#isOriginalVal").val(2);
//					getMaContent(Ticket_No,2,3);
//				});
//				
//				$("#statusing4").click(function () {
//					$("#statusing1_content").removeClass("active");
//					$("#statusing2_content").removeClass("active");
//					$("#statusing3_content").removeClass("active");
//					$("#statusing4_content").addClass("active");
//					$("#isOriginalVal").val(2);
//					getMaContent(Ticket_No,2,4);
//				});
//				
				
			}
		  });
			
		},
		error : function(xhr, status, error) {
			
		},
		complete : function(data) {
//			setPageIdx();
			maFlags = "getMaList";
			$("#previousIdx").val("");
			updateContent();
		}
		
	});
}

function getMaListSearch(item) {
	
	
	var ACCOUNT_NAME = $("#crmdomain_flag").val();

	var test = ACCOUNT_NAME.split(';');

	A = '"';

	for ( var i=0; i<test.length;i++ )
	{
		A += test[i]
			if(i<test.length-1)
			{
				A += '","'
			}
			else{
				A += '"'
			}
			
	}
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	offset = parseInt($('#pageIdx').val());
	var domain = $("#selectDomain").val();
	var groupIdx = parseInt($("#groupIdx").val());
	var filterItems = new Array();
	var searchSelect = "";
	var timeFrom = 0, timeTo = 0;
	var timeRange = {};
	var now = new Date();
	var searchDetailDate = new Array();
	size = parseInt($('#pageSize').val());
	offset = parseInt($('#pageIdx').val());
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	var searchKeyword = $("#searchKeyword").val();
	
	$.ajax({
		type:"POST",
		url: "/sk/ajax/ES_MaList.jsp?type=MaListSearch&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&searchKeyword=\"*"+searchKeyword+"*\"",
		contentType: "application/json; charset=UTF-8",
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1;
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					if ( value.total == 0)
					{
					$("#recCount").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
			
					}else{
					$("#recCount").text(numberWithCommas(value.total));
					
					for ( var i=0; i<hits.length;i++ )
					{
						if(hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당" )
						{
							 isOrigin = "false";
						}else if(hits[i]._source.STATUS_KO == "진행중"){
							isOrigin = "2";
						}else if(hits[i]._source.STATUS_KO == "개발"){
							isOrigin = "3";
						}else if(hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" ){
							isOrigin = "1";
						}
						
						html += "<tr>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
							}
						else if ( hits[i]._source.STATUS_KO == "닫힘" )
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "해결함" )
						{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>조치</span></div></td>";
						}
						else if (hits[i]._source.STATUS_KO == "개발")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>개발</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>분석</span></div></td>";
							}
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; \" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						if (hits[i]._source.PRIORITY_KO == "P1"){
							html += "  <td style=\"cursor: pointer; background-color: #ff0707;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}else{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
							}
						html += "</tr>";
						cnt ++;
					}
				}
					code = 0;
					$("#MaList").empty();
					$("#MaList").html(html);
				}
			});
		
				
				if ( code != 0 ){
					if( code == 6)
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return
				}
			},
			error : function(xhr, status, error) {
			},
			complete : function(data) {
				setPageIdx();
				maFlags = "getMaListSearch";
				updateContent();
			}
		
	});
}

function getMaListDetailSearch(item) {
	
	var ACCOUNT_NAME = $("#crmdomain_flag").val();

	var test = ACCOUNT_NAME.split(';');

	A = '"';

	for ( var i=0; i<test.length;i++ )
	{
		A += test[i]
			if(i<test.length-1)
			{
				A += '","'
			}
			else{
				A += '"'
			}
			
	}
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	offset = parseInt($('#pageIdx').val());
	var domain = $("#selectDomain").val();
	var groupIdx = parseInt($("#groupIdx").val());
	var filterItems = new Array();
	var searchSelect = "";
	var timeFrom = 0, timeTo = 0;
	var timeRange = {};
	var now = new Date();
	var searchDetailDate = new Array();
	size = parseInt($('#pageSize').val());
	offset = parseInt($('#pageIdx').val());
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	if($("#detaileSearchReservation").val() != undefined || $("#detaileSearchReservation").val() != null){
		searchDetailDate = $("#detaileSearchReservation").val().split(' - ');
		var selectTimeFrom = new Date(searchDetailDate[0]);
		var selectTimeTo = new Date(searchDetailDate[1]);
		timeFrom = selectTimeFrom.valueOf() + now.getTimezoneOffset() * 60000;
		timeTo = selectTimeTo.valueOf() + (now.getTimezoneOffset() * 60000) + (86400000-1);
		timeFrom = getTimeStamp(timeFrom);
		timeTo = getTimeStamp(timeTo);
	}
	
	$("input[name='mail_chk']:checked").each(function(){
		filterItems.push($(this).val());
	});
	
	var filters = new Array();
	for(var i=0; i<filterItems.length; i++){
		$("#filter").val(filterItems[i]);
		filters.push(filterItems[i]);
	}
	
	var searchKeyword = $("#detaileSearchKeyword").val();
	
	$.ajax({
		type:"POST",
		url: "/sk/ajax/ES_MaList.jsp?type=MaListDetailSearch&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&filters=\""+filters+"\"&searchKeyword=\"*"+searchKeyword+"*\"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"",
		contentType: "application/json; charset=UTF-8",
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1;

			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					
					if ( value.total == 0)
					{
					$("#recCount").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
					$("#MaList").empty();
					$("#MaList").html(html);
					}else{
					
					$("#recCount").text(numberWithCommas(value.total));
					
					for ( var i=0; i<hits.length;i++ )
					{
						if(hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당" )
						{
							 isOrigin = "false";
						}else if(hits[i]._source.STATUS_KO == "진행중"){
							isOrigin = "2";
						}else if(hits[i]._source.STATUS_KO == "개발"){
							isOrigin = "3";
						}else if(hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" ){
							isOrigin = "1";
						}
						
						html += "<tr>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
							}
						else if ( hits[i]._source.STATUS_KO == "닫힘" )
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "해결함" )
						{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>조치</span></div></td>";
						}
						else if (hits[i]._source.STATUS_KO == "개발")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>개발</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>분석</span></div></td>";
							}
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; \" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						if (hits[i]._source.PRIORITY_KO == "P1"){
							html += "  <td style=\"cursor: pointer; background-color: #ff0707;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}else{
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PRIORITY_KO+"</span></div></td>";
						}
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',"+isOrigin+");\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
							}
						html += "</tr>";
						cnt ++;
					}
					code = 0;
					$("#MaList").empty();
					$("#MaList").html(html);
					}
				}
				
				$("#searchDetailPopupArea").css("visibility", "hidden");
				$("#datailSearch-I").removeClass("fa-sort-asc").removeClass("detail-search-close").addClass("fa-sort-desc").addClass("detail-search-open");
			});
			
			if ( code != 0 ){
				if( code == 6)
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return
			}
		},
		error : function(xhr, status, error) {
		},
		complete : function(data) {
			setPageIdx();
			maFlags = "getMaListDetailSearch";
			updateContent();
		}
		
	});
}

//
function goPage(item){
	ajaxProcess(item);
}

function ajaxProcess(item,title){
	if (maFlags == "" || maFlags == null )
		maFlags = "getMaList";
	
	if(maFlags == "getMaList"){
		$("#pageIdx").val(0);
		getMaList(item,title);
	}
	
	if(maFlags == "getMaListSearch")
	{
		$("#pageIdx").val(0);
		getMaListSearch(item)		
	}
	
	if(maFlags == "getMaListDetailSearch")
	{
		$("#pageIdx").val(0);
		getMaListDetailSearch(item)		
	}
}


function getMainMaStatTotal()
{
	
	$.ajax({
		type:"POST",
		url: "/sk/ajax/ES_MaList.jsp?type=MainMaStatTotal",
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "",m_7=0, m_8=0, m_9=0, m_10=0, m_11=0, m_12=0;
			data = JSON.parse(data.trim());
			
			$.each(data, function(key, value) {
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						
						$.each(buckets, function(a, b){
								if (b.key == "장애")
								{
									m_7 = b.doc_count;
								}
								else if (b.key == "기능문의")
								{
									m_8 = b.doc_count;
								}
								else if (b.key == "기술지원요청")
								{
									m_9 = b.doc_count;
								}
								else if (b.key == "추가개발요청")
								{
									m_10 = b.doc_count;
								}
								else if (b.key == "정기점검")
								{
									m_11 = b.doc_count;
								}
								else
								{
									m_12 = b.doc_count;
								}
								docTotal += b.doc_count;
						});
						$("#Maintenance_7").text(numberWithCommas(m_7));
						$("#Maintenance_8").text(numberWithCommas(m_8));
						$("#Maintenance_9").text(numberWithCommas(m_9));
						$("#Maintenance_10").text(numberWithCommas(m_10));
						$("#Maintenance_11").text(numberWithCommas(m_11));
						$("#Maintenance_12").text(numberWithCommas(m_12));
						$("#Maintenance_total").text(numberWithCommas(docTotal));
					});
				}
			});
		}
	});
}

function searchDetailPopup(){
	
	if($("#mDetailSearchTable").length > 0){
		
		$("#searchKeyword").val("");
		
		if($("#searchDetailPopupArea").css("visibility") == "visible"){
			$("#searchDetailPopupArea").css("visibility", "hidden");
			$("#countryPopupArea2").css("visibility","hidden");
			$("#datailSearch-I").removeClass("fa-sort-asc").removeClass("detail-search-close").addClass("fa-sort-desc").addClass("detail-search-open");
		} else {
			//팝업 닫기
			$("#searchDetailPopupArea").css("visibility", "visible");
			$("#datailSearch-I").removeClass("fa-sort-desc").removeClass("detail-search-open").addClass("fa-sort-asc").addClass("detail-search-close");
		}
		
	} else {
		
		//팝업 닫기
		$("#searchDetailPopupArea").css("visibility", "visible");
		$("#datailSearch-I").removeClass("fa-sort-desc").removeClass("detail-search-open").addClass("fa-sort-asc").addClass("detail-search-close");
	}
	
	$('#detaileSearchReservation').daterangepicker({
		locale: {
			format: 'YYYY-MM-DD',
		},
		startDate: moment().subtract(1, 'week'),
		endDate: moment()
	});
	
	$('#search-tbody input[type="checkbox"]').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
		radioClass: 'iradio_flat-blue'
	});
	
	$("#detail-search-close").on('click',function(){
		$("#countryPopupArea2").css("visibility","hidden");
		$("#searchDetailPopupArea").css("visibility", "hidden");
		$("#datailSearch-I").removeClass("fa-sort-asc").removeClass("detail-search-close").addClass("fa-sort-desc").addClass("detail-search-open");
	});
	
	$("[name=mail_chk_2]").on('ifChanged', function(){
		var chkId = $(this).attr('id');
		var chkId_sub = chkId.substring(0,chkId.length-2);
		
		if($(this).prop('checked')){
			$("#"+chkId_sub+"").prop("checked",true).iCheck('update');
		}else{
			$("#"+chkId_sub+"").prop("checked",false).iCheck('update');			
		}
	});
	
	$(".icheckbox_flat-blue").css("margin","10px 0px");

	if ( $("#graphSpam").val() == "hide")
	{
		$("#abatement_spam_chk").closest('div').hide();
		$(".i18n-maillist-search-abatement-spam").hide();	
	}
	else
	{
		$("#abatement_spam_chk").closest('div').show();
		$(".i18n-maillist-search-abatement-spam").show();
	}
	
	if ( $("#graphVirus").val() == "hide")
	{
		$("#abatement_virus_chk").closest('div').hide();
		$(".i18n-maillist-search-abatement-virus").hide();	
	}
	else
	{
		$("#abatement_virus_chk").closest('div').show();
		$(".i18n-maillist-search-abatement-virus").show();
	}
}

function orderItem(item)
{
	var orderBy = $("#orderBy").val();
	var asc = $("#asc").val();
	
	if ( orderBy == item )
	{
		if ( asc == "true" )
		{
			$("#order").val("asc");
			$("#asc").val("false");
		}
		else if ( asc == "false" )
		{
			$("#order").val("desc");
			$("#asc").val("true");
		}
	}

	$("#orderBy").val(item);
	$("#sortName").val(item);
	getMaList();
}

function getTimeStamp(date) {
	
	var d = new Date(date);
	var s =
		leadingZeros(d.getFullYear(), 4) + '-' +
		leadingZeros(d.getMonth() + 1, 2) + '-' +
		leadingZeros(d.getDate(), 2) + ' ' +
		leadingZeros(d.getHours(), 2) + ':' +
		leadingZeros(d.getMinutes(), 2) + ':' +
		leadingZeros(d.getSeconds(), 2);
	
	return s;
}

function leadingZeros(n, digits) {
	var zero = '';
	n = n.toString();
	
	if (n.length < digits) {
	  for (i = 0; i < digits - n.length; i++)
	    zero += '0';
	}
	return zero + n;
}

function test()
{
	var timeFrom = 0, timeTo = 0;
	var timeRange = {};
	var now = new Date();

	var timeFrom = "2019-07-15 00:00:00";
	var timeTo = "2019-07-15 23:59:59";
	
	$.ajax({
		type:"POST",
		url: "/sk/ajax/ES_MaList.jsp?type=MaListDetailSearch&offset=1&size=10&filters=\"장애\"&searchKeyword=\"**\"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"",
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			console.log(data);
			var html = "", cnt = 1;
//			$.each(data, function(key, value) {
//				
//				if ( key == "hits" )
//				{		
//					hits = value.hits;
//					
//					$("#recCount").text(numberWithCommas(value.total));
//					
//					for ( var i=0; i<hits.length;i++ )
//					{						
//						html += "<tr>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
////						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
//						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
//						}
//						else if (hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" )
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
//						}
//						else if (hits[i]._source.STATUS_KO == "개발")
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>수정중</span></div></td>";
//						}
//						else
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
//						}
////						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
//						if (hits[i]._source.SUPPORT_REQUESTOR == "")
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
//						}
//						else
//						{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
//						}
//						html += "</tr>";
//						cnt ++;
//					}
//					code = 0;
//					$("#MaList").empty();
//					$("#MaList").html(html);
//				}
//				$("#searchDetailPopupArea").hide();
//			});
//			
//			if ( code != 0 ){
//				if( code == 6)
//					window.location = 'login.jsp';
//				else
//					showErrMsg(code, msg);
//				return
//			}
		}
	});
	
}