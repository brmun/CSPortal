<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp" %>
<%
  request.setCharacterEncoding("UTF-8");

	String type = (String)request.getSession().getAttribute("type");
	String domain = (String)request.getSession().getAttribute("domain");
	String crmdomain = (String)request.getSession().getAttribute("crmdomain");
	
	String jspPage = "dashboard.jsp";
	String jspPageParamType = "";
	
%>


<%@ page import="java.util.*,java.io.*,javax.mail.*,javax.mail.internet.*,javax.activation.*" %>


<% 
request.setCharacterEncoding("UTF-8");
String name = request.getParameter("comp-k1zqnpm9input");
String SingleLine2 = request.getParameter("comp-k1zqnpnfinput");
String SingleLine1 = request.getParameter("comp-k1zqnpn5input");
String PhoneNumber_countrycode = request.getParameter("comp-k1zqnpo4input");
String Email = request.getParameter("comp-k1zqnpntinput");
String Radio = request.getParameter("comp-k1zqnpmuitems");
String MultiLine = request.getParameter("comp-k1zqnpmktextarea");
// out.print("MultiLine : "+MultiLine);

// out.println("mail send error : " + name);
// String host = "10.12.10.14";
String host = "smtps.hiworks.com";//smtp 서버
// String host = "smtp.crmmail.softcamp.kr";//smtp 서버
String subject = "[고객포탈 요청/문의 접수]"+name;
String content = "회사명 : "+ domain+"<br>";
// content += "성명  : "+ SingleLine1+"<br>" ;
// content += "연락처   : "+ PhoneNumber_countrycode+"<br>" ;
// content += "이메일   : "+ Email+"<br>" ;
content += "요청/질의 사항  : "+ Radio+"<br>" ;
content += "내용   : "+ MultiLine +"<br>";
String from = "brmun@softcamp.co.kr"; //보내는 사람
// String to = "ticket@crmmail.softcamp.kr"; //받는 사람 
String to = "brmun@softcamp.co.kr"; //받는 사람 
// out.println("mail send error : " + name);
	
try{

	if (name != null || name != "")
	{
		name = "";
		content = "";
		SingleLine1 = "";
		
		// 프로퍼티 값 인스턴스 생성과 기본세션(SMTP 서버 호스트 지정)
		Properties props = new Properties();
		props.put("mail.smtp.host", host);
		Session sess= Session.getDefaultInstance(props, null);
		
		Message msg = new MimeMessage(sess);
		msg.setFrom(new InternetAddress(from));//보내는 사람 설정
		InternetAddress[] address = {new InternetAddress(to)};
		
		msg.setRecipients(Message.RecipientType.TO, address);//받는 사람설정
		
		
		msg.setSubject(subject);//제목 설정
		msg.setSentDate(new java.util.Date());//보내는 날짜 설정
		msg.setContent(content,"text/html;charset=UTF-8"); // 내영 설정 (HTML 형식)
		
		Transport.send(msg);//메일 보내기
		
	}

} catch (MessagingException ex) {
out.println("mail send error : " + ex.getMessage());
}catch(Exception e){
out.println("error : " + e.getMessage());
}


%>
<html>
<head>
	<title>SOFTCAMP 고객 포탈</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  
  <link rel="shortcut icon" href="dist/img/ico/favicon.ico">
  <link rel="stylesheet" href="dist/css/style.css" />
  

  
  <!-- jQuery 3 -->
	<script src="dist/js/jquery-ui.min.js"></script>
	<!-- jQuery UI 1.11.4 -->
	<script src="dist/js/jquery.min.js"></script>
	<!-- Bootstrap 3.3.7 -->
<!-- 	<script src="dist/js/bootstrap.min.js"></script> -->
	<!-- AdminLTE App -->
	<script src="dist/js/adminlte.js"></script>
	
	<script src="include/common.js"></script>
	
</head>
<body class="hold-transition skin-blue sidebar-mini">
	<div class="wrapper">
	
	  <jsp:include page="header.jsp" />
	  <aside class="main-sidebar">
		  <jsp:include page="leftMenu.jsp" />
	  </aside>
	
	  <div class="content-wrapper">
	    <section class="content container-fluid">
		    <jsp:include page="<%=jspPage%>" flush="false">
		    	<jsp:param name="type" value="<%=jspPageParamType%>"/>
		    </jsp:include>
		  </section>
		  </div>
	
	  <footer class="main-footer">
	  	<jsp:include page="home_footer.jsp" flush="false"/>
	  </footer>
	</div>

<!-- 공통 -->
<script src="include/common.js"></script>

<!-- 공지사항 -->
<script src="js/moniter.NoticeList.js"></script>
<!-- 대시보드 -->
<script src="js/dashboard.js"></script>
<script src="js/all_dashboard.js"></script>
<!-- 영업대표 현황 -->
<script src="js/salse_dashboard.js"></script>
<script src="js/salse_moniter.MaList.js"></script>

<!-- 유지보수 현황 -->
<script src="js/moniter.MaList.js"></script>
<script src="js/all_moniter.MaList.js"></script>



<!-- 프로젝트 현황 -->
<script src="js/moniter.ProjectList.js"></script>
<script src="js/all_moniter.ProjectList.js"></script>

<!-- 프로젝트 현황 -->
<script src="js/moniter.CustomerInfo.js"></script>


<!-- 환경설정 -->
<script src="js/preferences.admin.js"></script>
<script src="js/preferences.user.js"></script>
<script src="js/preferences.domain.js"></script>



<script type="text/javascript">
$(document).ready(function() {
	$('#language').val("ko-KR");
	$("#interval_flags").val("dashboard");
	
	var sBtn = $("ul > li > ul > li");
	var sBtn2 = $("ul > li");
	
	sBtn2.find("a").click(function(){
		sBtn2.removeClass('active');
		$(this).parent().addClass('active');
		$(this).siblings().children().eq(0).addClass("active");
	});
	sBtn.find("a").click(function(){
		sBtn.removeClass('active');
		sBtn2.removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parents('li').addClass('active');
	});
	
	$("#a_Dashboard, #a_statistics").click(function(){
		sBtn2.removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parents('li').addClass('active');
	});
	
	var time = new Date();
	var realtime = 
		time.getFullYear()+"."+
		addZero(time.getMonth()+1)+"."+
		addZero(time.getDate())+" "+
		addZero(time.getHours())+":"+
		addZero(time.getMinutes())+":"+
		addZero(time.getSeconds());
		
	$("#td-time").text(realtime);
	
	setCookie("adminPwd_flag","check");


	
});

</script>
<script src="include/locale/language.js"></script>
</body>
</html>