<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.net.URLDecoder"%>
<%
	request.setCharacterEncoding("UTF-8");

	response.addHeader("Access-Control-Allow-Origin", "*");
	response.addHeader("Access-Control-Allow-Credentials", "true");
	response.addHeader("Access-Control-Max-Age", "2520");
	response.addHeader("Access-Control-Allow-Methods", "GET, POST");
	
	String ACCOUNT_NAME = request.getParameter("ACCOUNT_NAME");
	String crmdomain_flag = (String)request.getSession().getAttribute("crmdomain_flag");
%>
<html>
<head>
	<!-- Date Picker -->
	<link rel="stylesheet" href="dist/css/bootstrap-datepicker.min.css">
</head>
<body class="hold-transition skin-blue sidebar-mini">
	<!-- jQuery Knob -->
	<script src="dist/js/jquery.knob.js"></script>
	<!-- Sparkline -->
	<script src="dist/js/jquery.sparkline.min.js"></script>
	
	<script src="dist/js/Chart.js"></script>
	<!-- daterangepicker -->
	<script src="dist/js/moment.min.js"></script>
	<script src="dist/js/daterangepicker.js"></script>
	<!-- datepicker -->
	<script src="dist/js/bootstrap-datepicker.min.js"></script>
	<!-- Bootstrap 3.3.7 -->
<!-- 	<script src="dist/js/bootstrap.min.js"></script> -->
	<!-- PACE -->
	<script src="dist/js/pace.min.js"></script>

	<script src="include/common.js"></script>
	<script src="include/softmore.js"></script>
<!-- 		<script src="js/all_moniter.dashboard.js"></script> -->
	
	
		<!-- Date Picker -->

	
	

	
	<!-- Main content -->
	<section class="content">
	  <!-- Small boxes (Stat box) -->
	
	  
<!-- 	   <div class="col-xs-12"> -->
<!--         <div class="box"> -->
<!-- 			<div class="box box-solid bg-green-gradient"> -->
<!-- 				<div class="box-header"> -->
<!-- 					<span class="fa fa-newspaper-o" style="margin-bottom: 5px;"></span> -->
<!-- 					<h3 class="box-title"><span class="">공지사항</span></h3> -->
				
<!-- 				 <div class="box-tools pull-right"> -->
<!-- 				</div> -->
<!-- 				<div class="box-header"> -->
			
<!-- 					<div class="box-body"> -->
<!-- 					  <table class="table table-bordered table-hover"> -->
<!-- 						<colgroup> -->
<!-- 							<col style="width: 10%"/> -->
<!-- 							<col style="width: 60%"/> -->
<!-- 							<col style="width: 10%"/> -->
<!-- 							<col style="width: 20%"/> -->
<!-- 						</colgroup> -->
<!-- 						<thead> -->
<!-- 							<tr> -->
<!-- 							  <th class="i18n-dashboard-sender-domain-no"></th> -->
<!-- 							  <th class="">제목</th> -->
<!-- 							  <th class="">게시일</th> -->
<!-- 							  <th class="">분류</th> -->
<!-- 							</tr> -->
						
							
<!-- 						</thead> -->
<!-- 							<tbody id="MainNoticeList"> -->
<!-- 	          			    </tbody>	 -->
<!-- 					  </table> -->
<!-- 					</div> -->
<!-- 					<div class="box-body"> -->
<!-- 			</div> -->
			<!-- <div class="box box-solid bg-green-gradient"> -->
<!-- 		</div>			 -->
		<!-- <div class="box"> -->
<!-- 	 </div> -->
	  <!-- <div class="col-xs-12"> -->
	  
