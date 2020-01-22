function domainPreferences(){
	var adminPwd_flag = getCookie("adminPwd_flag");
	if(adminPwd_flag == "check"){
		$(".content").empty();
		$(".content").load("domain.jsp");
		$("#interval_flags").val("domain");
	}else{
		certification();
	}
}

function getDomainList(item) {
	
	$('#pageIdx').val(0);
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var searchKeyword = $("#searchKeyword").val();
	size = parseInt($('#pageSize').val());
	offset = parseInt($('#pageIdx').val());
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	if(searchKeyword == "")
	{
		ES_URL = "/admin/ajax/ES_Domain.jsp?type=getDomainList&offset="+offset+"&size="+size+"&searchKeyword=none";
	}else{
		ES_URL = "/admin/ajax/ES_Domain.jsp?type=getDomainList&offset="+offset+"&size="+size+"&searchKeyword="+searchKeyword+"";
	}


	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var code=0, msg="", html="";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key,value){
				if ( key == "hits" )
				{
					hits = value.hits;		
					
					$("#recCount").text(numberWithCommas(value.total));
					
					for(var i=0;i<hits.length;i++)
					{
						html += "<tr>";
						html += "  <td class=\"text-center text-over\"><span id=\"domain_"+i+"\" title=\""+hits[i]._source.domain+"\">"+hits[i]._source.domain+"</span></td>";
						if(hits[i]._source.isDefault)
							html += "  <td class=\"text-center\"><span id=\"isDefault_"+i+"\">O</span></td>";
						else
							html += "  <td class=\"text-center\"><span id=\"isDefault_"+i+"\">X</span></td>";
						
						if(hits[i]._source.isLocal)
							html += "  <td class=\"text-center\"><span class=\"i18n-domain-list-item-isLocal-true\"></span><input type=\"text\" style=\"display: none\" id=\"isLocal_"+i+"\" value=\"O\"></td>";
						else
							html += "  <td class=\"text-center\"><span class=\"i18n-domain-list-item-isLocal-false\"></span><input type=\"text\" style=\"display: none\" id=\"isLocal_"+i+"\" value=\"X\"></td>";
							
						if(hits[i]._source.isCaseIgnore)
							html += "  <td class=\"text-center\"><span class=\"i18n-domain-list-item-isCaseIgnore-false\"></span><input type=\"text\" style=\"display: none\" id=\"isCaseIgnore_"+i+"\" value=\"O\"></td>";
						else
							html += "  <td class=\"text-center\"><span class=\"i18n-domain-list-item-isCaseIgnore-true\"></span><input type=\"text\" style=\"display: none\" id=\"isCaseIgnore_"+i+"\" value=\"X\"></td>";
						
						html += "  <td class=\"text-center text-over\"><span id=\"crmdomain_"+i+"\">"+hits[i]._source.crmdomain+"</span></td>";		
						html += "  <td class=\"text-center text-over\"><span>"+hits[i]._source.timeCreated+"</span></td>";
						html += "  <td class=\"text-center\">";
						html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" onclick=\"domain_update('"+i+"','"+hits[i]._id+"')\" ><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-pencil i18n-domain-list-item-edit\"></i></span></button>";
						html += "    <button type=\"button\" class=\"btn btn-default btn-detail\" data-toggle=\"modal\" name=\"domain_delete\" onclick=\"domain_delete_popup('"+i+"','"+hits[i]._id+"');\"><span><i style=\"font-size: 18px; color: orange\" class=\"glyphicon glyphicon-trash i18n-domain-list-item-del\"></i></span></button>";
						html += "  </td>";
						html += "</tr>";

					}
					if(hits.length == 0){
						html += "<tr><td class=\"text-center\" colspan='10'><span class=\"i18n-errNotiMsg-msg-content8\"></span></td></tr>";
					}					
				}
				
				$("#domainList").html("");
				$("#domainList").html(html);
				
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
		}
	});
}

function goPage(item){
	getDomainList(item);
}

