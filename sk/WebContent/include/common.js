var l10n = document.mozL10n || document.webL10n;

var isoCountries = {
	    'AF' : 'Afghanistan',
	    'AX' : 'Aland Islands',
	    'AL' : 'Albania',
	    'DZ' : 'Algeria',
	    'AS' : 'American Samoa',
	    'AD' : 'Andorra',
	    'AO' : 'Angola',
	    'AI' : 'Anguilla',
	    'AQ' : 'Antarctica',
	    'AG' : 'Antigua And Barbuda',
	    'AR' : 'Argentina',
	    'AM' : 'Armenia',
	    'AW' : 'Aruba',
	    'AU' : 'Australia',
	    'AT' : 'Austria',
	    'AZ' : 'Azerbaijan',
	    'BS' : 'Bahamas',
	    'BH' : 'Bahrain',
	    'BD' : 'Bangladesh',
	    'BB' : 'Barbados',
	    'BY' : 'Belarus',
	    'BE' : 'Belgium',
	    'BZ' : 'Belize',
	    'BJ' : 'Benin',
	    'BM' : 'Bermuda',
	    'BT' : 'Bhutan',
	    'BO' : 'Bolivia',
	    'BA' : 'Bosnia And Herzegovina',
	    'BW' : 'Botswana',
	    'BV' : 'Bouvet Island',
	    'BR' : 'Brazil',
	    'IO' : 'British Indian Ocean Territory',
	    'BN' : 'Brunei Darussalam',
	    'BG' : 'Bulgaria',
	    'BF' : 'Burkina Faso',
	    'BI' : 'Burundi',
	    'KH' : 'Cambodia',
	    'CM' : 'Cameroon',
	    'CA' : 'Canada',
	    'CV' : 'Cape Verde',
	    'KY' : 'Cayman Islands',
	    'CF' : 'Central African Republic',
	    'TD' : 'Chad',
	    'CL' : 'Chile',
	    'CN' : 'China',
	    'CX' : 'Christmas Island',
	    'CC' : 'Cocos (Keeling) Islands',
	    'CO' : 'Colombia',
	    'KM' : 'Comoros',
	    'CG' : 'Congo',
	    'CD' : 'Congo, Democratic Republic',
	    'CK' : 'Cook Islands',
	    'CR' : 'Costa Rica',
	    'CI' : 'Cote D\'Ivoire',
	    'HR' : 'Croatia',
	    'CU' : 'Cuba',
	    'CY' : 'Cyprus',
	    'CZ' : 'Czech Republic',
	    'DK' : 'Denmark',
	    'DJ' : 'Djibouti',
	    'DM' : 'Dominica',
	    'DO' : 'Dominican Republic',
	    'EC' : 'Ecuador',
	    'EG' : 'Egypt',
	    'SV' : 'El Salvador',
	    'GQ' : 'Equatorial Guinea',
	    'ER' : 'Eritrea',
	    'EE' : 'Estonia',
	    'ET' : 'Ethiopia',
	    'FK' : 'Falkland Islands (Malvinas)',
	    'FO' : 'Faroe Islands',
	    'FJ' : 'Fiji',
	    'FI' : 'Finland',
	    'FR' : 'France',
	    'GF' : 'French Guiana',
	    'PF' : 'French Polynesia',
	    'TF' : 'French Southern Territories',
	    'GA' : 'Gabon',
	    'GM' : 'Gambia',
	    'GE' : 'Georgia',
	    'DE' : 'Germany',
	    'GH' : 'Ghana',
	    'GI' : 'Gibraltar',
	    'GR' : 'Greece',
	    'GL' : 'Greenland',
	    'GD' : 'Grenada',
	    'GP' : 'Guadeloupe',
	    'GU' : 'Guam',
	    'GT' : 'Guatemala',
	    'GG' : 'Guernsey',
	    'GN' : 'Guinea',
	    'GW' : 'Guinea-Bissau',
	    'GY' : 'Guyana',
	    'HT' : 'Haiti',
	    'HM' : 'Heard Island & Mcdonald Islands',
	    'VA' : 'Holy See (Vatican City State)',
	    'HN' : 'Honduras',
	    'HK' : 'Hong Kong',
	    'HU' : 'Hungary',
	    'IS' : 'Iceland',
	    'IN' : 'India',
	    'ID' : 'Indonesia',
	    'IR' : 'Iran, Islamic Republic Of',
	    'IQ' : 'Iraq',
	    'IE' : 'Ireland',
	    'IM' : 'Isle Of Man',
	    'IL' : 'Israel',
	    'IT' : 'Italy',
	    'JM' : 'Jamaica',
	    'JP' : 'Japan',
	    'JE' : 'Jersey',
	    'JO' : 'Jordan',
	    'KZ' : 'Kazakhstan',
	    'KE' : 'Kenya',
	    'KI' : 'Kiribati',
	    'KR' : 'Korea',
	    'KW' : 'Kuwait',
	    'KG' : 'Kyrgyzstan',
	    'LA' : 'Lao People\'s Democratic Republic',
	    'LV' : 'Latvia',
	    'LB' : 'Lebanon',
	    'LS' : 'Lesotho',
	    'LR' : 'Liberia',
	    'LY' : 'Libyan Arab Jamahiriya',
	    'LI' : 'Liechtenstein',
	    'LT' : 'Lithuania',
	    'LU' : 'Luxembourg',
	    'MO' : 'Macao',
	    'MK' : 'Macedonia',
	    'MG' : 'Madagascar',
	    'MW' : 'Malawi',
	    'MY' : 'Malaysia',
	    'MV' : 'Maldives',
	    'ML' : 'Mali',
	    'MT' : 'Malta',
	    'MH' : 'Marshall Islands',
	    'MQ' : 'Martinique',
	    'MR' : 'Mauritania',
	    'MU' : 'Mauritius',
	    'YT' : 'Mayotte',
	    'MX' : 'Mexico',
	    'FM' : 'Micronesia, Federated States Of',
	    'MD' : 'Moldova',
	    'MC' : 'Monaco',
	    'MN' : 'Mongolia',
	    'ME' : 'Montenegro',
	    'MS' : 'Montserrat',
	    'MA' : 'Morocco',
	    'MZ' : 'Mozambique',
	    'MM' : 'Myanmar',
	    'NA' : 'Namibia',
	    'NR' : 'Nauru',
	    'NP' : 'Nepal',
	    'NL' : 'Netherlands',
	    'AN' : 'Netherlands Antilles',
	    'NC' : 'New Caledonia',
	    'NZ' : 'New Zealand',
	    'NI' : 'Nicaragua',
	    'NE' : 'Niger',
	    'NG' : 'Nigeria',
	    'NU' : 'Niue',
	    'NF' : 'Norfolk Island',
	    'MP' : 'Northern Mariana Islands',
	    'NO' : 'Norway',
	    'OM' : 'Oman',
	    'PK' : 'Pakistan',
	    'PW' : 'Palau',
	    'PS' : 'Palestinian Territory, Occupied',
	    'PA' : 'Panama',
	    'PG' : 'Papua New Guinea',
	    'PY' : 'Paraguay',
	    'PE' : 'Peru',
	    'PH' : 'Philippines',
	    'PN' : 'Pitcairn',
	    'PL' : 'Poland',
	    'PT' : 'Portugal',
	    'PR' : 'Puerto Rico',
	    'QA' : 'Qatar',
	    'RE' : 'Reunion',
	    'RO' : 'Romania',
	    'RU' : 'Russian Federation',
	    'RW' : 'Rwanda',
	    'BL' : 'Saint Barthelemy',
	    'SH' : 'Saint Helena',
	    'KN' : 'Saint Kitts And Nevis',
	    'LC' : 'Saint Lucia',
	    'MF' : 'Saint Martin',
	    'PM' : 'Saint Pierre And Miquelon',
	    'VC' : 'Saint Vincent And Grenadines',
	    'WS' : 'Samoa',
	    'SM' : 'San Marino',
	    'ST' : 'Sao Tome And Principe',
	    'SA' : 'Saudi Arabia',
	    'SN' : 'Senegal',
	    'RS' : 'Serbia',
	    'SC' : 'Seychelles',
	    'SL' : 'Sierra Leone',
	    'SG' : 'Singapore',
	    'SK' : 'Slovakia',
	    'SI' : 'Slovenia',
	    'SB' : 'Solomon Islands',
	    'SO' : 'Somalia',
	    'ZA' : 'South Africa',
	    'GS' : 'South Georgia And Sandwich Isl.',
	    'ES' : 'Spain',
	    'LK' : 'Sri Lanka',
	    'SD' : 'Sudan',
	    'SR' : 'Suriname',
	    'SJ' : 'Svalbard And Jan Mayen',
	    'SZ' : 'Swaziland',
	    'SE' : 'Sweden',
	    'CH' : 'Switzerland',
	    'SY' : 'Syrian Arab Republic',
	    'TW' : 'Taiwan',
	    'TJ' : 'Tajikistan',
	    'TZ' : 'Tanzania',
	    'TH' : 'Thailand',
	    'TL' : 'Timor-Leste',
	    'TG' : 'Togo',
	    'TK' : 'Tokelau',
	    'TO' : 'Tonga',
	    'TT' : 'Trinidad And Tobago',
	    'TN' : 'Tunisia',
	    'TR' : 'Turkey',
	    'TM' : 'Turkmenistan',
	    'TC' : 'Turks And Caicos Islands',
	    'TV' : 'Tuvalu',
	    'UG' : 'Uganda',
	    'UA' : 'Ukraine',
	    'AE' : 'United Arab Emirates',
	    'GB' : 'United Kingdom',
	    'US' : 'United States',
	    'UM' : 'United States Outlying Islands',
	    'UY' : 'Uruguay',
	    'UZ' : 'Uzbekistan',
	    'VU' : 'Vanuatu',
	    'VE' : 'Venezuela',
	    'VN' : 'Viet Nam',
	    'VG' : 'Virgin Islands, British',
	    'VI' : 'Virgin Islands, U.S.',
	    'WF' : 'Wallis And Futuna',
	    'EH' : 'Western Sahara',
	    'YE' : 'Yemen',
	    'ZM' : 'Zambia',
	    'ZW' : 'Zimbabwe',
	    'SX' : 'Sint Maarten',
	    'XK' : 'Republika e Kosovës',
	    '0' : 'NULL'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

function setLanguage()
{
	l10n.setLanguage($("#language").val());
}

function setLangType(type)
{
	switch( type )
	{
		case 0: $('#language').val("ko-KR"); break;
		case 1: $('#language').val("en-US"); break;
		case 2: $('#language').val("ja-JP"); break;
	}
	window.location = "home.jsp?language="+$("#language").val();
}

function setPageIdx()
{
	$("#page").empty();

	var pageSize = $("#pageSize").val();
	var recCnt = $("#recCount").text();
	var pageMax = parseInt(uncomma(recCnt)/pageSize);
	
	if(recCnt != 0){
		if ( uncomma(recCnt)%pageSize > 0 )
			pageMax++;

		if ( $("#pageIdx").val() == "" || $("#pageIdx").val() == null )
		{
			$("#pageIdx").val("0");
		}
		
		var pageIdx = parseInt($("#pageIdx").val());
		if ( pageIdx <= 0 )
			pageIdx = 1;
		else if ( pageIdx > pageMax )
			pageIdx = pageMax;
		
		var pageStart = parseInt((pageIdx-1)/10)*10+1;
		var pageEnd = pageStart+9;
		if ( pageEnd > pageMax )
			pageEnd = pageMax;
		
		var nextPage = pageIdx+10;
		if ( nextPage > pageMax ){
			nextPage = pageMax;
		}else if( nextPage%10 == 0){
			nextPage = pageIdx+1;
		}
		
		if ( pageIdx == 1 ){
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
//			$("#page").append("<li class='disabled'><span>&laquo;</span></li>");
		}else if(pageIdx%10 == 1){
			$("#page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+(pageIdx-1)+");'><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
		}else if(pageIdx <= 10){
			$("#page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
		}else{
			$("#page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+(pageStart-1)+");'><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
//			$("#page").append("<li><a href='javascript:goPage("+(pageIdx-1)+");' title=\"이전 페이지\"><span>&laquo;</span></a></li>");
		}
		for ( var i=pageStart; i<=pageEnd; i++ )
		{
			if ( i == pageIdx ){
				$("#page").append("<li class='active'><span>" + i + " <span class='sr-only'>(current)</span></span></li>");
			}else{
				$("#page").append("<li><a href='javascript:goPage(" + i + ");'><span>" + i + " <span class='sr-only'>(current)</span></span></a></li>");
			}
		}

		if ( pageIdx >= pageMax ){
//			$("#page").append("<li class='disabled'><span>&raquo;</span></li>");
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else if(pageIdx%10 == 0){
			$("#page").append("<li><a href='javascript:goPage(" +(pageIdx+1)+ ");'><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else if((pageIdx+10) != nextPage){
			$("#page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else{
//			$("#page").append("<li><a href='javascript:goPage(" + nextPage + ");' title=\"다음 페이지\"><span>&raquo;</span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+(pageEnd+1)+")'><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}	
	}
}	

function setPageIdx2(id)
{
	$("#"+id+"_page").empty();
	var pageSize = $("#"+id+"_pageSize").val();
	var recCnt = $("#"+id+"_recCount").text();
	var pageMax = parseInt(uncomma(recCnt)/pageSize);
	
	if(recCnt != 0){
		if ( uncomma(recCnt)%pageSize > 0 )
			pageMax++;

		if ( $("#pageIdx").val() == "" || $("#pageIdx").val() == null )
		{
			$("#pageIdx").val("0");
		}
		
		var pageIdx = parseInt($("#pageIdx").val());
		if ( pageIdx <= 0 )
			pageIdx = 1;
		else if ( pageIdx > pageMax )
			pageIdx = pageMax;
		
		var pageStart = parseInt((pageIdx-1)/10)*10+1;
		var pageEnd = pageStart+9;
		if ( pageEnd > pageMax )
			pageEnd = pageMax;
		
		var nextPage = pageIdx+10;
		if ( nextPage > pageMax ){
			nextPage = pageMax;
		}else if( nextPage%10 == 0){
			nextPage = pageIdx+1;
		}
		
		if ( pageIdx == 1 ){
			$("#"+id+"_page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
//			$("#page").append("<li class='disabled'><span>&laquo;</span></li>");
		}else if(pageIdx%10 == 1){
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+(pageIdx-1)+");'><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
		}else if(pageIdx <= 10){
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
		}else{
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+1+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-backward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+(pageStart-1)+");'><span><i style=\"margin-top:3px;\" class=\"fa fa-backward\"></i></span></a></li>");
//			$("#page").append("<li><a href='javascript:goPage("+(pageIdx-1)+");' title=\"이전 페이지\"><span>&laquo;</span></a></li>");
		}
		for ( var i=pageStart; i<=pageEnd; i++ )
		{
			if ( i == pageIdx ){
				$("#"+id+"_page").append("<li class='active'><span>" + i + " <span class='sr-only'>(current)</span></span></li>");
			}else{
				$("#"+id+"_page").append("<li><a href='javascript:goPage(" + i + ");'><span>" + i + " <span class='sr-only'>(current)</span></span></a></li>");
			}
		}

		if ( pageIdx >= pageMax ){
//			$("#page").append("<li class='disabled'><span>&raquo;</span></li>");
			$("#"+id+"_page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li class='disabled'><a><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else if(pageIdx%10 == 0){
			$("#"+id+"_page").append("<li><a href='javascript:goPage(" +(pageIdx+1)+ ");'><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else if((pageIdx+10) != nextPage){
			$("#"+id+"_page").append("<li class='disabled'><a style=\"padding-bottom: 8px;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}else{
//			$("#page").append("<li><a href='javascript:goPage(" + nextPage + ");' title=\"다음 페이지\"><span>&raquo;</span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+(pageEnd+1)+")'><span><i style=\"margin-top:3px;\" class=\"fa fa-forward\"></i></span></a></li>");
			$("#"+id+"_page").append("<li><a href='javascript:goPage("+pageMax+");' style=\"vertical-align:middle; background-color: #fafafa;\"><span><i style=\"margin-top:3px;\" class=\"fa fa-fast-forward\"></i></span></a></li>");
		}	
	}
}	

function showMsg(title, msg)
{
	$('#myModalTitle').html(title);
	$('#myModalBody').html(msg);
	$('#myModal').modal();  		
}
	
function showErrMsg(code, msg)
{
	if ( code == 1 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_1');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_1') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 2 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_2');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_2') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 3 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_13');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_13') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 4 || code == 5 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_3');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_3') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 6 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_6');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_6') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 7 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_4');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_4') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 8 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_7');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_7') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 9 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_8');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_8') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else if ( code == 11 )
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_17');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_17') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
		}
	}
	else
	{
		if ( msg == "" || msg == null )
		{
			msgs = i18next.t('errNotiMsg.msg_content_9');
		}
		else
		{
			msgs = i18next.t('errNotiMsg.msg_content_9') + "<br>" + "<span style=\"font-weight: bold; color: red;\">( " + msg + " )</span>";
//			msgs = "aaaaaaaaaaaa";
		}
	}

	$('#myModalTitle').html(i18next.t('errNotiMsg.msg_title'));
	$('#myModalBody').html(msgs);
	$('#myModal').modal();

	if ( code == 6 )
		;;;
}
function parseUserRight(v){
	switch (v) {
	  case "NORMAL"    : v=0;
	    break;
	  case "DOMAIN_ADMIN"   : v=1;
	    break;
	  case "ADMIN"  : v=2;
	    break;
	  case "GROUP"  : v=3;
      	break;
	}
	return v;
}
function parseUserStatus(v){
	switch (v) {
	  case "NORMAL"    : v=0;
	    break;
	  case "REQUESTED"   : v=1;
	    break;
	  case "TEMP_STOPPED"  : v=2;
	    break;
	  case "STOPPED"  : v=3;
    	break;
	  case "DELETED"  : v=4;
	  	break;
	}
	return v;
}

