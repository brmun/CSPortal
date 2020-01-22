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
	<script src="js/preferences.admin.js"></script>
	
	
	<input type="hidden" name="orderBy" id="orderBy">
	<input type="hidden" name="orderBy2" id="orderBy2">
  <input type="hidden" name="asc" id="asc">
  <input type="hidden" name="pageIdx" id="pageIdx">
  <input type="hidden" name="acl_type" id="acl_type">
  
  
	<!-- Content Header (Page header) -->
	<section class="content-header">
	  <h1 id="h1Help">
	    <small><i class="fa fa-exclamation iColor"></i><span class="i18n-admin-help"></span></small>
	  </h1>
<!-- 	  <ol class="breadcrumb"> -->
<!-- 	    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li> -->
<!-- 	    <li><a href="#"><span class="i18n-admin-location-1depth"></span></a></li> -->
<!-- 	    <li class="active"><span class="i18n-admin-location-2depth"></span></li> -->
<!-- 	  </ol> -->
	</section>
	<section class="content">
    <div class="row">
			<div class="col-md-12">
			  <div class="nav-tabs-custom">
			    <ul class="nav nav-tabs">
			      <li id="adddelAdmin" class="active"><a href="#Admin_AddDel" data-toggle="tab"><span class="i18n-admin-tab-admin-addDel"></span></a></li>
<!--			      <li id="accessAdmin"><a href="#Access_Setting" data-toggle="tab"><span class="i18n-admin-tab-access-setting"></span></a></li> -->
<!-- 			      <li id="langugeAdmin"><a href="#Language_Setting" data-toggle="tab"><span class="i18n-admin-tab-language-setting"></span></a></li> -->
<!-- 			      <li id="passwordManager"><a href="#Password_Manager" data-toggle="tab"><span class="i18n-admin-tab-password-manager"></span></a></li> -->
			      <li id="passwordAdmin"><a href="#Password_Setting" data-toggle="tab"><span class="i18n-admin-tab-password-setting"></span></a></li>
			    </ul>
				<div class="tab-content">
<!--			    <div class="tab-content">
			      <div class="tab-pane" id="Access_Setting">
   	        	<div class="box-header" id="selectboxDiv" style="padding: 10px 10px 0px 10px">
				        <div style="display: none; line-height:30px; font-size:13px">
				        	<span class="i18n-admin-tab-access-setting-total"></span>
				        	<div style="display:inline;" id="recCount">
				        		<span data-l10n-id="recCount"></span>
			        		</div>
			        	 	<span class="i18n-admin-tab-access-setting-count" style="margin-right: 2%"></span>
		        	 	</div>
 				        <table id="example2" class="table table-bordered table-hover" style="width: 35%; display: inline-table; table-layout: fixed;">
 				        	<colgroup>
 				        		<col width="10%">
 				        		<col width="10%">
 				        	</colgroup>
				      		<tr>
				      			<th><span class="i18n-admin-tab-access-setting-usage"></span></th>
				      			<td class="text-center">
				      				<div class="switch switch-custom2">
									      <input type="radio" class="switch-input" name="adminACL" value="adminACL_on" id="adminACL_on" onchange="setACLType();">
												<label for="adminACL_on" class="switch-label switch-label-off i18n-admin-tab-access-setting-usage-label-switch-on"></label>			    
												<input type="radio" class="switch-input" name="adminACL" value="adminACL_off" id="adminACL_off" onchange="setACLType();">					    
												<label for="adminACL_off" class="switch-label switch-label-on i18n-admin-tab-access-setting-usage-label-switch-off"></label>    
												<span class="switch-selection"></span>	    
											</div>
				      			</td>
				      		</tr>
			      		</table>
			      		<div id="ACL_helpMessage" style="display: none; margin-left: 25px; vertical-align: top; padding-top: 15px;"></div>
 				        <table id="example2" class="table table-bordered table-hover table-acl" style="width: 70%">
				      		<tr>
				      			<th><span class="i18n-admin-tab-access-setting-header-title"></span></th>
				      		  <td class="text-center">
				      		  	<label class="radio-inline"><input type="radio" class="flat" name="radioACL" id="allow_ACL" value="allow" style="margin-top: -2px;"> <span class="i18n-admin-tab-access-setting-header-allow"></span></label>
				      		  	<label class="radio-inline"><input type="radio" class="flat" name="radioACL" id="deny_ACL" value="deny" style="margin-top: -2px;"> <span class="i18n-admin-tab-access-setting-header-deny"></span></label>
										</td>
				      			<th><span class="i18n-admin-tab-access-setting-header-add"></span></th>
				      		  <td class="text-center">
				      		  	<button id="add_adminACL_button" type="button" class="btn btn-default" style="margin-left: 10px;" data-toggle="modal" name="pop_modal" onclick="accessAdminAdd();"><span id="SpanAccess" class="i18n-admin-btn-add"></span></button>
										</td>
				      		</tr>
			      		</table>
        			</div>
			        <table id="example2" class="table table-bordered table-hover table-acl-list" style="width: 99%; margin: 0px 0px 10px 10px;">
			          <colgroup>
