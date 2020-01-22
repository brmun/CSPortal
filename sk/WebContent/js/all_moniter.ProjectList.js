//var mailFlags = "getMailList";
var mailFlags = "";
var imgDivisionFlags = false;


function all_ProjectList(){
	$(".content").empty();
	$(".content").load("all_ProjectList.jsp");
}

function GetInit(){


}
function all_getProjectList(item,title)
{
//	var ACCOUNT_NAME = $("#crmdomain_flag").val();
//
//	var test = ACCOUNT_NAME.split(';');
//
//	A = '"';
//
//	for ( var i=0; i<test.length;i++ )
//	{
//		A += test[i]
//			if(i<test.length-1)
//			{
//				A += '","'
//			}
//			else{
//				A += '"'
//			}
//			
//	}
//	
	
	
	var A="\"all\"";
	var sorting = $("#order").val();
	var sortName = $("#orderBy").val();
	size = parseInt($('#pageSize').val());
	console.log(size);
	size = parseInt($('#pageSize').val());
	
	var offset = parseInt($("#pageIdx").val());
	
	var statFilter = $("#stat_filter").val();
	var categoryFilter = $("#category_filter").val();
	
	if ( sorting == "" || sorting == null )
		sorting = "asc";
	
	
	var array = new Array();
	var order = { "order" : sorting };
	var sort = { };
	sort[sortName] = order;
	array.push(sort)


	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	if ( offset == null || isNaN(offset) )
		offset = 0;
	
	if (statFilter == "null" && categoryFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_ProjectList.jsp?type=getProjectList&title="+title+"&status=none&t="+encodeURI(A)+"&array="+encodeURI(jsonString)+"&offset="+offset+"&size="+size+"";
	}
	else if ( statFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_ProjectList.jsp?type=getProjectList&status=category&t="+encodeURI(A)+"&array="+encodeURI(jsonString)+"&offset="+offset+"&size="+size+"&categoryFilter="+categoryFilter+"";
	}
	else if ( categoryFilter == "null" )
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_ProjectList.jsp?type=getProjectList&status=stat&t="+encodeURI(A)+"&array="+encodeURI(jsonString)+"&offset="+offset+"&size="+size+"&statFilter="+statFilter+"";
	}
	
	else
	{
		var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/sk/ajax/ES_ProjectList.jsp?type=getProjectList&status=all&t="+encodeURI(A)+"&array="+encodeURI(jsonString)+"&offset="+offset+"&size="+size+"&categoryFilter="+categoryFilter+"&statFilter="+statFilter+"";
	}
	
	$.ajax({
		type:"POST",
		url:  ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1, code =0;
			data = JSON.parse(data.trim());
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					
					$("#recCount").text(value.total);
					
					if ( value.total == 0)
					{
					$("#recCount").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
			
					}else{
					for ( var i=0; i<hits.length;i++ )
					{						
						html += "<tr>";
						if(hits[i]._source.TYPE_KO == "Deploy")
						{
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>구축</span></div></td>";	
						}else{
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TYPE_KO+"</span></div></td>";
						}
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" ><div class=\"table-font-size\"><span>"+hits[i]._source.PROJECT_NAME+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.START_DATE.substring(0, 10)+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTRACT_END_DATE.substring(0, 10)+"</span></div></td>";
						if(hits[i]._source.STATUS == "(P/I)착수 및 환경분석")
						{
							html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>착수 및 환경분석</span></div></td>";
						}else{
							html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>구축/납품</span></div></td>";
						}
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PROGRESS+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.OWNER_NAME+"</span></div></td>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getProjectContent('"+hits[i]._source.PROJECT_ID+"','"+hits[i]._source.PROJECT_NAME+"','"+hits[i]._source.POTENTIAL_ID+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SALES_REPRESENTATIVE+"</span></div></td>";
						
						
						html += "  </tr>";
					}
				}
					$("#ProjectList").empty();
					$("#ProjectList").html(html);
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
				maFlags = "getProjectList";
				updateContent();
			}
		});
}	