function modalChangePassword()
{
	document.formPassword.oldpwd.value = "";
	document.formPassword.newpwd.value = "";
	document.formPassword.newpwd2.value = "";

	$('#changePassword').on('shown.bs.modal', function() {
		$("#changePasswordOldPwd").focus();
	});
	$('#changePassword').modal();
}

function chkPwd(str,str2){
	var pw = str;
	var num = pw.search(/[0-9]/g);
	var eng = pw.search(/[a-z]/ig);
	var spe = pw.search(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi);
	
	if ( str != str2 )
	{
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_13', null, '신규 비빌번호 값이 일치하지 않습니다.'));
		return false;
	}
	
	if(pw.length < 10 || pw.length > 16){
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_30', null, '10자리 ~ 20자리 이내로 입력해주세요.'));
		return false;
	}

	if(pw.search(/₩s/) != -1){
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_31', null, '비밀번호는 공백업이 입력해주세요.'));
		return false;
	}
	
	if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_32', null, '영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.'));
		return false;
	}

	return true;
}

function changePassword() {
	
	var oldpwd = $.trim($("#changePasswordOldPwd").val());
	var pwd1 = $.trim($("#changePasswordNewPwd").val());
	var pwd2 = $.trim($("#changePasswordNewPwd2").val());
	
	if( $("#customer").text() == "GS칼텍스"){
		if(!chkPwd(pwd1,pwd2)){
		   return false;
		}
	}else
	{
		if ( pwd1 != pwd2 )
		{
//			showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_13', null, '신규 비빌번호 값이 일치하지 않습니다.'));
			alert("비밀번호가 일치하지 않습니다.");
			return false;
		}
	}	
	
	webApiUrl = $('#webApiUrl').val();
	email = $('#adminEmail').text();
	userIP = $('#userIP').text();

	emailAdd = $('#emailaddr').text();
	name = $('#name').text();
	right = $('#right').text();
	userStatus = $('#status').text();
	lang = $('#lang').text();
	
	jsonData = JSON.stringify({"time":new Date().getTime(), "Email":email, "UserIP":userIP, "EmailAdd":emailAdd, "Name":name, "Right":right, "Status":userStatus, "Language":lang, "NewPassword":pwd1, "NewPasswordConfirm":pwd2, "oldPassword":oldpwd});

	if( $("#customer").text() == "GS칼텍스")
		jsonData =  JSON.stringify({"Email":email, "p":enc_aes(oldpwd,jsonData)});

	jQuery.ajax({
		type:"POST",
		url: webApiUrl+"/admin/modifyUser",
		contentType: "application/json; charset=UTF-8",
		data: jsonData,
		dataType:"JSON",
		timeout: 30000,
		success : function(data) 
		{
			var code = 0, msg = "";
			$.each(data, function(key, value) 
			{
				if( key == "Code" ) 
					code =value;
				if ( key == "Msg" ) 
					msg = value;
				else if ( key == "Modified" && value != null )
				{
					if ( value )
						showMsg(l10n.get('result', null, "결과"), l10n.get('msg_result_11', null, "정보가 수정되었습니다."));
					else
						showMsg(l10n.get('error', null, "오류"), l10n.get('msg_result_12', null, "수정을 실패하였습니다."));
				}
			});
			
			if ( code != 0 )
			{
				if ( code == 6 )
					window.location = 'login.jsp';
				else
					showErrMsg(code, msg);
				return;
			}
		},
		error : function(xhr, status, error) 
		{
			alert(l10n.get('msg_err_1', null, '오류가 발생하였습니다.\n잠시후 다시 실행해 주세요.'));
		},
		complete : function(data) {
		}
	});	
};
	
