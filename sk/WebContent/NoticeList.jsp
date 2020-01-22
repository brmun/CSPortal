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
		orderBy = "TIME";
	
	String asc = request.getParameter("asc");
	if ( asc == null || asc.length() == 0 )
		asc = "false";
	
	String pageIdx = request.getParameter("pageIdx");
	if ( pageIdx == null || pageIdx.length() == 0 )
		pageIdx = "0";
	
	String pageSize = request.getParameter("pageSize");
	if ( pageSize == null || pageSize.length() == 0 )
		pageSize = "10";
	
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
	<script src="js/moniter.NoticeList.js"></script>
	
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
	

	<div class="box">
					<div class="box box-solid bg-green-gradient">
            <div class="box-header">
            	<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
              <h3 class="box-title"><span class="">공지사항</span></h3>
         
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-hover">
              	<colgroup>
					<col style="width: 10%"/>
              		<col style="width: 10%"/>
              		<col style="width: 10%"/>
					<col style="width: 70%"/>
              	</colgroup>
	              <thead>
	                <tr>
						<th class="">게시일</th>
						<th class="">항목</th>
						<th class="">분류</th>
						<th class="">공지사항</th>
	                </tr>
	              </thead>
	              <tbody id="NoticeList">
	              </tbody>
              </table>
            </div>
           </div>
            <!-- /.box-body -->
          </div>
          
	<div class="modal fade" id="modal-Noticelist-Content" style="padding-left: 0px;"></div>
		
	<script type="text/javascript">
	$(document).ready(function() {
		
		$('#language').val("ko-KR");
		GetInit();
	
	});
	
	</script>
	<script src="include/locale/language.js"></script>	
	
</body>
</html>