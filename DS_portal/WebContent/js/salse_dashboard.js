//시스템 사용량 객체선언
var usage = new Object();


function salse_Dashboard(){
	$(".content").empty();
	$(".content").load("salse_dashboard.jsp");
	
}

function salse_dashboardGetInit(){
	
	var A="\"all\"";
	
//	all_getMainMaList(A);

//	getMainMaStatTotal();
//	getMainMaStatOnGoing();
//	getmacount();
//	getprojectcount();
//	getMainProjectList();
//	getMainProjectStatTotal();
//	getMainProjectStatOnGoing();
	salse_machart(A);
//	projectchart(A);
	salse_aging(A);
	salse_customertom10();
	salse_top10();
	salse_ptop10();
//	all_getagingMaList();
	salse_matotalchart(A);
	salse_dailychart(A);
}



//function getMainNoticeList()
//{
//	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=getMainNotice";
//	
//	$.ajax({
//		type:"POST",
//		url: ES_URL,
//		contentType: "application/json; charset=UTF-8",
//		dataType:"text",
//		timeout: 30000,
//		success : function(data) {
//			var html = "";
//			data = JSON.parse(data.trim());
//			$.each(data, function(key, value) {
//				
//				if ( key == "hits" )
//				{		
//					hits = value.hits;
//				
//					
//					for ( var i=0; i<hits.length;i++ )
//					{						
//						html += "<tr>";
//						html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\"><div class=\"text-over table-font-size\"><span>"+(i+1)+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" ><div class=\"table-font-size\"><span>"+hits[i]._source.title+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.timeCreated+"</span></div></td>";
//						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.type+"</span></div></td>";
//						
//						html += "</tr>";
//						
//					}
//					
//					$("#MainNoticeList").empty();
//					$("#MainNoticeList").html(html);
//				}
//			});
//		}
//	});
//}


function all_getMainMaList(t)
{
	
	var ES_URL = "";

	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=getMainMaList&t="+encodeURI(t)+"";
	
		$.ajax({
			type:"POST",
			url: ES_URL,
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
					$("#DashCount").text("0");
					
											
						html += "<tr>";
						html += " <td class=\"text-center\" colspan=\"15\"><span>진행중인 사항이 없습니다.</span></td>";
						html += "</tr>";
					
					$("#MainMaList").empty();
					$("#MainMaList").html(html);
					}else{
						$("#DashCount").text(numberWithCommas(value.total));
						
						for ( var i=0; i<hits.length;i++ )
						{						
							html += "<tr>";
							//html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\"  class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\"  onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.CATEGORY_KO+"</span></div></td>";
							if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
								{
								html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>접수</span></div></td>";
								}
							else if (hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" )
								{
								html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>완료</span></div></td>";
								}
							else if (hits[i]._source.STATUS_KO == "개발")
								{
								html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>수정중</span></div></td>";
								}
							else
								{
								html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
								}
//							html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
							html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
							html += "</tr>";
							cnt ++;
						}
						$("#MainMaList").empty();
						$("#MainMaList").html(html);
					}
					
				}

			});
		}
	});
}	

function all_getagingMaList()
{
	
	var ES_URL = "";

	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=getagingMaList";
	
		$.ajax({
			type:"POST",
			url: ES_URL,
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
						html += " <td class=\"text-center\" colspan=\"15\"><span>진행중인 사항이 없습니다.</span></td>";
						html += "</tr>";
					
					$("#agingMaList").empty();
					$("#agingMaList").html(html);
					}else{
						
						for ( var i=0; i<hits.length;i++ )
						{			
							cnt = dateDiff(hits[i]._source.CREATED_TIME.substring(0, 10), new Date())
							
							html += "<tr>";
							//html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\"  class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\"  onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
							html += "  <td style=\"cursor: pointer;\" class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+cnt+"일</span></div></td>";
							html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
							html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.OWNER_NAME+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.OWNER_NAME+"</span></div></td>";
							html += "  <td class=\"text-center\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
							html += "</tr>";
						}
						$("#agingMaList").empty();
						$("#agingMaList").html(html);
					}
					
				}

			});
		}
	});
}	