function humanFileSize(bytes, si)
{
	var thresh = si ? 1000 : 1024;
	if ( Math.abs(bytes) < thresh )
		return bytes + ' B';
	
	var units = si ? ['KB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
	var u = -1;
	do {
		bytes /= thresh;
		++u;
	} while(Math.abs(bytes) >= thresh && u < units.length - 1);
	
	return bytes.toFixed(1)+' '+units[u];
}

function humanNetworkSize(bytes, si)
{
	var thresh = si ? 1000 : 1024;
	if ( Math.abs(bytes) < thresh )
		return bytes + ' b';
	
	var units = si ? ['Kb','Mb','Gb','Tb','Pb','Eb','Zb','Yb'] : ['Kb','Mb','Gb','Tb','Pb','Eb','Zb','Yb'];
	var u = -1;
	do {
		bytes /= thresh;
		++u;
	} while(Math.abs(bytes) >= thresh && u < units.length - 1);
	
	return bytes.toFixed(1)+' '+units[u];
}

// 밑 세개의 함수는 사용자가 입력한 날짜를 황인할때 필요함
function isValidSearchDate()
{
	var from = $("#searchDateFrom").val();
	var to = $("#searchDateTo").val();
	
	if(( from.length == 0 && to.length > 0 ) || ( from.length > 0 && to.length == 0 ))
	{
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_14', null, '날짜형식이 잘못 되었습니다.'));
		return false;
	}
	
	if ( !isValidDate(from) || !isValidDate(to) )
	{
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_14', null, '날짜형식이 잘못 되었습니다.'));
		return false;
	}
	
	var timeFrom = parseDatepicker(from);
	var timeTo = parseDatepicker(to);
	
	if ( (timeTo - timeFrom) < 0 )
	{
		showMsg(l10n.get('error', null, '오류'), l10n.get('msg_err_14', null, '날짜형식이 잘못 되었습니다.'));
		return false;
	}
	
	return true;
}

function isValidDate(dateString)
{	
	if( dateString.length == 0 )
		return true;
	
	// First check for the pattern(yyyy-mm-dd)
	if ( !/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString) )
		return false;
	
	// Parse the date parts to integers
	var parts = dateString.split("-");
	var year = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var day = parseInt(parts[2], 10);
	
	// Check the ranges of month and year
	if ( year < 1000 || year > 3000 || month == 0 || month > 12 )
		return false;

	var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if ( year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) )
		monthLength[1] = 29;

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
}