function domain_add(){
	
	$("button[name=domain_add]").click(function(){
		
		var html = "";
		
		html  = "<div class=\"modal-dialog\">";
		html += "  <div class=\"modal-content\">";
		html += "    <div class=\"modal-header\">";
		html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		html += "        <span aria-hidden=\"true\">&times;</span></button>";
		html += "      <h4 class=\"modal-title i18n-domain-modal-title\"></h4>";
		html += "    </div>";
		html += "    <div class=\"modal-body\">";
		html += "      <table id=\"example2\" class=\"table table-bordered table-hover table-center\" style=\"min-width: 200px;\">";
		html += "        <colgroup>";
		html += "		   <col width=\"1%\"/>";
		html += "		   <col width=\"3%\"/>";
		html += "        </colgroup>";
		html += "	     <tr>";
		html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-modal-list-domain-name\"></span></th>";
		html += "	 	   <td><input type=\"text\" id=\"add_domain\" class=\"form-control input-radius input-size\" value=\"\"></td>";
		html += "	     </tr>";
		html += "	     <tr>";
		html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-modal-list-id-case-sensitivity\"></span></th>";
		html += "          <td class=\"text-left\">";
		html += "            <div class=\"switch switch-custom3\" style=\"margin-left: 3%\">";
		html += "              <input type=\"radio\" class=\"switch-input\" name=\"isCase\" value=\"idCaseIgnore_on\" id=\"idCaseIgnore_on\">";
		html += "		       <label for=\"idCaseIgnore_on\" class=\"switch-label switch-label-off i18n-domain-list-item-isCaseIgnore-true\"></label>";						    
		html += "              <input type=\"radio\" class=\"switch-input\" name=\"isCase\" value=\"idCaseIgnore_off\" id=\"idCaseIgnore_off\" checked>";						    
		html += "              <label for=\"idCaseIgnore_off\" class=\"switch-label switch-label-on i18n-domain-list-item-isCaseIgnore-false\"></label>";		    
		html += "			   <span class=\"switch-selection\"></span>";						    
		html += "            </div>";						    
		html += "          </td>";
		html += "	     </tr>";
		html += "        <tr>";
		html += "          <th class=\"tb_domain\"><span class=\"i18n-domain-list-item-crm-setting\"></span></th>";
		html += "          <td><input type=\"text\" id=\"crmdomain\" class=\"form-control input-radius input-size\" value=\"\"></td>";
		html += "        </tr>";
		html += "      </table>";
		html += "    </div>";
		html += "    <div class=\"modal-footer\">";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"addDomain();\"><span class=\"i18n-domain-btn-submit\"></span></button>";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-close\"></span></button>";
		html += "    </div>";
		html += "  </div>";
		html += "</div>";
		
		$("#modal-domain-add").empty();
		$("#modal-domain-add").append(html);
		$("#modal-domain-add").modal();
		
		updateContent();
	});
}

function domain_add2(){
	
	$("button[name=domain_add2]").click(function(){
		
		var html = "";
		
		html  = "<div class=\"modal-dialog\">";
		html += "  <div class=\"modal-content\">";
		html += "    <div class=\"modal-header\">";
		html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		html += "        <span aria-hidden=\"true\">&times;</span></button>";
		html += "      <h4 class=\"modal-title i18n-domain-modal-title\"></h4>";
		html += "    </div>";
		html += "    <div class=\"modal-body\">";
		html += "        <span>적용 클릭시 SCEMS의 고객사 정보를 연동 합니다. 기존 정보는 지워 질 수 있습니다.</span>";
		html += "    </div>";
		html += "    <div class=\"modal-footer\">";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"addDomain2();\"><span class=\"i18n-domain-btn-submit\"></span></button>";
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-close\"></span></button>";
		html += "    </div>";
		html += "  </div>";
		html += "</div>";
		
		$("#modal-domain-add").empty();
		$("#modal-domain-add").append(html);
		$("#modal-domain-add").modal();
		
		updateContent();
	});
}

