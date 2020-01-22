var PwChangeFlag = false;

function userPreferences(){
	var adminPwd_flag = getCookie("adminPwd_flag");
	
	if(adminPwd_flag == "check"){
		$(".content").empty();
		$(".content").load("user.jsp");
		$("#interval_flags").val("user");
	}else{
		certification();
	}
}

function modal_addUser(){
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 22%;\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title\"><span class=\"i18n-user-add-user-modify\"></span></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <div class=\"nav-tabs-custom\" style=\"box-shadow:none; margin-bottom: 0px\">";
//	html += "        <ul class=\"nav nav-tabs\">";
//	html += "          <li id=\"individualEnrollment\" class=\"active\"><a href=\"#Individual_Enrollment\" data-toggle=\"tab\"><span class=\"i18n-user-modal-add-user-inidividual\"></span></a></li>";
//	html += "          <li id=\"bundleEnrollment\"><a href=\"#Bundle_Enrollment\" data-toggle=\"tab\"><span class=\"i18n-user-modal-add-user-bundle\"></span></a></li>";
//	html += "        </ul>";
	html += "        <div class=\"tab-content\" style=\"padding-top:30px;\">";
    html += "          <div class=\"active tab-pane\" id=\"Individual_Enrollment\">";
    html += "            <table id=\"example2\" class=\"table table-bordered table-hover table-center\">";
	html += "              <colgroup>";
	html += "                <col width=\"20%\" />";
	html += "                <col width=\"30%\" />";
	html += "              </colgroup>";
	html += "              <tbody>";
	html += "                <tr>";
	html += "                  <th><span class=\"i18n-user-modal-name\"></span></th>";
	html += "          	       <td><input id=\"addUser_name\" type=\"text\" style=\"width: 100%; padding-left: 10px;\"></td>";
	html += "                </tr>";
	html += "                <tr>";
	html += "                  <th><span class=\"i18n-user-modal-id\"></span></th>";
	html += "          	       <td><input id=\"addUser_id\" type=\"text\" style=\"width: 100%; padding-left: 10px;\"></td>";
	html += "                </tr>";
	html += "                <tr>";
	html += "                  <th><span class=\"i18n-user-modal-password\"></span></th>";
	html += "          	       <td><input id=\"addUser_password\" type=\"password\" style=\"width: 100%; padding-left: 10px;\"></td>";
	html += "                </tr>";
    html += "            </table>";
    html += "          </div>";
    html += "          <div class=\"tab-pane\" id=\"Bundle_Enrollment\">";
    html += "            <input type=\"file\" name=\"newLcnFile\" id=\"newLcnFile\" style=\"width: 100%;\">";
//	html += "            <button type=\"button\" class=\"btn btn-default btn-size\" style=\"margin-left: 20px; padding: 1px;\" onclick=\"checkLcnDir();\"><span class=\"i18n-user-btn-submit\"></span></button>";
	html += "            <div style=\"margin-top: 5%;\">";
	html += "              <button type=\"button\" class=\"btn btn-default\" style=\"padding: 0\"><span class=\"i18n-user-modal-add-user-sample-down\"></span></button>";
	html += "            </div>";
    html += "          </div>";
    html += "        </div>";
	html += "      </div>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" style=\"margin-left:10px;\" onclick=\"addUser();\"><span class=\"i18n-user-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	
	$("#modal-add").empty();
	$("#modal-add").append(html);
	$("#modal-add").modal();
	updateContent();
}

function addUser() {
	var id = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var email = $("#addUser_id").val();
	var name = $("#addUser_name").val();
	var password = $("#addUser_password").val();
	var groupname = $("#groupname").val();
	var groupIdx = parseInt($("#groupIdx").val());
	var hidden_domain = $("#hidden_domainName").val();
	var fullEmail = email + '@' + hidden_domain;
	
	jsonData = JSON.stringify({
				"division" : 2,
				"userid" : ""+email+"",
				"username" : ""+name+"",
				"userpw": ""+password+"",
				"domain" : ""+hidden_domain+"",
				"groupname" : ""+groupname+"",
				"timeCreated" : ""+today()+""
		});	
			
		$.ajax({
			type: "POST",
			url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup",
			contentType: "application/json; charset=UTF-8",
			data: jsonData,
			dataType: "JSON",
			timeout: 30000,
			success: function(data){
				var code = 0, msg = "";
				
				$.each(data, function(key,value){
					if ( key == "result" )
					{
						if ( value != "created" )
						{
							code = 1
						}
					}			
				});
				
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}else{
				showMsg(i18next.t('config.result'), i18next.t('config.result_msg'));
				getUserList("",hidden_domain,groupname);
			}
		},
		error: function(xhr, status, error)	{
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			updateContent();
			getOrganizationList();
		}
	});
}