function parseDatepicker(dateStr)
{
	var date = dateStr.split("-");
	return new Date(date[0], date[1] - 1, date[2]).getTime();
}

function parseDateOnly(dateStr)
{
	return dateStr.split(" ")[0];
}

function orderItem(item)
{	
	if ( document.formList.orderBy.value == item )
	{
		if ( document.formList.asc.value == "true" )
			document.formList.asc.value = "false";
		else
			document.formList.asc.value = "true";
	}
	
    document.formList.orderBy.value = item;
    document.formList.action = formList.myurl.value;

    $( "#formList" ).submit();
}

function periodTypeFn(type)
{
	document.formList.searchPeriodType.value = type;
	document.formList.submit();
}

function checkStrLength(str, length)
{	
	while(new String(str).length < length)
	{
		str = "0" + str;
	}

	return str;
}

function parseTime(timestamp)
{
	var jdate = new Date((timestamp));
	var year = jdate.getFullYear();
	var month = "0" + (jdate.getMonth()+1);
	var date = "0" + jdate.getDate();
	
	var hours = "0" + jdate.getHours();
	var minutes = "0" + jdate.getMinutes();
	var seconds = "0" + jdate.getSeconds();

	var formattedTime = year+'-'+month.substr(-2)+'-'+date.substr(-2) + ' ' + hours.substr(-2)+':'+minutes.substr(-2)+':'+seconds.substr(-2);
	return formattedTime;
	
}

