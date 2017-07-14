

function addMusic(nodeId, addNodeId) {
	var node = document.getElementById(nodeId);
	var addNode = document.getElementById(addNodeId);
	var newnode = document.createElement("div");
	var insertText = $(".sgmusics")[0].outerHTML;
	newnode.innerHTML = insertText;
	node.insertBefore(newnode, addNode);
}
function addSystemEmail(propSize,headSize,musicSize){
	var bases = new Array();

	var props = new Array();
	var heads = new Array();
	var musics = new Array();

	for(var i = 0; i<4; i++){
		var bese = document.getElementById("attachmentbase"+i);
		if(bese != null){
			bases.push(bese.getAttribute("value"));
		} else {
			bases.push("0");
		}
	}

	for(var i = 0; i < propSize; i++){
		var prop = document.getElementById("attachmentprop"+i);
		if(prop != null){
			props.push(prop.getAttribute("value"));
		}
	}

	for(var i = 0; i < headSize; i++){
		var head = document.getElementById("attachmenthead"+i);
		if(head != null){
			heads.push(head.getAttribute("value"));
		}
	}

	for(var i = 0; i < musicSize; i++){
		var music = document.getElementById("attachmentmusic"+i);
		if(music != null){
			musics.push(music.getAttribute("value"));
		}
	}

	var emailtitle = $("#emailtitle");
	var emailcontent = $("#emailcontent");
	var emailtype = $("#emailtype");
	var dismissTime = $("#dismissTime");

	if(emailtitle.val()==""||emailcontent.val()==""||emailtype.val()==""||dismissTime.val()==""){
		alert("请填写完整信息");
		return;
	}

	var url = "/admin/sysemail/addSysEmail";
	$.ajax(url, {
		type : "POST",
		async : false,
		dataType : "json",
		data : {
			"title" : emailtitle.val(),
			"content" : emailcontent.val(),
			"type" : emailtype.val(),

			"bases" : bases,
			"props" : props,
			"heads" : heads,
			"musics" : musics,
		},

		success : function(data, status, xhr) {
			if (data.status) {
				alert("添加系统邮件成功");
				setTimeout(location.reload(), 1000);
			} else {
				alert("添加失败，请确认信息并重新尝试");
			}

		},
		error : function(XHR, textStatus, errorThrown) {
			alert("server error");
		}
	});
}

