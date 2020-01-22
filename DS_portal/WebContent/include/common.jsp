<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	session.setMaxInactiveInterval(60*60*3);

	response.addHeader("Access-Control-Allow-Origin", "*");
	response.addHeader("Access-Control-Allow-Credentials", "true");
	response.addHeader("Access-Control-Max-Age", "2520");
	response.addHeader("Access-Control-Allow-Methods", "GET, POST");
%>

<html>
	<head>
		<meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
	  <meta http-equiv="content-type" content="text/html; charset=utf-8">
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
	</head>
	<body>
		<div id="language" style="display:none">ko-KR</div>
		<input type="hidden" id="mailSendFlags" value="">
	</body>
</html>

<!-- <script src="include/locale/language.js"></script> -->