<!-- 			          	<col width="5%"/> -->
<!--			          	<col width="25%"/>
			          	<col width="9.8%"/>
			          	<col width="35%"/>
			          	<col width="15%"/>
			          	<col width="15%"/>
	          		</colgroup>
	            	<thead>
		            	<tr>
		            		<th><span class="i18n-admin-tab-access-setting-list-ip"></span></th>
		            		<th><span class="i18n-admin-tab-access-setting-list-ip-type"></span></th>
		            		<th><span class="i18n-admin-tab-access-setting-list-desc"></span></th>
		            		<th><span class="i18n-admin-tab-access-setting-list-time"></span></th>
		            		<th><span class="i18n-admin-tab-access-setting-list-update"></span></th>
		            	</tr>
	            	</thead>
	            	<tbody class="access_setting">
	            	</tbody>
			        </table>
			        <button id="submit_adminACL_button" type="button" class="btn btn-default" style="margin-left: 10px; margin-top: 10px;" onclick="setACLType();" style="margin-top: 10px;"><span id="SpanAccess" class="i18n-admin-btn-submit"></span></button>
			      </div>
-->	
			      <div class="tab-pane" id="Password_Manager">
				      <table id="example2" class="table table-bordered table-hover" style="width: 30%;">
				      	<colgroup>
				      		<col width="15%"/>
				      		<col width="15%"/>
				      	</colgroup>
				      	<tr>
				  				<th class="ServiceTh"><span class="i18n-admin-tab-password-manager-length-min"></span></th>
			  					<td class="ServiceTd">
			  						<input id="pwd_lengthMin" type="text" onchange="getNumber(this);" class="input-padding-right" value="" onchange="getNumber(this);" onkeyup="getNumber(this);">
			  					</td>
  							</tr>
				      	<tr>
				  				<th class="ServiceTh"><span class="i18n-admin-tab-password-manager-special-ch"></span></th>
			  					<td class="ServiceTd">
			  						<input id="pwd_specialCh" type="text" onchange="getNumber(this);" class="input-padding-right" value="" onchange="getNumber(this);" onkeyup="getNumber(this);">
			  					</td>
  							</tr>
				      	<tr>
				  				<th class="ServiceTh"><span class="i18n-admin-tab-password-manager-length-num"></span></th>
			  					<td class="ServiceTd">
			  						<input id="pwd_lengthNum" type="text" onchange="getNumber(this);" class="input-padding-right" value="" onchange="getNumber(this);" onkeyup="getNumber(this);">
			  					</td>
  							</tr>
  							<tfoot>
  								<tr>
  									<td colspan='2'>
										<div style="margin-top: 5px;">
											<i class="fa fa-exclamation iColor"></i><span class="i18n-admin-tab-password-manager-content-help"></span>
										</div>
									</td>
  								</tr>
  							</tfoot>
		        	</table>
		        	<button type="button" class="btn btn-default" style="margin-top: 10px;" onclick="PwdComplexity();"><span class="i18n-admin-btn-submit"></span></button>
			      </div>
	
			      <div class="tab-pane" id="Language_Setting">
				      <table id="example2" class="table table-bordered table-hover" style="width: 30%;">
				      	<colgroup>
				      		<col width="2%"/>
				      		<col width="5%"/>
				      	</colgroup>
				      	<tr>
				  				<th class="ServiceTh"><span class="i18n-admin-tab-language-setting-title"></span></th>
			  					<td class="ServiceTd">
	  								<select name="languageSelect" id="languageSelect" class="Select">
	  									<option value="ko-KR" class="i18n-admin-tab-language-setting-ko"></option>
	  									<option value="en-US" class="i18n-admin-tab-language-setting-us"></option>
	  									<option value="ja-JP" class="i18n-admin-tab-language-setting-jp"></option>
	  								</select>
	  								<button type="button" class="btn btn-default btn-size" style="margin-left: 5px;" onclick="setLanguage();"><span class="i18n-admin-btn-modify"></span></button>
	  							</td>
  							</tr>
		        	</table>
			      </div>

			      <div class="tab-pane" id="Password_Setting">
				      <table id="example2" class="table table-hover custom-table" style="width: 100%;">
				      	<colgroup>
				      		<col width="5%"/>
				      		<col width="10%"/>
				      		<col width="5%"/>
				      	</colgroup>
				      	<tr>
				      		<th class="ChangePw"><span class="i18n-admin-tab-password-setting-old-pwd"></span></th>
				      		<td><input class="pwChange i18n-admin-tab-password-old-pwd-title" type="password" id="oldPw" style="width: 50%; border: 1px solid #f4f4f4;"></td>
			      		</tr>
			      		<tr>
				      		<th class="ChangePw"><span class="i18n-admin-tab-password-setting-new-pwd"></span></th>
				      		<td><input class="pwChange i18n-admin-tab-password-new-pwd-title" type="password" id="newPw" style="width: 50%; border: 1px solid #f4f4f4;" onkeyup="isCheck('newPw','newPwConfirm');"><span style="font-size: 12px; margin-left: 15px;" id="newPw_complexity_chk"></span></td>
				      	</tr>
				      	<tr>
				      		<th class="ChangePw"><span class="i18n-admin-tab-password-setting-new-pwd-confirm"></span></th>
				      		<td><input class="pwChange i18n-admin-tab-password-new-pwd-confirm-title" type="password" id="newPwConfirm" style="width: 50%; border: 1px solid #f4f4f4;" onkeyup="isCheck2('newPw','newPwConfirm');"><span style="font-size: 12px; margin-left: 15px;" id="newPwConfirm_check"></span></td>
				      	</tr>
		        	</table>
		        	<button type="button" class="btn btn-default" style="margin-top: 10px;" onclick="adminChangePwd();"><span class="i18n-admin-btn-modify"></span></button>
			      </div>

			      <div class="active tab-pane" id="Admin_AddDel">
			      	<div style="display: inline; line-height:30px; font-size:13px">
				      	<span class="i18n-admin-tab-admin-addDel-total"></span>
				        <div style="display:inline;" id="addDel_recCount">
				        	<span data-l10n-id="addDel_recCount"></span>
			        	</div>
			        	<span class="i18n-admin-tab-admin-addDel-count" style="margin-right: 2%"></span>
		        	</div>
		        	<div style="float: right;">
	            <div>