function addDomain() {
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var domain = $("#add_domain").val();
	var crmdomain = $("#crmdomain").val();

	
	isLocal = true;
	
	if($("#idCaseIgnore_on").prop("checked"))
		idCaseIgnore = true;
	else
		idCaseIgnore = false;
	
	
	
	jsonData = JSON.stringify( {
		"division": 0,
		"domain" : ""+domain+"",
		"isLocal" : ""+isLocal+"",
		"isCaseIgnore": ""+idCaseIgnore+"",
		"crmdomain" : ""+crmdomain+"",
		"timeCreated" : ""+today()+""
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
			}
		
		},		
		error : function(xhr, status, error) {
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			$("#modal-domain-add").modal('hide');
			getDomainList();
			Pace.restart();
			updateContent();
		}
	});
}

//function addDomain2() {
//	var email = getCookie("userInputId");
//	var userIp = $('#userIp').val();
//	var domain = $("#add_domain").val();
//	var crmdomain = $("#crmdomain").val();
//
//	
//	isLocal = true;
//	
//	if($("#idCaseIgnore_on").prop("checked"))
//		idCaseIgnore = true;
//	else
//		idCaseIgnore = false;
//	
//	getPortal= JSON.stringify({	
//		"_source": ["domain"],
//		"query": {
//			"bool": {
//				"must": 
//					{"match" : {"division" : 0 }},
//				"must_not": [
//				],
//				"filter": [
//				]
//			}
//		}
//	});
//	
//	$.ajax({
//		type:"POST",
//		url: "http://10.10.10.229:9200/sc_usergroup_info/_search",
//		contentType: "application/json; charset=UTF-8",
//		data: getPortal,
//		dataType:"JSON",
//		timeout: 30000,
//		success : function(data) {
//			
//			$.each(data, function(key,value){
//				if ( key == "hits" )
//				{
//					hits = value.hits;
//					
//					domain = "";
//					getSCEMS = JSON.stringify({	
//					"size": 9999,
//					"_source": ["company_name"], 
//					"query":  
//						{"bool":  
//							{"must": 
//								{"match_all" : {} }, 
//							"must_not": [ 
//								
//							]
//						}
//						}
//					});
//				}
//			});
//			
//			
//
// 
//			$.ajax({
//				type:"POST",
//				url: "http://10.10.10.229:9200/sc_customerdetail_idx/_search",
//				contentType: "application/json; charset=UTF-8",
//				data: getSCEMS,
//				dataType:"JSON",
//				timeout: 30000,
//				success : function(data) {
//					
//					var code=0, msg="", html="";
//					
//					$.each(data, function(key,value){
//						if ( key == "hits" )
//						{
//							hits = value.hits;		
//							
//							for(var i=0;i<hits.length;i++)
//							{
//								jsonData = JSON.stringify({
//									"division": 0,
//									"domain" : ""+hits[i]._source.company_name+"",
//									"isLocal" : 0,
//									"isCaseIgnore": 0,
//									"crmdomain" : ""+hits[i]._source.company_name+"",
//									"timeCreated" : ""+today()+""
//								 });
//								 
//
//								
//							console.log(jsonData)
//								$.ajax({
//									type: "POST",
//									url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup",
//									contentType: "application/json; charset=UTF-8",
//									data: jsonData,
//									dataType: "JSON",
//									timeout: 30000,
//									success: function(data){
//										var code = 0, msg = "";
//										
//										$.each(data, function(key,value){
//											if ( key == "result" )
//											{
//												if ( value != "created" )
//												{
//													code = 1
//												}
//											}			
//										});
//										
//
//										if ( code != 0 )
//										{
//											if ( code == 6 )
//												window.location = 'login.jsp';
//											else
//												showErrMsg(code, msg);
//											return;
//										}
//									
//									},		
//									error : function(xhr, status, error) {
//										alert(i18next.t('errNotiMsg.msg_content_0'));
//										document.location.href="login.jsp";
//									},
//									complete : function(data) {
//										$("#modal-domain-add").modal('hide');
//										getDomainList();
//										Pace.restart();
//										updateContent();
//									}
//								});
//							}
//						}
//					});
//				}
//			});
//		}
//	});
//}


