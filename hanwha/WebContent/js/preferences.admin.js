var PwChangeFlag = false;
var adminAccountPwFlag = false;
var adminDomainUpdateFlag = false;

function adminPreferences(){
	var adminPwd_flag = getCookie("adminPwd_flag");
	if(adminPwd_flag == "check"){
		$(".content").empty();
		$(".content").load("admin.jsp");
		$("#interval_flags").val("admin");
	}else{
		certification();
	}
}

function toggleCheckbox(cb)
{
	checkboxes = document.getElementsByName('checkDomain');
	for ( var i=0, n=checkboxes.length;i<n;i++ )
		checkboxes[i].checked = cb.checked;
}

function accessAdminAdd(){
	
	$("button[name=pop_modal]").click(function(){
		var aclType = $("#acl_type").val();
		var html = "";
		
		html  = "<div class=\"modal-dialog\">";
		html += "  <div class=\"modal-content\">";
		html += "    <div class=\"modal-header\">";
		html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		html += "        <span aria-hidden=\"true\">&times;</span></button>";
		html += "        <h4 class=\"modal-title i18n-admin-tab-access-setting-add-modal-title\"></h4>";
		html += "    </div>";
		html += "    <div class=\"modal-body\" id=\"accessAdminAdd\">";
		html += "      <table class=\"table table-bordered table-hover\">";
		html += "        <colgroup>";
		html += "          <col width=\"5%\"/>";
		html += "          <col width=\"10%\"/>";
		html += "        </colgroup>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-add-modal-ip\"></span></th>";
		html += "          <td class=\"text-center\"><input class=\"input_ACL i18n-admin-tab-access-setting-add-modal-ip-title\" type=\"text\" id=\"addIp\" onchange=\"checkIpForm(this.value)\"></td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-add-modal-policy\"></span></th>";
		html += "          <td class=\"text-left\">";
		if(aclType == "allow"){
			html += "            <label class=\"radio-inline\">";
			html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" id=\"add_permitACL\" value=\"permit\" checked><span class=\"span-margin i18n-admin-tab-access-setting-add-modal-allow\" style=\"margin-right: 50px;\"></span>";
			html += "            </label>";
			html += "            <label class=\"radio-inline\">";
			html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" id=\"add_blockACL\" value=\"block\"><span class=\"span-margin i18n-admin-tab-access-setting-add-modal-deny\"></span>";
			html += "            </label>";	
		}else{
			html += "            <label class=\"radio-inline\">";
			html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" id=\"add_permitACL\" value=\"permit\"><span class=\"span-margin i18n-admin-tab-access-setting-add-modal-allow\" style=\"margin-right: 50px;\"></span>";
			html += "            </label>";
			html += "            <label class=\"radio-inline\">";
			html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" id=\"add_blockACL\" value=\"block\" checked><span class=\"span-margin i18n-admin-tab-access-setting-add-modal-deny\"></span>";
			html += "            </label>";
		}
		
		html += "		   </td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-add-modal-ip-type\"></span></th>";
		html += "          <td class=\"text-left\">";
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"addRadioIpType\" class=\"RadioACL flat\" value=\"ip\" id=\"add_typeIp\" checked><span class=\"span-margin i18n-admin-tab-access-setting-add-modal-ip\" style=\"margin-right: 50px;\"></span>";
		html += "            </label>";
		html += "		   </td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-add-modal-desc\"></span></th>";
		html += "          <td class=\"text-center\"><input class=\"input_ACL i18n-admin-tab-access-setting-add-modal-desc-title\" type=\"text\" id=\"addExplanation\"></td>";
		html += "        </tr>";
		html += "      </table>";
		html += "    </div>";
		html += "    <div class=\"modal-footer\">";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"addAdminACL();\"><span class=\"i18n-admin-btn-submit\"></span></button>";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-admin-btn-close\"></span></button>";
		html += "    </div>";
		html += "  </div>";
		html += "</div>";
		
		$("#modal-default").empty();
		$("#modal-default").append(html);
		$("#modal-default").modal();
		
		updateContent();
		
		$('#accessAdminAdd input[type="radio"]').iCheck({
			checkboxClass: 'icheckbox_flat-blue',
	        radioClass: 'iradio_flat-blue'
	    });
	});
}