<!-- 	              <select name="addDel_searchSelect" id="addDel_searchSelect" class="searchSelect" style="margin-left: 15px;"> -->
<!-- 		              <option value="all" class="i18n-admin-tab-admin-addDel-search-all"></option> -->
<!-- 		              <option value="id" class="i18n-admin-tab-admin-addDel-search-id"></option> -->
<!-- 		              <option value="domain" class="i18n-admin-tab-admin-addDel-search-domain"></option> -->
<!-- 	              </select> -->
	              <input type="text" name="addDel_searchKeyword" id="addDel_searchKeyword" class="searchKeyword" placeholder="도메인이나 관리자ID를 입력해주세요." autocomplete="off" onkeydown="javascript:if(event.keyCode==13){getDomainAdminList();}"/>
	              <input type="button" class="searchBtn" onclick="getDomainAdminList();">
	            </div>
	          </div>
				      <table id="example2" class="table table-bordered table-hover">
				      	<colgroup>
 				      		<col width="20%"/>
				      		<col width="10%"/>
							<col width="10%"/>
				      		<col width="10%"/>
<!-- 				      		<col width="10%"/> -->
				      		<col width="10%"/>
				      		<col width="10%"/>
				      	</colgroup>
				      	
				      	<thead>
				      		<tr>
								<th><span class="i18n-admin-tab-admin-addDel-list-domain-name"></span></th>
				      			<th><span class="i18n-admin-tab-admin-addDel-list-admin-id"></span></th>
								<th><span class="i18n-admin-tab-admin-addDel-list-admin-name"></span></th>
				      			<th><span class="i18n-admin-tab-admin-addDel-list-right"></span></th>
