
//查询
$("#query").click(function() {
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	if (startDate == "" || endDate == "") {
		alert("请先选择日期");
		return false;
	} else {
		var start = new Date(startDate.replace("-", "/").replace("-", "/"));
		var end = new Date(endDate.replace("-", "/").replace("-", "/"));

		if (start > end) {
			alert("日期选择不正确");
			return false;
		}

		// $("#first").addClass("on").parent().siblings().find(
		// ".on").removeClass("on");
		// showPop();
		return true;
	}
});

//function setDate() {
//	var today = new Date();
//	var last30 = new Date();
//	last30.setTime(today.getTime() - 30 * 24 * 3600 * 1000);
//	var today2str = today.getFullYear() + "-" + (today.getMonth() + 1) + "-"
//			+ today.getDate();
//	var last72str = last30.getFullYear() + "-" + (last30.getMonth() + 1) + "-"
//			+ last30.getDate();
//	document.getElementById("startDate").value = last72str;
//	document.getElementById("endDate").value = today2str;
//}
///* window.onloa myfun() */
//window.onload = setDate;
