<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="include/common.jsp"%>
<%
		
	String filter = request.getParameter("filter");
	if ( filter == null || filter.length() == 0 )
		filter = "";
	
	String Detailfilter = request.getParameter("Detailfilter");
	if ( Detailfilter == null || Detailfilter.length() == 0 )
		Detailfilter = "";
	
	String orderBy = request.getParameter("orderBy");
	if ( orderBy == null || orderBy.length() == 0 )
		orderBy = "TIME";
	
	String asc = request.getParameter("asc");
	if ( asc == null || asc.length() == 0 )
		asc = "false";
	
	String pageIdx = request.getParameter("pageIdx");
	if ( pageIdx == null || pageIdx.length() == 0 )
		pageIdx = "0";
	
	String pageSize = request.getParameter("pageSize");
	if ( pageSize == null || pageSize.length() == 0 )
		pageSize = "10";
	
	String searchKeyword = request.getParameter("searchKeyword");
	if ( searchKeyword == null )
		searchKeyword = "";
	else
	{
		searchKeyword = new String(searchKeyword.getBytes("ISO8859_1"), "UTF-8");
		// remove(filter) " ' \
		searchKeyword = searchKeyword.replaceAll("[\"'\\\\]", "");
	}
	
	String loadData = request.getParameter("loadData");
	if(loadData == "" || loadData == null)
		loadData = "";
	
%>
<html>
<head>
<!-- <link rel="stylesheet" type ="text/css" href="dist/tooltip.css" /> -->
<style id="compiled-css" type="text/css">
      /*
	css-only-tooltip version 1.0.0
	ⓒ 2015 AHN JAE-HA http://github.com/eu81273
	MIT License
*/
[data-tooltip-text]:hover {
	position: relative;
}

[data-tooltip-text]:hover:after {
	background-color: #FFFFFF;
	background-color: rgba(255, 255, 255, 0.8);

	-webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);
	-moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);
	box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0);

	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;

	color:  #000000;
	font-size: 12px;
	content: attr(data-tooltip-text);

  margin-bottom: 10px;
	bottom: 100%;
	left: 0;    
	padding: 7px 12px;
	position: absolute;
	width : auto;
	min-width: 300px;
	max-width: 600px;
	word-wrap: break-word;

	z-index: 9999;
}

  </style>