<!-- 	
	 
	  <div class="row" style="margin-left: 0; margin-right: 0">
	    <div class="col-xs-12">
	      <div class="box box-solid">
	        <div class="box-header">
	          <i class="fa fa-desktop"></i>
	          <h3 class="box-title"><span class="">대시보드</span></h3>
	      
	        </div> -->
	        
	         <div class="col-xs-12">
        <div class="box">
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
				 	<i class="fa fa-television"></i>
					<h3 class="box-title"><span class="">현황판</span></h3>
				
				<!--  <div class="box-tools pull-right"> -->
				</div>
				<!-- Content Header (Page header) -->
	<section class="content-header">
	  <h1>
	    <small><i class="fa fa-exclamation iColor"></i><span>각 항목을 클릭하면 리스트를 볼 수 있습니다.</span></small>
	  </h1>
	</section>
	        <!-- /.box-header -->
	        <div class="box-body" style="padding: 0px 20px">
	          <div class="row">
	          	<table id="systemDashboard" class="table" style="cursor: pointer" >
	          		<tr>
	          			<td>
		          			<div class="info-box text-center">
								<span class="" style="font-size: 20px;">서비스 지원 분류별 현황</span>
							    <div class="line">
									<canvas id="abatement-ma-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
	          			<td>
	          				<div class="info-box text-center">
								<span class="" style="font-size: 20px;">서비스 지원 현황(최근 3개월)</span>
							    <div class="line">
									<canvas id="abatement-matotalchart-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
<!--	          			<td>
	          				<div class="info-box">
					            <span class="info-box-icon" id="" style="background-color: cornflowerblue;"><img src="" class="icon-margin-top"></span>
					
					            <div class="info-box-content text-center">
					              <span class="info-box-text" style="font-size: 20px;">프로젝트</span>
					              <span style="font-size: 30px;" id="projectcount"></span>
					            </div>

					            
					          </div>
-->
<!-- 	          				<div class="system_disk_graph"></div> -->
	          		</tr>
	          		<tr>
	          			<td>
		          			<div class="info-box text-center">
								<span class="" style="font-size: 20px;">주별 접수 현황</span>
							    <div class="line">
									<canvas id="abatement-dailychart-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
	          			<td>
	          				<div class="info-box text-center">
								<span class="" style="font-size: 20px;">진행 중인 장애 현황</span>
							    <div class="line">
									<canvas id="abatement-aging-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
<!--	          			<td>
	          				<div class="info-box">
					            <span class="info-box-icon" id="" style="background-color: cornflowerblue;"><img src="" class="icon-margin-top"></span>
					
					            <div class="info-box-content text-center">
					              <span class="info-box-text" style="font-size: 20px;">프로젝트</span>
					              <span style="font-size: 30px;" id="projectcount"></span>
					            </div>

					            
					          </div>
-->
<!-- 	          				<div class="system_disk_graph"></div> -->
	          		</tr>
	          		<tr>
	          			<td>
		          			<div class="info-box text-center">
								<span class="" style="font-size: 20px;">접수 Top10 그룹사</span>
							    <div class="line">
									<canvas id="abatement-ctop-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
	          			<td>
		          			<div class="info-box text-center">
								<span class="" style="font-size: 20px;">장애 Top10 그룹사</span>
							    <div class="line">
									<canvas id="abatement-ptop-chart" style="height:300px">
									</canvas>
								</div>
					            <!-- /.info-box-content -->
					          </div>
<!-- 				          	<div class="system_cpu_graph"></div> -->
	          			</td>
          			</tr>
<!--           			<tr> -->
<!-- 	          			<td> -->
<!-- 		          			<div class="info-box text-center"> -->
<!-- 								<span class="" style="font-size: 20px;">활성 티켓 보유 Top10</span> -->
<!-- 							    <div class="line"> -->
<!-- 									<canvas id="abatement-top-chart" style="height:300px"> -->
<!-- 									</canvas> -->
<!-- 								</div> -->
<!-- 					            /.info-box-content -->
<!-- 					          </div> -->
<!-- <!-- 				          	<div class="system_cpu_graph"></div> --> -->
<!-- 	          			</td> -->
<!--           			</tr> -->
	          	</table>
	          	
	          </div>
	          <!-- /.row -->
	        </div>
	        <!-- /.box-body -->
	      
	      </div>
	      <!-- /.box -->
	    </div>
	    <!-- /.col -->
	  </div>
	  <!-- /.row -->
	  <!-- Main row -->
