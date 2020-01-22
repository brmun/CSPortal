<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
System.out.print("MultiLine : "+MultiLine);


String host = "10.12.10.14";
//String host = "smtps.hiworks.com";//smtp 서버
// String host = "smtp.crmmail.softcamp.kr";//smtp 서버
String subject = "[고객포탈 요청/문의 접수]"+name;
String content = "회사명 : "+ SingleLine2+"<br>";
content += "성명  : "+ SingleLine1+"<br>" ;
content += "연락처   : "+ PhoneNumber_countrycode+"<br>" ;
content += "이메일   : "+ Email+"<br>" ;
content += "요청/질의 사항  : "+ Radio+"<br>" ;
content += "내용   : "+ MultiLine +"<br>";
String from = "portal@softcamp.co.kr"; //보내는 사람
String to = "ticket@crmmail.softcamp.kr"; //받는 사람 
//String to = "helpsc2@softcamp.co.kr"; //받는 사람 

try{

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
msg.setContent(content,"text/html;charset=euc-kr"); // 내영 설정 (HTML 형식)


Transport.send(msg);//메일 보내기

} catch (MessagingException ex) {
out.println("mail send error : " + ex.getMessage());
}catch(Exception e){
out.println("error : " + e.getMessage());
}

%>



<html>
<body>

접수완료되었습니다.


</body>
</html>

