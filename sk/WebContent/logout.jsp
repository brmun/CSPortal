<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.getSession().setAttribute("email", null);
  request.getSession().setAttribute("language", null);
	
// 	Env env = Env.getInstance(request);
// 	String webApiUrl = env.getUrlWebAPIAdmin();
// 	String urlWebAPISTM = env.getUrlWebAPISTM();
%>
<html>
<body>

<!-- jQuery 3 -->
<script src="dist/js/jquery.min.js"></script>
<script src="include/common.js"></script>
<script>

	var email = getCookie("userInputId");
	
	$(document).ready(function(){
			window.location = "login.jsp";
	})

<%-- 	jsonData = JSON.stringify({"id":email, "userIp":"<%=request.getRemoteAddr()%>"}) --%>
// 	jQuery.ajax({
// 		type:"POST",
<%-- 		url: "<%=webApiUrl%>/admin/logout", --%>
// 		contentType: "application/json; charset=UTF-8",
// 		data: jsonData,
// 		dataType:"JSON",
// 		timeout: 30000,
// 		success : function(data) {
			
// 			var msg="";
			
// 			$.each(data, function(key, value) {
// 				if ( key == "code" )
// 					code = value;
// 				if ( key == "msg" )
// 					msg = value;
// 			});
			
// 			if ( code != 0 )
// 				showErrMsg(code, msg);
// 			else
// 			{
// 				if(getCookie("saveid") == 0){
// 					deleteCookie("userInputId");
// 				}
// 				window.location = "login.jsp";
// 				deleteCookie("adminPwd_flag");
// 				return;
// 			};
// 		},
// 		error : function(xhr, status, error) {
// 			alert(i18next.t('errNotiMsg.msg_content_0'));
// 		},
// 		complete : function(data) {
// 		}
// 	});
	
</script>


<!-- 	<div class="modal fade in" id="logoutModal" style="display: block;"> -->
<!--   	<div class="modal-dialog modal-sm"> -->
<!--     	<div class="modal-content"> -->
<!--       	<div class="modal-header"><h4><i class="fa fa-lock" style="margin-right: 10px;"></i><span class="i18n-logout-header">로그아웃</span></h4></div> -->
<!--       	<div class="modal-body"><i class="fa fa-question-circle" style="margin-right: 10px;"></i><span class="i18n-logout-msg">로그아웃 하시겠습니까?</span></div> -->
<!--       	<div class="modal-footer text-center"> -->
<!--       		<a href="logout.jsp" class="btn btn-primary"><span class="i18n-logout-apply">예</span></a> -->
<!--       		<a href="javascript:;" class="btn btn-default" data-dismiss="modal"><span class="i18n-logout-cancel">아니오</span></a> -->
<!--      		</div> -->
<!--     	</div> -->
<!--   	</div> -->
<!--   </div> -->
  
<script src="include/locale/language.js"></script>

</body>
</html>