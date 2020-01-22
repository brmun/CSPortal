function autoDelete(){
	var adminPwd_flag = getCookie("adminPwd_flag");
	if(adminPwd_flag == "check"){
		$(".content").empty();
		$(".content").load("autoDelete.jsp");
		$("#interval_flags").val("autoDelete");
	}else{
		certification();
	}
}

function getAutoDelConf() {
	
	webApiUrl = $('#webApiUrl').val();
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	
	jsonData = JSON.stringify({"id":email, "userIp":userIp});

	$.ajax({
		type:"POST",
		url: webApiUrl+"/admin/getAutoDelConf",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) 
		{
			
			var code = 0, msg = "";
			
			$.each(data,function(key,value)
			{
				if( key == "code" ) 
					code =value;
				if( key == "msg" ) 
					msg = value;
				
				if( key == "useAutoDelete" ){
					
					if(value == true){
						$("#on").prop("checked",true);
						$("#autoDelBody").show();
					}
					else if(value == false){
						$("#off").prop("checked",true);
						$("#autoDelBody").hide();
					}
				}					
				
				if( key == "maxPeriodLog" )
					$('#periodLog').val(value);
				if( key == "maxPeriodEML" )
					$('#periodEML').val(value);
				if( key == "maxPeriodMailList" )
					$('#periodMailList').val(value);		
			})
		
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
			updateContent();
		}
	})
}

function checkCleanerOptionInput()
{
	var flag = false;

	if (!isValidInt($('#periodLog').val())) {
		$('#periodLog').css("background-color", "red");
		flag = true;
	} else
		$('#periodLog').css("background-color", "");
	
	if (!isValidInt($('#periodEML').val())) {
		$('#periodEML').css("background-color", "red");
		flag = true;
	} else
		$('#periodEML').css("background-color", "");
	
	if (!isValidInt($('#periodMailList').val())) {
		$('#periodMailList').css("background-color", "red");
		flag = true;
	} else
		$('#periodMailList').css("background-color", "");
	
	if(flag)
		alert(i18next.t('errNotiMsg.msg_content_10'));
	else	
		setAutoDelConf();
	
	updateContent();
}

function setAutoDelConf()
{
	showMsg(i18next.t('autoDelete.loding_msg1') + "...", i18next.t('autoDelete.loding_msg2'));

	webApiUrl = $('#webApiUrl').val();
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	
	if($("#on").prop("checked"))
		useAutoDelete = 1;
	else
		useAutoDelete = 0;
	
	maxPeriodLog = $('#periodLog').val();				
	maxPeriodEML =	$('#periodEML').val();
	maxPeriodMailList = $('#periodMailList').val();
	
	jsonData = JSON.stringify({"id":email, "userIp":userIp, "useAutoDelete":useAutoDelete, "maxPeriodLog":maxPeriodLog, "maxPeriodEML":maxPeriodEML, "maxPeriodMailList":maxPeriodMailList});
	
	$.ajax({
		type:"POST",
		url: webApiUrl+"/admin/setAutoDelConf",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) {
			var code = 0, msg = "";
			
			$.each(data, function(key, value) 
			{
				if( key == "code" ) 
					code = value;
				if( key == "msg" ) 
					msg = value;
				if( key == "applied" )
				{	
					if ( value )
						showMsg(i18next.t('autoDelete.result'), i18next.t('autoDelete.result_msg') + "<br>" + i18next.t('autoDelete.result_msg1')+"<label style=\"font-weigh:bold; color: red;\">"+i18next.t('autoDelete.seg_cron_serivce')+"</label>"+i18next.t('autoDelete.result_msg2') + "<br><br>" + i18next.t('autoDelete.result_location'));
					else
						showMsg(i18next.t('autoDelete.error'), i18next.t('autoDelete.error_msg'));
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
		error : function(xhr, status, error) 
		{
			alert(i18next.t('errNotiMsg.msg_content_0'));
			document.location.href="login.jsp";
		},
		complete : function(data) {
			updateContent();
		}
	});
}

function perferencesAutoDeleteDivision(type) {
	if(type == "on"){
		$("#autoDelBody").show();
	}else{
		$("#autoDelBody").hide();
	}
}