function modal_modifyUser(idx, userdocid){
	
	var name = $("#userListName_"+idx).text();
	var groupName = $("#userListGroupName_"+idx).text();
	var id = $("#userListId_"+idx).text();
	var timeCreated = $("#userListTimeCreated2_"+idx).val();
	var timeUpdated = $("#userListTimeUpdated_"+idx).val();
	var hidden_domainName = $("#hidden_domainName").val();
	var userdocid = userdocid
	
	
	var html = "";
	
	html  = "<div class=\"modal-dialog\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title\"><span class=\"i18n-user-edit-user-modify\"></span></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <table id=\"example2\" class=\"table table-bordered table-hover table-center\">";
	html += "        <colgroup>";
	html += "          <col width=\"20%\" />";
	html += "          <col width=\"30%\" />";
	html += "        </colgroup>";
	html += "        <tbody>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-name\"></span></th>";
	html += "          	 <td><span id=\"modifyUserName\">"+name+"</span></td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-group-name\"></span></th>";
	// html += "            <td><div><a href=\"#\" onclick=\"addGroup('"+hidden_domainName+"');\"><span id=\"modifyUserGroupName\">"+groupName+"</span></a></div></td>";
	html += "            <td><div><span id=\"modifyUserGroupName\">"+groupName+"</span></a></div></td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-id\"></span></th>";
	html += "            <td><span id=\"modifyUserId\">"+id+"</span></td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-password\"></span></th>";
	html += "            <td>";
	html += "              <input id=\"modifyUserPassword\" type=\"password\" style=\"width: 100%; padding-left: 10px;\" onkeyup=\"isCheck('modifyUserPassword','modifyUserPassword2');\">";
	html += "              <span style=\"font-size: 12px; margin-left: 15px;\" id=\"modifyUserPassword_complexity_chk\"></span>";
	html += "            </td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-password2\"></span></th>";
	html += "            <td>";
	html += "              <input id=\"modifyUserPassword2\" type=\"password\" style=\"width: 100%; padding-left: 10px;\" onkeyup=\"isCheck2('modifyUserPassword','modifyUserPassword2');\">";
	html += "              <div style=\"margin-top: 10px; display:none\" id=\"checkMsg\">";
	html += "                <span style=\"font-size: 12px; margin-left: 15px;\" id=\"modifyUserPassword2_check\"></span>";
	html += "              </div>";
	html += "            </td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-register-date\"></span></th>";
	html += "            <td><span>"+timeCreated+"</span></td>";
	html += "          </tr>";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-modal-list-modify-date\"></span></th>";
	html += "            <td><span>"+timeUpdated+"</span></td>";
	html += "          </tr>";
	html += "        </tbody>";
	html += "      </table>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" style=\"margin-left:10px;\" onclick=\"modifyUser('"+idx+"','"+userdocid+"');\"><span class=\"i18n-user-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	$("#modal-update").empty();
	$("#modal-update").append(html);
	$("#modal-update").modal();
	updateContent();
	
}

function isCheck(id1, id2) {
	var changePw = $("#"+id1+"").val();
	var changePw2 = $("#"+id2+"").val();
	var pwdMinLength = getCookie("pwdMinLength");
	
	if(pwdMinLength != 0){
		if(changePw.length < pwdMinLength){
			$("#"+id1+"_complexity_chk").text(i18next.t('admin.tab_password_setting_length_msg1')+pwdMinLength+i18next.t('admin.tab_password_setting_length_msg2'));
			$("#"+id1+"_complexity_chk").css("color","red");
			PwChangeFlag = false;
		}else if(checkSpecial(changePw) == undefined && checkSpecial(changePw) == false){
			$("#"+id1+"_complexity_chk").text(i18next.t('admin.tab_password_setting_special_help'));
			$("#"+id1+"_complexity_chk").css("color","red");
			PwChangeFlag = false;
		}else if(checkNumber(changePw) == undefined && checkNumber(changePw) == false){
			$("#"+id1+"_complexity_chk").text(i18next.t('admin.tab_password_setting_number_help'));
			$("#"+id1+"_complexity_chk").css("color","red");
			PwChangeFlag = false;
		}else{
			PwChangeFlag = true;
			$("#"+id1+"_complexity_chk").text("");
		}
	}
	
	if(changePw == null || changePw == "")
		$("#"+id1+"_complexity_chk").text("");
}
	