function parseTime2(timestamp)
{
	var jdate = new Date((timestamp*1000));
	var year = jdate.getFullYear();
	var month = "0" + (jdate.getMonth()+1);
	var date = "0" + jdate.getDate();
	
	var hours = "0" + jdate.getHours();
	var minutes = "0" + jdate.getMinutes();
	var seconds = "0" + jdate.getSeconds();
	
	var formattedTime = year+'-'+month.substr(-2)+'-'+date.substr(-2) + ' ' + hours.substr(-2)+':'+minutes.substr(-2)+':'+seconds.substr(-2);
	return formattedTime;
	
}

function parseTime3(timestamp)
{
	var time = new Date(timestamp).getTime();
	var jdate = new Date(time);
	var year = jdate.getFullYear();
	var month = "0" + (jdate.getMonth()+1);
	var date = "0" + jdate.getDate();
	
	var formattedTime = year+'-'+month.substr(-2)+'-'+date.substr(-2);
	return formattedTime;
	
}

function parseTime4(timestamp)
{
	var time = new Date(timestamp).getTime();
	var jdate = new Date(time);
	var year = jdate.getFullYear();
	var month = "0" + (jdate.getMonth()+1);
	var date = "0" + jdate.getDate();
	
	var hours = "0" + jdate.getHours();
	var minutes = "0" + jdate.getMinutes();
	var seconds = "0" + jdate.getSeconds();

	var formattedTime = year+'-'+month.substr(-2)+'-'+date.substr(-2) + ' ' + hours.substr(-2)+':'+minutes.substr(-2)+':'+seconds.substr(-2);
	return formattedTime;
	
}