function getProjectContent(PROJECT_ID,PROJECT_NAME,POTENTIAL_ID)
{
	
	$.ajax({
		type:"POST",
		url:  "/sk/ajax/ES_ProjectList.jsp?type=getProjectContent&t=null&PROJECT_ID="+PROJECT_ID+"",
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
					
					html  = "<div class=\"modal-dialog\" style=\"min-width: 100%; max-width: 100%;\">";
					html += "  <div class=\"modal-content\">";
					html += "    <div class=\"modal-header\">";
					html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
					html += "        <span aria-hidden=\"true\">&times;</span></button>";
					html += "      <h4 class=\"modal-title\"><span style=\"line-height: 2; font-size: 25px;\">"+PROJECT_NAME+" 프로젝트 현황 상세</span></h4>";
					html += "    </div>";
					html += "    <div class=\"modal-body\">";
					html += "   <div class=\"box\">";
					html += "   <div class=\"box box-solid\">";
					html += "      <div id=\"divMaTitle\" style=\"display:flex\">";
					html += "        <div style=\"flex:2\">";
					html += "   <div class=\"box-header\">";
					html += "     <h3 class=\"box-title\"><span>Milestone Detail</span></h3>";
					html += "	</div>";
					html += "        </div>";
					html += "      </div>";
					html += "    <div id=\"divMaInfo\" style=\"display: flex;\">";
					html += " 		<table class=\"table table-bordered table-hover\">";
					html += " 			<colgroup> ";
					html += " 			<col style=\"width: 20%\"/>";
              		html += " 			<col style=\"width: 10%\"/>";
              		html += " 			<col style=\"width: 10%\"/>";
					html += " 			<col style=\"width: 60%\"/>";
					html += "          	</colgroup>";
					html += " 		<thead>";
	                html += " 		<tr>";
					html += " 		<th>단계</th>";
					html += " 		<th>담당자</th>";
					html += " 		<th>종료예정일</th>";
					html += " 		<th>상세사항</th>";
	                html += "		 </tr>";
					html += "		 </thead>"		;
						
					if ( value.total == 0)
					{
							html += "<tr>";
							html += " <td class=\"text-center\" colspan=\"15\"><span>상세 정보가 등록되지 않았습니다.</span></td>";
							html += "</tr>";
					}
					else{
					
									
						for ( var i=0; i<hits.length;i++ )
						{						
							html += "<tr>";
							html += "  <td style=\"word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PROJECTMILESTONE_NAME+"</span></div></td>";
							html += "  <td style=\"word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.OWNER_NAME+"</span></div></td>";
							html += "  <td style=\"word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.PROJECTMILESTONE_DATE+"</span></div></td>";
							html += "  <td><div style=\"word-break: break-all;\" class=\"table-font-size\"><span>"+hits[i]._source.DESCRIPTION+"</span></div></td>";
							html += "</tr>";
							
						}
					}
					html +=" </table>";
					html += "    </div></div></div>";
					
					html += "   <div class=\"box\">";
					html += "   <div class=\"box box-solid\">";
					html += " 	<div id=\"divMaTitle\" style=\"display:flex\">";
					html += "        <div style=\"flex:2\">";
					html += "   <div class=\"box-header\">";
					html += "   <div>";
					html += "     <h3 class=\"box-title\"><span class=\"\">서비스 진행 현황</span><span>( </span><span id=\"recCount2\"></span><span> 건)</span></h3>";
					html += "    </div></div></div></div>";
					html += "   			            <div class=\"box-body\">";
					html += "   			              <table class=\"table table-bordered table-hover\">";
					html += "   			              	<colgroup>";
					html += "   								<col style=\"width: 10%\"/>";
					html += "   			              		<col style=\"width: 10%\"/>";
					html += "   			              		<col style=\"width: 10%\"/>";
					html += "   								<col style=\"width: 10%\"/>";
					html += "   								<col style=\"width: 60%\"/>";
//					html += "   								<col style=\"width: 10%\"/>";
					html += "   			              	</colgroup>";
					html += "   				              <thead>";
					html += "   				                <tr>";
					html += "										<th class=\"aTag\"><span>접수번호</span></th>";
					html += "										<th class=\"aTag\"><span>접수일</span><a style=\"float: right;\" href=\"javascript:orderItem('CREATED_TIME','"+POTENTIAL_ID+"');\"><span id=\"sortIcon\" class=\"fa fa-sort\"></span></a></th>";
					html += "										<th class=\"aTag\"><span>상태</span><a style=\"float: right;\" href=\"javascript:orderItem('STATUS_KO','"+POTENTIAL_ID+"');\"><span id=\"sortIcon\" class=\"fa fa-sort\"></span></a></th>";
					html += "										<th class=\"aTag\"><span>지원유형</span><a style=\"float: right;\" href=\"javascript:orderItem('CATEGORY_KO','"+POTENTIAL_ID+"');\"><span id=\"sortIcon\" class=\"fa fa-sort\"></span></a></th>";
					html += "										<th class=\"aTag\"><span>제목</span></th>";
//					html += "										<th class=\"aTag\"><span>요청자</span><a style=\"float: right;\" href=\"javascript:orderItem('SUPPORT_REQUESTOR','"+POTENTIAL_ID+"');\"><span id=\"sortIcon\" class=\"fa fa-sort\"></span></a></th>";
//					html += "   									<th class=\"aTag\"><span>접수번호</span></th>";
//					html += "   									<th class=\"aTag\"><span>접수일</span></th>";
//					html += "   									<th class=\"aTag\"><span>상태</span></th>";
//					html += "   									<th class=\"aTag\"><span>유형</span></th>";
//					html += "   									<th class=\"aTag\"><span>제목</span></th>";
//					html += "   									<th class=\"aTag\"><span>접수자</span></th>";
					html += "   				                </tr>";
					html += "   				              </thead>";
					html += "   				              <tbody id=\"tickets\">";
					html += "   				              </tbody>";
					html += "   						    </table>";
					html += "   			            </div>";
			        html += "     </div>";
			        html += "   </div>    ";
					html += "    <div class=\"modal-footer\">";
					html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span>닫기</span></button>";
					html += "    </div>";
					
					html += "  </div>";
					html += "</div>";
					
					tickets(POTENTIAL_ID);
					
					$("#modal-projectlist-projectContent").empty();
					$("#modal-projectlist-projectContent").css("overflow","auto");
					$("#modal-projectlist-projectContent").append(html);
					$("#modal-projectlist-projectContent").modal();
					
				}
			});
		}
	});
}

