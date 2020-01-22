<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder"%>

<%
 request.setCharacterEncoding("utf-8");
	
	String email = (String)request.getSession().getAttribute("email");
	String language = (String)request.getSession().getAttribute("language");
	String domain = (String)request.getSession().getAttribute("domain");
	String crmdomain = (String)request.getSession().getAttribute("crmdomain");
	String type1 = (String)request.getSession().getAttribute("type");
%>
<html>
<head>
<meta charset="utf-8">
	<!-- AdminLTE App -->
	<script src="dist/js/adminlte.js"></script>
	<script src="js/dashboard.js"></script>
<!-- 	<script src="js/header.js></script> -->
</head>
<body class="skin-blue sidebar-mini sidebar-collapse">

	<script src="include/i18next.min.js" ></script>
	<script src="include/jquery-i18next.min.js" ></script>
	<!-- Main Header -->
  <header class="main-header">
  
		<input type="hidden" id="hidden_cpu_warning" value="">
		<input type="hidden" id="hidden_cpu_danger" value="">
		<input type="hidden" id="hidden_cpu_warning_noti" value="">
		<input type="hidden" id="hidden_cpu_danger_noti" value="">
		<input type="hidden" id="hidden_memory_warning" value="">
		<input type="hidden" id="hidden_memory_danger" value="">
		<input type="hidden" id="hidden_memory_warning_noti" value="">
		<input type="hidden" id="hidden_memory_danger_noti" value="">
		<input type="hidden" id="hidden_disk_warning" value="">
		<input type="hidden" id="hidden_disk_danger" value="">
		<input type="hidden" id="hidden_disk_warning_noti" value="">
		<input type="hidden" id="hidden_disk_danger_noti" value="">
		<input type="hidden" id="hidden_network_warning" value="">
		<input type="hidden" id="hidden_network_danger" value="">
		<input type="hidden" id="hidden_network_warning_noti" value="">
		<input type="hidden" id="hidden_network_danger_noti" value="">
		
    <!-- Logo -->
    <a href="home.jsp" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
<!--       <span class="logo-mini"><b style="font-size: 17px">MSEG</b></span> -->
			<span class="logo-mini" style="margin-top: 10px;"><b><img style="background-color: white;" src="dist/img/logo_title3.png"></b></span>
      <!-- logo for regular state and mobile devices -->
<!--       <span class="logo-lg"><b>MORE SEG</b></span> -->
<!-- 			<span class="logo-lg"><b>SEG</b></span> -->
			<span class="logo-lg"><img src="dist/img/emailgateway.png" style="width: 190px;"></span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->

      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
		<span class="sr-only">Toggle navigation</span>
	    <span id="domain3" style="display:none; color:white;"><%=URLDecoder.decode(domain,"UTF-8")%></span>
      </a>
      
      <div id="liDomain" style="position:absolute; left: 4%; margin-top: 13px;"></div>
	  <input type="hidden" id="crmdomain_flag2" value="<%=URLDecoder.decode(crmdomain,"UTF-8")%>">
      <!-- Navbar Right Menu -->		  
      <div class="navbar-custom-menu">

        <ul class="nav navbar-nav">
			
		    
          <!-- User Account Menu -->
<!-- 		  <li class="dropdown user user-menu active"> -->
<!-- 			<a class="dropdown-toggle" data-toggle="dropdown" aria-expended="false"> -->
<!-- 				<img src="dist/img/admin.png" class="user-image" alt="User Image"> -->
<%-- 				<span class="gidden-sx" id="header_id"><%=email%></span> --%>
<!-- 			</a> -->
<!-- 		  </li> -->
<!-- 		  <li> -->
<!--             <a href="#logoutModal" data-toggle="modal"><i class="fa fa-power-off fa-margin-top fa-color"></i></a> -->
<!--           </li> -->
		