function domain_update(idx,domainid){
	
	var domain = $("#domain_"+idx).text();
	var isDefault = $("#isDefault_"+idx).text();
	var isLocal = $("#isLocal_"+idx).val();
	var isCaseIgnore = $("#isCaseIgnore_"+idx).val();
    var crmdomain = $("#crmdomain_"+idx).text();
	var domainid = domainid;
	var html = "";
	
	
	html  = "<div class=\"modal-dialog\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title i18n-domain-modal-edit-title\"></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <table id=\"example2\" class=\"table table-bordered table-hover table-center\" style=\"min-width: 200px;\">";
	html += "        <colgroup>";
	html += "		   <col width=\"1%\"/>";
	html += "		   <col width=\"3%\"/>";
	html += "        </colgroup>";
	html += "	     <tr>";
	html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-modal-edit-list-domain-name\"></span></th>";
	html += "	 	   <td><input id=\"update_domain\" type=\"text\" class=\"form-control input-radius input-size\" value=\""+domain+"\" disabled></td>";
	html += "	     </tr>";
	html += "	     <tr>";
	html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-modal-edit-list-default-domain\"></span></th>";
	html += "          <td class=\"text-left\">";
	html += "            <div class=\"switch switch-custom\" style=\"margin-left: 3%\">";
	html += "              <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"on\" id=\"isDefault_on\">";
	html += "		       <label for=\"isDefault_on\" class=\"switch-label switch-label-off i18n-domain-label-switch-on\"></label>";						    
	html += "              <input type=\"radio\" class=\"switch-input\" name=\"view\" value=\"off\" id=\"isDefault_off\">";						    
	html += "              <label for=\"isDefault_off\" class=\"switch-label switch-label-on i18n-domain-label-switch-off\"></label>";		    
	html += "			   <span class=\"switch-selection\"></span>";						    
	html += "            </div>";						    
	html += "          </td>";
	html += "	     </tr>";
	html += "	     <tr>";
	html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-modal-edit-list-id-case-sensitivity\"></span></th>";
	html += "          <td class=\"text-left\">";
	html += "            <div class=\"switch switch-custom3\" style=\"margin-left: 3%\">";
	html += "              <input type=\"radio\" class=\"switch-input\" name=\"view3\" value=\"on3\" id=\"idCaseIgnore_on2\">";
	html += "		       <label for=\"idCaseIgnore_on2\" class=\"switch-label switch-label-off i18n-domain-label-switch-on\"></label>";						    
	html += "              <input type=\"radio\" class=\"switch-input\" name=\"view3\" value=\"off3\" id=\"idCaseIgnore_off2\">";						    
	html += "              <label for=\"idCaseIgnore_off2\" class=\"switch-label switch-label-on i18n-domain-label-switch-off\"></label>";		    
	html += "			   <span class=\"switch-selection\"></span>";						    
	html += "            </div>";						    
	html += "          </td>";
	html += "	     </tr>";
	html += "        <tr>";
	html += "	     <tr>";
	html += "		   <th class=\"tb_domain\"><span class=\"i18n-domain-list-item-crm-setting\"></span></th>";
	html += "	 	   <td><input id=\"update_crmdomain\" type=\"text\" class=\"form-control input-radius input-size\" value=\""+crmdomain+"\"></td>";
	html += "	     </tr>";
	html += "      </table>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" onclick=\"update_domain('"+domainid+"');\"><span class=\"i18n-domain-btn-submit\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-close\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";

	
	$("#modal-domain-update").empty();
	$("#modal-domain-update").append(html);
	$("#modal-domain-update").modal();
	updateContent();
	
	if(isDefault == "O")
		$("#isDefault_on").prop("checked",true);
	else if(isDefault == "X")
		$("#isDefault_off").prop("checked",true);

	if(isCaseIgnore == "O")
		$("#idCaseIgnore_on2").prop("checked",true);
	else if(isCaseIgnore == "X")
		$("#idCaseIgnore_off2").prop("checked",true);
		
}