function tickets(POTENTIAL_ID)
{
	
	var sorting = $("#order").val();
	var sortName = $("#orderBy").val();
	
	
	if ( sorting == "" || sorting == null )
		sorting = "desc";
	
	var array = new Array();
	var order = { "order" : sorting };
	var sort = { };
	sort[sortName] = order;
	array.push(sort)
	
	var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
	
	$.ajax({
		type:"POST",
		url:  "/sk/ajax/ES_ProjectList.jsp?type=tickets&t=null&PROJECT_ID="+POTENTIAL_ID+"&array="+encodeURI(jsonString),
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
					if ( value.total == 0 || POTENTIAL_ID == 0 )
					{
					$("#recCount2").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
			
					}else{
					$("#recCount2").text(numberWithCommas(value.total));
					
					for ( var i=0; i<hits.length;i++ )
					{
						html += "<tr>";
						html += "  <td style=\"cursor: pointer; word-break: break-all;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" )
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "개발")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>수정중</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
							}
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
//						if (hits[i]._source.SUPPORT_REQUESTOR == "")
//							{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
//							}
//						else
//							{
//							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
//							}
						html += "</tr>";
						cnt ++;
					}
					}
					
					$("#tickets").empty();
					$("#tickets").html(html);
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


//
function goPage(item){
	all_ajaxProcess(item);
}

function all_ajaxProcess(item,title){

	if (maFlags == "" || maFlags == null )
	{
		maFlags = "getProjectList";
	}
	
	if(maFlags == "getProjectList"){
		$("#pageIdx").val(0);
		all_getProjectList(item,title);		
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
	all_getProjectList();
}