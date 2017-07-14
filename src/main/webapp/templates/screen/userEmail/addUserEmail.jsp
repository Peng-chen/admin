<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="path" value="${pageContext.request.contextPath}"></c:set>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- Bootstrap -->
<link href=${path.concat("/style/bootstrap/css/bootstrap.css")}
	rel="stylesheet" type="text/css" media="screen" />
<link href=${path.concat("/style/flatui/dist/css/flat-ui.css")}
	rel="stylesheet" type="text/css" media="screen" />
<link href=${path.concat("/style/common.css")} rel="stylesheet"
	type="text/css" media="screen" />
<link rel="stylesheet"
	href=${path.concat("/style/Font-Awesome-3.2.1/css/font-awesome.min.css")}>

<script src=${path.concat("/script/jquery-1.11.1.js")}></script>
<script type="text/javascript"
	src=${path.concat("/style/bootstrap/js/bootstrap.min.js")}></script>
<script type="text/javascript"
	src=${path.concat("/style/bootstrap/js/bootstrap-acknowledgeinput.min.js")}></script>

<title>用户邮件管理</title>

<style type="text/css">
#formDiv {
	margin-top: 30px
}

#update_btn {
	margin-top: 8px;
	margin-bottom: 8px
}
</style>

</head>
<body>



	<div class="data">
		<div id="formDiv" class="span10">
			<form class="form-horizontal" role="form" method="post"
				enctype="multipart/form-data" data-role="acknowledge-input"
				action=${path.concat("/userEmail/add.do")}>

				<div class="form-group col-sm-12">
					<label for="userIds" class="col-sm-1 control-label">用户</label>
					<div class="col-sm-11 input-group" data-role="acknowledge-input">
						<input type="text" class="form-control" name="userIds"
							required="required" data-type="text"
							placeholder="请输入用户id，多个用户id请用“、”间隔">
					</div>
				</div>

				<div class="form-group col-sm-12">
					<label for="title" class="col-sm-1 control-label">标题</label>
					<div class="col-sm-11 input-group" data-role="acknowledge-input">
						<input type="text" class="form-control" name="title"
							required="required" data-type="text" placeholder="请输入标题">
					</div>
				</div>

				<div class="form-group col-sm-12">
					<label for="content" class="col-sm-1 control-label">内容</label>
					<div class="col-sm-11 input-group" data-role="acknowledge-input">
						<div data-role="acknowledgement">
							<i></i>
						</div>
						<textarea class="form-control" rows="3" placeholder="请输入内容"
							required="required" data-type="text" name="content"></textarea>
					</div>
				</div>

				<div class="form-group col-sm-12">
					<div class="col-sm-6" style="padding-left: 0px">
						<label for="visibleTime" class="col-sm-2 control-label"
							style="padding-left: 0px">附件</label>
						<div class="col-sm-4"
							style="padding-left: 0px; padding-right: 0px">
							<select class="form-control" name="award" id="award">
								<option value="0">金币</option>
								<option value="1">体力</option>
								<option value="2">残谱</option>
								<option value="3">金币增加</option>
								<option value="4">经验增加</option>
								<option value="5">花朵延时</option>
								<option value="6">花朵生长</option>
								<option value="7">生命延长</option>
								<option value="8">bad消除</option>
							</select>
						</div>
						<div class="col-sm-4" style="padding-right: 0px">
							<input type="text" name="dismissTime" required="required"
								id="awardNum" class="ui_timepicker form-control" value="0"
								onfocus="javascript:if(this.value=='请输入数字')this.value='';">
						</div>
						<div class="col-sm-2">
							<a class="btn btn-primary text-center btn-block" onclick="add()">添加</a>
						</div>
					</div>
					<div class="col-sm-6" id="awardsList"></div>
				</div>

				<div class="form-group col-sm-12">
					<div class="col-sm-offset-1 col-sm-11">
						<button type="submit" class="btn btn-primary btn-block">确定</button>
					</div>
				</div>
			</form>
		</div>
	</div>

	<script type="text/javascript">
		var addUserEmail = document.getElementById("addUserEmail");
		addUserEmail.setAttribute("class", "btn btn-default active");

		$(document).ready(function() {
			$("#buttonlist6").show();
			$("#buttonlist1").hide();
			$("#buttonlist2").hide();
			$("#buttonlist3").hide();
			$("#buttonlist4").hide();
			$("#buttonlist5").hide();
			$("#buttonlist7").hide();
		});

		function add() {
			var awardsList = document.getElementById("awardsList");
			var newnode = document.createElement("div");
			var award = document.getElementById("award");
			var index = award.selectedIndex;
			var awardName = award.options[index].text;
			var awardValue = award.options[index].value;
			var awardNum = document.getElementById("awardNum");
			var num = awardNum.value;
			var insertText = "<label id=\"" + awardValue + "Label\">"
					+ awardName
					+ "数量："
					+ num
					+ "</label><input type=\"hidden\" id=\"" + awardValue + "\" name=\"" + awardValue + "\" value=\"" + num + "\">";
			if (isNaN(num)) {
				awardNum.value = "请输入数字";
			} else if (document.getElementById(awardValue)) {
				var awardLabel = document.getElementById(awardValue + "Label");
				awardLabel.innerHTML = awardName + "数量：" + num;
				var awardInput = document.getElementById(awardValue);
				awardInput.value = num;
			} else {
				newnode.innerHTML = insertText;
				awardsList.appendChild(newnode);
			}
		}
	</script>

</body>
</html>