$(document).ready(function() {
	var token=$("#token");
	
	$("#login-btn").click(function(e) {
		e.preventDefault();
		var name=$("#name");
		var password=$("#password");
		
		if(name.val()==""||password.val()==""){
			alert("请输入账号或密码！");
			return;
		}
		
		$("#form").submit();
	});
	
	
	$("#addAlbum-btn").click(function(e) {
		var name = $("#albumname");
		var albumdes = $("#albumdes");
		var backgroundImage = $("#backgroundImage");
		var musics = new Array();
		$("select[name='musics']").each(function(index,item){
			musics[index]=$(this).val();
			 }
		);
		
		
		if(name.val()==""||albumdes.val()==""||backgroundImage.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = "/admin/album/addAlbum";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"name" : name.val(),
				"albumdes" : albumdes.val(),
				"backgroundImage" : backgroundImage.val(),
				"musics" : JSON.stringify(musics),
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加曲包成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	$("#updateAlbum-btn").click(function(e) {
		var id = $("#albumid");
		var updateAlbumname = $("#updateAlbumname");
		var updateAlbumdes = $("#updateAlbumdes");
		var updateAlbumimg = $("#updateAlbumimg");
		var musics = new Array();
		$("select[name='musics']").each(function(index,item){
			musics[index]=$(this).val();
			 }
		);
		
		if(updateAlbumname.val()==""||updateAlbumdes.val()==""||updateAlbumimg.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = "/admin/album/updateAlbum";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"id" : id.val(),
				"name" : updateAlbumname.val(),
				"albumdes" : updateAlbumdes.val(),
				"backgroundImage" : updateAlbumimg.val(),
				"musics" : JSON.stringify(musics)
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改谱面成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#addMusic-btn").click(function(e) {
		var name = $("#name");
		var description = $("#description");
		var bpm = $("#bpm");
		var singers = new Array();
		$("input[name='singers']").each(function(index,item){
			singers[index]=$(this).val();
			 }
			 );
		
		var lyricist = new Array();
		$("input[name='lyricist']").each(function(index,item){
			lyricist[index]=$(this).val();
			 }
			 );
		var composer = new Array();
		$("input[name='composer']").each(function(index,item){
			composer[index]=$(this).val();
			 }
			 );
		var arranger = new Array();
		$("input[name='arranger']").each(function(index,item){
			arranger[index]=$(this).val();
		 }
		 );
		var mixxer = new Array();
		$("input[name='mixxer']").each(function(index,item){
			mixxer[index]=$(this).val();
		 }
		 );
		var harmony = new Array();
		$("input[name='harmony']").each(function(index,item){
			harmony[index]=$(this).val();
		 }
		 );
		var player = new Array();
		$("input[name='player']").each(function(index,item){
			player[index]=$(this).val();
		 }
		 );
		var time = $("#time");
		var schemes = new Array();
		$("select[name='Schemes']").each(function(index,item){
			schemes[index]=$(this).val();
			 }
		);
		var tag = $("#tag");
		var systemOffered = $("#systemOffered").is(':checked');
		
		if (name.val() == "" || description.val() == ""
										|| bpm.val() == ""
										|| time.val() == ""
										||tag.val() == "") {
									alert("请填写完整信息");
									return;
								}

		var url = "/admin/music/addMusic";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"name" : name.val(),
				"description" : description.val(),
				"bpm":bpm.val(),
				"singers":JSON.stringify(singers),
				"lyricist":JSON.stringify(lyricist),
				"composer":JSON.stringify(composer),
				"arranger":JSON.stringify(arranger),
				"mixxer":JSON.stringify(mixxer),
				"harmony":JSON.stringify(harmony),
				"player":JSON.stringify(player),
				"time":time.val(),
				"schemes":JSON.stringify(schemes),
				"tag":tag.val(),
				"systemOffered":systemOffered
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加歌曲成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请重新尝试");
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#updateMusic-btn").click(function(e) {
		var musicId=$("#musicId");
		var name = $("#name");
		var description = $("#description");
		var bpm = $("#bpm");
		var singers = new Array();
		$("input[name='singers']").each(function(index,item){
			singers[index]=$(this).val();
			 }
			 );
		
		var lyricist = new Array();
		$("input[name='lyricist']").each(function(index,item){
			lyricist[index]=$(this).val();
			 }
			 );
		var composer = new Array();
		$("input[name='composer']").each(function(index,item){
			composer[index]=$(this).val();
			 }
			 );
		var arranger = new Array();
		$("input[name='arranger']").each(function(index,item){
			arranger[index]=$(this).val();
		 }
		 );
		var mixxer = new Array();
		$("input[name='mixxer']").each(function(index,item){
			mixxer[index]=$(this).val();
		 }
		 );
		var harmony = new Array();
		$("input[name='harmony']").each(function(index,item){
			harmony[index]=$(this).val();
		 }
		 );
		var player = new Array();
		$("input[name='player']").each(function(index,item){
			player[index]=$(this).val();
		 }
		 );
		var time = $("#time");
		var schemes = new Array();
		$("select[name='Schemes']").each(function(index,item){
			schemes[index]=$(this).val();
			 }
		);
		var tag = $("#tag");
		var systemOffered = $("#systemOffered").is(':checked');
		
		if (name.val() == "" || description.val() == ""
										|| bpm.val() == ""
										|| time.val() == ""
										|| tag.val() == "") {
									alert("请填写完整信息");
									return;
								}

		var url = "/admin/music/updateMusic";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"musicId":musicId.val(),
				"name" : name.val(),
				"description" : description.val(),
				"bpm":bpm.val(),
				"singers":JSON.stringify(singers),
				"lyricist":JSON.stringify(lyricist),
				"composer":JSON.stringify(composer),
				"arranger":JSON.stringify(arranger),
				"mixxer":JSON.stringify(mixxer),
				"harmony":JSON.stringify(harmony),
				"player":JSON.stringify(player),
				"time":time.val(),
				"schemes":JSON.stringify(schemes),
				
				"tag":tag.val(),
				"systemOffered":systemOffered
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改歌曲成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请重新尝试");
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	$("#addScheme-btn").click(function(e) {
		var filename = $("#filename");
		var hardLevel = $("#hardLevel");
		var limitNote = $("#limitNote");


		var quality = $("#quality");
		var totalPlayCount = $("#totalPlayCount");
		var lastPlayCount = $("#lastPlayCount");

		var hot = $("#hot");
		var standardScore = $("#standardScore");
		var scores = $("#scores");

		var createTime=$("#createTime");

		if(filename.val()==""||hardLevel.val()==""||limitNote.val()==""||
			totalPlayCount.val()==""||lastPlayCount.val()==""||hot.val()==""||
			standardScore.val()==""||scores.val()==""||createTime.val()==""){
			alert("请填写完整信息");
			return;
		}

        if(!validateScores(scores.val())) return ;

		var url = " /admin/scheme/addScheme";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"filename" : filename.val(),
				"hardLevel" : hardLevel.val(),
				"limitNote":limitNote.val(),

				"quality" : quality.val(),
				"totalPlayCount" : totalPlayCount.val(),
				"lastPlayCount":lastPlayCount.val(),

				"hot" : hot.val(),
				"standardScore" : standardScore.val(),
				"scores":scores.val(),
				"createTime":createTime.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加谱面成功");
					setTimeout(location.reload(), 1000);
				} else {
                    if(data.errorCode==130006)
                        alert("分数列表填写失败，请填写5个分数，以分号隔开");
                    else
					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#updateScheme-btn").click(function(e) {
		var id = $("#schemeId");
		var filename = $("#filename");
		var hardLevel = $("#hardLevel");
		var limitNote = $("#limitNote");


		var quality = $("#quality");
		var totalPlayCount = $("#totalPlayCount");
		var lastPlayCount = $("#lastPlayCount");

		var hot = $("#hot");
		var standardScore = $("#standardScore");
		var scores = $("#scores");

		var createTime=$("#createTime");

		if(filename.val()==""||hardLevel.val()==""||limitNote.val()==""||
			totalPlayCount.val()==""||lastPlayCount.val()==""||hot.val()==""||
			standardScore.val()==""||scores.val()==""||createTime.val()==""){
			alert("请填写完整信息");
			return;
		}


        if(!validateScores(scores.val())) return ;

		var url = " /admin/scheme/updateScheme";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"id" : id.val(),
				"filename" : filename.val(),
				"hardLevel" : hardLevel.val(),
				"limitNote":limitNote.val(),

				"quality" : quality.val(),
				"totalPlayCount" : totalPlayCount.val(),
				"lastPlayCount":lastPlayCount.val(),

				"hot" : hot.val(),
				"standardScore" : standardScore.val(),
				"scores":scores.val(),
				"createTime":createTime.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改谱面成功");
					setTimeout(location.reload(), 1000);
				} else {
                    if(data.errorCode==130006)
                    alert("分数列表填写失败，请填写5个分数，以分号隔开");
                    else
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#addEquipment-btn").click(function(e) {
		var equipname = $("#equipname");
		var equipdes = $("#equipdes");
		var equiptag = $("#equiptag");
		var equiptype = $("#equiptype");

        var equipquality = $("#equipquality");
        var equipsource = $("#equipsource");
        //||equipdes.val()==""
		if(equipname.val()==""||equiptag.val()==""||equiptype.val()==""||equipquality.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/equipment/addEquipment";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"equipname" : equipname.val(),
				"equipdes" : equipdes.val(),
				"equiptag" : equiptag.val(),
				"equiptype" : equiptype.val(),
                "equipquality" : equipquality.val(),
                "equipsource" : equipsource.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加装备成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	$("#updateEquip-btn").click(function(e) {
		var id = $("#equipid");
		var updateEquipname = $("#updateEquipname");
		var updateequipdes = $("#updateequipdes");
		var updateEquiptag = $("#updateEquiptag");
		var updateEquipType = $("#updateEquipType");

        var updateEquipquality = $("#updateEquipquality");
        var updateEquipsource = $("#updateEquipsource");

        //||updateequipdes.val()==""
		if(updateEquipname.val()==""||updateEquiptag.val()==""||updateEquipType.val()==""||updateEquipquality.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/equipment/updateEquipment";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"id" : id.val(),
				"equipname" : updateEquipname.val(),
				"equipdes" : updateequipdes.val(),
				"equiptag" : updateEquiptag.val(),
				"equiptype" : updateEquipType.val(),
                "equipquality" : updateEquipquality.val(),
                "equipsource" : updateEquipsource.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改装备成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#addHeadImage-btn").click(function(e) {
		var headname = $("#headname");
		var headdes = $("#headdes");
		var headtag = $("#headtag");
        var headquality = $("#headquality");
        var headsource = $("#headsource");
        var headskill = $("#headskill");
        var headtype = $("#headtype");



		if(headname.val()==""||headdes.val()==""||headtag.val()==""
			||headquality.val()==""||headskill.val()==""||headtype.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/headImage/addHeadImage";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"headname" : headname.val(),
				"headdes" : headdes.val(),
				"headtag" : headtag.val(),
                "headquality" : headquality.val(),
                "headsource" : headsource.val(),
                "headskill" : headskill.val(),
                "headtype" : headtype.val(),
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加 头像成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	
	$("#updateHead-btn").click(function(e) {
		var id = $("#headId");
		var updateHeadname = $("#updateHeadname");
		var updateHeaddes = $("#updateHeaddes");
		var updateHeadtag = $("#updateHeadtag");
        var updateHeadquality = $("#updateHeadquality");
        var updateHeadsource = $("#updateHeadsource");
        var updateHeadskill = $("#updateHeadskill");
        var updateHeadtype = $("#updateHeadtype");
		
		if(updateHeadname.val()==""||updateHeaddes.val()==""||updateHeadtag.val()==""
			||updateHeadquality.val()==""||updateHeadskill.val()==""||updateHeadtype.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/headImage/updateHeadImage";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"headId" : id.val(),
				"headname" : updateHeadname.val(),
				"headdes" : updateHeaddes.val(),
				"headtag" : updateHeadtag.val(),
                "headquality" : updateHeadquality.val(),
                "headsource" : updateHeadsource.val(),
                "headskill" : updateHeadskill.val(),
                "headtype" : updateHeadtype.val(),
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改头像成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	
	$("#addGoods-btn").click(function(e) {
		var goodsType = $("#goodsType");
		var currencyType = $("#currencyType");
		var price = $("#price");
		var productId = $("#productId");
		
		if(goodsType.val()==""||currencyType.val()==""||price.val()==""||productId.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/goods/addGoods";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"goodsType" : goodsType.val(),
				"currencyType" : currencyType.val(),
				"price" : price.val(),
				"productId" : productId.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加 商品成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});


	$("#updateGoods-btn").click(function(e) {
		var id = $("#goodid");
		var updateGoodsType = $("#updateGoodsType");
		var updateCurrencyType = $("#updateCurrencyType");
		var updatePrice = $("#updatePrice");
		var updateProductId = $("#updateProductId");

		if(updateGoodsType.val()==""||updateCurrencyType.val()==""||updatePrice.val()==""||updateProductId.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/goods/updateGoods";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"goodId" : id.val(),
				"goodsType" : updateGoodsType.val(),
				"currencyType" : updateCurrencyType.val(),
				"price" : updatePrice.val(),
				"productId" : updateProductId.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改商品成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	/**
	 * 刷新道具缓存
	 */
	$("#refreshProps").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshProps";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}

				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});

	/**
	 * 添加道具
	 */
	$("#addProps-btn").click(function(e) {
		var id = $("#propid");
		var updateName = $("#updateName");
		var updateDescription = $("#updateDescription");
		var updateTag = $("#updateTag");
		var updateAttribute = $("#updateAttribute");

		var freeModel = $("#freeModel");
		var storyModel = $("#storyModel");
		var challengeModel = $("#challengeModel");
		var activeModel = $("#activeModel");

		if(updateName.val()==""||updateDescription.val()==""||updateTag.val()==""||updateAttribute.val()==""){
			alert("请填写完整信息");
			return;
		}
		var first = "0";
		var second = "0";
		var third = "0";
		var forth = "0";
		if(freeModel.is(':checked')){
			first = "1";
		}
		if(storyModel.is(':checked')){
			second = "1";
		}
		if(challengeModel.is(':checked')){
			third = "1";
		}
		if(activeModel.is(':checked')){
			forth = "1";
		}
		var total = first+second+third+forth;

		var url = " /admin/props/addProps";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"propId" : id.val(),
				"propName" : updateName.val(),
				"propDescription" : updateDescription.val(),
				"propTag" : updateTag.val(),
				"propAttribute" : updateAttribute.val(),
				"propMode" : total
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加 道具成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加道具失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	/**
	 * 修改道具
	 */
	$("#updateProps-btn").click(function(e) {
		var id = $("#propid");
		var updateName = $("#updateName");
		var updateDescription = $("#updateDescription");
		var updateTag = $("#updateTag");
		var updateAttribute = $("#updateAttribute");

		var freeModel = $("#freeModel");
		var storyModel = $("#storyModel");
		var challengeModel = $("#challengeModel");
		var activeModel = $("#activeModel");

		if(updateName.val()==""||updateDescription.val()==""||updateTag.val()==""||updateAttribute.val()==""){
			alert("请填写完整信息");
			return;
		}
		var first = "0";
		var second = "0";
		var third = "0";
		var forth = "0";
		if(freeModel.is(':checked')){
			first = "1";
		}
		if(storyModel.is(':checked')){
			second = "1";
		}
		if(challengeModel.is(':checked')){
			third = "1";
		}
		if(activeModel.is(':checked')){
			forth = "1";
		}
		var total = first+second+third+forth;

		var url = " /admin/props/updateProps";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"propId" : id.val(),
				"propName" : updateName.val(),
				"propDescription" : updateDescription.val(),
				"propTag" : updateTag.val(),
				"propAttribute" : updateAttribute.val(),
				"propMode" : total
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改道具成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改道具失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});

	$("#addChallege-btn").click(function(e) {
		e.preventDefault();
		var challegeName = $("#challegeName");
		var challegeDes = $("#challegeDes");
		var challegeImage = $("#challegeImage");
		var requiredLevel = $("#requiredLevel");
		var jsTextArea = $("#jsTextArea");
		
		if(challegeName.val()==""||challegeDes.val()==""||requiredLevel.val()==""||challegeImage.val()==""
			||jsTextArea.val()==""){
			alert("请填写完整信息");
			return;
		}
		/*var file=$('#fileupload').val();
		 var files=file.split('\\');
		 var filename=files[files.length-1];
		 var qq=filename.split('.');
		 var realfilename=qq[0];*/

		//$('#uploadForm').submit();
		var url = " /admin/challege/addChallege";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"challegeName" : challegeName.val(),
				"challegeDes" : challegeDes.val(),
				"challegeImage" : challegeImage.val(),
				"requiredLevel" : requiredLevel.val(),
				"jsTextArea" : jsTextArea.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加挑战包成功");
					setTimeout(location.reload(), 1000);
				} else {

                    if(data.errorCode==250001)
                        alert("过关条件的js代码解析失败");
                    else

					alert("添加失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
		/*$('#uploadForm').submit();*/
	});
		/*var file=$('#fileupload').val();
		var files=file.split('\\');
		var filename=files[files.length-1];
		var qq=filename.split('.');
		var realfilename=qq[0];*/
		
		/*if(!challegeImage==realfilename){
			alert("请选择与tag同名的js文件");
			return;
		}else{*/

		/*}*/



	
	
	$("#updateChallege-btn").click(function(e) {
		var id = $("#challegeid");
		var updateChallegeName = $("#updateChallegeName");
		var updatechallegeDes = $("#updatechallegeDes");
		var updatechallegeImage = $("#updatechallegeImage");
		var updateRequiredLevel = $("#updateRequiredLevel");
		var updateRequiredJsTextArea = $("#updateRequiredJsTextArea");
		
		if(updateChallegeName.val()==""||updatechallegeDes.val()==""||updatechallegeImage.val()==""||updateRequiredLevel.val()==""||updateRequiredJsTextArea.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/challege/updateChallege";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"challegeId" : id.val(),
				"challegeName" : updateChallegeName.val(),
				"challegeDes" : updatechallegeDes.val(),
				"challegeImage" : updatechallegeImage.val(),
				"requiredLevel" : updateRequiredLevel.val(),
				"determineCondition" : updateRequiredJsTextArea.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改关卡成功");
					setTimeout(location.reload(), 1000);
				} else {
					if(data.errorCode==250001)
						alert("过关条件的js代码解析失败");
					else
					alert("修改失败，请重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	

	

	
	
	
	$("#updateStoryGate-btn").click(function(e) {
		var id = $("#storyGateid");
		var updateStoryGateName = $("#updateStoryGateName");
		var updateStoryGateDes = $("#updateStoryGateDes");
		var updateStoryGateImg = $("#updateStoryGateImg");
		var updateStoryGateAni = $("#updateStoryGateAni");
		var updateStoryGateMusics = new Array();
		$("select[name='updateStoryGateMusics']").each(function(index,item){
			updateStoryGateMusics[index]=$(this).val();
			 }
		);
		
		if(updateStoryGateName.val()==""||updateStoryGateDes.val()==""||updateStoryGateImg.val()==""||updateStoryGateAni.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/storyGate/updateStoryGate";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"storyGateId" : id.val(),
				"storyGateName" : updateStoryGateName.val(),
				"storyGateDes" : updateStoryGateDes.val(),
				"storyGateImage" : updateStoryGateImg.val(),
				"storyGateAni" : updateStoryGateAni.val(),
				"storyGateMusics" : JSON.stringify(updateStoryGateMusics)
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改剧情关卡成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请确认信息并重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#addAnnouncement-btn").click(function(e) {
		var title = $("#title");
		var content = $("#content");
		var priority = $("#priority");
		var visibleTime = $("#visibleTime");
		var dismissTime = $("#dismissTime");
		
		if(title.val()==""||content.val()==""||priority.val()==""||visibleTime.val()==""||dismissTime.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/announcement/addAnnouncement";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"title" : title.val(),
				"content" : content.val(),
				"priority" : priority.val(),
				"visibleTime" : visibleTime.val(),
				"dismissTime" : dismissTime.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加系统公告成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请确认信息并重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	$("#updateAnnouncement-btn").click(function(e) {
		var id = $("#announcementId");
		var updatetitle = $("#updatetitle");
		var updatecontent = $("#updatecontent");
		var updatepriority = $("#updatepriority");
		var updatevisibleTime = $("#updatevisibleTime");
		var updatedismissTime = $("#updatedismissTime");
		
		if(updatetitle.val()==""||updatecontent.val()==""||updatepriority.val()==""||updatevisibleTime.val()==""||updatedismissTime.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/announcement/updateAnnouncement";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"announcementId" : id.val(),
				"title" : updatetitle.val(),
				"content" : updatecontent.val(),
				"priority" : updatepriority.val(),
				"visibleTime" : updatevisibleTime.val(),
				"dismissTime" : updatedismissTime.val()
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("修改系统通知成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("修改失败，请确认信息并重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});
	
	/*$("#addsysEmail-btn").click(function(e) {
		var emailtitle = $("#emailtitle");
		var emailcontent = $("#emailcontent");
		var emailtype = $("#emailtype");
		var dismissTime = $("#dismissTime");
		
		if(emailtitle.val()==""||emailcontent.val()==""||emailtype.val()==""||dismissTime.val()==""){
			alert("请填写完整信息");
			return;
		}

		var url = " /admin/sysemail/addSysEmail";
		$.ajax(url, {
			type : "POST",
			async : false,
			dataType : "json",
			data : {
				"title" : emailtitle.val(),
				"content" : emailcontent.val(),
				"type" : emailtype.val(),
				"0" : $("#0").val(),
				"1" : $("#1").val(),
				"2" : $("#2").val(),
				"3" : $("#3").val(),
				"4" : $("#4").val(),
				"5" : $("#5").val(),
				"6" : $("#6").val(),
				"7" : $("#7").val(),
				"8" : $("#8").val(),
				"9" : $("#9").val(),
			},

			success : function(data, status, xhr) {
				if (data.status) {
					alert("添加系统邮件成功");
					setTimeout(location.reload(), 1000);
				} else {
					alert("添加失败，请确认信息并重新尝试");
				}

			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});

	});*/
	
	
	$("#refreshAlbum").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshAlbum";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshMusic").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshMusic";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshScheme").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshScheme";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshEquip").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshEquip";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshHead").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshHead";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshGoods").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshGoods";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshChallege").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshChallege";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshStoryGate").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshStoryGate";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshAnnouncement").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshAnnouncement";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
	$("#refreshSysEmail").click(function(e) {
		var token =$("#tokenId");
		var url = " /admin/refreshSysEmail";
		$.ajax(url, {
			type : "GET",
			async : false,
			data : {
				"token" : token.val()
			},
			success : function(data, status, xhr) {
				if (data.status) {
					alert("刷新成功");
				} else {
					if(data.token==0){
						location.href="";
					}else{
						alert("刷新失败");
					}
					
				}
			},
			error : function(XHR, textStatus, errorThrown) {
				alert("server error");
			}
		});
	});
	
});

/**
 * @param tag
 */
function awardAdd(tag){
	if($("#"+tag+"Input").val() == ""){
		alert("请输入具体数值!");
		return;
	}
	var awardsList = document.getElementById(tag+"Award");
	var newnode = document.createElement("div");
	var val = $("#"+tag+"Select").find("option:selected").text();

	if(val == "基础"){
		var val2 = $("#"+tag+"Select1").find("option:selected").text();
		var select2 = document.getElementById(tag+"Select1");
		var index = select2.selectedIndex;
		var awardName = select2.options[index].text;
		var awardValue = select2.options[index].value;

		newnode.setAttribute("id",tag+"base"+index);
		newnode.setAttribute("value",$("#"+tag+"Input").val());
		var insertText = awardName
			+ "："
			+ $("#"+tag+"Input").val();
		var judge = document.getElementById(tag+"base"+index);
		if(judge != null) {
			awardsList.removeChild(judge);
		}
	} else if(val == "道具") {
		var val2 = $("#"+tag+"Select2").find("option:selected").text();
		var select2 = document.getElementById(tag+"Select2");
		var index = select2.selectedIndex;
		var awardName = select2.options[index].text;
		var awardValue = select2.options[index].value;
		newnode.setAttribute("id",tag+"prop"+index);
		var arr = awardName.split("=");
		newnode.setAttribute("value",arr[0]+","+$("#"+tag+"Input").val());

		var insertText = "道具:"
			+ awardName +"  数目:"+$("#"+tag+"Input").val();
		var judge = document.getElementById(tag+"prop"+index);
		if(judge != null) {
			awardsList.removeChild(judge);
		}
	} else if(val == "头像") {
		var val2 = $("#"+tag+"Select3").find("option:selected").text();
		var select2 = document.getElementById(tag+"Select3");
		var index = select2.selectedIndex;
		var awardName = select2.options[index].text;
		var awardValue = select2.options[index].value;
		newnode.setAttribute("id",tag+"head"+index);
		var arr = awardName.split("=");
		newnode.setAttribute("value",arr[0]);
		var insertText = "头 像: "
			+ awardName;
		var judge = document.getElementById(tag+"head"+index);
		if(judge != null) {
			awardsList.removeChild(judge);
		}
	} else if(val == "歌曲") {
		var val2 = $("#"+tag+"Select4").find("option:selected").text();
		var select2 = document.getElementById(tag+"Select4");
		var index = select2.selectedIndex;
		var awardName = select2.options[index].text;
		var awardValue = select2.options[index].value;
		newnode.setAttribute("id",tag+"music"+index);
		var arr = awardName.split("=");
		newnode.setAttribute("value",arr[0]);
		var insertText = "歌 曲: "
			+ awardName;
		var judge = document.getElementById(tag+"music"+index);
		if(judge != null) {
			awardsList.removeChild(judge);
		}
	}
	newnode.innerHTML = insertText;
	awardsList.appendChild(newnode);
}