function isCheck2(id1, id2){
	
	var changePw = $("#"+id1+"").val();
	var changePw2 = $("#"+id2+"").val();
	if(changePw == changePw2){
		$("#"+id2+"_check").text(i18next.t('admin.tab_password_setting_pwd_chk_help'));
		$("#"+id2+"_check").css("color","blue");
		$("#checkMsg").css("display","block");
		PwChangeFlag = true;
	}else if(changePw != changePw2){
		$("#"+id2+"_check").text(i18next.t('admin.tab_password_setting_pwd_unchk_help'));
		$("#"+id2+"_check").css("color","red");
		$("#checkMsg").css("display","block");
		PwChangeFlag = false;
	}
	if(changePw == null || changePw == "") {
		$("#checkMsg").css("display","none");
		$("#"+id2+"_check").text("");
	}
}

function modifyUser(idx, userdocid){
	var id = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var name = $("#modifyUserName").text();
	var userId = $("#modifyUserId").text();
	var password = $("#modifyUserPassword").val();
	var confirmPassword = $("#modifyUserPassword2").val();
	var hidden_domain = $("#hidden_domainName").val();
	var changeGroupIdx = $("#modifyUserGroupIdx").val();
	var parmGroupIdx = 0;
	var userdocid = userdocid;
	
		
	if ( password == "" )
		password = null;
	
	if ( confirmPassword == "" )
		confirmPassword = null;
	
	jsonData = JSON.stringify({
		"doc":{
			"userpw": ""+confirmPassword+""
		 }
	});
	
	if( password != confirmPassword ){
		showMsg(i18next.t('autoDelete.error'),i18next.t('certification.err_msg'));
	}else{
		$.ajax({
			type:"POST",
			url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup/"+userdocid+"/_update",
			contentType: "application/json; charset=UTF-8",
			data: jsonData,
			dataType:"JSON",
			timeout: 30000,
			success : function(data) {
				
				var code=0, msg="";
				
				$.each(data, function(key,value){
					if ( key == "result" )
					{
						
						if ( value != "updated" )
						{
							code = 1
						}
					}			
				});
				
				if ( code != 0 )
				{
					
					if ( code == 6 )
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return;
				}
				else
				{
					showMsg(i18next.t('errNotiMsg.msg_title'), i18next.t('admin.tab_password_manager_result_help'));
				}
			},
			error: function(xhr, status, error)	{
				showErrMsg(12);
			},
			complete : function(data) {
				updateContent();
				getUserList("",hidden_domain,"");
				getOrganizationList();
			}
		});
	}
}

function addGroup(domainName) {
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	
	jsonData = JSON.stringify({
		"id":email, "userIp":userIp
	});
	
	webApiUrl = $('#webApiUrl').val();
	
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/getOrgList",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			var code=0, msg="", html="";
			var dataArray = new Array();
			
			$.each(data, function(key, value) {
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
				if ( key == "list")
				{
					dataArray = value;
				}
				
				html  = "<div class=\"modal-dialog\" style=\"width: 22%\">";
				html += "  <div class=\"modal-content\">";
				html += "    <div class=\"modal-header\">";
				html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
				html += "        <span aria-hidden=\"true\">&times;</span></button>";
				html += "      <h4 class=\"modal-title\"><span class=\"i18n-user-modal-group-manager\"></span></h4>";
				html += "    </div>";
				html += "    <div class=\"modal-body\">";
				html += "      <button type=\"button\" class=\"btn btn-default\" style=\"width: 100%\" onclick=\"addOrganization('"+domainName+"');\"><span class=\"i18n-user-btn-add-group\"></span></button>";
				html += "      <table id=\"example2\" class=\"table table-bordered\">";
				html += "        <tbody id=\"modalAddGroup\">";
				
				for(var i=0;i<dataArray.length;i++){
					if (domainName == dataArray[i].domainName)
					{
						$.each(dataArray[i].org, function(idx, val){
							html += "<tr>";
							if ( val.name == "__DEFAULT__" )
								html += "  <td><a href=\"#\" onclick=\"selectGroup('"+idx+"','"+val.idx+"');\"><span id=\"selectGroupName_"+idx+"\" class=\"i18n-user-default-group-name\"></span></a></td>";
							else
								html += "  <td><a href=\"#\" onclick=\"selectGroup('"+idx+"','"+val.idx+"');\"><span id=\"selectGroupName_"+idx+"\">"+val.name+"</span></a></td>";
							html += "</tr>";
						});
					}
				}
				
				html += "        </tbody>";
				html += "      </table>";
				html += "    </div>";
				html += "    <div class=\"modal-footer\">";
				html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" style=\"margin-left:10px;\"\"><span class=\"i18n-user-btn-submit\"></span></button>";
				html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
				html += "    </div>";
				html += "  </div>";
				html += "</div>";
				
				$("#modal-add-group").empty();
				$("#modal-add-group").append(html);
				$("#modal-add-group").modal();
					
			});
			
			if ( code != 0 ){
				if( code == 6)
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return
			}
		},
		error: function(xhr, status, error)	{
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			updateContent();
		}
	});
}