<!--	
	<div class="col-xs-12">
	    <div class="box">
	      
			<div class="box box-solid bg-light-blue-gradient">
				<div class="box-header">
				  <i class="fa fa-line-chart"></i>
		
				  <h3 class="box-title"><span class="">유지보수 현황(최근 3개월)</span></h3>
		
				  <div class="box-tools pull-right">
					<button type="button" style="width: 30px; height: 30px; outline: none;" class="btn btn-custom btn-size" data-widget="box-refresh1" onclick="getStatSEG();"><i style="font-size: 18px;" class="fa fa-refresh"></i></button>
				  </div>
				</div>
	        <div class="box-body border-radius-none">
	        
			</div>
	        
				<div class="box-footer-origin no-border" style="height: 160px">
				  <div class="row" style="display: flex;">
					<div class="col-xs-12 text-center" style="flex:1; margin: 0px 50px">
						<table class="table" style="table-layout: fixed;">
							<thead>
								<tr>
									<th class="i18n-dashboard-amount-division th-custom"></th>
									<th class="th-custom" style="font-size: 13px;">장애</th>
									<th class="th-custom" style="font-size: 13px;">기능문의</th>
									<th class="th-custom" style="font-size: 13px;">기술지원</th>
									<th class="th-custom" style="font-size: 13px;">추가개발</th>
									<th class="th-custom" style="font-size: 13px;">정기점검</th>
									<th class="th-custom" style="font-size: 13px;">문서제공</th>
									<th class="th-custom" style="font-size: 13px;">전체</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center"><div class="text-over" style="font-size: 14px; color: black;"><span class="" id="">진행</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_1">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_2">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_3">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_4">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_5">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_6">0</span></div></td>
									<td class="text-center"><div class="text-over table-font-size"><span id="Maintenance_ongoing">0</span></div></td>
								</tr>
								<tr>
									<td class="text-center td-custom-border"><div class="text-over"><span style="color: black;" class="">완료</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_7">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_8">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_9">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_10">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_11">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_12">0</span></div></td>
									<td class="text-center td-custom-border"><div class="text-over table-font-size"><span id="Maintenance_total">0</span></div></td>
								</tr>

							</tbody>
						</table>
					</div>
	          
	          </div>
	          
	        </div>
        </div>
	</div>
	</div>
-->
<!-- 	<div class="col-xs-12"> -->
<!-- 	    <div class="box"> -->
<!-- 	      Custom tabs (Charts with tabs) -->
<!-- 			<div class="box box-solid bg-green-gradient"> -->
<!-- 				<div class="box-header"> -->
					
<!-- 				  		<span class="fa fa-gears" style="margin-bottom: 5px;"></span> -->
<!-- 						<h3 class="box-title"><span class="">서비스 지원 진행 현황</span><span>( </span><span id="DashCount"></span><span> 건)</span></h3> -->
						
					
<!-- 				</div> -->
<!--             /.box-header -->
<!--             <div class="box-body"> -->
<!--               <table class="table table-bordered table-hover"> -->
<!--               	<colgroup> -->
              		
<!--               		<col style="width: 10%"/> -->
<!--               		<col style="width: 55%"/> -->
<!--               		<col style="width: 15%"/> -->
<!-- 					<col style="width: 10%"/> -->
<!-- 					<col style="width: 10%"/> -->
<!--               	</colgroup> -->
<!-- 	              <thead> -->
<!-- 	                <tr> -->
						
