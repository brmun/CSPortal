//var mailFlags = "getMailList";
var mailFlags = "";
var imgDivisionFlags = false;

function CustomerInfo(){
	$(".content").empty();
	$(".content").load("CustomerInfo.jsp");
}

function GetInit(){
	
	var a = $("#domain").val();

	getsupportList(a);
	getCustomerInfo(a);
	getLisenceList(a);

}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

function getLisenceList(A)
{
//	$.ajax({
//		type:"POST",
//		url:  "/sk/ajax/ES_CustomerInfo.jsp?type=getLisenceList1&t="+encodeURI(A)+"",
//		contentType: "application/json; charset=UTF-8",
//		dataType:"text",
//		timeout: 30000,
//		success : function(data) {
//			var html = "", cnt = 1;
//			data = JSON.parse(data.trim());
//			
//			$.each(data, function(key, value) {
//				
//				if ( key == "hits" )
//				{		
//					hits = value.hits;
//					t= hits[0]._source.company_id;
					
						$.ajax({
							type:"POST",
							url:  "/sk/ajax/ES_CustomerInfo.jsp?type=getLisenceList2&t="+encodeURI(A)+"",
							contentType: "application/json; charset=UTF-8",
							dataType:"text",
							timeout: 30000,
							success : function(data) {
								var html = "", cnt = 1;
								data = JSON.parse(data.trim());
								$.each(data, function(key, value) {
									
									if ( key == "hits" )
									{		
										hits = value.hits;
										
										if ( value.total == 0)
										{
											html += "<tr>";
											html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
											html += "</tr>";
										}else{
										for ( var i=0; i<hits.length;i++ )
										{						
											html += "<tr>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.product_name+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.version+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.contract_quantity)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.jan)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.feb)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.mar)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.apr)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.may)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.jun)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.jul)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.aug)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.sep)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.oct)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.nov)+"</span></div></td>";
											html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>"+numberWithCommas(hits[i]._source.dec)+"</span></div></td>";
											html += "</tr>";
										}
										
										}
										$("#LisenceList").empty();
										$("#LisenceList").html(html);
									}
								});
							}
						});
//					}
//			});
//		}
//	});
}