<!-- 				      			<th><span class="i18n-admin-tab-admin-addDel-list-lang"></span></th> -->
				      			<th><span class="i18n-admin-tab-admin-addDel-list-time"></span></th>
				      			<th><span class="i18n-admin-tab-admin-addDel-list-etc"></span></th>
				      		</tr>
				      	</thead>
				      	<tbody class="admin_addDel">
				      	</tbody>
		        	</table>
		        	<button type="button" class="btn btn-default" data-toggle="modal" name="admin_addDel_modal" style="margin-top: 10px;" onclick="admin_addDel();"><span id="SpanAccess" class="i18n-admin-btn-add"></span></button>
		        	<div class="box-footer">
 	        			<div class="pull-center" style="flex: 1;">
	        		 		<ul id="addDel_page" class="pagination" style="margin:0px">
						  		</ul>
	        			</div>
	        			<div class="pull-right">
			        		<select name="pageSize" id="addDel_pageSize" onChange="getDomainAdminList();">
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
		              </select>
	        			</div>
	        		</div>
			      </div>
			      
			    </div>
			    <!-- /.tab-content -->
			  </div>
			  <!-- /.nav-tabs-custom -->
			</div>
		</div>
	</section>
	
	<div class="modal fade" id="modal-default"></div>
	<div class="modal fade" id="modal-update"></div>
	<div class="modal fade" id="modal-add"></div>
	<div class="modal fade" id="modal-addDel"></div>
	<div class="modal fade" id="modal-del"></div>
	
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
			

			$('#pageIdx').val("<%=pageIdx%>");
			$('#pageSize').val("<%=pageSize%>");

			
			$("#pwd_lengthMin").val(getCookie("pwdMinLength"));
			$("#pwd_specialCh").val(getCookie("pwdIncSpecialCh"));
			$("#pwd_lengthNum").val(getCookie("pwdIncNumLength"));
			
			admin_help();
// 			admin_addDel();
			getDomainAdminList();
			
			$('.access_setting input[type="checkbox"]').iCheck({
	      checkboxClass: 'icheckbox_flat-blue',
	      radioClass: 'iradio_flat-blue'
	    });
			
			$('.admin_addDel input[type="checkbox"]').iCheck({
	      checkboxClass: 'icheckbox_flat-blue',
	      radioClass: 'iradio_flat-blue'
	    });
			
			$(".table-acl input[name='radioACL']").iCheck({
				radioClass: 'iradio_flat-blue'
			});
			
			$("input:radio[name=radioACL]").on('ifChecked', function(){
				if($(this).val() == "allow"){
					getAdminACLList("allow");
					$("#acl_type").val("allow");
				}else{
					getAdminACLList("deny");
					$("#acl_type").val("deny");
				}
			});
			
	    //Enable check and uncheck all functionality
	    $(".checkbox-toggle1").click(function () {
	      var clicks = $(this).data('clicks');
	      if (clicks) {
	        //Uncheck all checkboxes
	        $(".access_setting input[type='checkbox']").iCheck("uncheck");
	        $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
	      } else {
	        //Check all checkboxes
	        $(".access_setting input[type='checkbox']").iCheck("check");
	        $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
	      }
	      $(this).data("clicks", !clicks);
	    });
			    
	    $(".checkbox-toggle2").click(function () {
	      var clicks = $(this).data('clicks');
	      if (clicks) {
	        //Uncheck all checkboxes
	        $(".admin_addDel input[type='checkbox']").iCheck("uncheck");
	        $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
	      } else {
	        //Check all checkboxes
	        $(".admin_addDel input[type='checkbox']").iCheck("check");
	        $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
	      }
	      $(this).data("clicks", !clicks);
	    });
	    
	
	    
	    $("#accessAdmin").one("click", function () {
	    	getACLType();
	    });
	    
	    $("#adddelAdmin").one("click", function () {
				getDomainAdminList();
	    });
	    
		});
	</script>
	<script src="include/locale/language.js"></script>
</body>
</html>