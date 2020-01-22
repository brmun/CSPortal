//var mailFlags = "getMailList";
var maFlags = "";
var imgDivisionFlags = false;

function salse_MaList(){
	$(".content").empty();
	$(".content").load("salse_MaList.jsp");
}

function salse_GetInit(){
	//getMainMaStatTotal();
	//test();
}
function salse_getMaList(item,title)
{
	var A="\"all\"";
	
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
		sorting = "asc";
	
	var array = new Array();
	var order = { "order" : sorting };
	var sort = { };
	sort[sortName] = order;
	array.push(sort)
	
	searchType = $("#searchType").val();
	if (statFilter == "null" && categoryFilter == "null" )
	{
		console.log(A);
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/admin/ajax/ES_SalseList.jsp?type=MaList&title="+title+"&status=none&t=\"all\"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	else if ( statFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/admin/ajax/ES_SalseList.jsp?type=MaList&status=category&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&categoryFilter="+categoryFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	else if ( categoryFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/admin/ajax/ES_SalseList.jsp?type=MaList&status=stat&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&statFilter="+statFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
	}
	
	else
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/admin/ajax/ES_SalseList.jsp?type=MaList&status=all&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&array="+encodeURI(jsonString)+"&categoryFilter="+categoryFilter+"&statFilter="+statFilter+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
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

//유비보수 현황 상세 정보 보여주기 기본소스에 있어서 삭제

function salse_getMaListSearch(item) {
	
	
	var A="\"all\"";
	
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
		url: "/admin/ajax/ES_SalseList.jsp?type=MaListSearch&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&searchKeyword=\"*"+searchKeyword+"*\"",
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
						html += "<tr>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
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
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
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

function salse_getMaListDetailSearch(item) {
	
	var A="\"all\"";
	
	
	
	
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
		url: "/admin/ajax/ES_SalseList.jsp?type=MaListDetailSearch&t="+encodeURI(A)+"&offset="+offset+"&size="+size+"&filters=\""+filters+"\"&searchKeyword=\"*"+searchKeyword+"*\"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"",
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
						html += "<tr>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
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
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
						{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
						}
						else
						{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
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
	salse_ajaxProcess(item);
}

function salse_ajaxProcess(item,title){
	console.log("all");
	if (maFlags == "" || maFlags == null )
		maFlags = "getMaList";
	
	if(maFlags == "getMaList"){
		$("#pageIdx").val(0);
		salse_getMaList(item,title);
	}
	
	if(maFlags == "getMaListSearch")
	{
		$("#pageIdx").val(0);
		salse_getMaListSearch(item)		
	}
	
	if(maFlags == "getMaListDetailSearch")
	{
		$("#pageIdx").val(0);
		salse_getMaListDetailSearch(item)		
	}
}


function getMainMaStatTotal()
{
	
	$.ajax({
		type:"POST",
		url: "/admin/ajax/ES_SalseList.jsp?type=MainMaStatTotal",
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
	salse_getMaList();
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
		url: "/admin/ajax/ES_SalseList.jsp?type=MaListDetailSearch&offset=1&size=10&filters=\"장애\"&searchKeyword=\"**\"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"",
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