function salse_machart(t)
{
	

	
	var m_7=0, m_8=0, m_9=0, m_10=0, m_11=0, m_12=0, m_1=0, m_2=0, m_3=0, m_4=0, m_5=0, m_6=0,m_13=0, m_14=0, m_15=0,m_16=0, m_17=0, m_18=0;
	var config = "";
	var ES_URL1 = "";
	var ES_URL2 = "";

	ES_URL1 = "/admin/ajax/ES_DashBoard.jsp?type=salsechart&step=1&t="+encodeURI(t)+"";
	ES_URL2 = "/admin/ajax/ES_DashBoard.jsp?type=salsechart&&step=2&t="+encodeURI(t)+"";
	
	$.ajax({
		type:"POST",
		url: ES_URL1,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						
						$.each(buckets, function(a, b){
								if (b.key == "기술지원요청")
								{
									m_10 = b.doc_count;
								}
								else if (b.key == "POC/데모")
								{
									m_11 = b.doc_count;
								}
								else if (b.key == "기술자료요청")
								{
									m_12 = b.doc_count;
								}
								else if (b.key == "추가개발요청")
								{
									m_13 = b.doc_count;
								}
								else if (b.key == "영업지원")
								{
									m_14 = b.doc_count;
								}
								else if (b.key == "기능문의")
								{
									m_15 = b.doc_count;
								}
								else if (b.key == "장애")
								{
									m_16 = b.doc_count;
								}
								else if (b.key == "패키징요청")
								{
									m_17 = b.doc_count;
								}
								else
								{
									m_18 = m_18 + b.doc_count;
								}
								docTotal += b.doc_count;
						});
			
					});
				}
			});	
			var close = ["완료(최근3개월) : "+docTotal+"건"];
			
			$.ajax({
				type:"POST",
				url: ES_URL2,
				contentType: "application/json; charset=UTF-8",
				dataType:"text",
				timeout: 30000,
				success : function(data) {
					var docTotal = 0, buckets = "";	
					data = JSON.parse(data.trim());
				
				$.each(data, function(key, value) {
					
					if ( key == "aggregations" )
					{
						$.each(value, function(idx, val){
							
							buckets = val.buckets;
							
							$.each(buckets, function(a, b){
								console.log("구분: "+b.key + "    값 : "+b.doc_count )
								if (b.key == "기술지원요청")
								{
									m_1 = b.doc_count;
								}
								else if (b.key == "POC/데모")
								{
									m_2 = b.doc_count;
								}
								else if (b.key == "기술자료요청")
								{
									m_3 = b.doc_count;
								}
								else if (b.key == "추가개발요청")
								{
									m_4 = b.doc_count;
								}
								else if (b.key == "영업지원")
								{
									m_5 = b.doc_count;
								}
								else if (b.key == "기능문의")
								{
									m_6 = b.doc_count;
								}
								else if (b.key == "장애")
								{
									m_7 = b.doc_count;
								}
								else if (b.key == "패키징요청")
								{
									m_8 = b.doc_count;
								}
								else
								{
									m_9 = m_9+b.doc_count;
								}
								docTotal += b.doc_count;
							});
						});
					}
				});
				
				var going = ["진행중(전체) : "+docTotal+"건"];
				
				config = {
					type: 'bar',
					data: {
						labels: ['기술지원요청', 'POC/데모', '기술자료요청', '추가개발요청','영업지원','기능문의','장애','패키징요청','기타요청'],
						datasets: [{
//							label: '완료(최근3개월)',
							label: close,
							data: [m_10,m_11,m_12,m_13,m_14,m_15,m_16,m_17,m_18],
							backgroundColor: [
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)',
								'rgba(48,178,86,0.7)'
							],
							borderColor: [
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)'
							],
							borderWidth: 1,
						},{
//							label: '진행중(전체)',
							label: going,
							data: [m_1,m_2,m_3,m_4,m_5,m_6,m_7,m_8,m_9],
							backgroundColor: [
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)',
								'rgba(245,0,0,0.7)'
							],
							borderColor: [
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)'
							],
							borderWidth: 1
						}]
					},
					options: {
						tooltips:{
							enabled: false
						},
						hover: {
						      mode: 'nearest',
						      intersect: true,
						      animationDuration: 0
					    },
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						animation: {
							
					        onComplete: function () {
					            var chartInstance = this.chart;
					            var ctx = chartInstance.ctx;
					            ctx.font = "15px Helvetica Neue";
					            ctx.fillStyle = "normal";
					            ctx.textAlign = 'center';
							    ctx.textBaseline = 'top';
					            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
					                var meta = chartInstance.controller.getDatasetMeta(i);
					                Chart.helpers.each(meta.data.forEach(function (bar, index) {
					                    data = dataset.data[index];
					                    if(i==0){
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    	
					                    } else {
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    }
					                }),this)
					            }),this);
					            
					            
					        }
					    }
					}
					
				};
				
				var ctx = document.getElementById('abatement-ma-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
				document.getElementById('abatement-ma-chart').onclick = function (evt) {
					var activePoint = myChart.lastActive[0];
					if (activePoint != undefined) {
				        var datasetIndex = activePoint._datasetIndex;
		                var index = activePoint._index;
		                var datasetName = config.data.datasets[datasetIndex].label;
		                var title = config.data.labels[index];
		                var dataValue = config.data.datasets[datasetIndex].data[index];
		                
		                //console.log(datasetIndex)
		               
		              /*  
		                if(title == '1주내'){
		                	title = "1";
		                }else if(title == '2주내'){
		                	title = "2";
		                }else if(title == '3주내'){
		                	title = "3";
		                }else if(title == '4주내'){
		                	title = "4";
		                }else if(title == '1달이상'){
		                	title = "5";
		                }*/
		                
		                all_plumb_MaList('',title,datasetIndex);
						
		            }
						
					
					
		        };
				
			}
			});
		}
		
	});
}


function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
 
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}

