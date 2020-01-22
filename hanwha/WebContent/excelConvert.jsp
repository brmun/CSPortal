<%@ page language="java" contentType="application/vnd.ms-excel; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
<% 

  String filename = request.getAttribute("filename").toString();
  response.setHeader("Content-Type", "application/vnd.ms-xls");
  response.setHeader("Content-Disposition", "inline; filename=Monitoring_" + filename + ".xls");
%>​ 

</head>
<body>
<table border="1">

<tr>

<th>생성시간</th>

<th>VM이름</th>

.

.

.

</tr>

<c:forEach items="${list}" var="detail" varStatus="status">

<tr>

<td><c:out value="${detail.create_time}" escapeXml="false"/></td>
<td><c:out value="${detail.vm_name}" escapeXml="false"/></td>

.

.

.

</tr>

</table>

</body>
</html>