function accessAdminUpdate(){
	
	$("button[name=update_modal]").click(function(){
		var modal_id = $(this).attr('id');
		var html = "";
		
		html  = "<div class=\"modal-dialog\">";
		html += "  <div class=\"modal-content\">";
		html += "    <div class=\"modal-header\">";
		html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		html += "        <span aria-hidden=\"true\">&times;</span></button>";
		html += "        <h4 class=\"modal-title i18n-admin-tab-access-setting-update-modal-title\"></h4>";
		html += "    </div>";
		html += "    <div class=\"modal-body\" id=\"accessAdminUpdate\">";
		html += "      <table class=\"table table-bordered table-hover\">";
		html += "        <colgroup>";
		html += "          <col width=\"5%\"/>";
		html += "          <col width=\"10%\"/>";
		html += "        </colgroup>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-update-modal-ip\"></span></th>";
		html += "          <td class=\"text-center\"><input class=\"input_ACL\" type=\"text\" id=\"updateIp\" title=\""+$("#acl_ip_"+modal_id+"").text()+"\" value=\""+$("#acl_ip_"+modal_id+"").text()+"\"></td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-update-modal-policy\"></span></th>";
		html += "          <td class=\"text-left\">";
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" value=\"permit\" id=\"update_permitACL\"><span class=\"span-margin i18n-admin-tab-access-setting-update-modal-allow\" style=\"margin-right: 50px;\"></span>";
		html += "            </label>";
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"RadioACL\" class=\"RadioACL flat\" value=\"block\" id=\"update_blockACL\"><span class=\"span-margin i18n-admin-tab-access-setting-update-modal-deny\"></span>";
		html += "            </label>";
		html += "		   </td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-update-modal-ip-type\"></span></th>";
		html += "          <td class=\"text-left\">";
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"updateRadioIpType\" class=\"RadioACL flat\" value=\"ip\" id=\"update_typeIp\" checked><span class=\"span-margin i18n-admin-tab-access-setting-update-modal-ip\" style=\"margin-right: 50px;\"></span>";
		html += "            </label>";
		html += "		   </td>";
		html += "        </tr>";
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-access-setting-update-modal-desc\"></span></th>";
		html += "          <td class=\"text-center\"><input class=\"input_ACL\" type=\"text\" id=\"updateExplanation\" title=\""+$("#acl_desc_"+modal_id+"").text()+"\" value=\""+$("#acl_desc_"+modal_id+"").text()+"\"></td>"
		html += "        </tr>";
		html += "      </table>";
		html += "    </div>";
		html += "    <input type=\"hidden\" id=\"updateAclIdx\" value=\""+$("#acl_idx_"+modal_id).val()+"\">"
		html += "    <div class=\"modal-footer\">";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"updateAdminACL();\"><span class=\"i18n-admin-btn-submit\"></span></button>";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-admin-btn-close\"></span></button>";
		html += "    </div>";
		html += "  </div>";
		html += "</div>";
		
		$("#modal-update").empty();
		$("#modal-update").append(html);
		$("#modal-update").modal();
		
		updateContent();
		
		$('#accessAdminUpdate input[type="radio"]').iCheck({
			checkboxClass: 'icheckbox_flat-blue',
			radioClass: 'iradio_flat-blue'
	    });
	});
}

function admin_help(){
	
	$("a[data-toggle='tab']").click(function(e) {
		if($(this).parent().attr('id') == "accessAdmin"){
			$("#h1Help").empty();
			$("#h1Help").append("<small><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-admin-tab-access-setting-help\"></span></small>");
		}else if($(this).parent().attr('id') == "langugeAdmin"){
		    $("#h1Help").empty();
		    $("#h1Help").append("<small><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-admin-tab-language-setting-help\"></span></small>");
		}else if($(this).parent().attr('id') == "passwordAdmin"){
			$("#h1Help").empty();
			$("#h1Help").append("<small><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-admin-tab-password-setting-help\"></span></small>");
		}else if($(this).parent().attr('id') == "adddelAdmin"){
			$("#h1Help").empty();
			$("#h1Help").append("<small><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-admin-tab-admin-addDel-help\"></span></small>");
		}else if($(this).parent().attr('id') == "passwordManager"){
			$("#h1Help").empty();
			$("#h1Help").append("<small><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-admin-tab-password-manager-help\"></span></small>");
		}
		updateContent();
	});
}