function salse_aging(t)
{
	var p_1=0, p_2=0, p_3=0, p_4=0, p_5=0, p_6=0 ;
	var ES_URL = "";
	var config = "";
	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=salse_aging&t="+encodeURI(t)+"";
	
	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "", p_5=0,p_4=0,p_3=0,p_2=0,p_1=0;
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					hits = value.hits;
					for ( var i=0; i<hits.length;i++ )
					{
						 		
						if(dateDiff(hits[i]._source.CREATED_TIME.substring(0, 10), new Date()) >= 29)
						{
							p_5 += 1;
						}
						else if(dateDiff(hits[i]._source.CREATED_TIME.substring(0, 10), new Date()) >= 22)
						{
							p_4 += 1;
						}
						else if(dateDiff(hits[i]._source.CREATED_TIME.substring(0, 10), new Date()) >= 15)
						{
							p_3 += 1;	
						}
						else if(dateDiff(hits[i]._source.CREATED_TIME.substring(0, 10), new Date()) >= 8)
						{
							p_2 += 1;	
						}
						else
						{
							p_1 += 1;
						}
						
						
					}
					
				config = {
					type: 'doughnut',
					//type: 'pie',
					data: {
						labels: ['1주내', '2주내', '3주내', '4주내','1달이상'],
						datasets: [{
							label: '장애',
							data: [p_1,p_2,p_3,p_4,p_5],
						backgroundColor: [
							'rgba(48,178,86,1)',
							'rgba(150,210,87,1)',
							'rgba(249,192,17,1)',
							'rgba(248,153,0,1)',
							'rgba(245,0,0,1)'
						],
						borderColor: [
							'rgba(224,251,253,1)',
							'rgba(224,251,253,1)',
							'rgba(224,251,253,1)',
							'rgba(224,251,253,1)',
							'rgba(224,251,253,1)'
						],
						borderWidth: 2,
						hoverBorderWidth : 5
						}
						]
					},
					options: {
						padding: 10,
						tooltips:{
							enabled: false
						},
						/*scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}*/
					//,
						legend: {
				            display: false
						},
						hover: {
							animationDuration: 0
						},
						/*showAllTooltips: true,*/
						/*events: false,*/
						  animation: {
						    duration: 500,
						    easing: "easeOutQuart",
						    onComplete: function () {
						      var ctx = this.chart.ctx;
//						      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
						      labals = ['1주내', '2주내', '3주내', '4주내','1달이상'];
						      this.data.datasets.forEach(function (dataset) {
						        for (var i = 0; i < dataset.data.length; i++) {
						          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
						              total = dataset._meta[Object.keys(dataset._meta)[0]].total,
						              mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
						              start_angle = model.startAngle,
						              end_angle = model.endAngle,
						              mid_angle = start_angle + (end_angle - start_angle)/2;
//console.log(total);
						          var x = mid_radius * Math.cos(mid_angle);
						          var y = mid_radius * Math.sin(mid_angle);
						          ctx.fillStyle = 'black';
						            var fontSize = 15;
						            var fontStyle = 'normal';
						            var fontFamily = "Helvetica Neue";
						            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
							      ctx.textAlign = 'center';
							      ctx.textBaseline = 'bottom';
						          var val = dataset.data[i];
						          var percent = String(Math.round(val/total*100)) + "%";
						          if(val != 0) {
						           // ctx.fillText(labals[i]+ " : " + dataset.data[i]+"건", model.x + x, model.y + y);
						            ctx.fillText(labals[i], model.x + x, model.y + y);
						            // Display percent in another line, line break doesn't work for fillText
						            ctx.fillText("(" + dataset.data[i]+"건, "+percent+")", model.x + x, model.y + y + 15);
						          }
						        }
						        ctx.fillStyle = 'black';
					            var fontSize = 30;
					            var fontStyle = 'normal';
					            var fontFamily = "Helvetica Neue";
					            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
					            ctx.textAlign = 'center';
					            ctx.textBaseline = 'middle';
					            ctx.fillText(total.toString()+"건", model.x, model.y);
						      }); 
						     
						    }
						  }
					}
				};
				
				var ctx = document.getElementById('abatement-aging-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
				document.getElementById('abatement-aging-chart').onclick = function (evt) {
					var activePoint = myChart.lastActive[0];
					if (activePoint != undefined) {
						//console.log(activePoint);
				        var datasetIndex = activePoint._datasetIndex;
		                var index = activePoint._index;
		                var datasetName = config.data.datasets[datasetIndex].label;
		                var title = config.data.labels[index];
		                var dataValue = config.data.datasets[datasetIndex].data[index];
		                
		               
		              /*  
		                if(title == '1주내'){
		                	title = "1";
		                }else if(title == '2주내'){
		                	title = "2";
		                }else if(title == '3주내'){
		                	title = "3";
		                }else if(title == '4주내'){
		                	title = "4";
		                }else if(title == '1달이상'){
		                	title = "5";
		                }*/
		                all_plumb_MaList('',title,'2');
		            }else{
		            	all_plumb_MaList('','','2');
		            }
		        };
			}
			});
		}
		
	});
}

function salse_matotalchart(t)
{
	var p_1=0, p_2=0 ;
	var ES_URL = "";
	var ES_URL2 = "";
	var config = "";

	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=salse_matotalchart&t="+encodeURI(t)+"";
	ES_URL2 = "/admin/ajax/ES_DashBoard.jsp?type=salse_matotalchart2&t="+encodeURI(t)+"";
	
	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "hits" )
				{		
					p_1 = value.total;
				}	
			});	
			//console.log(p_1);
			$.ajax({
				type:"POST",
				url: ES_URL2,
				contentType: "application/json; charset=UTF-8",
				dataType:"text",
				timeout: 30000,
				success : function(data) {
					data = JSON.parse(data.trim());
				
					$.each(data, function(key, value) {
						
						if ( key == "hits" )
						{		
							p_2 = value.total;
						}	
					});	
					//console.log(p_2);
				config = {
					type: 'doughnut',
					//type: 'pie',
					data: {
						labels: ['진행', '완료'],
						datasets: [{
//							label: '장애',
							data: [p_2,p_1],
							backgroundColor: [
								'rgba(245,0,0,0.7)',
								'rgba(150,210,87,0.7)'
								
							],
							borderColor: [
								'rgba(224,251,253,1)',
								'rgba(224,251,253,1)'
						],
						borderWidth: 1,
						hoverBorderWidth : 5
						}
						]
					},
					options: {
						padding: 10,
						tooltips:{
							enabled: false
						},
						/*scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}*/
					//,
						legend: {
				            display: false
						},
						hover: {
							animationDuration: 0
						},
						/*showAllTooltips: true,*/
						/*events: false,*/
						  animation: {
						    duration: 500,
						    easing: "easeOutQuart",
						    onComplete: function () {
						      var ctx = this.chart.ctx;
//						      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
						      labals = ['진행', '완료'];
						      this.data.datasets.forEach(function (dataset) {
						        for (var i = 0; i < dataset.data.length; i++) {
						          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
						              total = dataset._meta[Object.keys(dataset._meta)[0]].total,
						              mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
						              start_angle = model.startAngle,
						              end_angle = model.endAngle,
						              mid_angle = start_angle + (end_angle - start_angle)/2;
////console.log(total);
						          var x = mid_radius * Math.cos(mid_angle);
						          var y = mid_radius * Math.sin(mid_angle);
						          ctx.fillStyle = 'black';
						            var fontSize = 15;
						            var fontStyle = 'normal';
						            var fontFamily = "Helvetica Neue";
						            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
							      ctx.textAlign = 'center';
							      ctx.textBaseline = 'bottom';
						          var val = dataset.data[i];
						          var percent = String(Math.round(val/total*100)) + "%";
						          if(val != 0) {
						           // ctx.fillText(labals[i]+ " : " + dataset.data[i]+"건", model.x + x, model.y + y);
						            ctx.fillText(labals[i], model.x + x, model.y + y);
						            // Display percent in another line, line break doesn't work for fillText
						            ctx.fillText("(" + dataset.data[i]+"건)", model.x + x, model.y + y + 15);
						          }
						        }
						        ctx.fillStyle = 'black';
					            var fontSize = 40;
					            var fontStyle = 'normal';
					            var fontFamily = "Helvetica Neue";
					            var percent = String(Math.round(p_1/total*100)) + "%";
								if ( percent == "NaN%")
				            	{
					            	percent = "없음";
				            	}
					            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
					            ctx.textAlign = 'center';
					            ctx.textBaseline = 'middle';
					            ctx.fillText(percent, model.x, model.y);
						      }); 
						     
						    }
						  }
					}
				};
				
				var ctx = document.getElementById('abatement-matotalchart-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
				document.getElementById('abatement-matotalchart-chart').onclick = function (evt) {
					var activePoint = myChart.lastActive[0];
					if (activePoint != undefined) {
				        var datasetIndex = activePoint._datasetIndex;
		                var index = activePoint._index;
		                var datasetName = config.data.datasets[datasetIndex].label;
		                var title = config.data.labels[index];
		                var dataValue = config.data.datasets[datasetIndex].data[index];
		                
		               
		              /*  
		                if(title == '1주간'){
		                	title = "1";
		                }else if(title == '2주간'){
		                	title = "2";
		                }else if(title == '3주간'){
		                	title = "3";
		                }else if(title == '4주간'){
		                	title = "4";
		                }else if(title == '1달이상'){
		                	title = "5";
		                }*/
		                //console.log(title);
							all_plumb_MaList('',title,'3');
		            }
		        };
			}
			});
		}
		
	});
}