<!--         </ul> -->
<!--       </div> -->
<!--     </nav> -->

 <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="" class="dropdown-toggle" data-toggle="dropdown">
              <!-- The user image in the navbar-->
              <img src="dist/img/admin.png" class="user-image" alt="User Image">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs" id="header_id"></span>
            </a>
            <ul class="dropdown-menu">
              <!-- The user image in the menu -->
              <li class="user-header">
                <img src="dist/img/admin.png" class="img-circle" alt="User Image">
                <p>
                 	 <span id="popup_id"></span>
                </p>
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                </div>
                <div class="pull-center">
                	<table>
                		<button type="button" class="btn btn-default btn-size btn-detail" data-toggle="modal" onclick="pwdchange();" style="margin-right: 18px;">패스워드변경        
                		</button>
                	</table>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#logoutModal" data-toggle="modal"><i class="fa fa-power-off fa-margin-top fa-color"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  
  
  <input type="hidden" id="domain" value="<%=URLDecoder.decode(domain,"UTF-8")%>">
  <input type="hidden" id="crmdomain_flag" value="<%=URLDecoder.decode(crmdomain,"UTF-8")%>">
  <input type="hidden" id="usertype" value="<%=type1%>">
  <input type="hidden" id="adminPwd_flag" value="">
	<div id="adminPwdModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-content" style="width: 400px">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="adminPwdModalTitle" style="font-size: 16px;"></div>
			</div>
			<div class="modal-body" id="adminPwdModalBody"></div>
		</div>
	</div>
	<div class="modal fade" id="logoutModal" style="display: none;">
  	<div class="modal-dialog modal-sm">
    	<div class="modal-content">
      	<div class="modal-header"><h4><i class="fa fa-lock" style="margin-right: 10px;"></i><span class="i18n-logout-header"></span></h4></div>
      	<div class="modal-body"><i class="fa fa-question-circle" style="margin-right: 10px;"></i><span class="i18n-logout-msg"></span></div>
      	<div class="modal-footer text-center">
      		<a href="logout.jsp" class="btn btn-primary"><span class="i18n-logout-apply"></span></a>
      		<a href="javascript:;" class="btn btn-default" data-dismiss="modal"><span class="i18n-logout-cancel"></span></a>
     		</div>
    	</div>
  	</div>
  </div>
  
  
  
  
   <div class="modal fade" id="modal-default"></div>
	<div class="modal fade" id="modal-update"></div>
	<div class="modal fade" id="modal-add"></div>
	<div class="modal fade" id="modal-addDel"></div>
	<div class="modal fade" id="modal-del"></div>
	
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="myModalTitle" style="font-size: 16px;"></div>
			</div>
			
			<div class="modal-body" id="myModalBody"></div>
		</div>
	</div>
  <script>
		$("#header_id").text(getCookie("userInputId"));  
		$("#popup_id").text(getCookie("userInputId"));

		