function update_domain(domainid){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var domain = $("#update_domain").val();
	var crmdomain = $("#update_crmdomain").val();
	var domainid = domainid;
	// var crmdomain_temp = crmdomain.split(',');
	// var crmdomain_end = "";
	
	// crmdomain = ""
	
	// for(var i=0;i<crmdomain_temp.length;i++)
	// {
		// if(i==0)
		// {
			// crmdomain_temp[i] = "\""+crmdomain_temp[i]+"\"";
		// }
		// else
		// {
			// crmdomain_temp[i] = ",\""+crmdomain_temp[i]+"\"";
		// }
		 
	 // crmdomain_end = crmdomain_end + crmdomain_temp[i];
	// }
	// alert(crmdomain_end);
	
	
	isLocal = true;
	
	if($("#idCaseIgnore_on2").prop("checked"))
		idCaseIgnore = true;
	else
		idCaseIgnore = false;
	
	if($("#isDefault_on").prop("checked"))
		isDefault = true;
	else
		isDefault = false;



	jsonData = JSON.stringify({
		"doc":{
			"crmdomain" : ""+crmdomain+"",
			"timeUpdated" : ""+today()+"",
			"isCaseIgnore": ""+idCaseIgnore+"",
			"isDefault": ""+isDefault+""
			
		 }
	});

	$.ajax({
		type: "POST",
		url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup/"+domainid+"/_update",
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
			}
		},		
		error : function(xhr, status, error) {
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			$("#modal-domain-update").modal('hide');
			getDomainList();
			Pace.restart();
			updateContent();
		}
	});
}

function domain_delete_popup(idx,domainid){
	
	var domain = $("#domain_"+idx).text();
	var domainid = domainid;
	
	
	var html = "";
	
	html  = "<div class=\"modal-dialog\" style=\"width: 25%;\">";
	html += "  <div class=\"modal-content\">";
	html += "    <div class=\"modal-header\">";
	html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
	html += "        <span aria-hidden=\"true\">&times;</span></button>";
	html += "      <h4 class=\"modal-title i18n-domain-modal-del-title\"></h4>";
	html += "    </div>";
	html += "    <div class=\"modal-body\">";
	html += "      <div><span class=\"i18n-domain-modal-del-msg1\"></span><label style=\"font-weight: bold; font-size: 20px; color: red\" id=\"domain_label\">"+domain+"</label><span class=\"i18n-domain-modal-del-msg2\"></span></div>";
	html += "    </div>";
	html += "    <div class=\"modal-footer\">";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" data-dismiss=\"modal\"><span class=\"i18n-domain-btn-no\"></span></button>";
	html += "      <button type=\"button\" class=\"btn btn-default pull-right\" onclick=\"delete_domain('"+domainid+"');\"><span class=\"i18n-domain-btn-yes\"></span></button>";
	html += "    </div>";
	html += "  </div>";
	html += "</div>";

	
	$("#modal-domain-delete").empty();
	$("#modal-domain-delete").append(html);
	$("#modal-domain-delete").modal();
	updateContent();
}

function delete_domain(domainid){
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var domain = $("#domain_label").text();
	var domainid = domainid;
	
	$.ajax({
		type: "DELETE",
		url: "http://10.10.10.229:9200/sc_usergroup_info/sc_usergroup/"+domainid,
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
			}
		},		
		error : function(xhr, status, error) {
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			$("#modal-domain-delete").modal('hide');
			getDomainList();
			Pace.restart();
			updateContent();
		}
	});
}

function today(){
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yy = today.getFullYear();
	
	if(dd < 10){ 
		dd = '0'+dd; 
	}
	if(mm < 10){ 
		mm = '0'+mm; 
	}
	
	today = yy+'-'+mm+'-'+dd;
	return today;	
	// console.log(today);
}