function salse_dailychart(t)
{
	var doccount1 = new Array();
	var doccount2 = new Array();
	var doccount3 = new Array();
	var doccount4 = new Array();
	var doccount5 = new Array();
	var doccount6 = new Array();
	
	var p = new Array();
	var config = "";

	for ( var i=0; i<13;i++ )
	{
		var ES_URL = "";
		var a = i*7;
	
		Date.prototype.getWeek = function(start)
		{
		        //Calcing the starting point
		    start = start || 1;
		    var today = new Date(this.setHours(0, 0, 0, 0));
		    var Endday = new Date(this.setHours(0, 0, 0, 0));
		    var day = today.getDay() - start;
		    var date = today.getDate() - day;
		        // Grabbing Start/End Dates
		    var StartDate = new Date(today.setDate(date-a));
		    var EndDate = new Date(Endday.setDate((date+6)-a));
		    //var EndDate = new Date(StartDate.setDate(StartDate.getDate()+6);
		    return [StartDate, EndDate];
		}
	
		// test code
		var Dates = new Date().getWeek();
//		//console.log(Dates[0].toLocaleDateString("fr-CA") + ' to '+ Dates[1].toLocaleDateString("fr-CA"));
		timeFrom = Dates[0].toLocaleDateString("fr-CA") +" 00:00:00";
		timeTo = Dates[1].toLocaleDateString("fr-CA")+ " 23:59:59"
		ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=salse_dailychart&t="+encodeURI(t)+"&timeFrom=\""+timeFrom+"\"&timeTo=\""+timeTo+"\"";
//		//console.log(timeFrom+ " ~ "+timeTo);
//		//console.log("ES1: "+ES_URL);
	
	
		$.ajax({
			
			type:"POST",
			url: ES_URL,
			contentType: "application/json; charset=UTF-8",
			dataType:"text",
			timeout: 30000,
			async: false,
			success : function(data) {
				
				data = JSON.parse(data.trim());
				
				
				$.each(data, function(key, value) {
					
					if ( key == "aggregations" )
					{
						$.each(value, function(idx, val){
							buckets = "";
							buckets = val.buckets;
							$.each(buckets, function(a, b){
									if (b.key == "장애")
									{
										doccount1[i] = b.doc_count
//										doccount1.push(b.doc_count);
									}
									else if (b.key == "기능문의")
									{
										doccount2[i] = b.doc_count
//										doccount2.push(b.doc_count);
									}
									else if (b.key == "기술지원요청")
									{
										doccount3[i] = b.doc_count
//										doccount3.push(b.doc_count);
									}
									else if (b.key == "추가개발요청")
									{
										doccount4[i] = b.doc_count
//										doccount4.push(b.doc_count);
									}
									else if (b.key == "정기점검")
									{
										doccount5[i] = b.doc_count
//										doccount5.push(b.doc_count);
									}
									else
									{
										doccount6[i] = b.doc_count
//										doccount6.push(b.doc_count);
									}
							});
				
						});
					}
				});	
				if ( doccount1[i] == undefined )
					 doccount1[i] = 0;
				
				if ( doccount2[i] == undefined )
					 doccount2[i] = 0;
				
				if ( doccount3[i] == undefined )
					 doccount3[i] = 0;
				
				if ( doccount4[i] == undefined )
					 doccount4[i] = 0;
				
				if ( doccount5[i] == undefined )
					 doccount5[i] = 0;
				
				if ( doccount6[i] == undefined )
					 doccount6[i] = 0;
				
//				
//				//console.log("장애 : " + doccount1[i]);
//				//console.log("기능문의 : " + doccount2[i]);
//				//console.log("기술지원 : " + doccount3[i]);
//				//console.log("추가개발 : " + doccount4[i]);
//				//console.log("정기점검 : " + doccount5[i]);
//				//console.log("기타 : " + doccount6[i]);
//				//console.log(doccount1);
				
				
			}
		});
	}
	config = {
		type: 'line',
		data: {
			labels: ['-12Week', '-11Week', '-10Week','-9Week','-8Week','-7Week','-6Week','-5Week','-4Week','-3Week','-2Week','-1Week','Week'],
			datasets: [{
//				label: '완료(최근3개월)',
				label: '장애',
				fill: false,
				data: doccount1.reverse(),
				backgroundColor: 'rgba(255,0,0,0.70)',
				borderColor: 'rgba(255,0,0,0.70)',
				borderWidth: 0,
			},{
//				label: '진행중(전체)',
				label: '기능문의',
				fill: false,
				data: doccount2.reverse(),
				backgroundColor: 'rgba(255,127,60,0.70)',
				borderColor: 'rgba(255,127,60,0.70)',
				borderWidth: 0
			},{
//				label: '진행중(전체)',
				label: '기술지원',
				fill: false,
				data: doccount3.reverse(),
				backgroundColor:'rgba(255,255,0,0.70)',
				borderColor: 'rgba(255,255,0,0.70)',
				borderWidth: 0
			},{
//				label: '진행중(전체)',
				label: '추가개발',
				fill: false,
				data: doccount4.reverse(),
				backgroundColor: 'rgba(0,255,0,0.70)',
				borderColor: 'rgba(0,255,0,0.70)',
				borderWidth: 0
			},{
//				label: '진행중(전체)',
				label: '정기점검',
				fill: false,
				data: doccount5.reverse(),
				backgroundColor: 'rgba(0,0,255,0.70)',
				borderColor: 'rgba(0,0,255,0.70)',
				borderWidth: 0
			},{
//				label: '진행중(전체)',
				label: '기타',
				fill: false,
				data: doccount6.reverse(),
				backgroundColor: 'rgba(75,0,130,0.70)',
				borderColor: 'rgba(75,0,130,0.70)',
				borderWidth: 0
			}]
		},
		options: {
			tooltips:{
				mode: 'index',
				enabled: false
			},
			hover: {
			      mode: 'nearest',
			      intersect: true,
			      animationDuration: 0
		    },
		    responsive: true,
		    scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: '주차'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: '건수'
					}
				}]
			},
			animation: {
				
		        onComplete: function () {
		            var chartInstance = this.chart;
		            var ctx = chartInstance.ctx;
		            ctx.font = "12px Helvetica Neue";
		            ctx.fillStyle = "normal";
		            ctx.textAlign = 'center';
				    ctx.textBaseline = 'bottom';
		            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
		                var meta = chartInstance.controller.getDatasetMeta(i);
		                Chart.helpers.each(meta.data.forEach(function (bar, index) {
		                    data = dataset.data[index];
		                    if(i==0){
		                    	if(data!=0)
		                        ctx.fillText(data, bar._model.x, bar._model.y);
		                    	
		                    } else {
		                    	if(data!=0)
		                        ctx.fillText(data, bar._model.x, bar._model.y);
		                    }
		                }),this)
		            }),this);
		            
		            
		        }
		    }
		}
		
	};
	
	var ctx = document.getElementById('abatement-dailychart-chart').getContext('2d');
	var myChart = new Chart(ctx, config);
	
	document.getElementById('abatement-dailychart-chart').onclick = function (evt) {
		var activePoint = myChart.lastActive[0];
		if (activePoint != undefined) {
	        var datasetIndex = activePoint._datasetIndex;
            var index = activePoint._index;
            var datasetName = config.data.datasets[datasetIndex].label;
            var title = config.data.labels[index];
            var dataValue = config.data.datasets[datasetIndex].data[index];
            
           
          /*  
            if(title == '1주간'){
            	title = "1";
            }else if(title == '2주간'){
            	title = "2";
            }else if(title == '3주간'){
            	title = "3";
            }else if(title == '4주간'){
            	title = "4";
            }else if(title == '1달이상'){
            	title = "5";
            }*/
            //console.log(title);
//				plumb_MaList('',title,'3');
        }
    };