<!-- 						<th class="">접수일</th> -->
<!-- 						<th class="">제목</th> -->
<!-- 						<th class="">구분</th> -->
<!-- 						<th class="">상태</th> -->
<!-- 						<th class="">최근진행일</th> -->
<!-- 	                </tr> -->
<!-- 	              </thead> -->
<!-- 	              <tbody id="MainMaList"> -->
<!-- 	              </tbody> -->
<!--               </table> -->
<!--             </div> -->
<!--            </div> -->
<!--             /.box-body -->
<!--         </div> -->
<!-- 	</div>  -->

	<div class="col-xs-12">
	    <div class="box">
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
				  		<span class="fa fa-gears" style="margin-bottom: 5px;"></span>
						<h3 class="box-title"><span class="">서비스 (장애)지연 Top 10 현황</span></h3>
				</div>
            <div class="box-body">
              <table class="table table-bordered table-hover">
              	<colgroup>
              		<col style="width: 10%"/>
              		<col style="width: 50%"/>
              		<col style="width: 10%"/>
					<col style="width: 10%"/>
					<col style="width: 10%"/>
					<col style="width: 10%"/>
              	</colgroup>
	              <thead>
	                <tr>
						<th class="">접수일</th>
						<th class="">제목</th>
						<th class="">지연기간</th>
						<th class="">상태</th>
						<th class="">담당자</th>
						<th class="">최근진행일</th>
	                </tr>
	              </thead>
	              <tbody id="agingMaList">
	              </tbody>
              </table>
            </div>
           </div>
        </div>
	</div> 

	 
	  </section>
	<div id="footer">
	
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="myModalTitle" style="font-size: 16px;"></div>
			</div>
			
			<div class="modal-body" id="myModalBody"></div>
		</div>
	</div>
	
	<div class="modal fade" id="modal-malist-PmaContent" style="padding-left: 0px;"></div>
	
	
		<!-- Modal Message -->
		<div id="myModal" class="modal fade" tabindex="1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index:1051">
			<div class="modal-dialog modal-sm modal-content">
				<div class="modal-header">
			  	<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			    <div id="myModalTitle" style="font-size: 16px;"></div>
			  </div>
			    
			  <div class="modal-body" id="myModalBody"></div>
			</div>
		</div>
	</div>
	
	
	
	<div class="modal fade" id="modal-more-sendrank"></div>
	
		<div class="modal fade" id="modal-malist-maContent" style="padding-left: 0px;"></div>
		
	
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<div id="myModalTitle" style="font-size: 16px;"></div>
			</div>
			
			<div class="modal-body" id="myModalBody"></div>
		</div>
	</div>
	<div class="modal fade" id="modal-Noticelist-Content" style="padding-left: 0px;"></div>
	
	
	

	<!-- /.content -->
	<script type="text/javascript">
	$(document).ready(function() {
		
		$('#language').val("ko-KR");
		
		$("#domain2").hide();
		$("#select_domainName").hide();
		
		if ( email == "brmun" )
		{
			$("#systemDashboard").show();
			$("#systemDashboard2").show();
		}
		else if( email == "111" )
		{
			$("#systemDashboard").hide();
			$("#systemDashboard2").show();
		}
		else
		{
				$("#systemDashboard").show();
				$("#systemDashboard2").hide();
		}
		
		
		all_dashboardGetInit();
		// $(".connectedSortable").sortable({
		    // placeholder         : 'sort-highlight',
		    // connectWith         : '.connectedSortable',
		    // containment         : '#dashboardDiv',
		    // handle              : '.box-header, .nav-tabs',
		    // forcePlaceholderSize: true,
		    // zIndex              : 999999
		  // });
		  // $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

		  // jQuery UI sortable for the todo list
		  $('.todo-list').sortable({
		    placeholder         : 'sort-highlight',
		    handle              : '.handle',
		    forcePlaceholderSize: true,
		    zIndex              : 999999
		  });	
		  
	});
	
	</script>
	<script src="include/locale/language.js"></script>
</body>
</html>