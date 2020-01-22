function detectLanguage()
{
	return window.navigator.userLanguage || window.navigator.language;
}

/**
 * 오늘 날짜기준으로 앞뒤 날짜 지정
 * period >= 0 : 
 *   timeRange.from 은 오늘 00:00:00
 *   timeRange.to 는 오늘+period 의 23:59:59
 * period < 0 :
 *   timeRange.from 은 오늘+period 00:00:00
 *   timeRange.to 는 오늘 23:59:59
 * @param period
 * @param timeRange
 * @returns
 */
function periodTimestamp(period, timeRange)
{
	var now = new Date();
	var midNight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

	if ( period >= 0 )
	{
		timeRange.from = midNight;
	    
		if ( period == 0 )
			period = 1;
		timeRange.to = midNight + 86400000*period - 1;
	}
	else
	{
		period = (period*-1) -1;
		timeRange.from = midNight - 86400000 * period;
		timeRange.to = midNight + 86400000-1;
	}
	
//	console.log(new Date(now));
//	console.log(new Date(timeRange.to));
		
	/*
	 * 사용법
	 * var timeRange = {};
	 * // 오늘
	 * periodTimestamp(0, timeRange);
	 * console.log(timeRange.from);
	 * console.log(timeRange.to);
	 * 
	 * // 다음 7일
	 * periodTimestamp(7, timeRange);
	 * console.log(timeRange.from);
	 * console.log(timeRange.to);
	 * 
	 * // 과거 7일
	 * periodTimestamp(-7, timeRange);
	 * console.log(timeRange.from);
	 * console.log(timeRange.to);
	 */
}

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