</head>
<body>
	<script src="dist/js/jquery.dataTables.min.js"></script>
	<script src="dist/js/dataTables.bootstrap.min.js"></script>
	<!-- bootstrap datepicker -->
	<script src="dist/js/bootstrap-datepicker.min.js"></script>
	<!-- date-range-picker -->
	<script src="dist/js/moment.min.js"></script>
	<script src="dist/js/daterangepicker.js"></script>
	<!-- Bootstrap 3.3.7 -->
	<script src="dist/js/bootstrap.min.js"></script>
	<!-- iCheck -->
	<script src="dist/iCheck/icheck.min.js"></script>
	
	<script src="include/common.js"></script>
	<script src="include/softmore.js"></script>
	<script src="js/moniter.CustomerInfo.js"></script>
	
	<script src="include/jquery.fileDownload.js"></script>
	
	<!-- PACE -->
	<script src="dist/js/pace.min.js"></script>
	
	

  <div id="header"></div>
  <div id="left"></div>
	
  <input type="hidden" name="myurl" id="myurl" value="mailList.jsp">
  <input type="hidden" name="filter" id="filter">
  <input type="hidden" name="status" id="status">
  <input type="hidden" name="segTypes" id="segTypes">
  <input type="hidden" name="pageIdx" id="pageIdx">
  <input type="hidden" name="orderBy" id="orderBy">
  <input type="hidden" name="asc" id="asc">
  <input type="hidden" name="searchType" id="searchType">
  <input type="hidden" name="loadData" id="loadData">
  <input type="hidden" name="tagTypes" id="tagTypes">
  <input type="hidden" name="previousIdx" id="previousIdx">
	

	  <div class="col-xs-12">
		<div class="box">
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
					<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
					<h3 class="box-title"><span class="">담당자 정보</span></h3>
				<!--  <div class="box-tools pull-right"> -->
				</div>
				<!--<div class="box-header">-->
			
					<div class="box-body">
					  <table class="table table-bordered table-hover">
						<colgroup>
							<col style="width: 10%"/>
							<col style="width: 10%"/>
							<col style="width: 10%"/>
							<col style="width: 20%"/>
							<col style="width: 20%"/>
							<col style="width: 30%"/>
						</colgroup>
						<thead>
							<tr>
							  <th class="">업무구분</th>
							  <th class="">이름</th>
							   <th class="">직급</th>
							  <th class="">사내전화</th>
							  <th class="">휴대전화</th>
							  <th class="">메일주소</th>
							</tr>
						</thead>
						<tbody id="supportList">
					  </table>
					</div>
					<!--<div class="box-body">-->
			</div>
			<!-- <div class="box box-solid bg-green-gradient"> -->
		</div>			
		<!-- <div class="box"> -->
	 </div>
	  <!-- <div class="col-xs-12"> -->
	  
	<div class="col-xs-12">
		<div class="box">
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
					<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
					<h3 class="box-title"><span class="">제품 형상 정보</span></h3>
				<!--  <div class="box-tools pull-right"> -->
				</div>
				<!--<div class="box-header">-->
				<div class="box-body">
					  <table class="table table-bordered table-hover">
						<colgroup>
							<col style="width: 40%"/>
							<col style="width: 20%"/>
							<col style="width: 20%"/>
							<col style="width: 20%"/>
						</colgroup>
						<thead>
							<tr>
							  <th class="">형상명</th>
							  <th class="">버전</th>
							  <th class="">등록계정</th>
							  <th class="">등록일</th>
							</tr>
						</thead>
						<!-- <tbody id="supportList"> -->
						<tbody id="releaseInfo">
						<!-- <tr>
							<td class="text-center"><div class="text-over table-font-size"><span>4.HM.049_20180920</span></div></td>
										<td class="text-center"><div class="text-over table-font-size"><span>5.00.B13.04_beta</span></div></td>
										<td class="text-center"><div class="text-over table-font-size"><span>brmun</span></div></td>
										<td class="text-center"><div class="text-over table-font-size"><span>2018-09-20</span></div></td>
										</tr> -->
						</tbody>
					  </table>
				</div>
				
			<!--  사용 제품 시작 -->
		
				<div class="box-body">
					<section class="content-header">
						<h1>
							<small><i class="fa fa-exclamation iColor"></i><span>본 정보는 소프트캠프의 최신 릴리즈된 형상(BaseLine18 Version)기준에서 해결이 되었으나 고객사에서 사용 중인 버전의 형상에선 발견될 수 있는 결함 정보 입니다.</span></small>
						</h1>
					</section>
					  <table class="table table-bordered table-hover" style="padding: 0px 20px">
						<colgroup>
							<col style="width: 90%"/>
							<col style="width: 10%"/>
						</colgroup>
						<thead>
							<tr>
							  <th class=""><span>사용 중인 형상의 수정된 결함 (총</span> <span id="recCount"></span><span> 건)</span></th>
							  <th class="">결함 해결일</th>
							</tr>
						</thead>
						<tbody id="defectInfo">
						<!-- <tbody>
								<tr><td scope="col" >Adobe Premiere Pro CC실행이 안되는 현상.</td><td scope="col" class="text-center">2018-02-26</td>	</tr>
								<tr><td scope="col" >Acrobat 9 보안문서 프린트 출력시 출력 되지 않음</td><td scope="col" class="text-center">2018-07-20</td></tr>
								<tr><td scope="col" >엑셀 2010에서 스크린샷 버튼이 차단 되지 않는다</td><td scope="col" class="text-center">2018-03-16</td></tr>
								<tr><td scope="col" >48S에서 일부 독일어 깨짐 증상</td><td scope="col" class="text-center">2018-03-20</td></tr>
								<tr><td scope="col" >다른이름으로 저장 시 &lt;바탕화면&gt;에 새폴더 및 일부 항목의 생성 아이콘이 비활성화 되어 있음</td><td scope="col" class="text-center">2017-10-17</td></tr>
								<tr><td scope="col" >엑셀 시트복사 차단 기능 동작안함</td><td scope="col" class="text-center">2018-01-22</td></tr> -->
						</tbody>
					  </table>
					</div>
				</div>
			</div>
		</div>			