//	
}

function all_plumb_MaList(item,title,state)
{
	var ACCOUNT_NAME = $("#crmdomain_flag").val();

//	var test = ACCOUNT_NAME.split(';');
//
//	A = '"';
//
//	for ( var i=0; i<test.length;i++ )
//	{
//		A += test[i]
//			if(i<test.length-1)
//			{
//				A += '","'
//			}
//			else{
//				A += '"'
//			}
//			
//	}
	
	var A="\"all\"";
	
	var title = title;
	var state = state;
	var email = getCookie("userInputId");
	var userIp = $('#userIp').val();
	var crmdomain = $("#crmdomain_flag").val();
//	//console.log(crmdomain)
	var sorting = $("#order").val();
	var sortName = $("#orderBy").val();
	
	var timeRange = {};
	var now = new Date();
	var ES_URL = "";
	
	size = parseInt($('#pageSize').val());
	offset = parseInt($('#pageIdx').val());

	
	var statFilter = $("#stat_filter").val();
	var categoryFilter = $("#category_filter").val();
	
	if(item != undefined){
		offset = parseInt(item);
		$("#pageIdx").val(item);
		offset = size*(offset-1);
	}
	
	if ( offset == null )
		offset = 0;
	
	if ( sorting == "" || sorting == null )
		sorting = "asc";
	
	var array = new Array();
	var order = { "order" : sorting };
	var sort = { };
	sort[sortName] = order;
	array.push(sort)
	
	//console.log("js title : "+title);
	//console.log("js state : "+state);
	
	var jsonString = "{\"type\":"+JSON.stringify(array)+"}";
		ES_URL = "/admin/ajax/ES_SalseList.jsp?type=MaList&status=p&t="+encodeURI(A)+"&title="+title+"&state="+state+"";
	
		if (state == "3"){
			//console.log("js title : "+title);
			//	if(title == "1주간"||title == "2주간"||title == "3주간"||title == "4주간"||title == "1달이상")
				title = "서비스 지원 " + title
			}
		else if (state == "2"){
		//	if(title == "1주간"||title == "2주간"||title == "3주간"||title == "4주간"||title == "1달이상")
			title = title + " 진행중인 장애"
		}
		else if(state == "1"){
				title = " 진행중인 전체 " + title
		
		}else{
				title = " 최근 3개월간 완료된 " + title
		
		}
	$("#title").text(title);
	
	
	
	
		
	
		

	$.ajax({
		type:"POST",
		url: ES_URL,
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
					
					//$("#recCount").text(numberWithCommas(value.total));
	
					html  = "<div class=\"modal-dialog\" style=\"min-width: 100%; max-width: 100%;\">";
					html += "  <div class=\"modal-content\">";
					html += "    <div class=\"modal-header\">";
					html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
					html += "        <span aria-hidden=\"true\">&times;</span></button>";
					html += "      <h4 class=\"modal-title\"><span>"+title+" 현황</span><span> ( "+numberWithCommas(value.total)+"건 )</span></h4>";
					html += "    </div>";
					html += "    <div class=\"modal-body\">";
					html += "     <table class=\"table table-bordered table-hover\">";
					html += "      	<colgroup>";
					html += "    		<col style=\"width: 10%\"/>";
					html += "      		<col style=\"width: 10%\"/>";
					html += "        		<col style=\"width: 10%\"/>";
					html += "        		<col style=\"width: 10%\"/>";
					html += "    			<col style=\"width: 50%\"/>";
					html += "    			<col style=\"width: 10%\"/>";
				
					html += "      	</colgroup>";
					html += "   		 <thead>";
					html += "    			<tr>";
					html += "  				  <th class=\"aTag\"><span>접수번호</span></th>";
					html += "  				  <th class=\"aTag\"><span>접수일</span></th>";
					html += "   			  <th class=\"aTag\"><span>최근진행일</span></th>";
					html += "   			  <th class=\"aTag\"><span>상태</span></th>";
					html += "   			  <th class=\"aTag\"><span>제목</span></th>";
					html += "   			  <th class=\"aTag\"><span>접수자</span></th>";
		
					html += "  				</tr>";
					html += "   		 </thead>";
					html += "      <div id=\"divMaInfo\" style=\"display: flex;\">";
					for ( var i=0; i<hits.length;i++ )
					{
						
					
						html += "<tr>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.TICKET_NO+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CREATED_TIME.substring(0, 10)+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.MODIFIED_TIME.substring(0, 10)+"</span></div></td>";
						if (hits[i]._source.STATUS_KO == "오픈" || hits[i]._source.STATUS_KO == "담당할당")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>접수</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "해결함" || hits[i]._source.STATUS_KO == "닫힘" )
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>완료</span></div></td>";
							}
						else if (hits[i]._source.STATUS_KO == "개발")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>진행중(개발)</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
							}
//						html += "  <td class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.STATUS_KO+"</span></div></td>";
						
						html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-left\"><div class=\"table-font-size\"><span>"+hits[i]._source.TITLE+"</span></div></td>";
						if (hits[i]._source.SUPPORT_REQUESTOR == "")
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.CONTACT_NAME+"</span></div></td>";
							}
						else
							{
							html += "  <td style=\"cursor: pointer;\" onclick=\"getMaContent('"+hits[i]._source.TICKET_NO+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.SUPPORT_REQUESTOR+"</span></div></td>";
							}
						html += "</tr>";
						
						
						cnt ++;
					}
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
			
			});
		}
	});
}


