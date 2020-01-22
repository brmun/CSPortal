<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp" %>	
<%@ page import="java.net.URLDecoder"%>
<%
	String orderBy = request.getParameter("orderBy");
	if ( orderBy == null || orderBy.length() == 0 )
		orderBy = "time";
	
	String orderBy2 = request.getParameter("orderBy");
	if ( orderBy2 == null || orderBy2.length() == 0 )
		orderBy2 = "timeCreated";
	
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
	

 request.setCharacterEncoding("utf-8");
	
	String email = (String)request.getSession().getAttribute("email");
	String language = (String)request.getSession().getAttribute("language");
	String domain = (String)request.getSession().getAttribute("domain");
	String crmdomain = (String)request.getSession().getAttribute("crmdomain");
	String type1 = (String)request.getSession().getAttribute("type");

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
	<script src="js/preferences.user.js"></script>
	
	
	<input type="hidden" name="orderBy" id="orderBy">
	<input type="hidden" name="orderBy2" id="orderBy2">
  <input type="hidden" name="asc" id="asc">
  <input type="hidden" name="pageIdx" id="pageIdx">
  <input type="hidden" name="pageSize" id="pageSize">
  <input type="hidden" name="groupIdx" id="groupIdx">
  <input type="hidden" name="hidden_domainName" id="hidden_domainName">
  <input type="hidden" name="modifyUserGroupIdx" id="modifyUserGroupIdx">
  <input type="hidden" name="item" id="item">
  
	<!-- Content Header (Page header) -->
	<section class="content-header">
	  <h1 id="h1Help">
	    <small><i class="fa fa-exclamation iColor"></i><span class="i18n-user-help"></span></small>
	  </h1>
	  <ol class="breadcrumb">
	    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
	    <li><a href="#"><span class="i18n-user-location-1depth"></span></a></li>
	    <li class="active"><span class="i18n-user-location-2depth"></span></li>
	  </ol>
	</section>
	<section class="content">
    <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header" id="selectboxDiv" style="padding: 10px 10px 0px 10px">
		        <div style="display: inline; line-height:30px; font-size:13px">
		        	<span class="i18n-user-total"></span>
		        	<div style="display:inline;" id="recCount">
		        		<span data-l10n-id="recCount"></span>
	        		</div>
	        	 	<span class="i18n-user-count" style="margin-right: 2%"></span>
        	 	</div>
	        		
	        	<div style="float:right;">
       	 			<select style="margin-right: 20px;" id="userSearchSelect">
       	 				<option class="i18n-user-list-name" value="username"></option>
       	 				<option class="i18n-user-list-group-name" value="groupname"></option>
       	 				<option class="i18n-user-list-id" value="userid"></option>
       	 			</select>
              <input type="text" name="searchKeyword" id="searchKeyword" class="searchKeyword domain-searchKeyword" autocomplete="off" onkeydown="javascript:if(event.keyCode==13){getUserListSearch('<%=URLDecoder.decode(domain,"UTF-8")%>');}"/>
              <input type="button" class="searchBtn" onclick="getUserListSearch('<%=URLDecoder.decode(domain,"UTF-8")%>');"/>
	          </div>
       	 	</div>
        	
	       	<div style="display: flex;">
	        	<div class="box-body" id="organizationDiv" style="flex:0.5">
		          <table id="example2" class="table table-bordered table-hover">
		          	<thead>
			          	<tr>
			          		<th><span class="i18n-user-organization"></span></th>
			          	</tr>
		          	</thead>
		          	<tbody id="organizationList">
		          	</tbody>
		          </table>
		        </div>
	        	
	        	<div class="box-body" id="userListDiv" style="flex: 1">
		          <table id="example2" class="table table-bordered table-hover">
		          	<thead>
			          	<tr>
			          		<th><span class="i18n-user-list-name"></span></th>
			          		<th><span class="i18n-user-list-group-name"></span></th>
			          		<th><span class="i18n-user-list-id"></span></th>
			          		<th><span class="i18n-user-list-register-date"></span></th>
			          		<th><span class="i18n-user-list-modify"></span></th>
			          	</tr>
		          	</thead>
		          	<tbody id="userList">
		          	</tbody>
		          </table>
				      <div class="box-footer">
		 	        	<div class="pull-center" style="flex: 1;">
			        		 <ul id="page" class="pagination" style="margin:0px">
								  </ul>
			        	</div>
			        	<div id="addUserButton" class="pull-right" style="display: none">
			        		<button type="button" class="btn btn-default btn-primary" data-toggle="modal" onclick="modal_addUser();"><span style="color:white" class="i18n-user-btn-add-user"></span></button>
			        	</div>
			        </div>
		        </div>
	        </div>
				</div>
			</div>
		</div>
	</section>
	
	<div class="modal fade" id="modal-update"></div>
	<div class="modal fade" id="modal-add"></div>
	<div class="modal fade" id="modal-add-group"></div>
	<div class="modal fade" id="modal-add-organization"></div>
	<div class="modal fade" id="modal-update-organization"></div>
	<div class="modal fade" id="modal-user-delete"></div>
	
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="myModalTitle" style="font-size: 16px;"></div>
			</div>
			
			<div class="modal-body" id="myModalBody"></div>
		</div>
	</div>
	
	<!-- iCheck -->
	<script src="dist/iCheck/icheck.min.js"></script>
	<script>
		$(document).ready(function(){
			
			$('#orderBy').val("<%=orderBy%>");
			$('#orderBy2').val("<%=orderBy2%>");
			$('#asc').val(<%=asc%>);
			$('#pageIdx').val("<%=pageIdx%>");
			$('#pageSize').val("<%=pageSize%>");

			
// 			getUserList();
			getOrganizationList();
		});			
	</script>
	<script src="include/locale/language.js"></script>
</body>
</html>