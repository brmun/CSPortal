<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp"%>
<%
	String filter = request.getParameter("filter");
	if ( filter == null || filter.length() == 0 )
		filter = "";
	
	String Detailfilter = request.getParameter("Detailfilter");
	if ( Detailfilter == null || Detailfilter.length() == 0 )
		Detailfilter = "";
	
	String orderBy = request.getParameter("orderBy");
	if ( orderBy == null || orderBy.length() == 0 )
		orderBy = "TYPE_KO";
	
	String asc = request.getParameter("asc");
	if ( asc == null || asc.length() == 0 )
		asc = "false";
	
	String pageIdx = request.getParameter("pageIdx");
	if ( pageIdx == null || pageIdx.length() == 0 )
		pageIdx = "0";
	
	String pageSize = request.getParameter("pageSize");
	if ( pageSize == null || pageSize.length() == 0 )
		pageSize = "15";
	
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
	
%>
<html>
<head>

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
	<script src="js/moniter.ProjectList.js"></script>
	
	<script src="include/jquery.fileDownload.js"></script>
	
	<!-- PACE -->
	<script src="dist/js/pace.min.js"></script>

  <div id="header"></div>
  <div id="left"></div>
	
  <input type="hidden" name="myurl" id="myurl" value="ProjectList.jsp">
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
  <input type="hidden" name="order" id="order">
  
  
	

	<div class="box">
		<div class="box box-solid bg-green-gradient">
            <div class="box-header">
            	<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
              <h3 class="box-title"><span class="">진행 프로젝트 현황</span><span>( </span><span id="recCount"></span><span> 건)</span></h3>
              
               <span style="border: 0; background-color: unset; font-size: 15px; color: black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업유형 :</span>
					  <select id="stat_filter" class="stat_filter" style="border: 10; background-color: unset; font-size: 15px; color: black; text-align-last: center;" onchange="getProjectList();">
								<option value="null">전체</option>
								<option value='구축","Deploy'>구축</option>
								<option value="연동">연동</option>
							</select>
					 <span style="border: 0; background-color: unset; font-size: 15px; color: black;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;진행단계 :</span>
					  <select id="category_filter" class="category_filter" style="border: 10; background-color: unset; font-size: 15px; color: black; text-align-last: center;" onchange="getProjectList();">
								<option value="null">전체</option>
								<option value="(P/I)착수 및 환경분석">착수 및 환경분석</option>
								<option value='(P)구축/납품","(I)납품/설치 및 가이드","(P)배포 및 변화관리'>구축/납품</option>
							</select>		
              
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-hover">
              	<colgroup>
           		   	<col style="width: 10%"/>
					<col style="width: 35%"/>
              		<col style="width: 10%"/>
              		<col style="width: 10%"/>
              		<col style="width: 15%"/>
              		<col style="width: 10%"/>
					<col style="width: 10%"/>
					<col style="width: 10%"/>
              	</colgroup>
	              <thead>
	                <tr>
	                <th class="aTag"><span>사업유형</span><a style="float: right;" href="javascript:orderItem('TYPE_KO');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="">사업명</th>
						<th class="aTag"><span>계약시작일</span><a style="float: right;" href="javascript:orderItem('START_DATE');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>계약시작일</span><a style="float: right;" href="javascript:orderItem('CONTRACT_END_DATE');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>진행단계</span><a style="float: right;" href="javascript:orderItem('STATUS');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>진행률</span><a style="float: right;" href="javascript:orderItem('PROGRESS');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>담당PM</span><a style="float: right;" href="javascript:orderItem('OWNER_NAME');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
						<th class="aTag"><span>담당영업</span><a style="float: right;" href="javascript:orderItem('SALES_REPRESENTATIVE');"><span id="sortIcon" class="fa fa-sort"></span></a></th>
	                </tr>
	              </thead>
	              <tbody id="ProjectList">
	              </tbody>
              </table>
            </div>
           
            <!-- /.box-body -->
            
              <!-- /.box-body -->
			<div class="box-footer">
 	        	<div class="pull-center" style="flex: 1;">
	        		 <ul id="page" class="pagination" style="margin:0px">
						  </ul>
	        	</div>
	        	<div class="pull-right" style="color: #333;">
<!-- 	        		<a href="javascript:exportExcel();"><img src="dist/img/Excel-icon.png" style="width: 20px; vertical-align: -7px; margin-right: 15px;"></a>&nbsp;&nbsp; -->
	        		<select name="pageSize" id="pageSize" onChange="ajaxProcess();">
						<option value="15">15</option>
						<option value="30">30</option>
						<option value="50">50</option>
						<option value="100">100</option>
             		 </select>
	        	</div>
	        </div>
          </div>
      </div>
          
	<div class="modal fade" id="modal-projectlist-projectContent" style="padding-left: 0px;"></div>
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
		
		$('#language').val("ko-KR");
		
		$('#filter').val("<%=filter%>");
		$('#orderBy').val("<%=orderBy%>");
		$('#asc').val(<%=asc%>);
		$('#pageIdx').val("<%=pageIdx%>");
		$('#pageSize').val("<%=pageSize%>");
		$('#loadData').val("<%=loadData%>");
		getProjectList();

// 			var loadData = $("#loadData").val();
			
// 			if(loadData == "" || loadData == null){
				ajaxProcess();
// 			}
	});

	
	</script>
	<script src="include/locale/language.js"></script>
</body>
</html>