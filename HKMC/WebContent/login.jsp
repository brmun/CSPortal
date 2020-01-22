<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<%@page import="java.util.*"%>
<%
	request.setCharacterEncoding("UTF-8");

	String language = request.getParameter("language");
	if( language == null || language.length() == 0 )
		language = "auto";
	
	String type = request.getParameter("type");
%>

<html style="background-color:  #222d32; height: 0;">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--   <title>SecureEmailGateway</title> -->
	<title>SOFTCAMP 고객 포탈</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <jsp:include page="include/common.jsp" />
  
  <link rel="shortcut icon" href="dist/img/ico/favicon.ico">
  <link rel="stylesheet" href="dist/css/Font.css">
	<link rel="stylesheet" href="dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="dist/css/font-awesome.min.css">
	<link rel="stylesheet" href="dist/css/AdminLTE.min.css">
	<link rel="stylesheet" href="dist/css/skins/skin-blue.min.css">
	<link rel="stylesheet" href="dist/iCheck/square/blue.css">
	<link rel="stylesheet" href="dist/pace/pace.min.css">
	<link rel="stylesheet" href="dist/css/daterangepicker.css">
	<link rel="stylesheet" href="dist/iCheck/flat/blue.css">
  <script src="dist/js/jquery.min.js"></script>
  <script src="dist/js/jquery-ui.min.js"></script>
  <script src="include/i18next.min.js" ></script>
  <script src="include/jquery-i18next.min.js" ></script>
  <script src="include/common.js"></script>
  <script src="include/softmore.js"></script>
	
	
  <script type="text/javascript">
  
  	$(document).ready(function() 
		{
			var detectLang = detectLanguage(); 
			$("#language").val("<%=language%>");
			
			if ( "<%=language%>" == "auto" )
			{
				switch( detectLang )
				{
					case "ko":
						$("#language").val("ko-KR");
					break;
					case "en":
						$("#language").val("en-US");
					break;
					case "ja":
						$("#language").val("ja-JP");
					break;
					case "ko-KR": case "en-US": case "ja-JP":
						$("#language").val(detectLang);
					break;
				}
			}
			
		});
  
		function setLanguage(type){
			switch(type){
				case 0: $("#language").val("ko-KR"); break;
				case 1: $("#language").val("en-US"); break;
				case 2: $("#language").val("ja-JP"); break;
			}
			document.formLogin.action = "login.jsp?language="+$("#language").val();
			document.formLogin.submit();
		}
  	
  	function checkIDPW()
  	{
  		var email = document.formLogin.email.value;
  		var pwd = document.formLogin.pwd.value;
  		var type = "<%=type%>";
  		var code = 1;
			
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

		
		today = yyyy+'-'+mm+'-'+dd;
  		
  		if ( email.length == 0 || pwd.length == 0 )
  			return;

<%--  		jsonData = JSON.stringify({"id":email, "password":pwd, "userIp":"<%=request.getRemoteAddr()%>"}); --%>
		
		
  		setCookie("adminPwd",pwd, 30);
  		
  		
  		ES_URL = "/hkmc/ajax/ES_login.jsp?type=checkIDPW&email="+email+"";
  		
  		$.ajax({
  			type:"POST",
  			url: ES_URL,
  			contentType: "application/json; charset=UTF-8",
  			dataType:"text",
  			timeout: 30000,
  			success : function(data) {
  				var password="";
  				data = JSON.parse(data.trim());
  				
							
					$.each(data, function(key, value) {
						if ( key == "hits" )
						{
							hits = value.hits;
							if (hits == "")
							{
								code = 999;
								msg = "등록되지 않은 사용자 입니다.";
							}
							else
							{
								if (hits[0]._source.userpw == pwd)
								{
									
										code = 0;
										msg = ""; 
										domain = hits[0]._source.domain;
										right = hits[0]._source.right
									
										ES_URL = "/hkmc/ajax/ES_login.jsp?type=checkIDPW2&email="+email+"&domain="+encodeURI(encodeURIComponent(domain))+"";
								  		
								  		$.ajax({
								  			type:"POST",
								  			url: ES_URL,
								  			contentType: "application/json; charset=UTF-8",
								  			dataType:"text",
								  			timeout: 30000,
								  			success : function(data) {
								  				data = JSON.parse(data.trim());
												$.each(data, function(key, value) {
													if ( key == "hits" )
													{
														ES_URL = "/hkmc/ajax/ES_login.jsp?type=login_log&logtype=login&userid="+email+"&ComPany_name="+domain+"&log_time="+today+"";
														$.ajax({
												  			type:"POST",
												  			url: ES_URL,
												  			contentType: "application/json; charset=UTF-8",
												  			dataType:"text",
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
														
														hits = value.hits;
														if (hits != ""){
														crmdomain = hits[0]._source.crmdomain;
														}
														else {
															domain = "현대기아자동차";
														crmdomain = "현대자동차;기아자동차;HKMC";
														}
													}
												});
												
												
												
												
												
												
												
												
											if(right == null)
											{
												window.location = "loginHandler.jsp?"+"email="+email+"&domain="+encodeURI(encodeURIComponent(domain))+"&crmdomain="+encodeURI(encodeURIComponent(crmdomain))+"&lang="+$("#language").val();
												
											}
											else
											{
												
												window.location = "loginHandler.jsp?"+"email="+email+"&domain="+encodeURI(encodeURIComponent(domain))+"&crmdomain="+encodeURI(encodeURIComponent(crmdomain))+"&lang="+$("#language").val()+"&type="+right;
											}
											return;
											}
										});	
								}
								else
								{
									code = 999;
									msg = "패스워드가 정확하지 않습니다.";
								}
							}
						}
					});
														
					if ( code != 0 )
						showErrMsg(code, msg);
					
					var getsaveid = getCookie("saveid");
					
				},
				error : function(xhr, status, error) {
					alert(i18next.t('errNotiMsg.msg_content_0'));
					document.location.href="login.jsp";
				},
				complete : function(data) {
					setCookie("userInputId",email, 43200);
					
					if($("#saveid").prop("checked")){
			   		setCookie("saveid","1",43200);
			   	}else{
			   		setCookie("saveid","0",43200);
			   	}
					deleteCookie("adminPwd_flag");
				}
			});
  	}
  	
  </script>
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="#"><img src="dist/img/emailgateway.png" style="width: 300px;"></a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg"></p>

    <form class="form-signin" role="form" name="formLogin" id="formLogin" method="post" onsubmit="return false;">
    	<input type="hidden" id="language" name="language">
      <div class="form-group has-feedback">
      	<input type='text' class='form-control' name='email' id='email' placeholder='ID'  required value="">
      		
        <span class="glyphicon glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" name="pwd" id="pwd" placeholder="Password" required="required">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox" name="saveid" id="saveid" value=""> <span id="save_id" class="i18n-login-saveId"></span>
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
           <button class="btn btn-warning btn-block btn-flat" type="submit" onclick="checkIDPW();">
           	 <span id="login" class="i18n-login-login"></span>
           </button><br>
        </div>
        
   <!--      /.col
        <div style="text-align: center">
						<a class="languageButton" href="#" onclick="javascript:setLanguage(0);"> <img src="dist/img/flags/kr.png" style="width:40px; height:40px;"> </a>
						<a class="languageButton" href="#" onclick="javascript:setLanguage(1);"> <img src="dist/img/flags/us.png" style="width:40px; height:40px;"> </a>
		    		<a class="languageButton" href="#" onclick="javascript:setLanguage(2);"> <img src="dist/img/flags/jp.png" style="width:40px; height:40px;"> </a>
        </div> -->
      </div>
    </form>
    
		<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-sm modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
					<div id="myModalTitle" style="font-size: 16px;"></div>
				</div>
				
				<div class="modal-body" id="myModalBody"></div>
			</div>
		</div>
    <!-- /.social-auth-links -->

  </div>
  <!-- /.login-box-body -->
</div>

<%-- <input type="hidden" id="userIp" value="<%=request.getRemoteAddr()%>"> --%>
<!-- /.login-box -->

<!-- Bootstrap 3.3.7 -->
<script src="dist/js/bootstrap.min.js"></script>
<!-- iCheck -->
<script src="dist/iCheck/icheck.min.js"></script>
<script>
$(document).ready(function(){
	
  $('#saveid').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' /* optional */
  });
    
  var userInputId = getCookie("userInputId");
  $("#email").val(userInputId);
  
  var saveid = getCookie("saveid");
  if(saveid == 1){
  	$("#saveid").iCheck('check');
  	$("#pwd").focus();
  }else{
  	$("#email").focus();
  	$("#saveid").iCheck('uncheck');
  }
  
});

</script>
<script src="include/locale/language.js"></script>
</body>
</html>