function admin_update(idx,adminid) {
	
	var right = $("#right_"+idx).val();
	var language = $("#language_"+idx).val();
	var hiddenEmail = $("#manager_"+idx).text();
	var adminid = adminid;
	
	var html = "";
	
	html  = "<div class=\"modal-dialog\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
//	html += "        <h4 class=\"modal-title i18n-admin-tab-admin-addDel-update-modal-title\"></h4>";
	
	html += "        <h4 class=\"\">정보 변경</h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\" id=\"accessAdminUpdate\">";
	html += "      <div class=\"nav-tabs-custom\" style=\"box-shadow: none;\">";
	html += "        <ul class=\"nav nav-tabs\">";
	html += "          <li class=\"active\" id=\"modifyPasswd\"><a href=\"#ModifyPasswd\" data-toggle=\"tab\"><span class=\"i18n-admin-tab-admin-addDel-modify-passwd\"></span></a></li>";
	html += "          <li id=\"modifyRight\"><a href=\"#ModifyRight\" data-toggle=\"tab\"><span class=\"i18n-admin-tab-admin-addDel-modify-right\"></span></a></li>";
	html += "        </ul>";
	html += "        <br/>";
	html += "        <div class=\"tab-content\">";
	html += "          <div class=\"active tab-pane\" id=\"ModifyPasswd\">";
	html += "            <table class=\"table table-bordered table-hover\">";
	html += "              <colgroup>";
	html += "                <col width=\"5%\"/>";
	html += "                <col width=\"10%\"/>";
	html += "              </colgroup>";
	html += "              <tr>";
	html += "                <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-update-modal-new-pwd\"></span></th>";
	html += "                <td><input type=\"password\" id=\"account_newpwd\" onkeyup=\"isCheck('account_newpwd','account_newpwd2');\"><span style=\"font-size: 12px; margin-left: 15px;\" id=\"account_newpwd_complexity_chk\"></span></td>";
	html += "              </tr>";
	html += "              <tr>";
	html += "                <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-update-modal-new-pwd-confirm\"></span></th>";
	html += "                <td><input type=\"password\" id=\"account_newpwd2\" onkeyup=\"isCheck2('account_newpwd','account_newpwd2');\"><span style=\"font-size: 12px; margin-left: 15px;\" id=\"account_newpwd2_check\"></span></td>";
	html += "              </tr>";
	html += "            </table>";
	html += "          </div>";
	html += "          <div class=\"tab-pane\" id=\"ModifyRight\">";
	html += "            <table class=\"table table-bordered table-hover\">";
	html += "              <colgroup>";
	html += "                <col width=\"5%\"/>";
	html += "                <col width=\"10%\"/>";
	html += "              </colgroup>";
	html += "              <tr>";
	html += "                <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-list-right\"></span></th>";
	html += "                <td>";
	html += "                  <label class=\"radio-inline\" style=\"padding-left: 0px !important;\">";
	html += "                    <input type=\"radio\" name=\"UpdateRadioRight\" class=\"flat\" id=\"update_systemAdmin\" value=\"2\"><span class=\"i18n-admin-tab-admin-addDel-system-admin\" style=\"padding-left: 10px; margin-right: 5px;\"></span>";
	html += "                  </label>";
	html += "                  <label class=\"radio-inline\">";
	html += "                    <input type=\"radio\" name=\"UpdateRadioRight\" class=\"flat\" id=\"update_domainAdmin\" value=\"1\"><span class=\"i18n-admin-tab-admin-addDel-domain-admin\" style=\"padding-left: 10px; \"></span>";
	html += "                  </label>";	
	html += "                </td>";
	html += "              </tr>";
//	html += "              <tr>";
//	html += "                <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-list-lang\"></span></th>";
//	html += "                <td>";
//	html += "                  <select id=\"updateAdmin_language\" style=\"width: 20%; text-align-last: center;\">";
//	html += "                    <option value=\"0\" class=\"i18n-admin-tab-language-setting-ko\"></option>";
//	html += "                    <option value=\"1\" class=\"i18n-admin-tab-language-setting-us\"></option>";
//	html += "                    <option value=\"2\" class=\"i18n-admin-tab-language-setting-jp\"></option>";
//	html += "                  </select>";
//	html += "                </td>";
//	html += "              </tr>";
	html += "            </table>";
	html += "          </div>";
	html += "        </div>";
	html += "      </div>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"domainAdminChangePwd('"+adminid+"');\"><span class=\"i18n-admin-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-admin-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	html += "<input type=\"hidden\" id=\"hiddenManager\" value=\""+hiddenEmail+"\">";
	html += "<input type=\"hidden\" id=\"adminid\" value=\""+adminid+"\">";
	
	$("#modal-update").empty();
	$("#modal-update").append(html);
	$("#modal-update").modal();
	
	updateContent();
	
	$('#accessAdminUpdate input[type="radio"]').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
	
	if ( right == 1 )
	{
		$("#update_domainAdmin").iCheck('check');
	}
	else if ( right == 2 )
	{
		$("#update_systemAdmin").iCheck('check');
	}
	
	$("#updateAdmin_language").val(language);
}

function admin_addDel() {
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var domainName = new Array();
	var html = "";
	
	
	ES_URL = "/hanwha/ajax/ES_admin.jsp?type=admin_addDel";
	

	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			
			data = JSON.parse(data.trim());
			
			var code=0, msg="", html="";
			
			$.each(data, function(key,value){
				if ( key == "hits" )
				{
					
					hits = value.hits;		
					
					// if (hits.total)
					// {
						// code = 1;
					// }
						
					for(var i=0;i<hits.length;i++)
					{
						domainName.push(hits[i]._source.domain);
					}
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
			setTimeout(updateContent(), 1000);
			addPopup(domainName);
		}
	});
}