//function goPage(item)
//{
//	var filter = document.formList.filter.value;
//	var pageSize = document.formList.pageSize.value;
//	var pageIdx = document.formList.pageIdx.value = item;
//	var url = document.formList.myurl.value;
//	
//	$(".content").empty();
//	$(".content").load(url+"?pageIdx="+pageIdx+"&pageSize="+pageSize+"&filter="+filter);
//}

function isValidInt(input)
{
	var integerSet = "0123456789";
	flag = true;

	for(var i = 0; i < input.length && flag; i++)
	{
		flag=false;
		
		for(var n=0 ; n <10 && !flag ; n++)
			if( integerSet[n] == input[i] )
				flag = true;
	}	
	
	return flag;	
}

function isValidString(input)
{	
	if(input.trim().length <= 0 || input == null)
		return false;
	
	return true;
}

function isValidEmailAdd(input)
{
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
	if( isValidString(input) )
	    return regex.test(input);
	else
		return false;
}

function isValidDomain(input)
{
//	var regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/; 
//	var regex = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/;
//	var regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
//	console.log(input);
//	if( isValidString(input) )
//	{
//	    return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(input);
//	}
//	else
//		return false;
	
	return true;
}

//function keyEnter(e)
//{
//	if ( typeof e == 'undefined' && window.event) { e = window.event; }
//	if ( e.keyCode == 13 )
//		search();
//}

/**
 * datepicker에서 날짜 선택시 시간은 포함되지 않으므로 시간을 추가해준다.
 * 
 * @param dateStr
 * @param m
 * @returns {String}
 */
function convertDatePickerFormat(dateStr, m)
{
	if(m == "0")
		return dateStr += " 0:0:0.000";
	if(m == "1")
		return dateStr += " 23:59:59.999";
}

function search()
{
	if ( !isValidSearchDate() )
		return;
	
	$('#pageIdx').val(1);	
	$('#formList').submit();
}

function searchWithOutDate()
{
	$('#pageIdx').val(1);	
	$('#formList').submit();
}

