<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp"%>
<%@ page import="java.net.URLDecoder"%>
<%
	String filter = request.getParameter("filter");
	if ( filter == null || filter.length() == 0 )
		filter = "";
	
	String Detailfilter = request.getParameter("Detailfilter");
	if ( Detailfilter == null || Detailfilter.length() == 0 )
		Detailfilter = "";
	
	String orderBy = request.getParameter("orderBy");
	if ( orderBy == null || orderBy.length() == 0 )
		orderBy = "CREATED_TIME";
	
	String asc = request.getParameter("asc");
	if ( asc == null || asc.length() == 0 )
		asc = "false";
	
	String pageIdx = request.getParameter("pageIdx");
	if ( pageIdx == null || pageIdx.length() == 0 )
		pageIdx = "0";
	
	String pageSize = request.getParameter("pageSize");
	if ( pageSize == null || pageSize.length() == 0 )
		pageSize = "20";
	
	String searchKeyword = request.getParameter("searchKeyword");
	if ( searchKeyword == null )
		searchKeyword = "";
	else
	{
		searchKeyword = new String(searchKeyword.getBytes("ISO8859_1"), "UTF-8");
		// remove(filter) " ' \
		searchKeyword = searchKeyword.replaceAll("[\"'\\\\]", "");
	}
	
	String loadData = request.getParameter("loadData");
	if(loadData == "" || loadData == null)
		loadData = "";
	
	 request.setCharacterEncoding("utf-8");
	
	String email = (String)request.getSession().getAttribute("email");
	String language = (String)request.getSession().getAttribute("language");
	String domain = (String)request.getSession().getAttribute("domain");
	String crmdomain_flag = (String)request.getSession().getAttribute("crmdomain_flag");
	String type1 = (String)request.getSession().getAttribute("type");
	
%>
<html>
<head>
<style id="compiled-css" type="text/css">
      /*
	css-only-tooltip version 1.0.0
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273
	MIT License
*/


[data-tooltip-text]:hover {
	position: relative;
}

[data-tooltip-text]:hover:after {
	background-color: #FFFFFF;
	background-color: rgba(255, 255, 255, 0.8);

	-webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);
	-moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);
	box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);

	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;

	color:  #000000;
	font-size: 12px;
	content: attr(data-tooltip-text);

  margin-bottom: 10px;
	bottom: 100%;
	left: 0;    
	padding: 7px 12px;
	position: absolute;
	width : auto;
	min-width: 300px;
	max-width: 600px;
	word-wrap: break-word;

	z-index: 9999;
}


  </style>