<!--  
		<div class="col-xs-12">
			<div class="box">
				<div class="box box-solid bg-green-gradient">
					<div class="box-header">
						<span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
						<h3 class="box-title"><span class="">관리포인트</span></h3>
					
					<!--  <div class="box-tools pull-right"> 
					</div>
					<!--<div class="box-header">
				
						<div class="box-body">
							<div class="box" style="height: 30%;">
							<tbody id="supportList"></tbody>
							</div>
						</div>
						<!--<div class="box-body">
				</div>
				<!-- <div class="box box-solid bg-green-gradient"> 
			</div>			
			<!-- <div class="box"> 
		 </div>
		  <!-- <div class="col-xs-12">
          
	<div class="modal fade" id="modal-Noticelist-Content" style="padding-left: 0px;"></div>
		-->
		
		
		
	<div class="col-xs-12">
	    <div class="box">
	      <!-- Custom tabs (Charts with tabs) -->
			<div class="box box-solid bg-green-gradient">
				<div class="box-header">
				  <span class="glyphicon glyphicon-equalizer" style="margin-bottom: 5px;"></span>
					<h3 class="box-title"><span class="">사용 제품</span></h3>
				</div>
				
				<div class="box-body">
					<table class="table table-bordered table-hover">
						<tbody>
							<th class="">사용 제품</th>
								<table class="table table-bordered table-hover">
									<tbody>
									<tr>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="전자문서를 암호화하고 사용자 인증, 사용권한을 제어하여 기업/조직 내 주요 기밀 정보유출을 방지하는 문서보안 솔루션">
												<input type="checkbox" name="producttype" value="Document Security">&nbsp;&nbsp;Document Security&nbsp;&nbsp;
											</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="기업의 업무 데이터를 사용자 로컬 PC가 아닌 중앙 문서 저장소로 집중화하여 중앙 통합 관리를 지원하는 문서혁신 솔루션">
												<input type="checkbox" name="producttype" value="MAXEON">&nbsp;&nbsp;MAXEON&nbsp;&nbsp
											</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="CDR(Content Disarm & Reconstruction) 기술로 문서 콘텐츠 내 의심요소 원천 제거 악성 문서파일 무해화 및 재구성하여 알려지지 않은 악성코드 위협 대응">
												<input type="checkbox" name="producttype" value="SHIELDEX">&nbsp;&nbsp;SHIELDEX&nbsp;&nbsp;
											</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="기업 내부에 보안이 적용된 문서와 도면 등의 컨텐츠를 안전하게 내/외부로 유통시키기 위한 결재/관리 시스템">
												<input type="checkbox" name="producttype" value="승인반출시스템">&nbsp;&nbsp;승인반출시스템&nbsp;&nbsp;
											</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="Document Security의 옵션 제품으로 노트북의 반입/출시 PC의 사용 여부를 제어하는 솔루션">
												<input type="checkbox" name="producttype" value="NBSecurity">&nbsp;&nbsp;NBSecurity&nbsp;&nbsp
											</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="Document Security의 옵션 제품으로 PC의 USB/CD/프린터등을 제어하는 솔루션">
												<input type="checkbox" name="producttype" value="PCSecurity">&nbsp;&nbsp;PCSecurity&nbsp;&nbsp;
											</td>
											
											<td style="word-break: break-all;" scope="col">
												<input type="checkbox" name="producttype" value="DS for MAC">&nbsp;&nbsp;DS for MAC&nbsp;&nbsp
												</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="사용자 PC 및 시스템에 적용된 문서보안을 모바일 기기에 연동하여 내부정보유출을 방지하고 효율적이고 스마트한 업무 환경을 지원하는 모바일 문서보안 솔루션">
												<input type="checkbox" name="producttype" value="DS for Mobile">&nbsp;&nbsp;DS for Mobile&nbsp;&nbsp
											</td>
									</tr>
									<tr>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="전자문서, 설계도면, 개발소스, 디자인 등 산업기밀정보와 도면보안, 고객정보DB/개인정보 유출방지를 위한 대용량 비정형 데이터 암호화 솔루션">
												<input type="checkbox" name="producttype" value="S-Work">&nbsp;&nbsp;S-Work&nbsp;&nbsp;
											</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work for Storage">&nbsp;&nbsp;S-Work for Storage&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work FX">&nbsp;&nbsp;S-Work FX&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work Isolation">&nbsp;&nbsp;S-Work Isolation&nbsp;&nbsp;</td>