function parseRights(right)
{
	switch( right )
	{
		case '0' : return l10n.get('sitem_right_max_count', null, '열람횟수');			//maxCount[count]
		case '1' : return l10n.get('sitem_right_max_date', null, '유효기간'); 			//maxDate[date]
		case '2' : return l10n.get('sitem_right_invalidate', null, '회수');	  			//valid[false]
		case '3' : return l10n.get('sitem_right_validate', null, '회수 취소'); 		//valid[true]
		case '4' : return l10n.get('sitem_right_enable_edit', null, '수정 허용');		//useEdit[true]
		case '5' : return l10n.get('sitem_right_disable_edit', null, '수정 금지');		//useEdit[false]
		case '6' : return l10n.get('sitem_right_enable_print', null, '인쇄 허용');		//usePrint[true]
		case '7' : return l10n.get('sitem_right_disable_print', null, '인쇄 금지');	//usePrint[false]
		case '8' : return l10n.get('sitem_right_print_count', null, '인쇄 횟수');		//maxPringCnt[count]
		case '9' : return l10n.get('sitem_right_enable_auto_delete', null, '자동파기 허용');	//useAutoDelete[true]
		case '10' : return l10n.get('sitem_right_disable_auto_delete', null, '자동파기 금지');	//useAutoDelete[false]
		
		case '11' : return l10n.get('sitem_right_enable_copy&paste', null, 'Copy&Paste 허용');	//useC&P[true]
		case '12' : return l10n.get('sitem_right_disable_copy&paste', null, 'Copy&Paste 금지');	//useC&P[false]
		case '13' : return l10n.get('sitem_right_enable_capture', null, '캡쳐 허용');				//useCapture[true]
		case '14' : return l10n.get('sitem_right_disable_capture', null, '캡쳐 금지');				//useCapture[false]
		case '15' : return l10n.get('sitem_right_enable_watermark', null, '인쇄워터마크 허용');		//usePrintMark[true]
		case '16' : return l10n.get('sitem_right_disable_watermark', null, '인쇄워터마크 금지');		//usePrintMark[false]
		case '17' : return l10n.get('sitem_right_enable_import', null, 'Import 허용');		//useImport[true]
		case '18' : return l10n.get('sitem_right_disable_import', null, 'Import 금지');		//useImport[false]
		case '19' : return l10n.get('sitem_right_enable_share', null, 'useShare 허용');		//useShare[true]
		case '20' : return l10n.get('sitem_right_disable_share', null, 'useShare 금지');		//useShare[false]
		
		case '21' : return l10n.get('sitem_right_enable_merge', null, 'Merge 허용');			//useMerge[true]
		case '22' : return l10n.get('sitem_right_disable_merge', null, 'Merge 금지');			//useMerge[false]
		case '23' : return l10n.get('sitem_right_enable_move', null, 'Move 허용');			//useMove[true]
		case '24' : return l10n.get('sitem_right_disable_move', null, 'Move 금지');			//useMove[false]
		case '25' : return l10n.get('sitem_right_enable_decrypt', null, 'Decrypt 허용');		//useDecrypt[true]
		case '26' : return l10n.get('sitem_right_disable_decrypt', null, 'Decrypt 금지');		//useDectypr[false]
		case '27' : return l10n.get('sitem_right_enable_offline', null, 'Offline 허용');		//useOffline[true]
		case '28' : return l10n.get('sitem_right_disable_offline', null, 'Offline 금지');		//useOffline[false]
		
		case '29' : return l10n.get('sitem_right_enable_stream', null, '스트림 허용');		//useStrim[true]
		case '30' : return l10n.get('sitem_right_disable_stream', null, '스트림 금지');		//useStrim[false]
		case '31' : return l10n.get('sitem_right_enable_blur', null, 'Blur 허용');		//useBlur[true]
		case '32' : return l10n.get('sitem_right_disable_blur', null, 'Blur 금지');		//useBlur[false]
		
		case '33' : return l10n.get('sitem_right_enable_delete', null, '파기 등록');		// deleted[true]
		case '34' : return l10n.get('sitem_right_disable_delete', null, '파기 등록 취소');	// deleted[false]
		case '35' : return l10n.get('sitem_right_restrict_pc_mac', null, 'PC제한(MAC)');	// pcMac[pcMac]
		case '36' : return l10n.get('sitem_right_restrict_pc_ip', null, 'PC제한(IP)');	// pcIP[pcIP]
		
		//sup
		case '37' : return l10n.get('clearPasswordFail', null, '비밀번호 오류 횟수 초기화')		// 
	}
	
	return right;
}

/**
 * 키패딩
 * @param key
 * @returns
 */
function key_padding(key)
{
	var newKey;
	
	if ( key.length > 16 )
		newKey = key.substring(0, 16);
	else if ( key.length < 16 )
	{
		newKey = key;
		for ( var i=key.length; i<16; i++ )
			newKey += '0';
	}
	else
		newKey = key;
	
	return newKey;
}

/**
 * 데이터 암호화
 * @param key
 * @param jsonData
 * @returns
 */
function enc_aes(key, jsonData)
{
	var key = key_padding(key, 16);
	key = CryptoJS.enc.Utf8.parse(key);
	jsonData = CryptoJS.enc.Utf8.parse(jsonData);

	var encrtext = CryptoJS.AES.encrypt(jsonData, key, {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        });
	
	return encrtext.toString();
}

/**
 * 외부 js, css를 스크립트에서 호출하는 함수.
 * @param type css나 js
 * @param FilePath include source path 
 */
function includeSource(type, FilePath)
{
	if(type == "js")
	{
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = FilePath;
		document.head.appendChild(js);	
	}
	else if(type =="css")
	{
		var css = document.createElement("link");
		css.rel = "stylesheet";
		css.href = FilePath;
		document.head.appendChild(css);
	}
}
/**
 * 고객별 UI 설정
 */
function setCustomUI(){
	if( $("#customer").text() == "신한은행" )
	{
		includeSource('css','css/shinhan-admin.css');
		includeSource('js','js/shinhan-admin.js');
		$(".shbank").show();
	}
	else if( $("#customer").text() == "GS칼텍스" )
	{
		includeSource('css','css/gscaltex-admin.css');
		includeSource('js','js/gscaltex-admin.js');
	}
}

//[] <--문자 범위 [^] <--부정 [0-9] <-- 숫자  
//[0-9] => \d , [^0-9] => \D
var rgx1 = /\D/g;  // /[^0-9]/g 와 같은 표현
var rgx2 = /(\d+)(\d{3})/; 

function getNumber(obj){
	
   var num01;
   var num02;
   num01 = obj.value;
   num02 = num01.replace(rgx1,"");
   num01 = setComma(num02);
   obj.value =  num01;

}

function getNumber2(obj){
	
	var num01;
	var num02;
	num01 = obj.value;
	num02 = num01.replace(rgx1,"");
	num01 = num02;
	obj.value =  num01;
	
}