//  	$('.dropdown-toggle').dropdown();
	$(document).ready(function(){
		
		right = "<%=type1%>";
		email = "<%=email%>";
		aid = "";

		if ( right == "1" )
		{
			$("#domain3").show();
			$("#liDomain").hide();
		}
		else if( right == "2" || right == "3" || right == "4"  )
		{
			$("#domain3").hide();
			$("#liDomain").show();
		}
		else
		{
			$("#domain3").show();
			$("#liDomain").hide();
		}
		
		
		domain_list(email,right);
		
		$("#select_domainName").val("<%=domain%>");
<%-- 		console.log("<%=URLDecoder.decode(domain,"UTF-8")%>");	 --%>
		ES_URL = "/hkmc/ajax/ES_login.jsp?type=PWCH&email="+email+"";
		
		
		
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
						
							$("#popup_id").text(hits[0]._source.username);	
							aid = hits[0]._id;
							
						}
					});
			}
					
				
			});
		
  	});
	
	function domain_list(email,right) {
		
		var userIp = $('#userIp').val();
		var domainName = new Array();
		var crmdomainName = new Array();
		var html = "";
		var email = email;
		var right = right;
		
		
		ES_URL = "/hkmc/ajax/ES_admin.jsp?type=header";

	
	
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
							crmdomainName.push(hits[i]._source.crmdomain);
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
				doaminselect(email,domainName,crmdomainName,right);
				
			}
		});
	}

	function changeDomain(email,domain,crmdomain)
	{

		
// 		var crmdomain = $("#select_domainName").val();
// 		var target = document.getElementById("select_domainName")
// 	  	var domain = target.options[target.selectedIndex].text;
		
		if (domain == null || domain == "null" )
		{
			$("#domain3").val("");
			$("#domain2").text("");
			$("#domain2").hide();	
		}
		else
		{
			$("#domain3").val(domain);
			$("#domain2").text(domain);
			$("#domain2").show();	
		}
		
		
			
		
		window.location = "loginHandler.jsp?"+"email="+email+"&domain="+encodeURI(encodeURIComponent(domain))+"&crmdomain="+encodeURI(encodeURIComponent(crmdomain))+"&lang="+$("#language").val()+"&type="+right
	}
	function listdomain()
	{
		
	  	
		
		
// 		html += "            <select id=\"select_domainName\"  style=\"text-align-last: center;\" onchange=\"changeDomain();\">";
// 		html += "              <option value=\"null\" class=\"\">고객사명 선택</option>";
// 		for(var i=0;i<domainName.length;i++){
// 			html += "<option value=\""+crmdomainName[i]+"\">"+domainName[i]+"</option>";
		
// 		}
// 		html += "            </select>";
						
		ES_URL = "/hkmc/ajax/ES_admin.jsp?type=header";

	
	
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
								html += "<tr>";
							for(var i=0;i<hits.length;i++)
							{
								if(i % 5 == 0 && i!=0)
								{
								html += "</tr>"
								html += "<tr>";
								}
								
								html += "  <td style=\"cursor: pointer;\" onclick=\"changeDomain('"+email+"','"+hits[i]._source.domain+"','"+hits[i]._source.crmdomain+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.domain+"</span></div></td>";
								
									
							}
							html += "</tr>";
						}
					});
					
					if ( code != 0 ){
						if( code == 6)
							window.location = 'login.jsp';
						else
							showErrMsg(code, msg);
						return
					}
					
					$("#companylist").empty();
					$("#companylist").append(html);
				}
			});						
		
		

		
	
	}

	function doaminselect(email,domainName,crmdomainName,right)
	{
		
	  	
		var html = "";
		
		
// 		html += "            <select id=\"select_domainName\"  style=\"text-align-last: center;\" onchange=\"changeDomain();\">";
// 		html += "              <option value=\"null\" class=\"\">고객사명 선택</option>";
// 		for(var i=0;i<domainName.length;i++){
// 			html += "<option value=\""+crmdomainName[i]+"\">"+domainName[i]+"</option>";
		
// 		}
// 		html += "            </select>";
	        
			html += "<button type=\"button\" onclick=\"getdomainSearch();\">회사명 </button>"
			html += "<span id=\"domain2\" style=\"color:white; display: inline-block; vertical-align: middle; margin-left: 5px;\">"+"<%=URLDecoder.decode(domain,"UTF-8")%>"+"</span>"
		
		
		
		$("#liDomain").html("");
		$("#liDomain").append(html);

		
		updateContent();
	
	}
	
	function pwdchange()
	{
		admin_update('',aid);
		
	}
	
	function getdomainSearch()
	{
		var html = "";
		
		html  = "<div class=\"modal-dialog\" >";
		html += "  <div class=\"modal-content\">";
		html += "    <div class=\"modal-header\">";
		html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		html += "        <span aria-hidden=\"true\">&times;</span></button>";
		html += "      <h4 class=\"modal-title\"><span class=\"\">회사명 검색</span></h4>";
		html += "    </div>";
		html += "    <div class=\"modal-body\">";
		html += "      <div class=\"nav-tabs-custom\" style=\"box-shadow:none; margin-bottom: 0px\">";
//		html += "        <ul class=\"nav nav-tabs\">";
//		html += "          <li id=\"individualEnrollment\" class=\"active\"><a href=\"#Individual_Enrollment\" data-toggle=\"tab\"><span class=\"i18n-user-modal-add-user-inidividual\"></span></a></li>";
//		html += "          <li id=\"bundleEnrollment\"><a href=\"#Bundle_Enrollment\" data-toggle=\"tab\"><span class=\"i18n-user-modal-add-user-bundle\"></span></a></li>";
//		html += "        </ul>";
		html += "        <div class=\"tab-content\" style=\"padding-top:30px;\">";
	    html += "          <div class=\"active tab-pane\" id=\"Individual_Enrollment\">";
	    html += "            <table id=\"example2\" class=\"table table-bordered table-hover table-center\">";
		html += "              <colgroup>";
		html += "                <col width=\"20%\" />";
		html += "                <col width=\"30%\" />";
		html += "                <col width=\"10%\" />";
		html += "              </colgroup>";
		html += "              <tbody>";
		html += "                <tr>";
		html += "                  <th><span class=\"\">회사명</span></th>";
		html += "          	       <td><input id=\"domain_search\" type=\"text\" style=\"width: 100%; padding-left: 10px;\" autocomplete=\"off\" onkeydown=\"javascript:if(event.keyCode==13){findDomain();}\"></td>";
		html += "     			   <td style=\"cursor: pointer;\" onclick=\"findDomain();\"><span class=\"\">검색</span></td>";
		html += "                </tr>";
	    html += "            </table>";
	    html += "          </div>";
	    html += "        </div>";
		html += "      </div>";
		
		html += "   			            <div class=\"box-body\">";
		html += "   			              <table class=\"table table-bordered table-hover\">";
		html += "   			              	<colgroup>";
		html += "   								<col style=\"width: 20%\"/>";
		html += "   								<col style=\"width: 20%\"/>";
		html += "   								<col style=\"width: 20%\"/>";
		html += "   								<col style=\"width: 20%\"/>";
		html += "   								<col style=\"width: 20%\"/>";
		html += "   			              	</colgroup>";
		html += "   				              <thead>";
		html += "   				                <tr>";
		html += "										<th colspan =\"5\" class=\"aTag\"><span>회사리스트</span></th>";
		html += "   				                </tr>";
		html += "   				              </thead>";
		html += "   				              <tbody id=\"companylist\">";
		html += "   				              </tbody>";
		html += "   						    </table>";
		html += "   			            </div>";
		
		html += "    </div>";
		 
		
		
		
		

		
		
		html += "    <div class=\"modal-footer\">";
		
		html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-user-btn-close\"></span></button>";
		html += "    </div>";
		html += "  </div>";
		html += "</div>";
		
		listdomain();
		
		$("#modal-add").empty();
		$("#modal-add").css("overflow","auto");
		$("#modal-add").append(html);
		$("#modal-add").modal();
		updateContent();
	}
	
	function findDomain()
	{
		
		var searchKeyword = $("#domain_search").val();
		
		$.ajax({
			type:"POST",
			url: "/hkmc/ajax/ES_login.jsp?type=domain_search&searchKeyword=\"*"+searchKeyword+"*\"",
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON",
			timeout: 30000,
			success : function(data) {
				var html = "", cnt = 1;
				$.each(data, function(key, value) {
					
					if ( key == "hits" )
					{		
						hits = value.hits;
						if ( value.total == 0)
						{
							$("#recCount").text("0");
							
							html  = "<div class=\"modal-dialog\" style=\"min-width: 30%; max-width: 50%;\">";
							html += "  <div class=\"modal-content\">";
							html += "    <div class=\"modal-header\">";
							html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
							html += "        <span aria-hidden=\"true\">&times;</span></button>";
							html += "      <h4 class=\"modal-title\"><span>회사 검색 결과</span><span id=\"recCount\"></span></h4>";
							html += "    </div>";
							html += "    <div class=\"modal-body\">";
							html += "     <table class=\"table table-bordered table-hover\">";
							html += "      	<colgroup>";
							html += "    		<col style=\"width: 10%\"/>";
							html += "      		<col style=\"width: 5%\"/>";
							html += "      	</colgroup>";
							html += "   		 <thead>";
							html += "    			<tr>";
							html += "  				  <th class=\"aTag\"><span>회사명</span></th>";
							html += "  				  <th class=\"aTag\"><span>적용</span></th>";			
							html += "  				</tr>";
							html += "   		 </thead>";
							html += "      <div id=\"divMaInfo\" style=\"display: flex;\">";
							html += "<tr>";
							html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
							html += "</tr>";
							html += "          </table>";
							html += "        </div>";
							
							html += "    <div class=\"modal-footer\">";
							html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-maillist-close\">닫기</span></button>";
							html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" onclick=\"findDomain();\"><span class=\"\">재검색</span></button>";
							html += "    </div>";
							html += "  </div>";
							html += "</div>";
							
							$("#modal-malist-PmaContent").empty();
							$("#modal-malist-PmaContent").css("overflow","auto");
							$("#modal-malist-PmaContent").append(html);
							$("#modal-malist-PmaContent").modal();					
						
						}else{
							$("#recCount").text(numberWithCommas(value.total));
							
								
								html  = "<div class=\"modal-dialog\" style=\"min-width: 30%; max-width: 50%;\">";
								html += "  <div class=\"modal-content\">";
								html += "    <div class=\"modal-header\">";
								html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
								html += "        <span aria-hidden=\"true\">&times;</span></button>";
								html += "      <h4 class=\"modal-title\"><span>회사 검색 결과</span><span id=\"recCount\"></span></h4>";
								html += "    </div>";
								html += "    <div class=\"modal-body\">";
								html += "     <table class=\"table table-bordered table-hover\">";
								html += "      	<colgroup>";
								html += "   								<col style=\"width: 20%\"/>";
								html += "   								<col style=\"width: 20%\"/>";
								html += "   								<col style=\"width: 20%\"/>";
								html += "   								<col style=\"width: 20%\"/>";
								html += "   								<col style=\"width: 20%\"/>";
// 								html += "      		<col style=\"width: 5%\"/>";
								html += "      	</colgroup>";
								html += "   		 <thead>";
								html += "    			<tr>";
								html += "  				  <th colspan =\"5\" class=\"aTag\"><span>회사명</span></th>";
// 								html += "  				  <th class=\"aTag\"><span>적용</span></th>";			
								html += "  				</tr>";
								html += "   		 </thead>";
								html += "      <div id=\"divMaInfo\" style=\"display: flex;\">";
								html += "<tr>";
								for ( var i=0; i<hits.length;i++ )
								{
									if(i % 5 == 0 && i!=0)
									{
									html += "</tr>"
									html += "<tr>";
									}
									html += "  <td style=\"cursor: pointer;\" onclick=\"changeDomain('"+email+"','"+hits[i]._source.domain+"','"+hits[i]._source.crmdomain+"');\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.domain+"</span></div></td>";
// 									html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.crmdomain+"</span></div></td>";
									
								}
								html += "</tr>";
								html += "          </table>";
								html += "        </div>";
								
								html += "    <div class=\"modal-footer\">";
								html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-maillist-close\">닫기</span></button>";
								html += "    </div>";
								html += "  </div>";
								html += "</div>";
								
								$("#modal-malist-PmaContent").empty();
								$("#modal-malist-PmaContent").css("overflow","auto");
								$("#modal-malist-PmaContent").append(html);
								$("#modal-malist-PmaContent").modal();	
							
						}
					}
				});
			}
		});
	}
	
	

 
	
  </script>
</body>
</html>