function getsupportList(A)
{
	
	$.ajax({
		type:"POST",
		url:  "/sk/ajax/ES_CustomerInfo.jsp?type=getsupportList&t="+encodeURI(A)+"",
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1;
			data = JSON.parse(data.trim());
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					if ( value.total == 0)
					{
				
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>관련 항목이 없습니다.</span></td>";
						html += "</tr>";
					
			
					}else{
						html += "<tr>";
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>영업 대표</span></div></td>";
						if (hits[0]._source.sales2 == null)
							{
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							}
						else{
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[0]._source.sales2+"</span></div></td>";
							}
						
						switch(hits[0]._source.sales2){
						case "이덕수" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4507</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3220-3736</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>docksu.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이승훈" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4609</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9215-3024</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>shlee@softcamp.co.kr</span></div></td>";
							break;
						case "이근보" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4610</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2863-9594</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>kblee@softcamp.co.kr</span></div></td>";
							break;
						case "임성택" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4615</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5291-5987</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>stlim@softcamp.co.kr</span></div></td>";
							break;
						case "김형준" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4615</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2818-5871</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hyungjoon.kim@softcamp.co.kr</span></div></td>";
							break;
						case "신계영" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4505</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-4153-0123</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>kyshin@softcamp.co.kr</span></div></td>";
							break;
						case "이선우" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4506</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-4909-4200</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>sunwoo.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이영직" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4612</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5002-4744</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>youngjic.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이태훈" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4546</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3175-3165</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>taehoon.lee@softcamp.co.kr</span></div></td>";
							break;
						case "홍승완" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4608</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3127-3523</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>swhong@softcamp.co.kr</span></div></td>";
							break;
						case "손도영" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4607</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2018-4477</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>doyoung.son@softcamp.co.kr</span></div></td>";
							break;
						case "이형석" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4606</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-8933-2789</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hslee@softcamp.co.kr</span></div></td>";
							break;
						case "노영준" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4504</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2414-7238</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hjro@softcamp.co.kr</span></div></td>";
							break;
						case "박양기" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>전무</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4585</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-7485-7798</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>docksu.lee@softcamp.co.kr</span></div></td>";
							break;
						case "김성학" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4601</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2872-4155</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>sunghak.kim@softcamp.co.kr</span></div></td>";
							break;
						case "석대징" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4602</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9183-2462</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>deajing.suk@softcamp.co.kr</span></div></td>";
							break;
						default :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							break;

						}
						
						html += "</tr>";
						
						html += "<tr>";
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>서비스 영업</span></div></td>";
						if (hits[0]._source.sales == null)
						{
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
						}else{
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[0]._source.sales+"</span></div></td>";
						}
						
						switch(hits[0]._source.sales){
						case "이덕수" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4507</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3220-3736</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>docksu.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이승훈" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4609</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9215-3024</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>shlee@softcamp.co.kr</span></div></td>";
							break;
						case "이근보" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4610</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2863-9594</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>kblee@softcamp.co.kr</span></div></td>";
							break;
						case "임성택" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4615</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5291-5987</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>stlim@softcamp.co.kr</span></div></td>";
							break;
						case "김형준" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4615</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2818-5871</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hyungjoon.kim@softcamp.co.kr</span></div></td>";
							break;
						case "신계영" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4505</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-4153-0123</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>kyshin@softcamp.co.kr</span></div></td>";
							break;
						case "이선우" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4506</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-4909-4200</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>sunwoo.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이영직" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4612</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5002-4744</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>youngjic.lee@softcamp.co.kr</span></div></td>";
							break;
						case "이태훈" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>부장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4546</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3175-3165</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>taehoon.lee@softcamp.co.kr</span></div></td>";
							break;
						case "홍승완" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4608</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3127-3523</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>swhong@softcamp.co.kr</span></div></td>";
							break;
						case "손도영" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4607</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2018-4477</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>doyoung.son@softcamp.co.kr</span></div></td>";
							break;
						case "이형석" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4606</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-8933-2789</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hslee@softcamp.co.kr</span></div></td>";
							break;
						case "노영준" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4504</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2414-7238</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hjro@softcamp.co.kr</span></div></td>";
							break;
						case "박양기" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>전무</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4585</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-7485-7798</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>docksu.lee@softcamp.co.kr</span></div></td>";
							break;
						case "김성학" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>이사</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4601</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2872-4155</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>sunghak.kim@softcamp.co.kr</span></div></td>";
							break;
						case "석대징" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4602</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9183-2462</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>deajing.suk@softcamp.co.kr</span></div></td>";
							break;
						default :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>-</span></div></td>";
							break;

						}
						html += "</tr>";
						html += "<tr>";
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
						html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[0]._source.ma_cm+"</span></div></td>";
						
						switch(hits[0]._source.ma_cm){
						case "문병린" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4641</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9419-9771</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>brmun@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							break;
						case "양창호" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>대리</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4671</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-7282-0978</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>chh.yang@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "김영광" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4618</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-2863-9594</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>youngkwang.kim@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "조광현" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4648</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5923-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>khcho2@softcamp.co.kr@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "김성남" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>차장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4649</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-3661-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>snkim@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "윤형석" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4534</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5917-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>hyungseok.yoon@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "박웅" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4645</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-5848-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>ung.park@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "박진원" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4650</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-4083-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>jinwon.park@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "정일형" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>과장</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4647</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-9406-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>ilhyeong.jeong@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						case "김준용" :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>대리</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>031-697-4642</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>010-8673-4370</span></div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>junyong.kim@softcamp.co.kr</span></div></td>";
							html += "<tr>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>기술지원</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>고객센터</span></div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							html += "</tr>";
							break;
						default :
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>-</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>1644-9366</div></td>";
							html += "  <td  class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>(야간)031-697-4563</div></td>";
							html += "  <td  word-break: break-all;\" class=\"text-center\"><div class=\"table-font-size\"><span>&nbsp;</span>helpsc2@softcamp.co.kr</div></td>";
							break;

						}
						html += "</tr>";
						
						
						
					
					}	
				}
					$("#supportList").empty();
					$("#supportList").html(html);
			});
		}
	});
}