function setComma(inNum){
   
   var outNum;
   outNum = inNum; 
   while (rgx2.test(outNum)) {
        outNum = outNum.replace(rgx2, '$1' + ',' + '$2');
    }
   return outNum;

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function uncomma(str) {
    return str.replace(/[^\d]+/g, '');
}


function addZero(i) {
	if (i < 10) {
	    i = "0" + i;
	}
	return i;
}

function setCookie(cookieName, value, exdays){
   var exdate = new Date();
   exdate.setTime(exdate.getTime() + (exdays * 60 * 1000));
   var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate);
   document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName){
    document.cookie = cookieName + "= " + "; expires=" + null;
}

function getCookie(cookieName) {
   cookieName = cookieName + '=';
   var cookieData = document.cookie;
   var start = cookieData.indexOf(cookieName);
   var cookieValue = '';
   if(start != -1){
      start += cookieName.length;
      var end = cookieData.indexOf(';', start);
      if(end == -1)end = cookieData.length;
      cookieValue = cookieData.substring(start, end);
   }
   return unescape(cookieValue);
}

//특정 특수문자 Replace처리
function valReplace(val){

	var replaceVal = val.replace("<","&lt;").replace(">","&gt;").replace(/\"/gi, "").replace(/'/gi,"");
	return replaceVal;
}

function valReplace2(val){
	var replaceVal2 = val.replace("<","&lt;").replace(">","&gt;").replace(/\"/gi, "").replace(/'/gi,"").replace(/(?:\r\n|\r|\n)/g, '<br />');
	return replaceVal2;
}

function certification(){
	var adminPwd_flag = getCookie("adminPwd_flag");
	
	if(adminPwd_flag == "uncheck" || adminPwd_flag == "" || adminPwd_flag == null){
		var html = "";
		
		html += "<div style=\"margin-bottom: 10px;\"><i class=\"fa fa-exclamation iColor\"></i><span class=\"i18n-certification-help\"></span></div>";
		html += "<table class=\"table table-bordered table-hover\" style=\"width: 100%;\">";
		html += "  <colgroup>";
		html += "    <col width=\"5%\"/>";
		html += "    <col width=\"10%\"/>";
		html += "  </colgroup>";
		html += "  <tr>";
		html += "    <th><span class=\"i18n-certification-title\"></span></th>";
		html += "    <td><input type=\"password\" id=\"chk_pwd\" style=\"width: 80%; padding-left: 10px;\" onkeydown=\"javascript:if(event.keyCode==13){adminPwdCheck();}\"></td>";
		html += "  </tr>";
		html += "  <tr>";
		html += "    <td colspan='2' style=\"text-align: center\">";
		html += "      <span id=\"adminPwdChkMsg\"></span>";
		html += "    </td>";
		html += "  </tr>";
		html += "</table>";
		html += "<div class=\"modal-footer\">";
		html += "  <button class=\"btn btn-default pull-right\" style=\"margin-left: 10px;\" type=\"button\" onclick=\"adminPwdCheck();\"><span class=\"i18n-certification-btn-confirm\"></span></button>";
		html += "  <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\" id=\"modal-acceptance-close\"><span class=\"i18n-certification-btn-close\"></span></button>";
		html += "</div>";
		$('#adminPwdModalTitle').html(i18next.t('certification.title'));
		$('#adminPwdModalBody').html(html);
		$('#adminPwdModal').modal();
		updateContent();
	}
}

function adminPwdCheck(){
	var adminPwd = getCookie("adminPwd");
	var inputPwd = $("#chk_pwd").val();
	
	if(adminPwd == inputPwd){
		setCookie("adminPwd_flag","check");
		$('#adminPwdModal').modal('hide');
	}else{
		setCookie("adminPwd_flag","uncheck");
		$("#adminPwdChkMsg").text(i18next.t('certification.err_msg'));
		$("#adminPwdChkMsg").css("color","red");
	}
	
	updateContent();
}

function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	if ( re.test(email) == false )
		showMsg(i18next.t('notices.error'), i18next.t('notices.error_msg'));
}

function checkIpForm(ip_addr){
	
	var filter = /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/;
	
	if (filter.test(ip_addr) == false)
		showMsg(i18next.t('notices.error'), i18next.t('errNotiMsg.msg_content_12'));
	
}

function checkUrl(url)
{
	var re =  /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/; 
	
	if ( re.test(url) == false )
		showMsg(i18next.t('notices.error'), i18next.t('errNotiMsg.msg_content_14'));
}

function startCustomLoding()
{
	//ajax success 밑에 beforeSend: function () { 삽입하여 실행해야함.
	var width = 0;
    var height = 0;
    var left = 0;
    var top = 0;

    width = 100;
    height = 100;
    top = ( $(window).height() - height ) / 2 + $(window).scrollTop();
    left = ( $(window).width() - width ) / 2 + $(window).scrollLeft();

    if($("#div_ajax_load_image").length != 0)
    {
    	$("#div_ajax_load_image").css({
    		"top": top+"px",
    		"left": left+"px"
        });
        $("#div_ajax_load_image").show();
     }
     else
     {
    	 $('body').append('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; margin:auto; padding:0; "><img src=\"dist/img/loading/loading.gif\" style="width:100px; height:100px;"></div>');
     }
}

function endCustomLoding()
{
	$("#div_ajax_load_image").hide();
}