function addPopup(domainName)
{
	var html = "";
	
	html  = "<div class=\"modal-dialog\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "        <h4 class=\"modal-title i18n-admin-tab-admin-addDel-add-modal-title\"></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\" id=\"accessAdminAdd\">";
	html += "      <table class=\"table table-bordered table-hover\">";
	html += "        <colgroup>";
	html += "          <col width=\"5%\"/>";
	html += "          <col width=\"10%\"/>";
	html += "        </colgroup>";
	if($("#usertype").val() == "2")
	{
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-add-modal-domain-name\"></span></th>";
		html += "          <td>";
		html += "            <select id=\"addAdmin_domainName\" style=\"width: 50%; text-align-last: center;\">";
		html += "              <option value=\"null\" class=\"i18n-admin-tab-admin-addDel-domain-list-none\"></option>";
		for(var i=0;i<domainName.length;i++){
			html += "<option value=\""+domainName[i]+"\">"+domainName[i]+"</option>";
		}
		html += "            </select>";
		html += "          </td>";
		html += "        </tr>";
	}
	html += "        <tr>";
	html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-add-modal-id\"></span></th>";
	html += "          <td>";
	html += "            <input type=\"text\" id=\"addAdmin_adminId\" style=\"width: 50%; padding-left: 5px;\"><span id=\"adminAccountIdCheck\" style=\"font-size: 12px; margin-left: 10px;\"></span>";
	html += "          </td>";
	html += "        </tr>";
	html += "        <tr>";
	html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-add-modal-name\"></span></th>";
	html += "          <td>";
	html += "            <input type=\"text\" id=\"addAdmin_adminname\" style=\"width: 50%; padding-left: 5px;\"><span id=\"\" style=\"font-size: 12px; margin-left: 10px;\"></span>";
	html += "          </td>";
	html += "        </tr>";
	html += "        <tr>";
	html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-add-modal-new-pwd\"></span></th>";
	html += "          <td>";
	html += "            <input type=\"password\" id=\"addAdmin_adminPw\" style=\"width: 50%; padding-left: 5px;\" onkeyup=\"isCheck('addAdmin_adminPw','addAdmin_adminPw2');\"><span style=\"font-size: 12px; margin-left: 15px;\" id=\"addAdmin_adminPw_complexity_chk\"></span>";
	html += "          </td>";
	html += "        </tr>";
	html += "        <tr>";
	html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-add-modal-new-pwd-confirm\"></span></th>";
	html += "          <td>";
	html += "            <input type=\"password\" id=\"addAdmin_adminPw2\" style=\"width: 50%; padding-left: 5px;\" onkeyup=\"isCheck2('addAdmin_adminPw','addAdmin_adminPw2');\" onkeydown=\"javascript:if(event.keyCode==13){getDomainAdminList();}\"><span style=\"font-size: 12px; margin-left: 15px;\" id=\"addAdmin_adminPw2_check\"></span>";
	html += "          </td>";
	html += "        </tr>";
	if($("#usertype").val() == "2")
	{
		html += "        <tr>";
		html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-list-right\"></span></th>";
		html += "          <td>";
		html += "            <label class=\"radio-inline\" style=\"padding-left: 0px !important;\">";
		html += "              <input type=\"radio\" name=\"RadioRight\" class=\"flat\" id=\"add_systemAdmin\" value=\"2\" checked><span class=\"i18n-admin-tab-admin-addDel-system-admin\" style=\"padding-left: 10px; margin-right: 5px;\"></span>";
		html += "            </label>";
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"RadioRight\" class=\"flat\" id=\"add_domainAdmin\" value=\"1\"><span class=\"\" style=\"padding-left: 10px; \">회사 관리자</span>";
		html += "            </label>";	
		html += "            <label class=\"radio-inline\">";
		html += "              <input type=\"radio\" name=\"RadioRight\" class=\"flat\" id=\"add_domainAdmin\" value=\"3\"><span class=\"\" style=\"padding-left: 10px; \">총괄 관리자</span>";
		html += "            </label>";	
		html += "          </td>";
		html += "        </tr>";
	}
	html += "              <input type=\"hidden\" name=\"RadioRight\" class=\"flat\" id=\"add_domainAdmin\" value=\"4\"><span class=\"\" style=\"padding-left: 10px; \">총괄 사용자</span>";
//	html += "        <tr>";
//	html += "          <th class=\"accessAdminTh\"><span class=\"i18n-admin-tab-admin-addDel-list-lang\"></span></th>";
//	html += "          <td>";
//	html += "            <select id=\"addAdmin_language\" style=\"width: 20%; text-align-last: center;\">";
//	html += "              <option value=\"0\" class=\"i18n-admin-tab-language-setting-ko\"></option>";
//	html += "              <option value=\"1\" class=\"i18n-admin-tab-language-setting-us\"></option>";
//	html += "              <option value=\"2\" class=\"i18n-admin-tab-language-setting-jp\"></option>";
//	html += "            </select>";
//	html += "          </td>";
//	html += "        </tr>";
	html += "      </table>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\"  onclick=\"addDomain();\"><span class=\"i18n-admin-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-admin-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	$("#modal-addDel").empty();
	$("#modal-addDel").append(html);
	$("#modal-addDel").modal();
	
	$('#accessAdminAdd input[type="radio"]').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
	
	setTimeout(function(){getDomainAdminList();},1000);
	updateContent();
		
}