</head>
<body>
	<script src="dist/js/jquery.dataTables.min.js"></script>
	<script src="dist/js/dataTables.bootstrap.min.js"></script>
	<!-- bootstrap datepicker -->
	<script src="dist/js/bootstrap-datepicker.min.js"></script>
	<!-- date-range-picker -->
	<script src="dist/js/moment.min.js"></script>
	<script src="dist/js/daterangepicker.js"></script>
	<!-- Bootstrap 3.3.7 -->
	<script src="dist/js/bootstrap.min.js"></script>
	<!-- iCheck -->
	<script src="dist/iCheck/icheck.min.js"></script>
	
	<script src="include/common.js"></script>
	<script src="include/softmore.js"></script>
	
	<script src="js/salse_moniter.MaList.js"></script>
	
	<script src="include/jquery.fileDownload.js"></script>
	
	<!-- PACE -->
	<script src="dist/js/pace.min.js"></script>

  <div id="header"></div>
  <div id="left"></div>
	
  <input type="hidden" name="myurl" id="myurl" value="mailList.jsp">
  <input type="hidden" name="filter" id="filter">
  <input type="hidden" name="status" id="status">
  <input type="hidden" name="segTypes" id="segTypes">
  <input type="hidden" name="pageIdx" id="pageIdx">
  <input type="hidden" name="orderBy" id="orderBy">
  <input type="hidden" name="asc" id="asc">
  <input type="hidden" name="searchType" id="searchType">
  <input type="hidden" name="loadData" id="loadData">
  <input type="hidden" name="tagTypes" id="tagTypes">
  <input type="hidden" name="previousIdx" id="previousIdx">
  <input type="hidden" name="selectDomain" id="selectDomain">
  <input type="hidden" name="order" id="order">
  <input type="hidden" name="sortName" id="sortName">

	<div class="box">
		<div class="box box-solid">
            <div class="box-header">
				<div>
	            	<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
		              <h3 class="box-title"><span class="">서비스 지원 현황</span><span>( </span><span id="recCount"></span><span> 건)</span></h3>

		              <div style="float:right; padding-top: 8px;">
		<!--        	 			<select style="margin-right: 20px;" id="userSearchSelect"> -->
		<!--        	 				<option class="i18n-malist-ma_search-list-stat" value="STATUS_KO"></option> -->
		<!--        	 				<option class="i18n-malist-ma_search-list-catogry" value="CATEGORY_KO"></option> -->
		<!--        	 				<option class="i18n-malist-ma_search-list-supptotrequestor" value="SUPPORT_REQUESTOR"></option> -->
		<!--        	 			</select> -->
			              <input type="text" name="searchKeyword" id="searchKeyword" class="searchKeyword domain-searchKeyword" autocomplete="off" onkeydown="javascript:if(event.keyCode==13){getMaListSearch();}"/>
			              <input type="button" class="searchBtn" onclick="getMaListSearch();"/>
			              <a href="#" class="dropdown-toggle detail-search" data-toggle="searchDetailPopupArea" id="mailDetailSearchBtn" onclick="searchDetailPopup();"><i id="datailSearch-I" class="fa fa-sort-desc detail-search-open"></i></a>
					  </div>
					 
					 <span style="border: 0; background-color: unset; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상태 :</span>
					  <select id="stat_filter" class="stat_filter" style="border: 10; background-color: unset; font-size: 15px; text-align-last: center;" onchange="salse_getMaList();">
								<option value="null">전체</option>
								<option value='오픈","담당할당'>접수</option>
								<option value="진행중">분석</option>
								<option value='개발'>개발</option>
								<option value='해결함'>조치</option>
								<option value='닫힘'>완료</option>
							</select>
					 <span style="border: 0; background-color: unset; font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지원유형 :</span>
					  <select id="category_filter" class="category_filter" style="border: 10; background-color: unset; font-size: 15px; text-align-last: center;" onchange="salse_getMaList();">
								<option value="null">전체</option>
								<option value="장애">장애</option>
								<option value="기능문의">기능문의</option>
								<option value="기술지원요청">기술지원</option>
								<option value="추가개발요청">추가개발</option>
								<option value="POC/데모">POC/데모</option>
								<option value="영업지원">영업지원</option>
								<option value="기술자료요청">기술자료</option>
								<option value='패키징요청","영업문의","사내전산지원","사내보안지원","영업제안서지원","정기점검'>기타</option>
							</select>	
					  
					  
				        <article class="search-detail" id="searchDetailPopupArea" style="visibility:hidden; width: 43%">
					       	<table class="table table-bordered table-hover table-center" id="mDetailSearchTable">
									<colgroup>
									  <col width="4%"/>
									  <col width="10%"/>
									  <col width="3%"/>
									  <col width="10%"/>
									</colgroup>
									<tbody id="search-tbody">
						  			<tr>
									    <th class="i18n-maillist-search-select-term"></th>
									    <td colspan="3"><input type="text" class="form-control mail-detail-search-daterange" id="detaileSearchReservation" readonly="readonly"></td>
									  </tr>
									  <tr>
									    <th class="">검색 키워드</th>
									    <td colspan="3"><input type="text" style="padding-left: 10px;" autocomplete="off" id="detaileSearchKeyword" onkeydown="javascript:if(event.keyCode==13){getMaListDetailSearch();}"></td>
									  </tr>
									  <tr>
									    <th class="">선택옵션</th>
									    <td colspan="3" style="text-align: left;">
									      <input type="checkbox" name="mail_chk" id="mail_send_chk" value="TITLE" ><span class="span-margin">제목</span>
									      <input type="checkbox" name="mail_chk" id="mail_recv_chk" value="TICKET_NO" ><span class="span-margin">접수번호</span>
									      <input type="checkbox" name="mail_chk" id="mail_sent_recv_chk" value="SUPPORT_REQUESTOR" ><span class="span-margin">요청자</span>
									    </td>
									  </tr>
									</tbody>
								</table>
								<div class="text-right">
									<button type="button" class="btn btn-default" id="detail-search-close"><span class="i18n-maillist-close"></span></button>
									<button type="button" class="btn btn-default" id="detail-search-submit" onclick="getMaListDetailSearch();"><span class="i18n-maillist-submit"></span></button>
								</div>
					       </article>
				
					   <div class="tab-content" style="float:right;">
					    	<div class="active tab-pane" id="All_Status">
					    		
					    		<div class="box-header" style="padding: 5px 10px 0px 10px;"> 
			        			
			        			<!-- 검색옵션 -->
										<div style="float:right; display: inline; line-height:30px; font-size:13px">
										
					          	<div style="float:left; display: inline-block; line-height:30px;" id="stat_term">
						          				            	
						            <label class="label-stat-term" style="margin-top: 4px;">
					            		<input type="radio" class="flat" name="RadioPeriodType" id="status_week" value="week"><span class="span-margin-right2 i18n-statistics-tab-all-period-week"></span>
					            	</label>
						            <label class="label-stat-term" style="margin-top: 4px;">
					            		<input type="radio" class="flat" name="RadioPeriodType" id="status_month" value="month"  ><span class="span-margin-right2 i18n-statistics-tab-all-period-month"></span>
					            	</label>
					           		<label class="label-stat-term" style="margin-top: 4px; margin-right: -1px;">
						           		<input type="radio" class="flat" name="RadioPeriodType" id="status_period" value="select"><span class="span-margin-right2 i18n-statistics-tab-all-period-custom"></span>
					            	</label>
												<input type="text" class="form-control mail-daterange" id="reservation" style="display: none; width: 43%" onchange="salse_getMaList();">	              
					            </div>
										</div>
		        			</div>
			          </div>
					 </div>
					 <!-- </div> -->
					 </div>
			 </div>
			
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-hover">
              	<colgroup>
					<col style="width: 10%"/>
              		<col style="width: 10%"/>
              		<col style="width: 5%"/>
					<col style="width: 10%"/>
					<col style="width: 5%"/>
					<col style="width: 50%"/>
					<col style="width: 10%"/>
              	</colgroup>
	              <thead>
	                <tr>
						<th class="aTag"><span>접수번호</span></th>
						<th class="aTag"><span>접수일</span><a style="float: right;" href="javascript:orderItem('CREATED_TIME');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>상태</span><a style="float: right;" href="javascript:orderItem('STATUS_KO');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>지원유형</span><a style="float: right;" href="javascript:orderItem('CATEGORY_KO');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>심각도</span><a style="float: right;" href="javascript:orderItem('PRIORITY_KO');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>제목</span></th>
						<th class="aTag"><span>요청자</span><a style="float: right;" href="javascript:orderItem('SUPPORT_REQUESTOR');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
	                </tr>
	              </thead>
	              <tbody id="MaList">
	              </tbody>
              </table>
            </div>
          
            <!-- /.box-body -->
			<div class="box-footer">
 	        	<div class="pull-center" style="flex: 1;">
	        		 <ul id="page" class="pagination" style="margin:0px">
						  </ul>
	        	</div>
	        	<div class="pull-right">
