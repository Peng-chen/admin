<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.net.URLEncoder" %>
<%
	String path = request.getContextPath();
%>
<html>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- Bootstrap -->
<link href=<%=path + "/style/bootstrap/css/bootstrap.min.css"%>
	rel="stylesheet" type="text/css" media="screen" />
<link href=<%=path + "/style/flatui/dist/css/flat-ui.css"%>
	rel="stylesheet" type="text/css" media="screen" />
<link href=<%=path + "/style/admin-style/common.css"%> rel="stylesheet"
	type="text/css" media="screen" />
<link rel="stylesheet"
	href=<%=path+ "/style/Font-Awesome-3.2.1/css/font-awesome.min.css"%>>
<script src=<%=path + "/script/jquery-1.11.1.js"%>></script>
<script src=<%=path + "/style/admin-style/js/manage.js"%>></script>
    <script>
        $(document).ready(function() {
            var btn = document.getElementById('changeDataSource-btn1');

            btn.addEventListener('click', function(){

                alert("<%=path+"/admin/dataSource"%>");

                var selectedButton = $('#radioDiv input:radio:checked').val();

				$.ajax({
					url: "<%=path+"/admin/dataSource"%>",
					type: "POST",
					data: "value="+selectedButton,
					success:function(data){
                        alert(data);
					}
				});

            }, false);

        });
    </script>

</HEAD>
<body>

	<div class="header">
		<div class="inner-bg">
			<h4 class="headtitle">管理系统</h4>
		</div>
	</div>

	<div class="container">
		<div style="width:50%;margin:auto;">
			<form id="form" class="form-horizontal" role="form" method="post"
				action=<%=path + "/admin/login"%>>

				<div class="form-group col-sm-12" style="margin-top: 60px">
					<label for="name" class=" col-sm-2 control-label">账号</label>
					<div class="col-sm-8">
						<input required="required" class="form-control col-sm-10"
							id="name" name="name" type="text" placeholder="请输入账号">
					</div>
				</div>

				<div class="form-group col-sm-12">
					<label for="password"
						class="col-sm-2 control-label">密码</label>
					<div class="col-sm-8">
						<input type="password" required="required" class="form-control col-sm-12"
							id="password" name="password" placeholder="请输入密码">
					</div>
				</div>
				<p style="margin-left:50px;	">${param.message}</p>
				<div class="form-group col-sm-12" style="margin-top: 30px">
					<div class="col-sm-offset-3 col-sm-4">
						<button id="login-btn" class="btn btn-primary btn-block">确定</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</body>
</html>