function getAdminACLList(acl) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var html = "";
	
	orderBy = $('#orderBy').val();
	asc = ($('#asc').val() === "true");
	
	webApiUrl = $('#webApiUrl').val();
	aclType = acl;
	
	if(aclType == "unuse"){
		$(".table-acl").hide();
		$(".table-acl-list").hide();
		return false;
	}else{
		jsonData = JSON.stringify({
			"id":email, 
			"userIp":userIp,
			"aclType":aclType,
			"orderBy":orderBy,
			"asc":asc
		});
	}
	
	
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/getAdminACLList",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="", listCnt = 0;
			
			$.each(data, function(key, value) {
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
				if ( key == "listCnt"){
					listCnt = value;
					$("#recCount").text(numberWithCommas(listCnt));
				}
				if ( key == "list"){
					var typeName = "";

					for(var i=0; i<value.length; i++){
						
						if(value[i].ipType == 0)
							typeName = i18next.t('admin.tab_access_type_ip');
						else if(value[i].ipType == 1)
							typeName = i18next.t('admin.tab_access_type_netmask');
						else if(value[i].ipType == 2)
							typeName = i18next.t('admin.tab_access_type_wildcard');
						
						html += "<tr>";
						html += "  <td class=\"text-center text-over\"><span id=\"acl_ip_"+i+"\">"+value[i].ip+"</span></td>";
						html += "  <td class=\"text-center\"><span id=\"acl_type_"+i+"\">"+typeName+"</span></td>";
						html += "  <td class=\"text-center text-over\"><span id=\"acl_desc_"+i+"\">"+value[i].desc+"</span></td>";
						html += "  <td class=\"text-center text-over\"><span>"+parseTime(value[i].createdTime)+"</span></td>";
						html += "  <input type=\"hidden\" id=\"acl_idx_"+i+"\" value=\""+value[i].idx+"\">";
						html += "  <td class=\"text-center\">";
						html += "    <button type=\"button\" class=\"btn btn-default btn-size\" data-toggle=\"modal\" name=\"update_modal\"\" id=\""+i+"\"><span id=\"spanUpdate\" class=\"i18n-admin-btn-update\"></span></button>";
						html += "    <button type=\"button\" class=\"btn btn-default btn-size\" data-toggle=\"\" name=\"\" onclick=\"delAdminACL('"+value[i].idx+"')\"><span id=\"spanDelete\" class=\"i18n-admin-btn-delete\"></span></button>";
						html += "</tr>";
					}
					
					if(value.length == 0){
						
						if(aclType == "allow"){
							var h = "<i class=\"fa fa-exclamation\" style=\"color: red\"></i><span style=\"color: red\" class=\"i18n-admin-tab-access-setting-allow-help\"></span>";
							$("#ACL_helpMessage").css("display","inline-block");
							$("#ACL_helpMessage").empty();
							$("#ACL_helpMessage").append(h);
							html += "<tr><td class=\"text-center\" colspan='5'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
						}else if(aclType == "deny"){
							var h = "<i class=\"fa fa-exclamation\" style=\"color: red\"></i><span style=\"color: red\" class=\"i18n-admin-tab-access-setting-deny-help\"></span>";
							$("#ACL_helpMessage").css("display","inline-block");
							$("#ACL_helpMessage").empty();
							$("#ACL_helpMessage").append(h);
							html += "<tr><td class=\"text-center\" colspan='5'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
						}else{
							html += "<tr><td class=\"text-center\" colspan='5'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
						}
					}
					
					$(".access_setting").html("");
					$(".access_setting").html(html);
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
		complete : function(data){
			accessAdminUpdate();
			if(aclType == "allow"){
				$("#allow_ACL").iCheck('check');
			}else if(aclType == "deny"){
				$("#deny_ACL").iCheck('check');
			}
			updateContent();
		}
	});
	
}

function addAdminACL(){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var ip = $("#addIp").val();
	var desc = $("#addExplanation").val();
	
	if($("#add_typeIp").prop("checked"))
		ipType = "ip";
	
	if($("#add_permitACL").prop("checked"))
		aclType = "allow";
	if($("#add_blockACL").prop("checked"))
		aclType = "deny";
	
	var jsonData = JSON.stringify({
		"id":email,
		"userIp":userIp,
		"aclType":aclType,
		"ipType":ipType,
		"ip":ip,
		"desc":desc
	});
	
	webApiUrl = $('#webApiUrl').val();
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/addAdminACL",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="";
			
			$.each(data, function(key, value) {
				var html = "";
				
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
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
			$("#modal-default").modal('hide');
			getACLType();
			updateContent();
		}
	});
	
}

function updateAdminACL(){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	
	var ip = $("#updateIp").val();
	var desc = $("#updateExplanation").val();
	var idx = parseInt($("#updateAclIdx").val());
	
	if($("#update_typeIp").prop("checked"))
		ipType = "ip";
	
	if($("#update_permitACL").prop("checked"))
		aclType = "allow";
	if($("#update_blockACL").prop("checked"))
		aclType = "deny";
	
	var jsonData = JSON.stringify({
		"id":email,
		"userIp":userIp,
		"idx":idx,
		"aclType":aclType,
		"ipType":ipType,
		"ip":ip,
		"desc":desc
	});
	
	webApiUrl = $('#webApiUrl').val();
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/updateAdminACL",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="";
			
			$.each(data, function(key, value) {
				var html = "";
				
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
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
			$("#modal-update").modal('hide');
			getACLType();
			setTimeout(function(){getDomainAdminList();},1000);
			updateContent();
		}
	});
}

function delAdminACL(index){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var idx = parseInt(index);
	
	var jsonData = JSON.stringify({
		"id":email,
		"userIp":userIp,
		"idx":idx
	});
	
	webApiUrl = $('#webApiUrl').val();
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/delAdminACL",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="";
			
			$.each(data, function(key, value) {
				var html = "";
				
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
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
			getACLType();
			updateContent();
		}
	});
}

function getACLType(){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	
	var jsonData = JSON.stringify({
		"id":email,
		"userIp":userIp
	});
	
	webApiUrl = $('#webApiUrl').val();
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/getACLType",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="";
			
			$.each(data, function(key, value) {
				var html = "";
				
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
				if ( key == "aclType"){
					
					if(value == 0){
						$("#adminACL_off").prop("checked",true);
						$(".table-acl").hide();
						$(".table-acl-list").hide();
						$("#submit_adminACL_button").hide();
						getAdminACLList('unuse');
					}
					if(value == 1){
						$("#allow_ACL").iCheck('check');
						getAdminACLList('allow');
					}
					if(value == 2){
						$("#deny_ACL").iCheck('check');
						getAdminACLList('deny');
					}
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
			updateContent();
		}
	});
}

function changeACL(){
	if($("#adminACL_off").prop("checked")){
		$(".table-acl").hide();
		$(".table-acl-list").hide();
		$("#ACL_helpMessage").css("display","none");
	}
}

