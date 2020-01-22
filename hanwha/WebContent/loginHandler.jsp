<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	try
	{
		String email = request.getParameter("email");
		String language = request.getParameter("lang");
		String domain = request.getParameter("domain");
		String crmdomain = request.getParameter("crmdomain");
		String type = request.getParameter("type");
		
		if ( email == null || email.length() == 0 )
				return;
		
		request.getSession().setAttribute("email", email);
		request.getSession().setAttribute("language", language);
		request.getSession().setAttribute("domain", domain);
		request.getSession().setAttribute("crmdomain", crmdomain);
		request.getSession().setAttribute("type", type);
		
	} catch ( Exception e )
	{
			return;
	}

	out.println("<script type='text/javascript'>");
	out.println("window.location = 'home.jsp'");
	out.println("</script>");

	
%>