<!-- 	        		<a href="javascript:exportExcel();"><img src="dist/img/Excel-icon.png" style="width: 20px; vertical-align: -7px; margin-right: 15px;"></a>&nbsp;&nbsp; -->
	        		<select name="pageSize" id="pageSize" onChange="salse_ajaxProcess();">
<!-- 						<option value="10">10</option> -->
						<option value="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
             		 </select>
	        	</div>
	        </div>
          </div>
    </div>      
	<div class="modal fade" id="modal-malist-maContent" style="padding-left: 0px;"></div>
	
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="myModalTitle" style="font-size: 16px;"></div>
			</div>
			
			<div class="modal-body" id="myModalBody"></div>
		</div>
	</div>
		
	<script type="text/javascript">
	$(document).ready(function() {
		$("#domain2").hide();
		$("#select_domainName").hide();
		
		
		$('#language').val("ko-KR");
		salse_GetInit();
		$('#filter').val("<%=filter%>");
		$('#orderBy').val("<%=orderBy%>");
		$('#asc').val(<%=asc%>);
		$('#pageIdx').val("<%=pageIdx%>");
		$('#pageSize').val("<%=pageSize%>");
		$('#language').val("<%=language%>");
		$('#loadData').val("<%=loadData%>");
		$("#selectDomain").val("<%=URLDecoder.decode(domain,"UTF-8")%>");

// 			var loadData = $("#loadData").val();
			
// 			if(loadData == "" || loadData == null){
				salse_ajaxProcess();
// 			}
			
			$('#selectboxDiv input[type="checkbox"]').iCheck({
				checkboxClass: 'icheckbox_flat-blue',
				radioClass: 'iradio_flat-blue'
		  });
			
			$("[name=mail_chk]").on('ifChanged', function(){
				var chkId = $(this).attr('id');
				
				if($(this).prop('checked')){
					$("#"+chkId+"_2").prop("checked",true).iCheck('update');
				}else{
					$("#"+chkId+"_2").prop("checked",false).iCheck('update');			
				}
			});
			
			$('#stat_term input[type="radio"]').iCheck({
				checkboxClass: 'icheckbox_flat-blue',
		    radioClass: 'iradio_flat-blue'
	    });
			
			$("input:radio[name=RadioPeriodType]").on('ifChecked', function(){
				if($(this).val() == 'week'){
					salse_getMaList();
					$("#reservation").css("display","none");
				}else if($(this).val() == 'month'){
					salse_getMaList();
					$("#reservation").css("display","none");
				}else if($(this).val() == 'select'){
				  $("#reservation").css("display","block");
				}
			});
			
			$('#reservation').daterangepicker({
				locale: {
					format: 'YYYY-MM-DD',
				},
				startDate: moment().subtract(1, 'month'),
				endDate: moment()
			});
			
			$('#detaileSearchReservation').daterangepicker({
				locale: {
					format: 'YYYY-MM-DD',
				},
				startDate: moment().subtract(1, 'month'),
				endDate: moment()
			});

			$(".icheckbox_flat-blue").css("margin","10px 0px");
			
			$('body').on('click', function (e) {
				if(!$(e.target).hasClass("glyphicon glyphicon-option-vertical")) {
					$(".etcMenu").hide();
				}
			});
		});
	
	</script>
	<script src="include/locale/language.js"></script>	
	
</body>
</html>