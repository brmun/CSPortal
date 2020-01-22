<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp" %>
<%
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
%>    
<html>
<head>
<meta charset="utf-8">
  <!-- iCheck -->
  <link rel="stylesheet" href="dist/iCheck/flat/blue.css">
</head>
<body>
	<script src="dist/js/jquery-ui.min.js"></script>
	<script src="dist/js/jquery.dataTables.min.js"></script>
	<script src="dist/js/dataTables.bootstrap.min.js"></script>
	<!-- Bootstrap 3.3.7 -->
	<script src="dist/js/bootstrap.min.js"></script>

	<script src="include/common.js"></script>
	<script src="js/preferences.domain.js"></script>
	
	
	<input type="hidden" name="pageIdx" id="pageIdx">
	
	
<!-- Content Header (Page header) -->
	<section class="content-header">
	  <h1>
	    <small><i class="fa fa-exclamation iColor"></i><span class="i18n-domain-help"></span></small>
	  </h1>
<!-- 	  <ol class="breadcrumb"> -->
<!-- 	    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li> -->
<!-- 	    <li><a href="#"><span class="i18n-domain-location-1depth"></span></a></li> -->
<!-- 	    <li class="active"><span class="i18n-domain-location-2depth"></span></li> -->
<!-- 	  </ol> -->
	</section>
	  <section class="content">
    <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header">
						<div style="display: inline; line-height:30px; font-size:13px"><span class="i18n-domain-total"></span> <div style="display:inline;" id="recCount"></div> <span class="i18n-domain-count"></span></div>
						<!-- 검색옵션 -->
	          <div style="float:right">
	            <div id="domainSearchInput">
	              <input type="text" name="searchKeyword" id="searchKeyword" class="searchKeyword domain-searchKeyword i18n-domain-search-placeholder" autocomplete="off" onkeydown="javascript:if(event.keyCode==13){getDomainList();}"/>
	              <input type="button" class="searchBtn" onclick="getDomainList();"/>
	            </div>
	          </div>
					</div>
	        <div class="box-body">
	          <!-- 데이터 보여주기 -->
						<table id="example2" class="table table-bordered table-hover">
							<!-- 테이블 콜룸 간격 세팅 -->
							<colgroup>
<!-- 								<col width="5%"/> -->
	       				<col width="20%"/>
	       				<col width="10%"/>
	       				<col width="10%"/>
	       				<col width="10%"/>
	       				<col width="30%"/>
	       				<col width="10%"/>
						<col width="10%"/>
							</colgroup>
			
							<!-- 테이블 콜룸 이름 지정 -->
							<thead>
								<tr class="thead-height">
									<th><span class="i18n-domain-list-domain-name"></span></th>
									<th><span class="i18n-domain-list-default-domain"></span></th>
									<th><span style="word-break: break-all;" class="i18n-domain-list-internal-external"></span></th>
									<th><span class="i18n-domain-list-id-case-sensitivity"></span></th>
									<th><span class="i18n-domain-list-item-crm-setting"></span></th>
									<th><span class="i18n-domain-list-create-time"></span></th>
									<th><span class="i18n-domain-list-edit"></span></th>
								</tr>
							</thead>
			
							<tbody id="domainList" class="mailbox-messages">
							</tbody>
							<!-- 테이블 오픈쪽 하단 부분 -->
						</table> 
						<button type="button" style="margin-top: 10px;" class="btn btn-default" data-toggle="modal" name="domain_add"><span id="SpanAccess" class="i18n-domain-btn-add"></span></button>
<!--		<button type="button" style="margin-top: 10px;" class="btn btn-default" data-toggle="modal" name="domain_add2"><span id="SpanAccess" class="i18n-domain-btn-add"></span></button> -->
					
	        </div>
	        <!-- /.box-body -->
 	        <div class="box-footer">
 	        	<div class="pull-center" style="flex: 1;">
	        		 <ul id="page" class="pagination" style="margin:0px">
						  </ul>
	        	</div>
	        	<div class="pull-right">
	        		<select name="pageSize" id="pageSize" onChange="getDomainList();">
								<option value="10">10</option>
								<option value="25">25</option>
								<option value="50">50</option>
								<option value="100">100</option>
								<option value="200">200</option>
								<option value="400">400</option>
								<option value="600">600</option>
								
              </select>
	        	</div>
	        </div>
	      </div>
			</div>
		</div>
	</section>
	
	<div class="modal fade" id="modal-domain-add"></div>
	<div class="modal fade" id="modal-domain-update"></div>
	<div class="modal fade" id="modal-domain-delete"></div>
	
	<div id="footer">
		<!-- Modal Message -->
		<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index:1051">
			<div class="modal-dialog modal-sm modal-content">
				<div class="modal-header">
			  	<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			    <div id="myModalTitle" style="font-size: 16px;"></div>
			  </div>
			    
			  <div class="modal-body" id="myModalBody"></div>
			</div>
		</div>
	</div>
	<!-- iCheck -->
	<script src="dist/iCheck/icheck.min.js"></script>
	<script>
		$(document).ready(function(){
			
			$('#pageIdx').val("<%=pageIdx%>");
			$('#pageSize').val("<%=pageSize%>");
			
			
			getDomainList();
			domain_add();
			domain_add2();
			
			
			$('.mailbox-messages input[type="checkbox"]').iCheck({
			      checkboxClass: 'icheckbox_flat-blue',
			      radioClass: 'iradio_flat-blue'
	    });

			    //Enable check and uncheck all functionality
	    $(".checkbox-toggle").click(function () {
	      var clicks = $(this).data('clicks');
	      if (clicks) {
	        //Uncheck all checkboxes
	        $(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
	        $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
	      } else {
	        //Check all checkboxes
	        $(".mailbox-messages input[type='checkbox']").iCheck("check");
	        $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
	      }
	      $(this).data("clicks", !clicks);
	    });
			
		});
	</script>
	<script src="include/locale/language.js"></script>
</body>
</html>