function selectGroup(idx, groupIdx) {
	var selectGroupName = $("#selectGroupName_"+idx).text();
	
	$("#modal-add-group").modal('hide');
	$("#modifyUserGroupName").text(selectGroupName);
	$("#modifyUserGroupIdx").val(groupIdx);
}

function listUp(idx) {
	
	if($("#organizationDepth_"+idx).css("display") == "none"){
		$("#listUpIcon_"+idx).attr('class','fa fa-minus-square-o');
		$("#organizationDepth_"+idx).css("display","block");
	}else{
		$("#listUpIcon_"+idx).attr('class','fa fa-plus-square-o');
		$("#organizationDepth_"+idx).css("display","none");
	}
}

function getOrganizationList() {
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var code = 0;
	
	jsonData = JSON.stringify({
		"size": 1,
		"_source": ["domain"],
		"query": {
			"bool": {
				"must": 
					{"term": 
						{ "userid": ""+email+""}
					},
				"must_not": [
					
				],
				"filter": [
				]
			}
		}
	});
	
	$.ajax({
		type:"POST",
		url: "http://10.10.10.229:9200/sc_usergroup_info/_search",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
						
			$.each(data, function(key, value) {
				if ( key == "hits" )
				{
					hits = value.hits;

					jsonData_Company = JSON.stringify({
						"_source": ["domain","username","right","groupname","division"],
						"query": {
							"bool": {
								"must": [
									{"term": 
										{ "domain": ""+hits[0]._source.domain+""}
									}],
								"must_not": [
								],
								"filter": [
								]
							}
						},
						"aggs": {
							"그룹별사용자수": {"terms": { "field": "groupname"}}
						}
					});			
				}
			});
			$.ajax({
				type:"POST",
				url: "http://10.10.10.229:9200/sc_usergroup_info/_search",
				contentType: "application/json; charset=UTF-8",
				data: jsonData_Company,
				dataType:"JSON",
				timeout: 30000,
				success : function(data) {
					var html = "", total = 0, count=0, buckets ="start";

					$.each(data, function(key, value) {
						if ( key == "aggregations" )
						{
							$.each(value, function(idx, val){
								buckets = "";
								buckets = val.buckets;
								
							});
						}
						
						if ( key == "hits" )
						{
							
							hits = value.hits;
							for(var i=0;i<hits.length;i++){
								if ( hits[i]._source.division == 2)
									{
										total = total +1;
										if ( hits[i]._source.right != "")
										{
											count = count +1;
										}
									}
							}
														
						}

						if ( hits != "" && buckets != "start")
						{
								html += "<tr>";
								html += "  <td id=\"selectDomainTr_"+hits[0]._source.domain+"\">";
								html += "    <ul style=\"list-style: none; padding-left: 3%\">";
								html += "      <li>";
								html += "        <div style=\"display: inline-block; width: 34%;\">";
							for(var i=0;i<hits.length;i++){	
								if ( buckets != "" )
								{
									html += "          <a href=\"#\" style=\"cursor: pointer;\" onclick=\"listUp("+i+");\">";
									html += "            <i id=\"listUpIcon_"+i+"\" class=\"fa fa-plus-square-o\" style=\"margin-right: 10px; vertical-align: middle;\"></i>";
									html += "          </a>";
									html += "          <a href=\"#\" onclick=\"getUserList('','"+hits[i]._source.domain+"');\"><span id=\"domainName_"+i+"\" title=\""+hits[i]._source.domain+"\">"+hits[i]._source.domain+"</span></a>";
								}
								else
								{
									html += "          <a href=\"#\" onclick=\"getUserList('','"+hits[i]._source.domain+"');\"><span id=\"domainName_"+i+"\" style=\"margin-left: 14%\" title=\""+hits[i]._source.domain+"\">"+hits[i]._source.domain+"</span></a>";	
								}

								html += "          <span id=\"domainUserCnt\" style=\"margin-left: 10px;\">("+total+")</span>";
								html += "        </div>";
			//						html += "        <button type=\"button\" class=\"btn btn-default\" style=\"padding: 0; margin-left: 10px\" onclick=\"addOrganization('"+orgDomainArray[i]+"');\"><span class=\"i18n-user-btn-add-group\"></span></button>";
								html += "        <div style=\"display: inline-block;\">";
								html += "          <button type=\"button\" class=\"btn btn-default2\" style=\"padding: 0; margin-left: 10px\" onclick=\"addOrganization('"+hits[i]._source.domain+"');\"><img src=\"dist/img/add_group.png\"></button>";
								html += "        </div>";
								html += "      </li>";
								
								if (  buckets.length != 0 )
									{
										html += "      <li>";
										html += "        <ul>";
										html += "          <li id=\"organizationDepth_"+i+"\" style=\"display: none\">";
										$.each(buckets, function(a, b){
												count = b.doc_count -1;
												html += "  <input type=\"hidden\" id=\"groupname\" value=\""+b.key+"\">"
												
											
												html += "            <div style=\"display: inline-block;\">";
								
													
													
													
														
												html += "      <a href=\"#\" style=\"cursor: pointer;\" onclick=\"getUserList('','"+hits[i]._source.domain+"','"+b.key+"');\"><span id=\"organizationName\">"+b.key+"</span><span id=\"organizationUserCnt\" style=\"margin-left: 10px;\">("+count+")</span></a>";
												html += "            </div>";
												html += "            <div style=\"display: inline-block;\">";
												html += "              <button type=\"button\" class=\"btn btn-default btn-detail\" style=\"padding: 0; margin-left: 10px\" onclick=\"updateOrganization('"+b.key+"','"+hits[i]._id+"')\"><span><i style=\"font-size: 14px; color: orange\" class=\"glyphicon glyphicon-pencil i18n-domain-list-item-edit\"></i></span></button>";
												html += "              <button type=\"button\" class=\"btn btn-default btn-detail\" style=\"padding: 0; margin-left: 10px\" onclick=\"delOrg('"+hits[i]._id+"');\"><span><i style=\"font-size: 14px; color: orange\" class=\"glyphicon glyphicon-trash i18n-domain-list-item-del\"></i></span></button>";
												html += "            </div>";
												html += "            </br>";
										});
										html += "          </li>";
										html += "        </ul>";
										html += "      </li>";	

									}
									else
									{
										html += "      <li>";
										html += "        <ul>";
										html += "          <li id=\"organizationDepth_"+i+"\" style=\"display: none\">";
											
										html += "            <div style=\"display: inline-block;\">";
										html += "              <a href=\"#\" style=\"cursor: pointer;\" onclick=\"getUserList('','"+hits[i]._source.domain+"','');\"><span id=\"organizationName\" class=\"i18n-user-default-group-name\"></span><span id=\"organizationUserCnt\" style=\"margin-left: 10px;\">("+count+")</span></a>";										
										html += "            </div>";
																			html += "            <div style=\"display: inline-block;\">";
									html += "              <button type=\"button\" class=\"btn btn-default btn-detail\" style=\"padding: 0; margin-left: 10px\" onclick=\"updateOrganization('"+hits[i]._source.groupname+"','"+hits[i]._id+"')\"><span><i style=\"font-size: 14px; color: orange\" class=\"glyphicon glyphicon-pencil i18n-domain-list-item-edit\"></i></span></button>";
									html += "              <button type=\"button\" class=\"btn btn-default btn-detail\" style=\"padding: 0; margin-left: 10px\" onclick=\"delOrg('"+hits[i]._id+"');\"><span><i style=\"font-size: 14px; color: orange\" class=\"glyphicon glyphicon-trash i18n-domain-list-item-del\"></i></span></button>";
									html += "            </div>";
									html += "            </br>";
									html += "          </li>";
									html += "        </ul>";
									html += "      </li>";
									}
								html += "    </ul>";
								html += "  </td>";
								html += "</tr>";
													
							}
						$("#organizationList").empty();
						$("#organizationList").append(html);
							
						}	
				
				
					});
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
		error: function(xhr, status, error)	{
			alert(i18next.t('errNotiMsg.msg_content_0')+error);
			alert(email);
			document.location.href="login.jsp";
		},
		complete : function(data) {
			updateContent();
		}
	});
	
}

function addOrganization(domain) {
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 22%\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title\"><span class=\"i18n-user-btn-add-group\"></span></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <table id=\"example2\" class=\"table table-bordered\">";
	html += "        <tbody id=\"modalAddOrganization\">";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-list-group-name\"></span></th>";
	html += "            <td><input type=\"text\" id=\"addGroupName\" style=\"width: 100%;\"></td>";
	html += "          </tr>";
	html += "        </tbody>";
	html += "      </table>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" style=\"margin-left:10px;\" onclick=\"addOrg('"+domain+"')\"><span class=\"i18n-user-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	
	$("#modal-add-organization").empty();
	$("#modal-add-organization").append(html);
	$("#modal-add-organization").modal();
	updateContent();
}

function updateOrganization(groupName, idx) {
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 22%\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title\"><span class=\"i18n-user-modal-modify-group\"></span></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <table id=\"example2\" class=\"table table-bordered\">";
	html += "        <tbody id=\"modalAddOrganization\">";
	html += "          <tr>";
	html += "            <th><span class=\"i18n-user-list-group-name\"></span></th>";
	html += "            <td><input type=\"text\" id=\"modifyGroupName\" style=\"padding-left: 10px; width: 100%;\" value=\""+groupName+"\"></td>";
	html += "          </tr>";
	html += "        </tbody>";
	html += "      </table>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" style=\"margin-left:10px;\" onclick=\"modifyOrg('"+idx+"');\"><span class=\"i18n-user-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	$("#modal-update-organization").empty();
	$("#modal-update-organization").append(html);
	$("#modal-update-organization").modal();
	updateContent();
}

function delOrg(idx) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var idx = idx;
	
	$.ajax({
		type: "DELETE",
		url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup/"+idx,
		contentType: "application/json; charset=UTF-8",
		dataType: "JSON",
		timeout: 30000,
		success: function(data){
			var code = 0, msg = "";
			
			$.each(data, function(key,value){
				if ( key == "result" )
				{

					if ( value != "deleted" )
					{
						code = 1
					}
				}			
			});
			
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}else{
				showMsg(i18next.t('config.result'), i18next.t('config.result_msg'));
				getOrganizationList();
			}
		},
		error : function(xhr, status, error) {
			showErrMsg(12);
		},
		complate : function(data){
			Pace.restart();
			updateContent();
		}
	});
}

function modifyOrg(idx){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var groupName = $("#modifyGroupName").val();
	
	jsonData = JSON.stringify({
		"doc":{
			"group_name" : ""+groupName+""
		}
	});

	$.ajax({
		type: "POST",
		url: "http://10.10.10.229:9200/sc_user_info/sc_user/"+idx+"/_update",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType: "JSON",
		timeout: 30000,
		success: function(data){
			var code = 0, msg = "";
			
			$.each(data, function(key,value){
				if ( key == "result" )
				{
					
					if ( value != "updated" )
					{
						code = 1
					}
				}			
			});
			
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}else{
				showMsg(i18next.t('config.result'), i18next.t('config.result_msg'));
				getOrganizationList();
			}
		},
		error : function(xhr, status, error) {
			showErrMsg(12);
		},
		complate : function(data){
			$("#modal-update-organization").modal('hide');
			Pace.restart();
			updateContent();
		}
	});
}