function salse_customertom10()
{
	
	
	var labels = new Array();
	var data= "";
	var config = "";
	var ES_URL1 = "";

	ES_URL1 = "/admin/ajax/ES_DashBoard.jsp?type=salse_ownername10";
	
	$.ajax({
		type:"POST",
		url: ES_URL1,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						 var i = 0;
						$.each(buckets, function(a, b){
							labels[i] = b.key;
							data[i] = b.doc_count;
							//console.log(labels[i]+"는"+data[i]+"개");
							i = i + 1 ;
						});
					});
				}
			});	
			
				config = {
					type: 'bar',
					data: {
						labels: [labels[0], labels[1], labels[2], labels[3],labels[4],labels[5],labels[6], labels[7], labels[8], labels[9]],
						datasets: [{
//							label: '완료(최근3개월)',
							data: [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]],
							backgroundColor: [
								'rgba(255,0,0,0.70)',
								'rgba(255,127,60,0.70)',
								'rgba(255,255,0,0.70)',
								'rgba(0,255,0,0.70)',
								'rgba(0,0,255,0.70)',
								'rgba(75,0,130,0.70)',
								'rgba(148,0,211,0.70)',
								'rgba(204,204,255,0.70)',
								'rgba(102,255,153,0.70)',
								'rgba(255,215,204,0.70)'
							],
							borderColor: [
								'rgba(255,0,0,1)',
								'rgba(255,127,60,1)',
								'rgba(255,255,0,1)',
								'rgba(0,255,0,1)',
								'rgba(0,0,255,1)',
								'rgba(75,0,130,1)',
								'rgba(148,0,211,1)',
								'rgba(204,204,255,1)',
								'rgba(102,255,153,1)',
								'rgba(255,215,204,1)'
							],
							borderWidth: 1,
						}]
					},
					options: {
						tooltips:{
							enabled: false
						},
						hover: {
						      mode: 'nearest',
						      intersect: true,
						      animationDuration: 0
					    },
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						legend: {
				            display: false
						},
						animation: {
							
					        onComplete: function () {
					            var chartInstance = this.chart;
					            var ctx = chartInstance.ctx;
					            ctx.font = "15px Helvetica Neue";
					            ctx.fillStyle = "normal";
					            ctx.textAlign = 'center';
							    ctx.textBaseline = 'top';
					            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
					                var meta = chartInstance.controller.getDatasetMeta(i);
					                Chart.helpers.each(meta.data.forEach(function (bar, index) {
					                    data = dataset.data[index];
					                    if(i==0){
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    	
					                    } else {
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    }
					                }),this)
					            }),this);
					            
					            
					        }
					    }
					}
					
				};
				
				var ctx = document.getElementById('abatement-top-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
//				document.getElementById('abatement-ma-chart').onclick = function (evt) {
//					var activePoint = myChart.lastActive[0];
//					if (activePoint != undefined) {
//				        var datasetIndex = activePoint._datasetIndex;
//		                var index = activePoint._index;
//		                var datasetName = config.data.datasets[datasetIndex].label;
//		                var title = config.data.labels[index];
//		                var dataValue = config.data.datasets[datasetIndex].data[index];
//		                
//		                //console.log(datasetIndex)
//		               
//		              /*  
//		                if(title == '1주내'){
//		                	title = "1";
//		                }else if(title == '2주내'){
//		                	title = "2";
//		                }else if(title == '3주내'){
//		                	title = "3";
//		                }else if(title == '4주내'){
//		                	title = "4";
//		                }else if(title == '1달이상'){
//		                	title = "5";
//		                }*/
//		                
//		                all_plumb_MaList('',title,datasetIndex);
//						
//		            }
//						
//					
//					
//		        };
				
			}
			});
}

