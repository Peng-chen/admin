/**
 * Created by Administrator on 2016/7/21.
 */


function validateScores(scores) {


    var scoreNow = scores.split(",");

    if (scoreNow.length < 5 || scoreNow.length > 6) {

        alert("分数列表填写失败，请填写5个分数,以逗号隔开!");
        return false;
    }
    return true;

}

function awardSelectChange(id) {

    var clickValue = $("#" + id).find("option:selected").val();

    $("#" + id + clickValue).show();

    for (var i = 1; i <= 8; ++i) {

        if (clickValue == i) {
            ;
        }
        else {
            $("#" + id + i).hide();
        }
    }


}

function awardAddClick(tag) {
    if ($("#" + tag + "Input").val() == "") {
        alert("请输入具体数值!");
        return;
    }
    var awardsList = document.getElementById(tag + "Award");
    var newnode = document.createElement("div");
    var val = $("#" + tag + "Select").find("option:selected").text();

    if (val == "基础") {
        var val2 = $("#" + tag + "Select1").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select1");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;

        newnode.setAttribute("id", tag + "base" + index);
        newnode.setAttribute("value", $("#" + tag + "Input").val());
        var insertText = awardName
            + "："
            + $("#" + tag + "Input").val();
        var judge = document.getElementById(tag + "base" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "道具") {
        var val2 = $("#" + tag + "Select2").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select2");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "prop" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0] + "," + $("#" + tag + "Input").val());

        var insertText = "道具:"
            + awardName + "  数目:" + $("#" + tag + "Input").val();
        var judge = document.getElementById(tag + "prop" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "头像") {
        var val2 = $("#" + tag + "Select3").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select3");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "head" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0]);
        var insertText = "头 像: "
            + awardName;
        var judge = document.getElementById(tag + "head" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "歌曲") {
        var val2 = $("#" + tag + "Select4").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select4");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "music" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0]);
        var insertText = "歌 曲: "
            + awardName;
        var judge = document.getElementById(tag + "music" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "装备") {
        var val2 = $("#" + tag + "Select5").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select5");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "equip" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0]);
        var insertText = "装备: "
            + awardName;
        var judge = document.getElementById(tag + "equip" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "边框") {
        var val2 = $("#" + tag + "Select6").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select6");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "frame" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0]);
        var insertText = "边框: "
            + awardName;
        var judge = document.getElementById(tag + "frame" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "碎片") {
        var val2 = $("#" + tag + "Select7").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select7");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "piece" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0] + "," + $("#" + tag + "Input").val());

        var insertText = "碎片:"
            + awardName + "  数目:" + $("#" + tag + "Input").val();
        var judge = document.getElementById(tag + "piece" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    } else if (val == "狗粮") {
        var val2 = $("#" + tag + "Select8").find("option:selected").text();
        var select2 = document.getElementById(tag + "Select8");
        var index = select2.selectedIndex;
        var awardName = select2.options[index].text;
        var awardValue = select2.options[index].value;
        newnode.setAttribute("id", tag + "material" + index);
        var arr = awardName.split("=");
        newnode.setAttribute("value", arr[0] + "," + $("#" + tag + "Input").val());

        var insertText = "狗粮:"
            + awardName + "  数目:" + $("#" + tag + "Input").val();
        var judge = document.getElementById(tag + "material" + index);
        if (judge != null) {
            awardsList.removeChild(judge);
        }
    }
    newnode.innerHTML = insertText;
    awardsList.appendChild(newnode);
}


function getValue(id, size) {

    var resultArrary = new Array();


    for (var i = 0; i < size; i++) {
        var head1 = document.getElementById(id + i);
        if (head1 != null) {
            resultArrary.push(head1.getAttribute("value"));
        }


    }

    return resultArrary;

}


function getBaseValue(id, size) {


    var firstBase = new Array();

    for (var i = 0; i < size; i++) {
        var bese1 = document.getElementById(id + i);

        if (bese1 != null) {
            firstBase.push(bese1.getAttribute("value"));
        } else {
            firstBase.push("0");
        }


    }
    return firstBase;
}


function updateActivity(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var ActivityId = $("#ActivityId");
    var ActivityType = $("#ActivityType");
    var ActivityPeriod = $("#ActivityPeriod");
    var ActivityName = $("#ActivityName");
    var ActivityTag = $("#ActivityTag");
    var ActivityDescription = $("#ActivityDescription");
    var ActivitySchemes = $("#ActivitySchemes");

    var ActivityStartTime = $("#updateStartTime");
    var ActivityEndTime = $("#updateEndTime");
    //
    if (ActivityTag.val() == "" || ActivityType.val() == "" || ActivityPeriod.val() == "" || ActivityName.val() == "" || ActivityDescription.val() == "" || ActivitySchemes.val() == "" || ActivityStartTime.val() == "" || ActivityEndTime.val() == "") {
        alert("请填写完整信息");
        return;
    }
    if (ActivityPeriod.val() < 0 || ActivityPeriod.val() > 7) {
        alert("周期填写失败");
        return;
    }


    var firstBase = new Array();
    var secondBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();

    var secondProps = new Array();
    var secondHeads = new Array();
    var secondMusic = new Array();
    var secondEquip = new Array();
    var secondFrame = new Array();
    var secondPiece = new Array();
    var secondMaterial = new Array();


    firstBase = getBaseValue("massiveAwardfirstbase", 4);
    secondBase = getBaseValue("leastAwardfirstbase", 4);


    firstProps = getValue("massiveAwardfirstprop", propSize);
    secondProps = getValue("leastAwardfirstprop", propSize);


    //head


    firstHeads = getValue("massiveAwardfirsthead", headSize);
    secondHeads = getValue("leastAwardfirsthead", headSize);


    firstMusic = getValue("massiveAwardfirstmusic", musicSize);
    secondMusic = getValue("leastAwardfirstmusic", musicSize);


    //equip


    firstEquip = getValue("massiveAwardfirstequip", equipSize);
    secondEquip = getValue("leastAwardfirstequip", equipSize);


    //frame

    firstFrame = getValue("massiveAwardfirstframe", frameSize);
    secondFrame = getValue("leastAwardfirstframe", frameSize);


    //piece

    firstPiece = getValue("massiveAwardfirstpiece", pieceSize);
    secondPiece = getValue("leastAwardfirstpiece", pieceSize);


//material
    firstMaterial = getValue("massiveAwardfirstmaterial", materialSize);
    secondMaterial = getValue("leastAwardfirstmaterial", materialSize);


    var url = " /admin/activity/updateActivity";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "id": ActivityId.val(),
            "type": ActivityType.val(),
            "period": ActivityPeriod.val(),
            "name": ActivityName.val(),
            "tag": ActivityTag.val(),
            "description": ActivityDescription.val(),
            "schemes": ActivitySchemes.val(),

            "firstBase": firstBase,
            "secondBase": secondBase,

            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,


            "secondProps": secondProps,
            "secondHeads": secondHeads,
            "secondMusic": secondMusic,
            "secondEquip": secondEquip,
            "secondFrame": secondFrame,
            "secondPiece": secondPiece,
            "secondMaterial": secondMaterial,


            "startTime": ActivityStartTime.val(),
            "endTime": ActivityEndTime.val()
        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("修改成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("修改失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}


function addActivity(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {



    //var Activityid = $("#Activityid_add");
    var ActivityType = $("#ActivityType_add");
    var ActivityPeriod = $("#ActivityPeriod_add");
    var ActivityName = $("#ActivityName_add");
    var ActivityTag = $("#ActivityTag_add");
    var ActivityDescription = $("#ActivityDescription_add");
    var ActivitySchemes = $("#ActivitySchemes_add");


    var ActivityStartTime = $("#ActivityStartTime_add");
    var ActivityEndTime = $("#ActivityEndTime_add");

    if (ActivityTag.val() == "" || ActivityType.val() == "" || ActivityPeriod.val() == "" || ActivityName.val() == "" || ActivityDescription.val() == "" || ActivitySchemes.val() == "" || ActivityStartTime.val() == "" || ActivityEndTime.val() == "") {
        alert("请填写完整信息");
        return;
    }

    if (ActivityPeriod.val() < 0 || ActivityPeriod.val() > 7) {

        alert("周期填写失败");
        return;

    }

    var firstBase = new Array();
    var secondBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();

    var secondProps = new Array();
    var secondHeads = new Array();
    var secondMusic = new Array();
    var secondEquip = new Array();
    var secondFrame = new Array();
    var secondPiece = new Array();
    var secondMaterial = new Array();


    firstBase = getBaseValue("massiveAward_addfirstbase", 4);
    secondBase = getBaseValue("leastAward_addfirstbase", 4);


    firstProps = getValue("massiveAward_addfirstprop", propSize);
    secondProps = getValue("leastAward_addfirstprop", propSize);


    //head

    firstHeads = getValue("massiveAward_addfirsthead", headSize);
    secondHeads = getValue("leastAward_addfirsthead", headSize);


    firstMusic = getValue("massiveAward_addfirstmusic", musicSize);
    secondMusic = getValue("leastAward_addfirstmusic", musicSize);


    //equip
    firstEquip = getValue("massiveAward_addfirstequip", equipSize);
    secondEquip = getValue("leastAward_addfirstequip", equipSize);


    //frame

    firstFrame = getValue("massiveAward_addfirstframe", frameSize);
    secondFrame = getValue("leastAward_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("massiveAward_addfirstpiece", pieceSize);
    secondPiece = getValue("leastAward_addfirstpiece", pieceSize);


//material

    firstMaterial = getValue("massiveAward_addfirstmaterial", materialSize);
    secondMaterial = getValue("leastAward_addfirstmaterial", materialSize);


    var url = " /admin/activity/addActivity";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "type": ActivityType.val(),
            "period": ActivityPeriod.val(),
            "name": ActivityName.val(),
            "tag": ActivityTag.val(),
            "description": ActivityDescription.val(),
            "schemes": ActivitySchemes.val(),

            "firstBase": firstBase,
            "secondBase": secondBase,

            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,


            "secondProps": secondProps,
            "secondHeads": secondHeads,
            "secondMusic": secondMusic,
            "secondEquip": secondEquip,
            "secondFrame": secondFrame,
            "secondPiece": secondPiece,
            "secondMaterial": secondMaterial,


            "startTime": ActivityStartTime.val(),
            "endTime": ActivityEndTime.val()
        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("添加成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("添加失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}


function deleteActivity(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/activity/deleteActivity";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "activityId": activityId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除活动成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


function updateBeatAward(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var id = $("#beatAwardId");
    var content = $("#beatAwardContent");
    var description = $("#beatAwardDescription");
    var startTime = $("#beatAwardStartTime");
    var endTime = $("#beatAwardEndTime");
    var statisticTime = $("#beatAwardStatisticTime");


    var limit = $("#beatAwardLimit");
    var offset = $("#beatAwardOffset");
    var schemes = $("#beatAwardSchemes");
    var period = $("#beatAwardPeriod");

    if (content.val() == "" || description.val() == "" || startTime.val() == "" || endTime.val() == "" || statisticTime.val() == "" || limit.val() == "" || offset.val() == "" || schemes.val() == "" || period.val() == "") {
        alert("请填写完整信息");
        return;
    }


    var firstBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    firstBase = getBaseValue("beastAwardfirstbase", 4);
    firstProps = getValue("beastAwardfirstprop", propSize);

    //head
    firstHeads = getValue("beastAwardfirsthead", headSize);

    firstMusic = getValue("beastAwardfirstmusic", musicSize);

    //equip
    firstEquip = getValue("beastAwardfirstequip", equipSize);

    //frame

    firstFrame = getValue("beastAwardfirstframe", frameSize);

    //piece

    firstPiece = getValue("beastAwardfirstpiece", pieceSize);

//material

    firstMaterial = getValue("beastAwardfirstmaterial", materialSize);


    var url = " /admin/award/updateBeatAward";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "id": id.val(),
            "content": content.val(),
            "description": description.val(),
            "startTime": startTime.val(),
            "endTime": endTime.val(),
            "statisticTime": statisticTime.val(),
            "limit": limit.val(),
            "offset": offset.val(),
            "period": period.val(),
            "schemes": schemes.val(),
            "firstBase": firstBase,
            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("修改成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("修改失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}

function addBeatAward(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    //var id = $("#beatAwardId");
    var content = $("#beatAwardContent_add");
    var description = $("#beatAwardDescription_add");
    var startTime = $("#beatAwardStartTime_add");
    var endTime = $("#beatAwardEndTime_add");
    var statisticTime = $("#beatAwardStatisticTime_add");


    var limit = $("#beatAwardLimit_add");
    var offset = $("#beatAwardOffset_add");
    var schemes = $("#beatAwardSchemes_add");
    var period = $("#beatAwardPeriod_add");

    if (content.val() == "" || description.val() == "" || startTime.val() == "" || endTime.val() == "" || statisticTime.val() == "" || limit.val() == "" || offset.val() == "" || schemes.val() == "" || period.val() == "") {
        alert("请填写完整信息");
        return;
    }


    var firstBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    firstBase = getBaseValue("beastAward_addfirstbase", 4);
    firstProps = getValue("beastAward_addfirstprop", propSize);

    //head
    firstHeads = getValue("beastAward_addfirsthead", headSize);

    firstMusic = getValue("beastAward_addfirstmusic", musicSize);

    //equip
    firstEquip = getValue("beastAward_addfirstequip", equipSize);

    //frame

    firstFrame = getValue("beastAward_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("beastAward_addfirstpiece", pieceSize);

//material

    firstMaterial = getValue("beastAward_addfirstmaterial", materialSize);


    var url = " /admin/award/addBeatAward";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            //"id": id.val(),
            "content": content.val(),
            "description": description.val(),
            "startTime": startTime.val(),
            "endTime": endTime.val(),
            "statisticTime": statisticTime.val(),
            "limit": limit.val(),
            "offset": offset.val(),
            "period": period.val(),
            "schemes": schemes.val(),
            "firstBase": firstBase,
            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("添加成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("添加失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}


function addBeatScoreAward(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var score = $("#beatScoreAwardScore_add");
    var startTime = $("#beatScoreAwardStartTime_add");
    var endTime = $("#beatScoreAwardEndTime_add");
    var content = $("#beatScoreAwardContent_add");
    //var startTime_new = $("#updatestartTime");
    //var endTime_new = $("#updateendTime");
    var period = $("#beatScoreAwardPeriod_add");


    if (score.val() == "" || content.val() == "" || startTime.val() == "" || endTime.val() == "" || period.val() == "") {
        alert("请填写完整信息");
        return;
    }


    var firstBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    firstBase = getBaseValue("beatScoreAward_addfirstbase", 4);
    firstProps = getValue("beatScoreAward_addfirstprop", propSize);

    //head
    firstHeads = getValue("beatScoreAward_addfirsthead", headSize);

    firstMusic = getValue("beatScoreAward_addfirstmusic", musicSize);

    //equip
    firstEquip = getValue("beatScoreAward_addfirstequip", equipSize);

    //frame

    firstFrame = getValue("beatScoreAward_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("beatScoreAward_addfirstpiece", pieceSize);

//material

    firstMaterial = getValue("beatScoreAward_addfirstmaterial", materialSize);


    var url = " /admin/award/addBeatScoreAward";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "score": score.val(),
            "startTime": startTime.val(),
            "endTime": endTime.val(),
            "content": content.val(),
            //"startTime_new": startTime_new.val(),
            //"endTime_new": endTime_new.val(),
            "period": period.val(),

            "firstBase": firstBase,
            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("新增成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("新增失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}

function updatebeatScoreAward(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var score = $("#beatScoreAwardScore");
    var startTime = $("#beatScoreAwardStartTime");
    var endTime = $("#beatScoreAwardEndTime");
    var content = $("#beatScoreAwardContent");
    //var startTime_new = $("#updatestartTime");
    //var endTime_new = $("#updateendTime");
    var period = $("#beatScoreAwardPeriod");

    //
    //if (content.val() == "" || startTime_new.val() == "" || endTime_new.val() == "" || period.val() == "") {
    //    alert("请填写完整信息");
    //    return;
    //}

    if (content.val() == "" || period.val() == "") {
        alert("请填写完整信息");
        return;
    }

    var firstBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    firstBase = getBaseValue("beatScoreAwardfirstbase", 4);
    firstProps = getValue("beatScoreAwardfirstprop", propSize);

    //head
    firstHeads = getValue("beatScoreAwardfirsthead", headSize);

    firstMusic = getValue("beatScoreAwardfirstmusic", musicSize);

    //equip
    firstEquip = getValue("beatScoreAwardfirstequip", equipSize);

    //frame

    firstFrame = getValue("beatScoreAwardfirstframe", frameSize);

    //piece

    firstPiece = getValue("beatScoreAwardfirstpiece", pieceSize);

//material

    firstMaterial = getValue("beatScoreAwardfirstmaterial", materialSize);


    var url = " /admin/award/updateBeatScoreAward";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "score": score.val(),
            "startTime": startTime.val(),
            "endTime": endTime.val(),
            "content": content.val(),
            //"startTime_new": startTime_new.val(),
            //"endTime_new": endTime_new.val(),
            "period": period.val(),

            "firstBase": firstBase,
            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("修改成功");
                setTimeout(location.reload(), 1000);
            } else {
                if (data.message == null || data.message == "")
                    alert("修改失败，请重新尝试");
                else {

                    alert(data.message);

                }

            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });


}


function deleteBeatAward(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/award/deleteBeatAward";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "beatAwardId": beatAwardId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}

function deleteBeatScoreAward(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/award/deleteBeatScoreAward";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "score": score.value,
                    "startTime": startTime.value,
                    "endTime": endTime.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


function deleteChallege(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/challege/deleteChallege";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "challegeId": challegeId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


function addChallegeGate(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var challegeid = $("#challegeid");
    var gateNumber = $("#gateNumber");
    var gateName = $("#gateName");
    var gatedes = $("#gatedes");
    var schemes = $("#schemes");
    var gaterequiredLevel = $("#gaterequiredLevel");

    if (challegeid.val() == "" || gateNumber.val() == "" || gateName.val() == ""  || schemes.val() == "" || gaterequiredLevel.val() == "") {
        alert("请填写完整信息");
        return;
    }

    var firstBase = new Array();
    var secondBase = new Array();
    var thirdBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    var secondProps = new Array();
    var secondHeads = new Array();
    var secondMusic = new Array();
    var secondEquip = new Array();
    var secondFrame = new Array();
    var secondPiece = new Array();
    var secondMaterial = new Array();


    var thirdProps = new Array();
    var thirdHeads = new Array();
    var thirdMusic = new Array();
    var thirdEquip = new Array();
    var thirdFrame = new Array();
    var thirdPiece = new Array();
    var thirdMaterial = new Array();


    firstBase = getBaseValue("firstAward_addfirstbase", 4);
    firstProps = getValue("firstAward_addfirstprop", propSize);

    //head
    firstHeads = getValue("firstAward_addfirsthead", headSize);

    firstMusic = getValue("firstAward_addfirstmusic", musicSize);

    //equip
    firstEquip = getValue("firstAward_addfirstequip", equipSize);

    //frame

    firstFrame = getValue("firstAward_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("firstAward_addfirstpiece", pieceSize);

//material

    firstMaterial = getValue("firstAward_addfirstmaterial", materialSize);


    secondBase = getBaseValue("secondAward_addfirstbase", 4);
    secondProps = getValue("secondAward_addfirstprop", propSize);

    //head
    secondHeads = getValue("secondAward_addfirsthead", headSize);

    secondMusic = getValue("secondAward_addfirstmusic", musicSize);

    //equip
    secondEquip = getValue("secondAward_addfirstequip", equipSize);

    //frame

    secondFrame = getValue("secondAward_addfirstframe", frameSize);

    //piece

    secondPiece = getValue("secondAward_addfirstpiece", pieceSize);

//material

    secondMaterial = getValue("secondAward_addfirstmaterial", materialSize);


    thirdBase = getBaseValue("thirdAward_addfirstbase", 4);
    thirdProps = getValue("thirdAward_addfirstprop", propSize);

    //head
    thirdHeads = getValue("thirdAward_addfirsthead", headSize);

    thirdMusic = getValue("thirdAward_addfirstmusic", musicSize);

    //equip
    thirdEquip = getValue("thirdAward_addfirstequip", equipSize);

    //frame

    thirdFrame = getValue("thirdAward_addfirstframe", frameSize);

    //piece

    thirdPiece = getValue("thirdAward_addfirstpiece", pieceSize);

//material

    thirdMaterial = getValue("thirdAward_addfirstmaterial", materialSize);


    var url = "/admin/challegeGate/addChallegeGate";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "challegeid": challegeid.val(),
            "gateNumber": gateNumber.val(),
            "gateName": gateName.val(),
            "gatedes": gatedes.val(),
            "schemes": schemes.val(),
            "gaterequiredLevel": gaterequiredLevel.val(),

            "firstBase": firstBase,
            "secondBase": secondBase,
            "thirdBase": thirdBase,


            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

            "secondProps": secondProps,
            "secondHeads": secondHeads,
            "secondMusic": secondMusic,
            "secondEquip": secondEquip,
            "secondFrame": secondFrame,
            "secondPiece": secondPiece,
            "secondMaterial": secondMaterial,

            "thirdProps": thirdProps,
            "thirdHeads": thirdHeads,
            "thirdMusic": thirdMusic,
            "thirdEquip": thirdEquip,
            "thirdFrame": thirdFrame,
            "thirdPiece": thirdPiece,
            "thirdMaterial": thirdMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("添加小关卡成功");
                setTimeout(location.reload(), 1000);
            } else {
                alert("添加失败，请重新尝试");
            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });

}


function updateChallegeGate(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {
    var id = $("#gateId");
    var gateName = $("#gateName");
    var gatedes = $("#gatedes");
    var schemes = $("#schemes");
    var gaterequiredLevel = $("#gaterequiredLevel");

    if (gateName.val() == ""  || schemes.val() == "" || gaterequiredLevel.val() == "") {
        alert("请填写完整信息");
        return;
    }


    var firstBase = new Array();
    var secondBase = new Array();
    var thirdBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();


    var secondProps = new Array();
    var secondHeads = new Array();
    var secondMusic = new Array();
    var secondEquip = new Array();
    var secondFrame = new Array();
    var secondPiece = new Array();
    var secondMaterial = new Array();


    var thirdProps = new Array();
    var thirdHeads = new Array();
    var thirdMusic = new Array();
    var thirdEquip = new Array();
    var thirdFrame = new Array();
    var thirdPiece = new Array();
    var thirdMaterial = new Array();


    firstBase = getBaseValue("firstAwardfirstbase", 4);
    firstProps = getValue("firstAwardfirstprop", propSize);

    //head
    firstHeads = getValue("firstAwardfirsthead", headSize);

    firstMusic = getValue("firstAwardfirstmusic", musicSize);

    //equip
    firstEquip = getValue("firstAwardfirstequip", equipSize);

    //frame

    firstFrame = getValue("firstAwardfirstframe", frameSize);

    //piece

    firstPiece = getValue("firstAwardfirstpiece", pieceSize);

//material

    firstMaterial = getValue("firstAwardfirstmaterial", materialSize);


    secondBase = getBaseValue("secondAwardfirstbase", 4);
    secondProps = getValue("secondAwardfirstprop", propSize);

    //head
    secondHeads = getValue("secondAwardfirsthead", headSize);

    secondMusic = getValue("secondAwardfirstmusic", musicSize);

    //equip
    secondEquip = getValue("secondAwardfirstequip", equipSize);

    //frame

    secondFrame = getValue("secondAwardfirstframe", frameSize);

    //piece

    secondPiece = getValue("secondAwardfirstpiece", pieceSize);

//material

    secondMaterial = getValue("secondAwardfirstmaterial", materialSize);


    thirdBase = getBaseValue("thirdAwardfirstbase", 4);
    thirdProps = getValue("thirdAwardfirstprop", propSize);

    //head
    thirdHeads = getValue("thirdAwardfirsthead", headSize);

    thirdMusic = getValue("thirdAwardfirstmusic", musicSize);

    //equip
    thirdEquip = getValue("thirdAwardfirstequip", equipSize);

    //frame

    thirdFrame = getValue("thirdAwardfirstframe", frameSize);

    //piece

    thirdPiece = getValue("thirdAwardfirstpiece", pieceSize);

//material

    thirdMaterial = getValue("thirdAwardfirstmaterial", materialSize);


    var url = "/admin/challegeGate/updateChallegeGate";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "id": id.html(),
            "gateName": gateName.val(),
            "gatedes": gatedes.val(),
            "schemes": schemes.val(),
            "gaterequiredLevel": gaterequiredLevel.val(),

            "firstBase": firstBase,
            "secondBase": secondBase,
            "thirdBase": thirdBase,


            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

            "secondProps": secondProps,
            "secondHeads": secondHeads,
            "secondMusic": secondMusic,
            "secondEquip": secondEquip,
            "secondFrame": secondFrame,
            "secondPiece": secondPiece,
            "secondMaterial": secondMaterial,

            "thirdProps": thirdProps,
            "thirdHeads": thirdHeads,
            "thirdMusic": thirdMusic,
            "thirdEquip": thirdEquip,
            "thirdFrame": thirdFrame,
            "thirdPiece": thirdPiece,
            "thirdMaterial": thirdMaterial,
        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("修改小关卡成功");

            } else {
                alert("修改失败，请重新尝试");
            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });
}

function deleteChallegegate(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/challegeGate/deleteChallegeGate";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "challegegateId": challegegateId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


function deleteScheme(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/scheme/deleteScheme";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "schemeId": schemeId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


function deleteEquipment(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/equipment/deleteEquipment";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "equipId": equipId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}

function deleteHeadImage(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/headImage/deleteHeadImage";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "HeadImageId": HeadImageId.value,
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}



function addUserEmailAward(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var senderId = $("#senderId");
    var userId = $("#userId");
    var emailTitle = $("#emailTitle");
    var emailContent = $("#emailContent");
    if (emailTitle.val() == "" || emailContent.val() == "" ) {
        alert("请填写完整信息");
        return;
    }

    var firstBase = new Array();
    var secondBase = new Array();
    var thirdBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();



    firstBase = getBaseValue("userEmail_addfirstbase", 4);
    firstProps = getValue("userEmail_addfirstprop", propSize);

    //head
    firstHeads = getValue("userEmail_addfirsthead", headSize);

    firstMusic = getValue("userEmail_addfirstmusic", musicSize);

    //equip
    firstEquip = getValue("userEmail_addfirstequip", equipSize);

    //frame

    firstFrame = getValue("userEmail_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("userEmail_addfirstpiece", pieceSize);

//material

    firstMaterial = getValue("userEmail_addfirstmaterial", materialSize);





    var url = "/admin/charge/sendSimpleUserEmailAward";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "senderId": senderId.val(),
            "userId": userId.val(),
            "emailTitle": emailTitle.val(),
            "emailContent": emailContent.val(),

            "firstBase": firstBase,

            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("添加成功");
                setTimeout(location.reload(), 1000);
            } else {
                alert("添加失败，请重新尝试");
            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });

}

function addUserEmailAwards(propSize, headSize, musicSize, equipSize, frameSize, pieceSize, materialSize) {

    var senderId = $("#senderId");
    var userIdSQL = $("#userIdSQL");
    var emailTitle = $("#emailTitle");
    var emailContent = $("#emailContent");
    if (emailTitle.val() == "" || emailContent.val() == "" ) {
        alert("请填写完整信息");
        return;
    }

    var firstBase = new Array();
    var secondBase = new Array();
    var thirdBase = new Array();

    var firstProps = new Array();
    var firstHeads = new Array();
    var firstMusic = new Array();
    var firstEquip = new Array();
    var firstFrame = new Array();
    var firstPiece = new Array();
    var firstMaterial = new Array();



    firstBase = getBaseValue("userEmail_addfirstbase", 4);
    firstProps = getValue("userEmail_addfirstprop", propSize);

    //head
    firstHeads = getValue("userEmail_addfirsthead", headSize);

    firstMusic = getValue("userEmail_addfirstmusic", musicSize);

    //equip
    firstEquip = getValue("userEmail_addfirstequip", equipSize);

    //frame

    firstFrame = getValue("userEmail_addfirstframe", frameSize);

    //piece

    firstPiece = getValue("userEmail_addfirstpiece", pieceSize);

//material

    firstMaterial = getValue("userEmail_addfirstmaterial", materialSize);





    var url = "/admin/charge/sendSimpleUserEmailAwardWithSQL";
    $.ajax(url, {
        type: "POST",
        async: false,
        dataType: "json",
        data: {
            "senderId": senderId.val(),
            "userIdSQL": userIdSQL.val(),
            "emailTitle": emailTitle.val(),
            "emailContent": emailContent.val(),

            "firstBase": firstBase,

            "firstProps": firstProps,
            "firstHeads": firstHeads,
            "firstMusic": firstMusic,
            "firstEquip": firstEquip,
            "firstFrame": firstFrame,
            "firstPiece": firstPiece,
            "firstMaterial": firstMaterial,

        },

        success: function (data, status, xhr) {
            if (data.status) {
                alert("添加成功");
                setTimeout(location.reload(), 1000);
            } else {
                alert("添加失败，请重新尝试");
            }

        },
        error: function (XHR, textStatus, errorThrown) {
            alert("server error");
        }
    });

}


function deleteUserEmail(thisform) {

    //        //利用对话框返回的值 （true 或者 false）
    var r1 = confirm("你确定要删除吗？");
    if (r1 == true) {
        //alert("点击了确定");
        with (thisform) {
            var url = " /admin/userEmail/deleteUserEmail";
            $.ajax(url, {
                type: "POST",
                async: false,
                dataType: "json",
                data: {
                    "emailId": emailId.value,
                    "userId": userId.value,
                    //"emailId": "",
                    //"userId": "",
                    "token": token.value

                },

                success: function (data, status, xhr) {
                    if (data.status) {
                        alert("删除成功");
                        setTimeout(location.reload(), 1000);
                    } else {
                        if (data.message == null || data.message == "")
                            alert("删除失败，请重新尝试");
                        else {

                            alert(data.message);

                        }

                    }

                },
                error: function (XHR, textStatus, errorThrown) {
                    alert("server error");
                }
            });

            return false;
        }

    }
    else {
        //alert("点击了取消");
        return false;
    }
}


$(document).ready(function () {

    /**
     * 刷新打榜缓存
     */
    $("#refreshAward").click(function (e) {
        var token = $("#tokenId");
        var url = " /admin/refreshAward";
        $.ajax(url, {
            type: "GET",
            async: false,
            data: {
                "token": token.val()
            },
            success: function (data, status, xhr) {
                if (data.status) {
                    alert("刷新成功");
                } else {
                    if (data.token == 0) {
                        location.href = "";
                    } else {
                        alert("刷新失败");
                    }

                }
            },
            error: function (XHR, textStatus, errorThrown) {
                alert("server error");
            }
        });
    });


    /**
     * 刷新活动
     */
    $("#refreshActivity").click(function (e) {

        var token = $("#tokenId");
        var url = " /admin/refreshActivity";
        $.ajax(url, {
            type: "GET",
            async: false,
            data: {
                "token": token.val()
            },
            success: function (data, status, xhr) {
                if (data.status) {
                    alert("刷新成功");
                } else {
                    if (data.token == 0) {
                        location.href = "";

                    } else {
                        alert("刷新失败");
                    }

                }
            },
            error: function (XHR, textStatus, errorThrown) {
                alert("server error");
            }
        });
    });

    /**
     * 刷新用户邮件
     */
    $("#refreshUserEmail").click(function (e) {

        var token = $("#tokenId");
        var url = " /admin/refreshUserEmail";
        $.ajax(url, {
            type: "GET",
            async: false,
            data: {
                "token": token.val()
            },
            success: function (data, status, xhr) {
                if (data.status) {
                    alert("刷新成功");
                } else {
                    if (data.token == 0) {
                        location.href = "";
                    } else {
                        alert("刷新失败");
                    }

                }
            },
            error: function (XHR, textStatus, errorThrown) {
                alert("server error");
            }
        });
    });

    //refreshChargeUserEmail
    /**
     * 刷新用户邮件
     */
    $("#refreshChargeUserEmail").click(function (e) {

        var token = $("#tokenId");
        var url = " /admin/refreshUserEmail";
        $.ajax(url, {
            type: "GET",
            async: false,
            data: {
                "token": token.val()
            },
            success: function (data, status, xhr) {
                if (data.status) {
                    alert("刷新成功");
                } else {
                    if (data.token == 0) {
                        location.href = "";
                    } else {
                        alert("刷新失败");
                    }

                }
            },
            error: function (XHR, textStatus, errorThrown) {
                alert("server error");
            }
        });
    });

});


