//var mailFlags = "getMailList";
var mailFlags = "";
var imgDivisionFlags = false;

function NoticeList(){
	$(".content").empty();
	$(".content").load("NoticeList.jsp");
}

function GetInit(){
	getNoticeList();

}
function getNoticeList()
{
	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=getNoticeList";
		
	$.ajax({
		type:"POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType:"text",
		timeout: 30000,
		success : function(data) {
			
			data = JSON.parse(data.trim());
			var html = "", cnt = 1;
			
			$.each(data, function(key,value){
				if ( key == "hits" )
				{		
					hits = value.hits;
					for ( var i=0; i<hits.length;i++ )
					{						
						html += "<tr>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.timeCreated+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.type+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.division+"</span></div></td>";
						html += "  <td style=\"cursor: pointer;\" onclick=\"getNoticeContent('"+hits[i]._id+"',false);\" class=\"text-center\"><div class=\"table-font-size\"><span>"+hits[i]._source.title+"</span></div></td>";
						html += "</tr>";
						cnt ++;
					}
					
					$("#NoticeList").empty();
					$("#NoticeList").html(html);
				}
			});
		}
	});
}



//유비보수 현황 상세 정보 보여주기
function getNoticeContent(Notice_No,isOrigin) {
	var Ticket_No = (Ticket_No);
	var isOriginal;
	
	if ( isOrigin == "" || isOrigin == null )
		isOriginal = false;
	else
		isOriginal = isOrigin;
	
	ES_URL = "/admin/ajax/ES_DashBoard.jsp?type=getNoticeContent&Notice_No="+encodeURI(Notice_No)+"";
	
	
	$.ajax({
		type: "POST",
		url: ES_URL,
		contentType: "application/json; charset=UTF-8",
		dataType: "text",
		timeout: 30000,
		success: function(data){
			var html="";
			
			data = JSON.parse(data.trim());
			$.each(data, function(key, value){
				
				if ( key == "hits" )
				{
					hits = value.hits;
				
				//100%
				html  = "<div class=\"modal-dialog\" style=\"min-width: 50%; max-width: 100%;\">";
				html += "  <div class=\"modal-content\">";
				html += "    <div class=\"modal-header\">";
				html += "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
				html += "        <span aria-hidden=\"true\">&times;</span></button>";
				html += "        <h4 class=\"modal-tille\">";
				html += "        <span class=\"i18n-NoticeList-view\"></span>";
				html += "    </div>";
				html += "    <div class=\"modal-body\">";
				html += "      <div id=\"divMaTitle\" style=\"display:flex\">";
				html += "        <div style=\"flex:2\">";
				html += "          <span style=\"line-height: 2; font-size: 19px;\">&nbsp;</span><span style=\"line-height: 2; font-size: 25px;\"></span><span style=\"line-height: 2; font-size: 25px;\">"+hits[0]._source.title+"</span>";
				html += "        </div>";
				html += "      </div>";
				html += "      <hr>";
				html += "      <div id=\"divMaInfo\" style=\"display: flex;\">";
				// 정보 자측
				html += "        <div style=\"flex:2\">";
				html += "          <table class=\"maInfo\">";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-NoticeList-view-timeCreated\"></span></th>";
				// 접수번호 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\">"+hits[0]._source.timeCreated+"</span></div></td>";
				html += "            </tr>";
				if(hits[0]._source.timeUpdated==undefined)
					{
				html += "            <tr>";
				html += "              <th><span class=\"i18n-NoticeList-view-timeUpdated\"></span></th>";
				// 접수유형 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\"></span></div></td>";
				html += "            </tr>";
					}
				else
					{
				html += "            <tr>";
				html += "              <th><span class=\"i18n-NoticeList-view-timeUpdated\"></span></th>";
				// 접수유형 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\">"+hits[0]._source.timeUpdated+"</span></div></td>";
				html += "            </tr>";
					}
				html += "            <tr>";
				html += "          </table>";
				html += "        </div>";
				html += "        <div style=\"flex:2\">";
				html += "          <table class=\"maInfo\">";
				html += "              <th><span class=\"i18n-NoticeList-view-type\"></span></th>";
				// 접수일 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\">"+hits[0]._source.type+"</span></div></td>";
				html += "            </tr>";
				html += "            <tr>";
				html += "              <th><span class=\"i18n-NoticeList-view-division\"></span></th>";
				// 접수자 i18n-maillist-mail-view-send 값 변경
				html += "              <td><div class=\"mailContentBg\" style=\"margin-left: 20px;\"><span style=\"line-height: 2; font-size: 19px;\">"+hits[0]._source.division+"</span></div></td>";
				html += "            </tr>";
				html += "            </tr>";
				html += "          </table>";
				html += "        </div>";
				html += "      </div>";
				html += "      <hr>";
				html += "      <div class=\"nav-tabs-custom\">";
			    html += "        <ul class=\"nav nav-tabs\">";
			    html += "          <li class=\"active\" id=\"quarantineContent\"><a href=\"#Quarantine_content\" data-toggle=\"tab\"><span class=\"i18n-NoticeList-view-Content\"></span></a></li>";
			    html += "        </ul>";
			    html += "        <br/>";
//				html += "        <div id=\"divContent\" style=\"min-width: 900px; max-width: 1000px; height: 50%;\">";
				html += "        <div id=\"divContent\" style=\"display: flex;\">";
				html += "          <div class=\"tab-content\">";
				
				html += "            <div class=\"active tab-pane\" id=\"Quarantine_content\" style=\"position: relative;\">";
				html += "              <div id=\"Quarantine_content_notice\"></div>";				
				html += "            </div>";
				html += "          </div>";
				html += "      </div>";
				html += "    </div>";
				html += "    <div class=\"modal-footer\">";
				html += "      <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\"><span class=\"i18n-maillist-close\"></span></button>";
				html += "    </div>";
				html += "  </div>";
				html += "</div>";
				
				$("#modal-Noticelist-Content").empty();
				$("#modal-Noticelist-Content").append(html);
				$("#modal-Noticelist-Content").modal();
				
				$.ajax({
					url: "http://portal.softcamp.co.kr/notice/"+hits[0]._source.timeCreated+".htm",
					success: function(result){
						$("#Quarantine_content_notice").html(result);
					}
				});

			}
			
		  });
			
			
		},
		error : function(xhr, status, error) {
			
		},
		complete : function(data) {
			updateContent();
		}
		
	});
}

	