function setACLType(){
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var html = "";
	
	if($("#adminACL_off").prop("checked")){
		aclType = "unuse";
		$("#submit_adminACL_button").hide();
		$(".table-acl").hide();
		$(".table-acl-list").hide();
		$("#ACL_helpMessage").css("display","none");
	}else{
		$("#submit_adminACL_button").show();
		$(".table-acl").show();
		$(".table-acl-list").show();
		if($("#allow_ACL").prop("checked")){
			aclType = "allow";
		}else{
			aclType = "deny";
		}
	}
	
	jsonData = JSON.stringify({
		"id":email,
		"userIp":userIp,
		"aclType":aclType
	});
	
	webApiUrl = $('#webApiUrl').val();
	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/setACLType",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			
			var code=0, msg="";
			
			$.each(data, function(key, value) {
				var html = "";
				
				if ( key == "code" )
					code = value;
				if ( key == "msg" )
					msg = value;
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
			Pace.restart();
			getAdminACLList(aclType);
			updateContent();
		}
	});
}

function adminChangePwd() {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var adminEmail = $("#hiddenManager").val();
	var adminPassword = $("#account_pwd").val();
	var changePassword = $("#account_newpwd").val();
	var confirmPassword = $("#account_newpwd2").val();
	var right = $("input[name=UpdateRadioRight]:checked").val();
//	var language = $("#updateAdmin_language").val();
	var language = "0";
	var adminid = adminid;
	
	if ( changePassword == "" )
		changePassword = null;
	
	if(!adminDomainUpdateFlag){
		
		jsonData = JSON.stringify({
		"doc":{
			"userpw": ""+confirmPassword+"",
		 }
	});


		$.ajax({
			type:"POST",
			url: "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup/"+adminid+"/_update",
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
				
				if ( code != 0 ){
					if( code == 6)
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return
				}else{
					if ( changePassword == null )
					{
						showMsg(i18next.t('errNotiMsg.msg_title'), i18next.t('admin.tab_password_manager_result_help'));
					}
					else
					{
						showMsg(i18next.t('errNotiMsg.msg_title'), i18next.t('admin.tab_password_setting_pwd_complate_help'));
					}
					
				}
				
			},
			error : function(xhr, status, error) {
				showErrMsg(12);
			},complete : function(data){
				updateContent();
				getDomainAdminList();
				$("#modal-update").modal('hide');
			}
		});
	}
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
		PwChangeFlag = true;
	}else if(changePw != changePw2){
		$("#"+id2+"_check").text(i18next.t('admin.tab_password_setting_pwd_unchk_help'));
		$("#"+id2+"_check").css("color","red");
		PwChangeFlag = false;
	}
	if(changePw == null || changePw == "") {
		$("#"+id2+"_check").text("");
	}
}