function addOrg(domain){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var groupname = $("#addGroupName").val();
	var domain = domain
	jsonData = JSON.stringify( {
		"groupname" : ""+groupname+"",
		"domain" : ""+domain+"",
		"division": 1
		
	 });

	
//	console.log(jsonData)
	$.ajax({
		type: "POST",
		url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType: "JSON",
		timeout: 30000,
		success: function(data){
			var code = 0, msg = "";
			
			$.each(data, function(key,value){
				if ( key == "result" )
				{
					if ( value != "created" )
					{
						code = 1
					}
				}			
			});
			
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}else{
				showMsg(i18next.t('config.result'), i18next.t('config.result_msg'));
				getOrganizationList();
			}
		},
		error : function(xhr, status, error) {
			showErrMsg(12);
		},
		complate : function(data){
			$("#modal-add-organization").modal('hide');
			Pace.restart();
			updateContent();
		}
	});
	
}

function goPage(item)
{
	var domain = $("#hidden_domainName").val();
	getUserList(item, domain);
}

function getUserList(item, domain, groupname) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	offset = parseInt($('#pageIdx').val());
	size = 10;
	$("#addUserButton").css("display","block");
	
	$("#hidden_domainName").val(domain);
	$("#groupname").val(groupname);
	var defaultGroupIdx = null;
	
	if(groupname != null || groupname != undefined){
		defaultGroupIdx = groupname;
		jsonData = JSON.stringify({
						"size": 10000,
						"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
						"query": {
							"bool": {
								"must":[ 
									{"term": 
										{ "groupname": ""+defaultGroupIdx+""}
									},
									{"match":
									{"division" : "2"}
										}
									],
								"must_not": [
								{"term": 
										{ "username": ""}
									}
									
								],
								"filter": [
								]
							}
						}
					});
	}
	
	if(groupname == null && (domain != null || domain != undefined)){
		defaultGroupIdx = domain;
		jsonData = JSON.stringify({
						"size": 10000,
						"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
						"query": {
							"bool": {
								"must":[ 
									{"term": 
										{ "domain": ""+defaultGroupIdx+""}
									},
									{"match":
									{"division" : "2"}
										}
									],
								"must_not": [
								{"term": 
										{ "username": ""}
									}
									
								],
								"filter": [
								]
							}
						}
					});
	}
	
	if(item != undefined || item != '' || item != null){
		offset = item;
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	if ( offset < 0 )
		offset = 0;
	
	
	$.ajax({
		type:"POST",
		url: "http://10.10.10.229:9200/sc_usergroup_info/_search",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
					var html = "", code = 0
					$.each(data, function(key, value) {
						
						if ( key == "hits" )
						{
							
							hits = value.hits;
							
							
							for(var i=0;i<hits.length;i++){
								
								html += "<tr>";
								if(hits[i]._source.username == ""){
									html += "  <td class=\"text-center\"><span id=\"userListName_"+i+"\"><i style=\"font-size:11px; color:#ccc\" class=\"glyphicon glyphicon-minus\"></i></span></td>";
								}else{
									html += "  <td class=\"text-center\"><span id=\"userListName_"+i+"\">"+hits[i]._source.username+"</span></td>";
								}
								
								if ( hits[i]._source.groupname == "" )
									html += "  <td class=\"text-center\"><span id=\"userListGroupName_"+i+"\" class=\"i18n-user-default-group-name\"></span></td>";
								else
									html += "  <td class=\"text-center\"><span id=\"userListGroupName_"+i+"\">"+hits[i]._source.groupname+"</span></td>";
									
								html += "  <td class=\"text-center\"><span id=\"userListId_"+i+"\" title=\""+hits[i]._source.userid+"\">"+hits[i]._source.userid+"</span></td>";
								html += "  <td class=\"text-center\"><span id=\"userListTimeCreated_"+i+"\">"+hits[i]._source.timeCreated+"</span></td>";
								html += "  <input type=\"hidden\" id=\"userListTimeCreated2_"+i+"\" value=\""+hits[i]._source.timeCreated+"\">"
								html += "  <input type=\"hidden\" id=\"userListTimeUpdated_"+i+"\" value=\""+hits[i]._source.timeUpdated+"\">"
								html += "  <td class=\"text-center\">";
								html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" onclick=\"modal_modifyUser('"+i+"','"+hits[i]._id+"');\" ><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-pencil i18n-domain-list-item-edit\"></i></span></button>";
								html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" name=\"\" onclick=\"delete_user_popup('"+hits[i]._id+"');\"><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-trash i18n-domain-list-item-del\"></i></span></button>";
								html += "  </td>";
								html += "</tr>";
							}
											
							if ( hits.total == 0 )
							{
							html += "<tr><td class=\"text-center\" colspan='5'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
							}
						
					
						$("#userList").empty();
						$("#userList").html(html);
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
			showErrMsg(12);
		},
		complete : function(data) {
			setPageIdx();
			updateContent();
			$("#modifyUserGroupIdx").val("");
		}
	});
}


	
function getUserListSearch(domain) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	offset = parseInt($('#pageIdx').val());
	var domain = domain;
	var groupIdx = parseInt($("#groupIdx").val());
	
	var searchSelect = $("#userSearchSelect").val();
	var searchKeyword = $("#searchKeyword").val();

	if(domain != null || domain != undefined){
		if(searchSelect == "username"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"username" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
		if(searchSelect == "groupname"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"groupname" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
		if(searchSelect == "userid"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"userid" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
	}
	
	else{
		if(searchSelect == "username"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"username" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
		if(searchSelect == "groupname"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"groupname" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
		if(searchSelect == "userid"){
			jsonData = JSON.stringify({
							"_source": ["userid", "username", "groupname", "right","domain","crmdomain", "timeCreated", "timeUpdated"],
							"query": {
								"bool": {
									"must":[ 
										{"term": 
											{ "domain": ""+domain+""}
										},
										{"match":
											{"division" : "2"}
											}
										],
									"must_not": [
									{"term": 
											{ "username": ""}
										}
										
									],
									"filter": [
										{"term" : 
											{"userid" : searchKeyword}
										}
										
									]
								}
							}
						});
		}
	}
	
	$.ajax({
		type:"POST",
		url: "http://10.10.10.229:9200/sc_usergroup_info/_search",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
					var html = "", code = 0
					$.each(data, function(key, value) {
						
						if ( key == "hits" )
						{
							hits = value.hits;
							
							for(var i=0;i<hits.length;i++){
								
								html += "<tr>";
								if(hits[i]._source.username == ""){
									html += "  <td class=\"text-center\"><span id=\"userListName_"+i+"\"><i style=\"font-size:11px; color:#ccc\" class=\"glyphicon glyphicon-minus\"></i></span></td>";
								}else{
									html += "  <td class=\"text-center\"><span id=\"userListName_"+i+"\">"+hits[i]._source.username+"</span></td>";
								}
								
								if ( hits[i]._source.groupname == "" )
									html += "  <td class=\"text-center\"><span id=\"userListGroupName_"+i+"\" class=\"i18n-user-default-group-name\"></span></td>";
								else
									html += "  <td class=\"text-center\"><span id=\"userListGroupName_"+i+"\">"+hits[i]._source.groupname+"</span></td>";
									
								html += "  <td class=\"text-center\"><span id=\"userListId_"+i+"\" title=\""+hits[i]._source.userid+"\">"+hits[i]._source.userid+"</span></td>";
								html += "  <td class=\"text-center\"><span id=\"userListTimeCreated_"+i+"\">"+hits[i]._source.timeCreated+"</span></td>";
								html += "  <input type=\"hidden\" id=\"userListTimeCreated2_"+i+"\" value=\""+hits[i]._source.timeCreated+"\">"
								html += "  <input type=\"hidden\" id=\"userListTimeUpdated_"+i+"\" value=\""+hits[i]._source.timeUpdated+"\">"
								html += "  <td class=\"text-center\">";
								html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" onclick=\"modal_modifyUser('"+i+"','"+hits[i]._id+"');\" ><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-pencil i18n-domain-list-item-edit\"></i></span></button>";
								html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" name=\"\" onclick=\"delete_user_popup('"+hits[i]._id+"');\"><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-trash i18n-domain-list-item-del\"></i></span></button>";
								html += "  </td>";
								html += "</tr>";
							}
/// 왜 안나올까									
						if ( hits.length == 0 )
							{
							html = "";
							html += "<tr><td class=\"text-center\" colspan='5'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
							}
					
						$("#userList").empty();
						$("#userList").append(html);
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
			showErrMsg(12);
		},
		complete : function(data) {
			setPageIdx();
			updateContent();
			$("#modifyUserGroupIdx").val("");
		}
	});
}


function delete_user_popup(idx){
	
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 25%;\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title i18n-user-modal-del-title\"></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <div><span class=\"i18n-user-modal-del-body\"></span></div>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-no\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" onclick=\"delUser('"+idx+"');\"><span class=\"i18n-domain-btn-yes\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	$("#modal-user-delete").empty();
	$("#modal-user-delete").append(html);
	$("#modal-user-delete").modal();
	updateContent();
}

function delUser(idx){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var hidden_domain = $("#hidden_domainName").val();
	var groupIdx = $("#groupIdx").val();
	var idx = idx
	
	$.ajax({
		type: "DELETE",
		url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup/"+idx,
		contentType: "application/json; charset=UTF-8",
		dataType: "JSON",
		timeout: 30000,
		success: function(data){
			var code = 0, msg = "";
			
			$.each(data, function(key,value){
				if ( key == "result" )
				{

					if ( value != "deleted" )
					{
						code = 1
					}
				}			
			});
			
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}else{
				showMsg(i18next.t('config.result'), i18next.t('config.result_msg'));
				getUserList("",hidden_domain,groupIdx);
			}
		},
		error : function(xhr, status, error) {
			showErrMsg(12);
		},
		complete : function(data) {
			$("#modal-user-delete").modal('hide');
			updateContent();
			getOrganizationList();
		}
	});
}