function salse_top10()
{
	
	
	var labels = new Array();
	var data= "";
	var config = "";
	var ES_URL1 = "";

	ES_URL1 = "/admin/ajax/ES_DashBoard.jsp?type=salse_top10";
	
	$.ajax({
		type:"POST",
		url: ES_URL1,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						 var i = 0;
						$.each(buckets, function(a, b){
							labels[i] = b.key;
							data[i] = b.doc_count;
							//console.log(labels[i]+"는"+data[i]+"개");
							i = i + 1 ;
						});
					});
				}
			});	
			
				config = {
					type: 'bar',
					data: {
						labels: [labels[0], labels[1], labels[2], labels[3],labels[4],labels[5],labels[6], labels[7], labels[8], labels[9]],
						datasets: [{
//							label: '완료(최근3개월)',
							data: [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]],
							backgroundColor: [
									'rgba(255,0,0,0.70)',
									'rgba(255,127,60,0.70)',
									'rgba(255,255,0,0.70)',
									'rgba(0,255,0,0.70)',
									'rgba(0,0,255,0.70)',
									'rgba(75,0,130,0.70)',
									'rgba(148,0,211,0.70)',
									'rgba(204,204,255,0.70)',
									'rgba(102,255,153,0.70)',
									'rgba(255,215,204,0.70)'
								],
								borderColor: [
									'rgba(255,0,0,1)',
									'rgba(255,127,60,1)',
									'rgba(255,255,0,1)',
									'rgba(0,255,0,1)',
									'rgba(0,0,255,1)',
									'rgba(75,0,130,1)',
									'rgba(148,0,211,1)',
									'rgba(204,204,255,1)',
									'rgba(102,255,153,1)',
									'rgba(255,215,204,1)'
							],
							borderWidth: 1,
						}]
					},
					options: {
						tooltips:{
							enabled: false
						},
						hover: {
						      mode: 'nearest',
						      intersect: true,
						      animationDuration: 0
					    },
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						legend: {
				            display: false
						},
						animation: {
							
					        onComplete: function () {
					            var chartInstance = this.chart;
					            var ctx = chartInstance.ctx;
					            ctx.font = "15px Helvetica Neue";
					            ctx.fillStyle = "normal";
					            ctx.textAlign = 'center';
							    ctx.textBaseline = 'top';
					            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
					                var meta = chartInstance.controller.getDatasetMeta(i);
					                Chart.helpers.each(meta.data.forEach(function (bar, index) {
					                    data = dataset.data[index];
					                    if(i==0){
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    	
					                    } else {
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    }
					                }),this)
					            }),this);
					            
					            
					        }
					    }
					}
					
				};
				
				var ctx = document.getElementById('abatement-ctop-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
//				document.getElementById('abatement-ma-chart').onclick = function (evt) {
//					var activePoint = myChart.lastActive[0];
//					if (activePoint != undefined) {
//				        var datasetIndex = activePoint._datasetIndex;
//		                var index = activePoint._index;
//		                var datasetName = config.data.datasets[datasetIndex].label;
//		                var title = config.data.labels[index];
//		                var dataValue = config.data.datasets[datasetIndex].data[index];
//		                
//		                //console.log(datasetIndex)
//		               
//		              /*  
//		                if(title == '1주내'){
//		                	title = "1";
//		                }else if(title == '2주내'){
//		                	title = "2";
//		                }else if(title == '3주내'){
//		                	title = "3";
//		                }else if(title == '4주내'){
//		                	title = "4";
//		                }else if(title == '1달이상'){
//		                	title = "5";
//		                }*/
//		                
//		                all_plumb_MaList('',title,datasetIndex);
//						
//		            }
//						
//					
//					
//		        };
				
			}
			});
}
function salse_ptop10()
{
	
	
	var labels = new Array();
	var data= "";
	var config = "";
	var ES_URL1 = "";

	ES_URL1 = "/admin/ajax/ES_DashBoard.jsp?type=salse_ptop10";
	
	$.ajax({
		type:"POST",
		url: ES_URL1,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						 var i = 0;
						$.each(buckets, function(a, b){
							labels[i] = b.key;
							data[i] = b.doc_count;
							//console.log(labels[i]+"는"+data[i]+"개");
							i = i + 1 ;
						});
					});
				}
			});	
			
				config = {
					type: 'bar',
					data: {
						labels: [labels[0], labels[1], labels[2], labels[3],labels[4],labels[5],labels[6], labels[7], labels[8], labels[9]],
						datasets: [{
//							label: '완료(최근3개월)',
							data: [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]],
							backgroundColor: [
									'rgba(255,0,0,0.70)',
									'rgba(255,127,60,0.70)',
									'rgba(255,255,0,0.70)',
									'rgba(0,255,0,0.70)',
									'rgba(0,0,255,0.70)',
									'rgba(75,0,130,0.70)',
									'rgba(148,0,211,0.70)',
									'rgba(204,204,255,0.70)',
									'rgba(102,255,153,0.70)',
									'rgba(255,215,204,0.70)'
								],
								borderColor: [
									'rgba(255,0,0,1)',
									'rgba(255,127,60,1)',
									'rgba(255,255,0,1)',
									'rgba(0,255,0,1)',
									'rgba(0,0,255,1)',
									'rgba(75,0,130,1)',
									'rgba(148,0,211,1)',
									'rgba(204,204,255,1)',
									'rgba(102,255,153,1)',
									'rgba(255,215,204,1)'
							],
							borderWidth: 1,
						}]
					},
					options: {
						tooltips:{
							enabled: false
						},
						hover: {
						      mode: 'nearest',
						      intersect: true,
						      animationDuration: 0
					    },
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						legend: {
				            display: false
						},
						animation: {
							
					        onComplete: function () {
					            var chartInstance = this.chart;
					            var ctx = chartInstance.ctx;
					            ctx.font = "15px Helvetica Neue";
					            ctx.fillStyle = "normal";
					            ctx.textAlign = 'center';
							    ctx.textBaseline = 'top';
					            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
					                var meta = chartInstance.controller.getDatasetMeta(i);
					                Chart.helpers.each(meta.data.forEach(function (bar, index) {
					                    data = dataset.data[index];
					                    if(i==0){
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    	
					                    } else {
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    }
					                }),this)
					            }),this);
					            
					            
					        }
					    }
					}
					
				};
				
				var ctx = document.getElementById('abatement-ptop-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
//				document.getElementById('abatement-ma-chart').onclick = function (evt) {
//					var activePoint = myChart.lastActive[0];
//					if (activePoint != undefined) {
//				        var datasetIndex = activePoint._datasetIndex;
//		                var index = activePoint._index;
//		                var datasetName = config.data.datasets[datasetIndex].label;
//		                var title = config.data.labels[index];
//		                var dataValue = config.data.datasets[datasetIndex].data[index];
//		                
//		                //console.log(datasetIndex)
//		               
//		              /*  
//		                if(title == '1주내'){
//		                	title = "1";
//		                }else if(title == '2주내'){
//		                	title = "2";
//		                }else if(title == '3주내'){
//		                	title = "3";
//		                }else if(title == '4주내'){
//		                	title = "4";
//		                }else if(title == '1달이상'){
//		                	title = "5";
//		                }*/
//		                
//		                all_plumb_MaList('',title,datasetIndex);
//						
//		            }
//						
//					
//					
//		        };
				
			}
			});
}
function all_SERes()
{
	
	
	var labels = new Array();
	var data= "";
	var config = "";
	var ES_URL1 = "";

	ES_URL1 = "/admin/ajax/ES_DashBoard.jsp?type=SERes";
	
	$.ajax({
		type:"POST",
		url: ES_URL1,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			var docTotal = 0, buckets = "";
			data = JSON.parse(data.trim());
			
			
			$.each(data, function(key, value) {
				
				if ( key == "aggregations" )
				{
					$.each(value, function(idx, val){
						
						buckets = val.buckets;
						 var i = 0;
						$.each(buckets, function(a, b){
							labels[i] = b.key;
							data[i] = b.doc_count;
							//console.log(labels[i]+"는"+data[i]+"개");
							i = i + 1 ;
						});
					});
				}
			});	
			
				config = {
					type: 'bar',
					data: {
						labels: [labels[0], labels[1], labels[2], labels[3],labels[4],labels[5],labels[6], labels[7], labels[8], labels[9]],
						datasets: [{
//							label: '완료(최근3개월)',
							data: [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]],
							backgroundColor: [
									'rgba(255,0,0,0.70)',
									'rgba(255,127,60,0.70)',
									'rgba(255,255,0,0.70)',
									'rgba(0,255,0,0.70)',
									'rgba(0,0,255,0.70)',
									'rgba(75,0,130,0.70)',
									'rgba(148,0,211,0.70)',
									'rgba(204,204,255,0.70)',
									'rgba(102,255,153,0.70)',
									'rgba(255,215,204,0.70)'
								],
								borderColor: [
									'rgba(255,0,0,1)',
									'rgba(255,127,60,1)',
									'rgba(255,255,0,1)',
									'rgba(0,255,0,1)',
									'rgba(0,0,255,1)',
									'rgba(75,0,130,1)',
									'rgba(148,0,211,1)',
									'rgba(204,204,255,1)',
									'rgba(102,255,153,1)',
									'rgba(255,215,204,1)'
							],
							borderWidth: 1,
						}]
					},
					options: {
						tooltips:{
							enabled: false
						},
						hover: {
						      mode: 'nearest',
						      intersect: true,
						      animationDuration: 0
					    },
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						legend: {
				            display: false
						},
						animation: {
							
					        onComplete: function () {
					            var chartInstance = this.chart;
					            var ctx = chartInstance.ctx;
					            ctx.font = "15px Helvetica Neue";
					            ctx.fillStyle = "normal";
					            ctx.textAlign = 'center';
							    ctx.textBaseline = 'top';
					            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
					                var meta = chartInstance.controller.getDatasetMeta(i);
					                Chart.helpers.each(meta.data.forEach(function (bar, index) {
					                    data = dataset.data[index];
					                    if(i==0){
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    	
					                    } else {
					                    	if(data!=0)
					                        ctx.fillText(data+"건", bar._model.x, bar._model.y);
					                    }
					                }),this)
					            }),this);
					            
					            
					        }
					    }
					}
					
				};
				
				var ctx = document.getElementById('abatement-ptop-chart').getContext('2d');
				var myChart = new Chart(ctx, config);
				
//				document.getElementById('abatement-ma-chart').onclick = function (evt) {
//					var activePoint = myChart.lastActive[0];
//					if (activePoint != undefined) {
//				        var datasetIndex = activePoint._datasetIndex;
//		                var index = activePoint._index;
//		                var datasetName = config.data.datasets[datasetIndex].label;
//		                var title = config.data.labels[index];
//		                var dataValue = config.data.datasets[datasetIndex].data[index];
//		                
//		                //console.log(datasetIndex)
//		               
//		              /*  
//		                if(title == '1주내'){
//		                	title = "1";
//		                }else if(title == '2주내'){
//		                	title = "2";
//		                }else if(title == '3주내'){
//		                	title = "3";
//		                }else if(title == '4주내'){
//		                	title = "4";
//		                }else if(title == '1달이상'){
//		                	title = "5";
//		                }*/
//		                
//		                all_plumb_MaList('',title,datasetIndex);
//						
//		            }
//						
//					
//					
//		        };
				
			}
			});
}