<!-- 											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work NC">&nbsp;&nbsp;S-Work NC&nbsp;&nbsp;</td> -->
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work NP">&nbsp;&nbsp;S-Work NP&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-Work Point DX">&nbsp;&nbsp;S-Work Point DX&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="S-WorkPoint EX">&nbsp;&nbsp;S-WorkPoint EX&nbsp;&nbsp;</td>			
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="KeyStroke">&nbsp;&nbsp;KeyStroke&nbsp;&nbsp;</td>
											
									</tr>
									<tr>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="Ex-Right">&nbsp;&nbsp;Ex-Right&nbsp;&nbsp</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="Ex-Scanner">&nbsp;&nbsp;Ex-Scanner&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="SHIELDEX EnCrypto">&nbsp;&nbsp;SHIELDEX EnCrypto&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col">
												<input type="checkbox" name="producttype" value="PIScanner">&nbsp;&nbsp;PIScanner&nbsp;&nbsp;
											</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="문서검진서비스">&nbsp;&nbsp;문서검진서비스&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="PC-Keeper">&nbsp;&nbsp;PC-Keeper&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col"><input type="checkbox" name="producttype" value="Web Security">&nbsp;&nbsp;Web Security&nbsp;&nbsp;</td>
											<td style="word-break: break-all;" scope="col" data-tooltip-text="연동제품 또는 Add-In을 이용한 제품을 커스텀">
												<input type="checkbox" name="producttype" value="기타">&nbsp;&nbsp;기타&nbsp;&nbsp;</td>
									</tr>
								</tbody>
							</table>
					</tbody>
				</table>
			</div>
					<!--<div class="box-body">-->
					<!--  사용 제품 끝 -->
<!--             /.box-header -->
<!--             <div class="box-body"> -->
<!--               <table class="table table-bordered table-hover"> -->
<!--               	<colgroup> -->
<!--               		<col style="width: 20%"/> -->
<!--               		<col style="width: 10%"/> -->
<!--               		<col style="width: 10%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!-- 					<col style="width: 8%"/> -->
<!--               	</colgroup> -->
<!-- 	              <thead> -->
<!-- 	                <tr> -->
<!-- 						<th class="" rowspan="2">제품명</th> -->
<!-- 						<th class="" rowspan="2">보유버전</th> -->
<!-- 						<th class="" rowspan="2">보유수량</th> -->
<!-- 						<th class="" colspan="12">사용수량(점검일 기준)</th> -->
<!-- 	                </tr> -->
<!-- 	                <tr> -->
<!-- 						<th class="">1월</th> -->
<!-- 						<th class="">2월</th> -->
<!-- 						<th class="">3월</th> -->
<!-- 						<th class="">4월</th> -->
<!-- 						<th class="">5월</th> -->
<!-- 						<th class="">6월</th> -->
<!-- 						<th class="">7월</th> -->
<!-- 						<th class="">8월</th> -->
<!-- 						<th class="">9월</th> -->
<!-- 						<th class="">10월</th> -->
<!-- 						<th class="">11월</th> -->
<!-- 						<th class="">12월</th> -->
<!-- 	                </tr> -->
<!-- 	              </thead> -->
<!-- 	              <tbody id="LisenceList"> -->
<!-- 	              </tbody> -->
<!--               </table> -->
<!--             </div> -->
<!--            </div> -->
            <!-- /.box-body -->
        </div>
	</div> 
	<script type="text/javascript">
	$(document).ready(function() {
		
		$('#language').val("ko-KR");
		GetInit();
	
	});
	
	</script>
	<script src="include/locale/language.js"></script>	
	
</body>
</html>