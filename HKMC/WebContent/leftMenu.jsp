<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
 request.setCharacterEncoding("utf-8");
 
	String language = (String)request.getSession().getAttribute("language");
	String domain = (String)request.getSession().getAttribute("domain");
	String crmdomain = (String)request.getSession().getAttribute("crmdomain");
	String type1 = (String)request.getSession().getAttribute("type");
%>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
	<!-- AdminLTE App -->
	<script src="dist/js/adminlte.js"></script>
<!-- sidebar: style can be found in sidebar.less -->
	    <section class="sidebar">
	
	      <!-- Sidebar Menu -->
	      <ul class="sidebar-menu" data-widget="tree">
	        <!-- Optionally, you can add icons to the links -->
	        <li class="treeview active"><a id="a_Dashboard" href="#" onclick="Dashboard(); return false; this.onclick=null;"><i class="fa fa-dashboard"></i> <span class="i18n-leftmenu-dashboard"></span></a></li>
			<li class="treeview">
				<a id="#" href="#" onclick="NoticeList(); return false; this.onclick=null;"><i class="fa fa-newspaper-o"></i> <span class="i18n-leftmenu-notice"></span>
				</a>
			<li class="treeview">
				<a href="#" onclick="MaList(); return false; this.onclick=null;"><i class="fa fa-gears"></i> <span class="i18n-leftmenu-ma-list-total"></span>
				</a>
			</li>
			<li class="treeview">
				<a href="#" onclick="ProjectList(); return false; this.onclick=null;"><i class="fa fa-cubes"></i> <span class="i18n-leftmenu-project-list-total"></span>
				</a>
			</li>
			<li class="treeview">
				<a href="#" onclick="CustomerInfo(); return false; this.onclick=null;"><i class="fa fa-desktop"></i> <span class="i18n-leftmenu-customer-infomation"></span>
				</a>
			</li>
			<li >
				<a href="#" onclick="supportsoftcamp(); return false; this.onclick=null;"><i class="fa fa-suitcase"></i> <span>제품 FAQ</span>
				</a>
			</li>
			<li >
				<a href="#" onclick="supportportal(); return false; this.onclick=null;"><i class="fa fa-edit"></i> <span>요청/문의 접수</span>
				</a>
			</li>
			

			<!-- 1  계열사 관리자 -->
	        <li class="treeview" id="leftUserMenu">
				<a href="#" onclick="userPreferences(); return false; this.onclick=null;"><i class="fa fa-users"></i> <span class="i18n-leftmenu-preferences"></span>
				</a>
			</li>


			<!-- 2  직원 -->
			<li class="treeview" id="customerMenu">
	          <a href="#" onclick="domainPreferences(); return false; this.onclick=null;"><i class="fa fa-users"></i> <span class="">계정관리</span>
	            <span class="pull-right-container">
	                <i class="fa fa-angle-left pull-right"></i>
	              </span>
	          </a>
	          <ul class="treeview-menu">
	            <li><a href="#" onclick="domainPreferences(); return false; this.onclick=null;"><i class="fa fa-circle-o"></i><span class="i18n-leftmenu-domain-preference"></span></a></li>
	            <li><a href="#" onclick="adminPreferences(); return false; this.onclick=null;"><i class="fa fa-circle-o"></i><span class="i18n-leftmenu-admin-preference"></span></a></li>
	            <li><a href="#" onclick="userPreferences(); return false; this.onclick=null;"><i class="fa fa-circle-o"></i><span class="i18n-leftmenu-user-preference"></span></a></li>
	          </ul>
	        </li>
	        
	        <!-- 3  그룹사 관리자 -->
	         <li class="treeview" id="leftadminMenu">
				<a href="#" onclick="adminPreferences(); return false; this.onclick=null;"><i class="fa fa-users"></i> <span class="i18n-leftmenu-preferences"></span>
				</a>
			</li>
			
	        <li class="treeview" id="softcampMenu">
	          <a href="#" onclick="all_Dashboard(); return false; this.onclick=null;"><i class="fa fa-database"></i> <span class="">그룹사 전체 현황</span>
<!-- 	          <a href="#" onclick="certification(); return false; this.onclick=null;"><i class="fa fa-cog"></i> <span class="i18n-leftmenu-preferences"></span> -->
	            <span class="pull-right-container">
	                <i class="fa fa-angle-left pull-right"></i>
	              </span>
	          </a>
	          <ul class="treeview-menu">
	            <li><a href="#" onclick="all_Dashboard(); return false; this.onclick=null;"><i class="fa fa-dashboard"></i> <span class="i18n-leftmenu-dashboard"></span></a></li>
	            <li><a href="#" onclick="all_MaList(); return false; this.onclick=null;"><i class="fa fa-gears"></i> <span class="i18n-leftmenu-ma-list-total"></span></a></li>
	            <li><a href="#" onclick="all_ProjectList(); return false; this.onclick=null;"><i class="fa fa-cubes"></i> <span class="i18n-leftmenu-project-list-total"></span></a></li>
			  </ul>
	        </li>
	        
	      </ul>
	      <!-- /.sidebar-menu -->
	    </section>
	    <!-- /.sidebar -->
	    <script>
	    	$(document).ready(function(){
				type = "<%=type1%>";
				
				if ( type == "1" )
				{
					$("#leftUserMenu").show();
					$("#customerMenu").hide();
					$("#softcampMenu").hide();
					$("#leftadminMenu").hide();
				}
				else if( type == "2" )
				{
					$("#leftUserMenu").hide();
					$("#customerMenu").show();
					$("#softcampMenu").show();
					$("#leftadminMenu").hide();
				}
				else if( type == "3" )
				{
					$("#leftUserMenu").hide();
					$("#customerMenu").hide();
					$("#softcampMenu").show();
					$("#leftadminMenu").show();
				}else if( type == "4" )
				{
					$("#leftUserMenu").hide();
					$("#customerMenu").hide();
					$("#softcampMenu").show();
					$("#leftadminMenu").hide();
				}else 
				{
					$("#leftUserMenu").hide();
					$("#customerMenu").hide();
					$("#softcampMenu").hide();
					$("#leftadminMenu").hide();
				}
	    	});
	    	
	    	function divisionLeftMenu(val)
	    	{
	    		$.each(val,function(key,value){
	    			if ( key == "spam" )
	    			{
	    				if ( value == "hide" )
    					{
	    					$("#liSpamPolicy").css("display","none");
    	    			$("#treePolicy").attr("onclick","MailBodyPolicy(); return false; this.onclick=null;");
    					}
	    				else if ( value == "show")
	    				{
	    					$("#liSpamPolicy").css("display","block");
	    				}
	    			}
	    			
						if ( key == "virus" )
						{
							if ( value == "hide" )
		    				$("#liVirusPolicy").css("display","none");
		    			else if ( value == "show")
		    				$("#liVirusPolicy").css("display","block");
	    			}
	    		});
	    	}
	    	function supportsoftcamp(val)
	    	{
	    		window.open("https://support.softcamp.co.kr","_blank"); 
	    	
	    	}
	    	function supportportal(val)
	    	{
	    		$(".content").empty();
	    		$(".content").load("supportportal.jsp");
	    	
	    	}
	    </script>
</body>
</html>