function getCustomerInfo(A)
{
	var Base64 = {
	    // private property
	    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	 
	    // public method for encoding
	    encode : function (input) {
	        var output = "";
	        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	        var i = 0;
	 
	        input = Base64._utf8_encode(input);
	 
	        while (i < input.length) {
	 
	            chr1 = input.charCodeAt(i++);
	            chr2 = input.charCodeAt(i++);
	            chr3 = input.charCodeAt(i++);
	 
	            enc1 = chr1 >> 2;
	            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	            enc4 = chr3 & 63;
	 
	            if (isNaN(chr2)) {
	                enc3 = enc4 = 64;
	            } else if (isNaN(chr3)) {
	                enc4 = 64;
	            }
	 
	            output = output +
	            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
	            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
	 
	        }
	 
	        return output;
	    },
	 
	    // public method for decoding
	    decode : function (input) {
	        var output = "";
	        var chr1, chr2, chr3;
	        var enc1, enc2, enc3, enc4;
	        var i = 0;
	 
	        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	 
	        while (i < input.length) {
	 
	            enc1 = this._keyStr.indexOf(input.charAt(i++));
	            enc2 = this._keyStr.indexOf(input.charAt(i++));
	            enc3 = this._keyStr.indexOf(input.charAt(i++));
	            enc4 = this._keyStr.indexOf(input.charAt(i++));
	 
	            chr1 = (enc1 << 2) | (enc2 >> 4);
	            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	            chr3 = ((enc3 & 3) << 6) | enc4;
	 
	            output = output + String.fromCharCode(chr1);
	 
	            if (enc3 != 64) {
	                output = output + String.fromCharCode(chr2);
	            }
	            if (enc4 != 64) {
	                output = output + String.fromCharCode(chr3);
	            }
	 
	        }
	 
	        output = Base64._utf8_decode(output);
	 
	        return output;
	 
	    },
	 
	    // private method for UTF-8 encoding
	    _utf8_encode : function (string) {
	        string = string.replace(/\r\n/g,"\n");
	        var utftext = "";
	 
	        for (var n = 0; n < string.length; n++) {
	 
	            var c = string.charCodeAt(n);
	 
	            if (c < 128) {
	                utftext += String.fromCharCode(c);
	            }
	            else if((c > 127) && (c < 2048)) {
	                utftext += String.fromCharCode((c >> 6) | 192);
	                utftext += String.fromCharCode((c & 63) | 128);
	            }
	            else {
	                utftext += String.fromCharCode((c >> 12) | 224);
	                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	                utftext += String.fromCharCode((c & 63) | 128);
	            }
	 
	        }
	 
	        return utftext;
	    },
	 
	    // private method for UTF-8 decoding
	    _utf8_decode : function (utftext) {
	        var string = "";
	        var i = 0;
	        var c = c1 = c2 = 0;
	 
	        while ( i < utftext.length ) {
	 
	            c = utftext.charCodeAt(i);
	 
	            if (c < 128) {
	                string += String.fromCharCode(c);
	                i++;
	            }
	            else if((c > 191) && (c < 224)) {
	                c2 = utftext.charCodeAt(i+1);
	                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	                i += 2;
	            }
	            else {
	                c2 = utftext.charCodeAt(i+1);
	                c3 = utftext.charCodeAt(i+2);
	                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	                i += 3;
	            }
	 
	        }
	 
	        return string;
	    }
	}


	
	$.ajax({
		type:"POST",
		url:  "/sk/ajax/ES_CustomerInfo.jsp?type=getCustomerInfo&t="+encodeURI(A)+"",
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var html = "", cnt = 1;
			data = JSON.parse(data.trim());
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					
					var CCIS_ID = hits[0]._source.service_cost;
					console.log(CCIS_ID);
					CCIS_ID = Base64.encode(CCIS_ID);
//					CCIS_ID = "NC5ITS4wNDlfMjAxODA5MjA=";
					console.log(CCIS_ID);
					// 형상 정보
					$.ajax({
						url : "https://ccis.softcamp.co.kr/CCIS/api/releaseInfo/"+CCIS_ID+"",
						type : "GET",
						cache : false,
						dataType: 'json',
						success : function(data) {
							var html = "", cnt = 1;
					
							
							$.each(data, function(key, value) {
								
								
								if ( key == "code")
								{
									if ( value != "0" )
										{
										html += "<tr>";
										html += " <td class=\"text-center\" colspan=\"15\"><span>등록된 형상 정보가 없습니다.</span></td>";
										html += "</tr>";
										}
								}
								
								if ( key == "results" )
								{	
										
										html = "";
										html += "<tr>";
										html += "<td word-break: break-all;\" class=\"text-center\"><div><span>"+value.release_name+"</span></div></td>";
										html += "<td word-break: break-all;\" class=\"text-center\"><div><span>"+value.version+"</span></div></td>";
										html += "<td word-break: break-all;\" class=\"text-center\"><div><span>"+value.orner+"</span></div></td>";
										html += "<td word-break: break-all;\" class=\"text-center\"><div><span>"+value.release_date+"</span></div></td>";
										html += "</tr>";
								}
							
								$("#releaseInfo").empty();
								$("#releaseInfo").html(html);
							});
						}
					});
					
					//형상 결함 정보
					$.ajax({
						url : "https://ccis.softcamp.co.kr/CCIS/api/defectInfo/"+CCIS_ID+"",
						type : "GET",
						cache : false,
						dataType: 'json',
						success : function(data) {
							var html = "", cnt = 0;
					
							
							$.each(data, function(key, value) {
								
								
								if ( key == "code")
								{
									if ( value != "0" )
										{
										html += "<tr>";
										html += " <td class=\"text-center\" colspan=\"15\"><span>발견된 결함 정보가 없습니다.</span></td>";
										html += "</tr>";
										
										}
								}
								
								if ( key == "results" )
								{	
									
									html = "";
									for ( var i=0; i<value.length;i++ )
									{
										
										html += "<tr>";
										html += "<td word-break: break-all;\"><div><span>"+value[i].title+"</span></div></td>";
										html += "<td word-break: break-all;\" class=\"text-center\"><div><span>"+value[i].addtedDate+"</span></div></td>";
										html += "</tr>";
										cnt = cnt +1
									}
								}
								$("#recCount").text(numberWithCommas(cnt));
								$("#defectInfo").empty();
								$("#defectInfo").html(html);
							});
						}
					});
					
					
					//제품 현황 정보
					$.ajax({
						url : "https://ccis.softcamp.co.kr/CCIS/api/productInfo/"+CCIS_ID+"",
						type : "GET",
						cache : false,
						dataType: 'json',
						success : function(data) {
							var html = "", cnt = 0;
					
							
							$.each(data, function(key, value) {
								
								
								if ( key == "results" )
								{	
//									console.log(key);
									html = "";
									for ( var i=0; i<value.productList.length;i++ )
									{
//										console.log("ccis값 : "+value.productList[i]);
										
										$('input:checkbox[name="producttype"]').each(function(){
//											console.log("checkbox : " +this.value);
										     if(this.value == value.productList[i]){
										        this.checked = true;
//										        console.log(value.productList[i]);
										     }
										});
									}
								}
							});
						}
					});
				}
			});
		}
	});
}