function checkSpecial(str){
	var pwdIncSpecialCh = getCookie("pwdIncSpecialCh"); 
	var regExp = /[`~!@#$%^&*()_=+<>,.|\\\'\";:\/?\-]/gi;
	var specialCh = str.match(regExp);
	
	if(pwdIncSpecialCh != 0){
		if(specialCh != null){
			if(specialCh.length == parseInt(pwdIncSpecialCh)){
				return true;		
			}else{
				return false;
			}
		}
	}
} 

function checkNumber(str){
	var regExp =  /[0-9]/g;
	var pwdIncNumLength = getCookie("pwdIncNumLength");
	var number = str.match(regExp);
	
	if(pwdIncNumLength != 0){
		if(number != null){
			if(number.length >= parseInt(pwdIncNumLength)){
				return true;
			}else{
				return false;
			}
		}
	}
}

function addDomain() {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var password = $("#oldPw").val();
	var domain = $("#addAdmin_domainName").val();
	var newId = $("#addAdmin_adminId").val();
	var newname = $("#addAdmin_adminname").val();
	var newPassword = $("#addAdmin_adminPw").val();
	var confirmPassword = $("#addAdmin_adminPw2").val();
	var right = $("input[name=RadioRight]:checked").val();
	var language = "0"
	var html = "";
	var json_data = "";
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	if(right == undefined) {
		right = $("#add_domainAdmin").val();
	}
	today = yyyy+'-'+mm+'-'+dd;
	
	if ( domain != "null" || domain != "undefined" || domain != "\"null\"" )
	{
		
		jsonData = JSON.stringify({
			"division" : 2,
			"userid" : ""+newId+"",
			"username" : ""+newname+"",
			"userpw": ""+confirmPassword+"",
			"domain" : ""+domain+"",
			"right" : ""+right+"",
			"timeCreated" : ""+today+""
	});
			
	$.ajax({
		type: "POST",
		url: "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup",
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
							
				if( code == 9){
					$("#adminAccountIdCheck").css("color","red");
					$("#adminAccountIdCheck").text(i18next.t('admin.tab_admin_addDel_id_chk_help'));
				}
				
				if ( code != 0 ){
					if( code == 6)
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return
				}else{
					setTimeout(function(){getDomainAdminList();},1000);
					updateContent();
				}
			},
			error : function(xhr, status, error) {
				showErrMsg(12);
			},
			complete : function(data){
			$("#modal-addDel").modal('hide');
			setTimeout(function(){getDomainAdminList();},1000);
			updateContent();
			}			
		});
	}
	else
	{
		domain = "소프트캠프";
	
		jsonData = JSON.stringify({
			"division" : 2,
			"userid" : ""+newId+"",
			"username" : ""+newname+"",
			"userpw": ""+confirmPassword+"",
			"domain" : ""+domain+"",
			"right" : ""+right+"",
			"timeCreated" : ""+today+""
	});
			
	$.ajax({
		type: "POST",
		url: "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup",
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
						
				if( code == 9){
					$("#adminAccountIdCheck").css("color","red");
					$("#adminAccountIdCheck").text(i18next.t('admin.tab_admin_addDel_id_chk_help'));
				}
				
				if ( code != 0 ){
					if( code == 6)
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return
				}else{
					setTimeout(function(){getDomainAdminList();},1000);
					updateContent();
				}
					
			},
			error : function(xhr, status, error) {
				showErrMsg(12);
			},complete : function(data){
				$("#modal-addDel").modal('hide');
				setTimeout(function(){getDomainAdminList();},1000);
				updateContent();
			}
		});
	}
}

function delAdmin_popup(idx,adminid)
{
	var adminId = $("#manager_"+idx).attr("class");
	var domainName = $("#domain_"+idx).val();
	var adminid = adminid;
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 25%;\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title i18n-admin-tab-admin-addDel-del-modal-title\"></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	if ( domainName != "null" )
	{
		html += "      <div><span style=\"font-weight: bold; font-size: 18px; color: red\">[&nbsp;"+domainName+"의&nbsp"+adminId+"&nbsp;]</span>&nbsp;&nbsp;&nbsp;<span class=\"i18n-admin-tab-admin-addDel-del-modal-help\"></span></div>";
	}
	else
	{
		html += "      <div><span style=\"font-weight: bold; font-size: 18px; color: red\">[&nbsp;"+adminId+"&nbsp;]</span>&nbsp;&nbsp;&nbsp;<span class=\"i18n-admin-tab-admin-addDel-del-modal-help\"></span></div>";
	}
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-no\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" onclick=\"delAdmin('"+idx+"','"+adminid+"');\"><span class=\"i18n-domain-btn-yes\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	$("#modal-del").empty();
	$("#modal-del").append(html);
	$("#modal-del").modal();
	setTimeout(function(){getDomainAdminList();},1000);
	updateContent();
}

function delAdmin(idx,searchid) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var adminId = $("#manager_"+idx).attr("class");
	var domainName = $("#domain_"+idx).val();
	var searchid = searchid
	
	if ( domainName == "null" )
		domainName = null;
	
	$.ajax({
		type: "DELETE",
		url: "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup/"+searchid,
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
		},complete : function(data){
			$("#modal-del").modal('hide');
			setTimeout(function(){getDomainAdminList();},1000);
			updateContent();
		}
	});
}

function getDomainAdminList(item) {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var searchKeyword = $("#addDel_searchKeyword").val();
	var searchSelect = $("#addDel_searchSelect").val();
	var usertype = $("#usertype").val();
	size = parseInt($('#addDel_pageSize').val());
	offset = parseInt($('#pageIdx').val());
	orderBy = $('#orderBy2').val();
	asc = ($('#asc').val() === "true");
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	
	if(searchKeyword == '')
	{
		ES_URL = "/hanwha/ajax/ES_admin.jsp?type=getDomainAdminList&usertype="+usertype+"&offset="+offset+"&size="+size+"&searchKeyword=none";
		
		
	}else{
		ES_URL = "/hanwha/ajax/ES_admin.jsp?type=getDomainAdminList&usertype="+usertype+"&offset="+offset+"&size="+size+"&searchKeyword="+searchKeyword+"";
		
	}


	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			
			data = JSON.parse(data.trim());
			
			var code=0, msg="", totalCnt = 0, html="";
			
			$.each(data, function(key,value){
				if ( key == "hits" )
				{
					hits = value.hits;		
					$("#addDel_recCount").text(numberWithCommas(value.total));
						
					for(var i=0;i<hits.length;i++)
					{
						html += "<tr>";
						html += "  <input type=\"hidden\" id=\"domain_"+i+"\" value=\""+hits[i]._source.domain+"\">";
	
						html += "  <td class=\"text-center text-over\">";
												
						if ( hits[i]._source.domain == "undefined" || hits[i]._source.domain == "null")
						{
							html += "<div><span id=\"manager_"+i+"\" class=\""+hits[i]._source.userid+"\">도메인 없음</span></div>";
						}
						else
						{
							html += "<div><span id=\"manager_"+i+"\" class=\""+hits[i]._source.userid+"\">"+hits[i]._source.domain+"</span></div>";	
						}
						html += "  </td>";
						
						html += "  <td class=\"text-center text-over\"><div><span id=\"admin_id"+i+"\">"+hits[i]._source.userid+"</span></div></td>";
						html += "  <td class=\"text-center text-over\"><div><span id=\"admin_id"+i+"\">"+hits[i]._source.username+"</span></div></td>";
						html += "  <td class=\"text-center text-over\">";

						if ( hits[i]._source.right == 1 )
						{
							html += "    <span class=\"i18n-admin-tab-admin-addDel-domain-admin\"></span>";
							html += "    <input type=\"hidden\" id=\"right_"+i+"\" value=\""+hits[i]._source.right+"\">";
						}
						else if ( hits[i]._source.right == 2 )
						{
							html += "    <span class=\"i18n-admin-tab-admin-addDel-system-admin\"></span>";
							html += "    <input type=\"hidden\" id=\"right_"+i+"\" value=\""+hits[i]._source.right+"\">";
						}
						else if ( hits[i]._source.right == 3 )
						{
							html += "    <span class=\"\">총괄 관리자</span>";
							html += "    <input type=\"hidden\" id=\"right_"+i+"\" value=\""+hits[i]._source.right+"\">";
						}
						else if ( hits[i]._source.right == 4 )
						{
							html += "    <span class=\"\">총괄 사용자</span>";
							html += "    <input type=\"hidden\" id=\"right_"+i+"\" value=\""+hits[i]._source.right+"\">";
						}
						
						html += "  </td>";
						
						// html += "  <td class=\"text-center text-over\">";
						
						// if ( hits[i]._source.language == 0 )
						// {
							// html += "    <span class=\"i18n-admin-tab-language-setting-ko\"></span>";
							// html += "    <input type=\"hidden\" id=\"language_"+i+"\" value=\""+hits[i]._source.language+"\">";
						// }
						// else if ( hits[i]._source.language == 1 )
						// {
							// html += "    <span class=\"i18n-admin-tab-language-setting-us\"></span>";
							// html += "    <input type=\"hidden\" id=\"language_"+i+"\" value=\""+hits[i]._source.language+"\">";
						// }
						// else if ( hits[i]._source.language == 2 )
						// {
							// html += "    <span class=\"i18n-admin-tab-language-setting-jp\"></span>";
							// html += "    <input type=\"hidden\" id=\"language_"+i+"\" value=\""+hits[i]._source.language+"\">";
						// }

						// html += "  </td>";
						
						html += "  <td class=\"text-center text-over\"><div><span id=\"createDay\">"+hits[i]._source.timeCreated+"</span></div></td>";
						html += "  <td class=\"text-center\">";
						html += "    <div>";
						html += "      <button type=\"button\" class=\"btn btn-default btn-size btn-detail\" data-toggle=\"modal\" onclick=\"admin_update('"+i+"','"+hits[i]._id+"');\" style=\"margin-right: 18px;\">";
						html += "        <span class=\"text-over-block i18n-admin-btn-modify-title\" id=\"\"><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-pencil\"></i></span>";
						html += "      </button>";
						html += "      <button type=\"button\" class=\"btn btn-default btn-size btn-detail\" data-toggle=\"modal\" onclick=\"delAdmin_popup('"+i+"','"+hits[i]._id+"');\">";
						html += "        <span class=\"text-over-block i18n-admin-btn-delete-title\" id=\"\"><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-trash\"></i></span>";
						html += "      </button>";
						html += "    </div>";
						html += "</tr>";
						
					}
					
					$(".admin_addDel").html("");
					$(".admin_addDel").html(html);
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
		},complete : function(data) {
			setPageIdx2("addDel");
			updateContent();
		}
	});
}

function goPage(item){
	getDomainAdminList(item);
}

function domainAdminChangePwd(adminid) {
	
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var adminEmail = $("#hiddenManager").val();
	var adminPassword = $("#account_pwd").val();
	var changePassword = $("#account_newpwd").val();
	var confirmPassword = $("#account_newpwd2").val();
	var right = $("input[name=UpdateRadioRight]:checked").val();
//	var language = $("#updateAdmin_language").val();
	var language = "0";
	var adminid = adminid;
	
	if ( changePassword == "" )
		changePassword = null;
	
	if(!adminDomainUpdateFlag){
		console.log(right)
		if (right != undefined)
		{
		jsonData = JSON.stringify({
		"doc":{
			"userpw": ""+confirmPassword+"",
			"right": ""+right+""
		 }
		});
		}else{
			jsonData = JSON.stringify({
				"doc":{
					"userpw": ""+confirmPassword+""
				 }
				});	
		}


		$.ajax({
			type:"POST",
			url: "http://10.10.10.229:9200/hanwha_usergroup_info/hanwha_usergroup/"+adminid+"/_update",
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
				
				if ( code != 0 ){
					if( code == 6)
						window.location = 'login.jsp';
					else
						showErrMsg(code, msg);
					return
				}else{
					if ( changePassword == null )
					{
						showMsg(i18next.t('errNotiMsg.msg_title'), i18next.t('admin.tab_password_manager_result_help'));
					}
					else
					{
						showMsg(i18next.t('errNotiMsg.msg_title'), i18next.t('admin.tab_password_setting_pwd_complate_help'));
					}
					
				}
				
			},
			error : function(xhr, status, error) {
				showErrMsg(12);
			},complete : function(data){
				updateContent();
				//getDomainAdminList();
				$("#modal-update").modal('hide');
			}
		});
	}
}

function PwdComplexity() {
	if($("#pwd_lengthMin").val() != '' || $("#pwd_lengthMin").val() != null){
		setCookie("pwdMinLength",$("#pwd_lengthMin").val(), 30);
	}
	
	if($("#pwd_specialCh").val() != '' || $("#pwd_specialCh").val() != null){
		setCookie("pwdIncSpecialCh",$("#pwd_specialCh").val(), 30);
	}
	
	if($("#pwd_lengthNum").val() != '' || $("#pwd_lengthNum").val() != null){
		setCookie("pwdIncNumLength",$("#pwd_lengthNum").val(), 30);
	}
	
	showMsg(i18next.t('admin.tab_password_manager_result'),i18next.t('admin.tab_password_manager_result_help'));
}

function setLanguage(){
	
	var lang = $("#languageSelect").val();
	
	$('#language').val(lang);
	
	window.location = "home.jsp?language="+lang;
}