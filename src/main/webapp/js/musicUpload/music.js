/**
 *
 */
var numberreg = new RegExp("^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$");
var pngreg = new RegExp("\.(png)$");
var oggreg = new RegExp("\.(ogg)$");
var cksreg = new RegExp("\.(cks)$");
var zipreg = new RegExp("\.(zip)$");
var music_type_reg = new RegExp("\.((mp3)|(ogg)|(cks)|(zip))$");
var nullreg = new RegExp("^[\s]{0,}$");
var nuberlistreg = /\d+\,\d+\,\d+\,\d+$/;
var currentbuttonID = "";
var fileObj = null;
function getQueryStringRegExp(name)
{
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");  
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); return "";
};
 
$(document).ready(function() {
    $("#musicManager").show();
    $("#shopManager").hide();
    $("#userManager").hide();
    $("#skillManager").hide();
    $("#src_file").hide();
    $("#background_file").hide();
    $("#music_id").hide();
    $("#musiclevelsrc_file").hide();

    $("#music_src").validatebox({
        required : true,
        validType : 'music_type'
    });

    $("#music_background").validatebox({
        required : true,
        validType : 'png'
    });
    $("#music_musiclevelsrc").validatebox({
        required : true,
        validType : 'zip'
    });
    $("#musicDifficulty_hard_level").validatebox({
        required : true,
        validType : 'number'
    });

    $("#musicDifficulty_scoring").validatebox({
        required : true,
        validType : 'numberlist'
    });

    $("#musicDifficulty_user_limit_level").validatebox({
        required : true,
        validType : 'number'
    });

    $('#musiclevel_easyLevel').combo({
        width : 300,
        required : true,
        editable : false
    });
    $('#musiclevel_easyLevel').combo('setValue', 3).combo('setText', '简单');
    $('#level').appendTo($('#musiclevel_easyLevel').combo('panel'));
    $('#level input').click(function() {
        var v = $(this).val();
        var s = $(this).next('span').text();
        $('#musiclevel_easyLevel').combo('setValue', v).combo('setText', s).combo('hidePanel');
    });
    $("#musiclevel_totleExperience").validatebox({
        required : true,
        validType : 'number'
    });
    $("#musiclevel_totleGold").validatebox({
        required : true,
        validType : 'number'
    });

    $("#music_time").validatebox({
        required : true,
        validType : 'number'
    });
    $("#userlimitlevel").validatebox({
        required : true,
        validType : 'number'
    });

    $("#music_name").validatebox({
        required : true,
        validType : 'names[1,7]'
    });
    //$("#selectfile").width(fixWidth($('#selectfiles').width(),0.4));
    //$("#selectfile").height(fixHeight($('#selectfiles').height(),1));

    $('#tt').tabs({
        tools : [{
            iconCls : 'icon-add',
            handler : function() {
                var current = $("#tt").tabs("getSelected");
                switch (current[0].id) {
                    case "MusicManage": {
                        changwin("add_music", "");
                        $('#musicadd_win').window('open');
                        break;
                    }
                    case "MusicLevelManage": {
                        if ($("#music_seach").searchbox('textbox').validatebox('isValid')) {
                            changwin("add_musiclevel", 0);
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }, {
            iconCls : 'icon-save',
            handler : function() {
                alert('save');
            }
        }]
    });

    $('#music_all_files').tree({
        // url : 'tree_data.json'
    });

    $('#musicadd_win').window({
        width : 660,
        height : 400,
        shadow : true,
        modal : true
    });
    $('#musicadd_win').window('close');

    $('#musicleveladd_win').window({
        width : 660,
        height : 400,
        shadow : true,
        modal : true
    });
    $('#musicleveladd_win').window('close');
    // 关闭窗口

    $('#seach').searchbox({
        width : fixWidth($("#MusicManage").width(), 0.4),
        searcher : function(value, name) {
            switch (name) {
                case "all": {
                    Exec_Wait('musicList', 'getallMusic()', 0);
                    break;
                }
                case "musicid": {
                    if ($('#seach').searchbox('textbox').validatebox('isValid')) {
                        Exec_Wait('musicList', 'getMusicByID(' + value + ')', 0);
                    }

                    break;
                }
                case "musicname": {
                    if ($('#seach').searchbox('textbox').validatebox('isValid')) {
                        Exec_Wait('musicList', "getMusicByName('" + value + "');", 0);
                    }

                    break;
                }

            }
        },
        menu : '#musicSelects',
        prompt : '无需输入'
    });

    $('#seach').searchbox('textbox').validatebox({
        required : false,
        validType : 'kong'
    });
    $('#music_seach').searchbox({
        width : fixWidth($("#MusicManage").width(), 0.4),
        searcher : function(value, name) {
            if ($("#music_seach").searchbox('textbox').validatebox('isValid')) {
                Exec_Wait('musiclevelList', "musiclevel_get('" + value + "')", 0);
            }
        },
        menu : '#musiclevelSelects',
        prompt : '请输入音乐编号'
    }).searchbox('textbox').validatebox({
        required : true,
        validType : 'number'
    });

    $('#musiclevelList').datagrid({
        title : '音乐难度列表',
        iconCls : 'icon-save',
        width : fixWidth($("#MusicManage").width(), 0.8),
        nowrap : true,
        autoRowHeight : false,
        striped : true,
        fitColumns : true,
        collapsible : true,
        pagination : true,
        rownumbers : true,
        url : null,
        loadMsg : '正在加载.....',
        sortName : 'musicDifficultyId',
        sortOrder : 'desc',
        remoteSort : false,
        idField : 'musicDifficultyId',
        frozenColumns : [[{
            field : 'ck',
            checkbox : true
        }, {
            title : '歌曲难度编号',
            field : 'musicDifficultyId',
            width : 80,
            sortable : true
        }]],
        columns : [[{
            field : 'musicDifficultyLevel',
            title : '难度级别',
            formatter : function(value, rowData, rowIndex) {
                return value == 3 ? "简单" : (value == 2 ? "一般" : "困难");
            }
        }, {
            field : 'musicId',
            title : '歌曲编号'
        }, {
            field : 'musicDifficultyMaxExperience',
            title : '经验值'
        }, {
            field : 'musicDifficultyMaxGold',
            title : '金币值'
        }, {
            field : 'musicDifficultyFile',
            title : '文件'
        }, {
            field : 'musicDifficultyUserLimitLevel',
            title : '玩家最低等级'
        }, {
            field : 'musicDifficultyScoring',
            title : '评分标准{说明：[A,B,C]}',
            formatter : function(value, rowData, rowIndex) {
                if(value==null||value.length<3) return "无数据";
                return "等级A:" + value[0] + ",等级B:" + value[1] + ",等级C:" + value[2];
            }
        }, {
            field : 'musicDifficultyHardLevel',
            title : '难度等级LV1-LV9'
        }, {
            field : 'opt',
            title : '操作',
            align : 'center',
            formatter : function(value, rowData, rowIndex) {
                return "<a href='#' id='leve_" + rowData.musicDifficultyId + "' class='musicEdit' onclick='music_level_update_click(this)' >修改</a>";
            }
        }]],
        onLoadError : function() {
            alert(1);
        },
        onLoadSuccess : function(data) {
            if (data == null) {
                // 给用户一个没有数据的提示
                resize();
            }
        },
        toolbar : [{
            id : 'btndel',
            text : '删除已选',
            plain : false,
            iconCls : 'icon-cancel',
            handler : function() {
                var ids = getSelectionIds($('#musiclevelList'));
                if (ids == null) {
                    alert("请选择id");
                    return;
                }
                musiclevels_delete(ids);
            }
        }]
    });

    $('#musicList').datagrid({
        title : '搜索结果',
        iconCls : 'icon-save',
        width : fixWidth($("#MusicManage").width(), 0.8),
        nowrap : true,
        autoRowHeight : false,
        striped : true,
        fitColumns : true,
        collapsible : true,
        pagination : true,
        rownumbers : true,
        url : null,
        loadMsg : '正在加载.....',
        sortName : 'musicId',
        sortOrder : 'desc',
        remoteSort : false,
        idField : 'musicId',
        frozenColumns : [[{
            field : 'ck',
            checkbox : true
        }, {
            title : '歌曲编号',
            field : 'musicId',
            width : 80,
            sortable : true
        }]],
        columns : [[{
            field : 'musicName',
            title : '歌曲名'
        }, {
            field : 'musicHot',
            title : '歌曲热度'
        }, {
            field : 'musicDescription',
            title : '歌曲描述'
        }, {
            field : 'musicUserLimitLevel',
            title : '玩家最低等级'
        }, {
            field : 'musicTimes',
            title : '时长'
        }, {
            field : 'musicFile',
            title : '文件'
        }, {
            field : 'musicBackgroundIcoName',
            title : '背景图片'
        }, {
            field : 'opt',
            title : '操作',
            align : 'center',
            formatter : function(value, rowData, rowIndex) {
                return "<a href='#' id='" + rowData.musicId + "' class='musicEdit' onclick='music_update_click(this)' >修改</a> <a href='#' id='level_" + rowData.musicId + "' class='musicEdit' onclick='music_update_click(this)' >查看难度</a>";
            }
        }]],
        onLoadError : function() {
            alert(1);
        },
        onLoadSuccess : function(data) {
            if (data == null) {
                // 给用户一个没有数据的提示
                resize();
            }
        },
        toolbar : [{
            id : 'btndel',
            text : '删除已选',
            plain : false,
            iconCls : 'icon-cancel',
            handler : function() {
                var ids = getSelectionIds($('#musicList'));
                if (ids == null) {
                    alert("请选择id");
                    return;
                }
                musics_delete(ids);
            }
        }]
    });

    $(".easyui-linkbutton").click(function(options) {
        switch (options.currentTarget.id) {
            case "musicmanager": {
                $('#tt').tabs('select', '歌曲管理');
                break;
            }
            case "musiclevelmanager": {
                $('#tt').tabs('select', '歌曲等级管理');
                break;
            }
            case "musicfilemanager": {
                $('#tt').tabs('select', '歌曲文件查看');
                break;
            }
        }
    });

    // 扩展easyui表单的验证
    $.extend($.fn.validatebox.defaults.rules, {
        // 验证数字
        number : {
            validator : function(value) {
                return numberreg.test(value);
            },
            message : '只能输入数字'
        },
        kong : {
            validator : function(value) {
                return nullreg.test(value);
            },
            message : '无需输入'
        },
        names : {
            validator : function(value, param) {
                if (value.length < param[0] || value.length > param[1]) {
                    $.fn.validatebox.defaults.rules.names.message = '名称长度必须在' + param[0] + '至' + param[1] + '范围';
                    return false;
                } else {
                    if (!/^[\w]+$/.test(value) && !(/^[\u0391-\uFFE5]+$/.test(value))) {
                        $.fn.validatebox.defaults.rules.names.message = '名称只能数字、字母、汉字、下划线组成.';
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            message : '不能为空'
        },
        ogg : {
            validator : function(value) {
                return oggreg.test(value);
            },
            message : '需为 *.ogg 文件'
        },
        cks : {
            validator : function(value) {
                return cksreg.test(value);
            },
            message : '需为 *.cks 文件'
        },
        music_type : {
        	 validator : function(value) {
                 return music_type_reg.test(value);
             },
             message : '需为 *.cks|.ogg|.zip|.mp3 文件'
        },
        png : {
            validator : function(value) {
                return pngreg.test(value);
            },
            message : '需为 *.png 文件'
        },
        zip : {
            validator : function(value) {
                return zipreg.test(value);
            },
            message : '需为 *.zip 文件'
        },
        numberlist : {
            validator : function(value) {
                return nuberlistreg.test(value);
            },
            message : '不符合A,B,C,D a,b,c,d均为数值 a>b>c>d'
        }
    });

});

function musiclevel_update(musuic_id) {

    if ($("#musiclevelsrc_file_process").progressbar('getValue') != 100 || (!$("#musicDifficulty_scoring").validatebox('isValid')) || (!$("#musicDifficulty_user_limit_level").validatebox('isValid')) 
    || (!$("#musicDifficulty_hard_level").validatebox('isValid')) || (!$("#musiclevel_totleExperience").validatebox('isValid')) || (!$("#musiclevel_totleGold").validatebox('isValid'))) {

        return false;

    }
    var postdata = {
        'musicDifficultyId' : $("#musiclevel_id").val(),
        'musicId' : musuic_id,
        "musicDifficultyHardLevel" : $("#musicDifficulty_hard_level").val(),
        "musicDifficultyLevel" : $("#musiclevel_easyLevel").combo('getValue'),
        "musicDifficultyMaxExperience" : $('#musiclevel_totleExperience').val(),
        "musicDifficultyMaxGold" : $('#musiclevel_totleGold').val(),
        "musicDifficultyFile" : $('#music_musiclevelsrc').val(),
        "musicDifficultyUserLimitLevel" : $("#musicDifficulty_user_limit_level").val(),
        "musicDifficultyScoring" : $("#musicDifficulty_scoring").val().split(",").map(function(data) {
            return +data;
        })
    };
    $.ajax({
        url : "../music/musicdifficulty/update.json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "PUT",
        data : JSON.stringify(postdata),
        success : function(data) {
            $("#musicleveladd_win").window('close');
            musiclevel_get(musuic_id);

        }
    });

}

function musiclevel_add(musuic_id) {
    if ($("#musiclevelsrc_file_process").progressbar('getValue') != 100 || (!$("#musicDifficulty_scoring").validatebox('isValid')) || (!$("#musicDifficulty_user_limit_level").validatebox('isValid')) 
    || (!$("#musicDifficulty_hard_level").validatebox('isValid')) || (!$("#musiclevel_totleExperience").validatebox('isValid')) || (!$("#musiclevel_totleGold").validatebox('isValid'))) {

        return false;

    }
    var postdata = {
        'musicId' : musuic_id,
        "musicDifficultyHardLevel" : $("#musicDifficulty_hard_level").val(),
        "musicDifficultyLevel" : $("#musiclevel_easyLevel").combo('getValue'),
        "musicDifficultyMaxExperience" : $('#musiclevel_totleExperience').val(),
        "musicDifficultyMaxGold" : $('#musiclevel_totleGold').val(),
        "musicDifficultyFile" : $('#music_musiclevelsrc').val(),
        "musicDifficultyUserLimitLevel" : $("#musicDifficulty_user_limit_level").val(),
        "musicDifficultyScoring" : $("#musicDifficulty_scoring").val().split(",").map(function(data) {
            return +data;
        })
    };
    $.ajax({
        url : "../music/musicdifficulty/add.json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "POST",
        data : JSON.stringify(postdata),
        success : function(data) {
            $("#musicleveladd_win").window('close');
            musiclevel_get(musuic_id);

        }
    });

}

function music_level_update_click(current) {
    var ids = current.id.split("_");
    var id = current.id;
    if (ids.length > 1) {
        id = ids[1];
    }
    var rows = $('#musiclevelList').datagrid('getRows');
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].musicDifficultyId == id) {
            if ($("#music_seach").searchbox('textbox').validatebox('isValid')) {
                changwin("update_musiclevel", rows[i]);
            }

            return;
        }
    };

}

function music_update_click(current) {
    var ids = current.id.split("_");
    var id = current.id;
    if (ids.length > 1) {
        id = ids[1];
    }
    var rows = $('#musicList').datagrid('getRows');
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].musicId == id) {
            if (ids.length > 1) {
                $('#tt').tabs('select', '歌曲等级管理');
                $("#music_seach").searchbox('setValue', id);
                musiclevel_get(id);
            } else {
                changwin("update_music", rows[i]);

            }

            return;
        }
    };

}

function music_add() {
    if ($("#src_file_process").progressbar('getValue') != 100 || $("#background_file_process").progressbar('getValue') != 100 || (!$("#userlimitlevel").validatebox('isValid')) || (!$("#music_name").validatebox('isValid')) || (!$("#music_time").validatebox('isValid'))) {

        return false;

    }
    var postdata = {
        "musicName" : $("#music_name").val(),
        "musicTimes" : $("#music_time").val(),
        "musicBackgroundIcoName" : $('#music_background').val(),
        "musicDescription" : $('#music_description').val(),
        "musicUserLimitLevel" : $("#userlimitlevel").val(),
        "musicFile" : $('#music_src').val()
    };
    $.ajax({
        url : "../music/add.json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "POST",
        data : JSON.stringify(postdata),
        success : function(data) {
            $("#musicadd_win").window('close');
            getallMusic();

        }
    });

}

function music_update() {
    if ($("#src_file_process").progressbar('getValue') != 100 || $("#background_file_process").progressbar('getValue') != 100 || (!$("#userlimitlevel").validatebox('isValid')) || (!$("#music_name").validatebox('isValid')) || (!$("#music_time").validatebox('isValid'))) {

        return false;
    }
    var postdata = {
        'musicId' : $("#music_id").val(),
        "musicName" : $("#music_name").val(),
        "musicTimes" : $("#music_time").val(),
        "musicUserLimitLevel" : $("#userlimitlevel").val(),
        "musicBackgroundIcoName" : $('#music_background').val(),
        "musicDescription" : $('#music_description').val(),
        "musicFile" : $('#music_src').val()
    };
    $.ajax({
        url : "../music/update.json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "PUT",
        data : JSON.stringify(postdata),
        success : function(data) {
            $("#musicadd_win").window('close');
            getallMusic();

        }
    });

}

function music_delete(id) {
    $.ajax({
        url : "../music/delete/" + id + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "DELETE",
        success : getallMusic
    });
}

function musics_delete(ids) {
    $.ajax({
        url : "../music/delete/ids/" + ids + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "DELETE",
        success : getallMusic
    });
}

function musiclevels_delete(ids) {
    $.ajax({
        url : "../music/musicdifficulty/delete/ids/" + ids + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "DELETE",
        success : musiclevel_gets
    });
}

function musiclevel_delete(id) {
    $.ajax({
        url : "../music/musicdifficulty/delete/" + id + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "DELETE",
        success : musiclevel_get
    });
}

function musiclevel_gets() {
    $.ajax({
        url : "../music/musicdifficulty/get/musicid/" + $("#music_seach").searchbox('getValue') + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "GET",
        success : function(data) {
            $('#musiclevelList').datagrid('loadData', {
                "total" : data.length,
                "rows" : data
            });
        }
    });

}

function musiclevel_get(id) {
    $.ajax({
        url : "../music/musicdifficulty/get/musicid/" + id + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "GET",
        success : function(data) {
            $('#musiclevelList').datagrid('loadData', {
                "total" : data.length,
                "rows" : data
            });
        }
    });

}

function getallMusic() {
    $.ajax({
        url : "../music/all.json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "GET",
        success : function(data) {
            $('#musicList').datagrid('loadData', {
                "total" : data.length,
                "rows" : data
            });
        }
    });
}

function getMusicByID(id) {
    $.ajax({
        url : "../music/get/musicid/" + id + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "GET",
        success : function(data) {
            if (data != null) {
                $('#musicList').datagrid('loadData', {
                    "total" : 1,
                    "rows" : [data]
                });
            }
        }
    });
}

function getMusicByName(name) {
    $.ajax({
        url : "../music/get/musicname/" + name + ".json?client_version="+getQueryStringRegExp("client_version"),
        contentType : "application/json",
        dataType : "json",
        type : "GET",
        success : function(data) {
            if (data != null) {
                $('#musicList').datagrid('loadData', {
                    "total" : data.length,
                    "rows" : data
                });
            }
        }
    });
}

function onclicks(current) {
    if (current.id == "select_src") {
        $("#src_file").click();
    }
    if (current.id == "select_background") {
        $("#background_file").click();
    }

    if (current.id == "musiclevelselect_src") {
        $("#musiclevelsrc_file").click();
    }

    if (current.id == "musicfile_Upload") {
        if ($("#music_src").validatebox('isValid')) {
            UpladFile($("#src_file"), "../file/upload");
        }

    }

    if (current.id == "musicbackground_Upload") {
        if ($("#music_background").validatebox('isValid')) {
            UpladFile($("#background_file"), "../file/upload");
        }

    }

    if (current.id == "musiclevelmusicfile_Upload") {
        if ($("#music_musiclevelsrc").validatebox('isValid')) {
            UpladFile($("#musiclevelsrc_file"), "../file/upload");
        }

    }

    if (current.id == "musicadd_ok") {
        music_add();
    }
    if (current.id == "musicupdate_ok") {
        music_update();
    }

    if (current.id == "music_cancel") {
        $("#musicadd_win").window('close');
    }

    if (current.id == "musicleveladd_ok") {

        musiclevel_add($("#music_seach").searchbox('getValue'));

    }

    if (current.id == "musiclevelupdate_ok") {
        musiclevel_update($("#music_seach").searchbox('getValue'));

    }

    if (current.id == "musiclevel_cancel") {
        $("#musicleveladd_win").window("close");
    }

}

function changwin(type, data) {
    if (type == "add_music") {
        $('#musicadd_win').window({
            title : '添加歌曲'
        });

        $("#musicadd_ok").attr('id', 'musicadd_ok');
        $("#musicupdate_ok").attr('id', 'musicadd_ok');

        $("#music_name").val("").validatebox('isValid');
        $("#music_time").val("").validatebox('isValid');
        $('#music_background').val("").validatebox('isValid');
        $('#userlimitlevel').val("").validatebox('isValid');
        $('#music_description').val("");
        $('#music_src').val("").validatebox('isValid');
        $("#src_file_process").progressbar('setValue', 0);
        $("#background_file_process").progressbar('setValue', 0);

    }
    if (type == "update_music") {
        $('#musicadd_win').window({
            title : '修改歌曲'
        });

        $("#musicadd_ok").attr('id', 'musicupdate_ok');
        $("#musicupdate_ok").attr('id', 'musicupdate_ok');

        $("#music_name").val(data.musicName).validatebox('isValid');
        $("#music_time").val(data.musicTimes).validatebox('isValid');
        $("#userlimitlevel").val(data.musicUserLimitLevel).validatebox('isValid');
        $('#music_background').val(data.musicBackgroundIcoName).validatebox('isValid');
        $('#music_description').val(data.musicDescription);
        $('#music_src').val(data.musicFile).validatebox('isValid');
        $("#music_id").val(data.musicId);
        $("#src_file_process").progressbar('setValue', 100);
        $("#background_file_process").progressbar('setValue', 100);

    }

    if (type == "update_musiclevel") {
        $('#musicleveladd_win').window({
            title : '修改音乐难度'
        });

        $("#musiclevelupdate_ok").attr('id', 'musiclevelupdate_ok');
        $("#musicleveladd_ok").attr('id', 'musiclevelupdate_ok');

        $('#musiclevel_easyLevel').combo('setValue', data.musicDifficultyLevel).combo('setText', (data.musicDifficultyLevel == 1 ? "简单" : (data.musicDifficultyLevel == 2 ? "一般" : "困难")));
        $("#musicDifficulty_hard_level").val(data.musicDifficultyHardLevel).validatebox('isValid');
        $('#music_musiclevelsrc').val(data.musicDifficultyFile).validatebox('isValid');
        $('#musiclevel_totleGold').val(data.musicDifficultyMaxGold).validatebox('isValid');
        $('#musiclevel_totleExperience').val(data.musicDifficultyMaxExperience).validatebox('isValid');
        $("#musiclevel_id").val(data.musicDifficultyId);

        $('#musicDifficulty_user_limit_level').val(data.musicDifficultyUserLimitLevel).validatebox('isValid');
        $("#musicDifficulty_scoring").val(data.musicDifficultyScoring).validatebox('isValid');
        $("#musiclevelsrc_file_process").progressbar('setValue', 100);

    }

    if (type == "add_musiclevel") {
        $('#musicleveladd_win').window({
            title : '添加音乐难度'
        });
        $("#musicleveladd_ok").attr('id', 'musicleveladd_ok');
        $("#musiclevelupdate_ok").attr('id', 'musicleveladd_ok');

        $('#musiclevel_easyLevel').combo('setValue', 1).combo('setText', "简单");
        $("#musicDifficulty_hard_level").val("").validatebox('isValid');
        $('#music_musiclevelsrc').val("").validatebox('isValid');
        $('#musiclevel_totleGold').val("").validatebox('isValid');
        $('#musiclevel_totleExperience').val("").validatebox('isValid');
        $('#musicDifficulty_user_limit_level').val("").validatebox('isValid');
        $("#musicDifficulty_scoring").val("").validatebox('isValid');
        $("#musiclevelsrc_file_process").progressbar('setValue', 0);

    }
}

var index = 0;
function addTab() {
    index++;
    $('#tt').tabs('add', {
        title : 'New Tab ' + index,
        content : 'Tab Body ' + index,
        iconCls : 'icon-save',
        closable : true,
        tools : [{
            iconCls : 'icon-mini-refresh',
            handler : function() {
                alert('refresh');
            }
        }]
    });
}

function getSelected() {
    var tab = $('#tt').tabs('getSelected');
    alert('Selected: ' + tab.panel('options').title);
}

function update() {
    index++;
    var tab = $('#tt').tabs('getSelected');
    $('#tt').tabs('update', {
        tab : tab,
        options : {
            title : 'new title' + index,
            iconCls : 'icon-save'
        }
    });
}

function accordionSlect(title) {
    $("#musicManager").hide();
    $("#shopManager").hide();
    $("#userManager").hide();
    $("#skillManager").hide();
    switch (title) {
        case "歌曲管理": {
            $("#musicManager").show();
            break;
        }
        case "商店管理": {
            $("#shopManager").show();
            break;
        }
        case "技能管理": {
            $("#skillManager").show();
            break;
        }
        case "用户管理": {
            $("#userManager").show();
            break;
        }
    }

}

function resize() {
    // alert(fixHeight($("#options").height(),0.8));
    $('#musicList').datagrid('resize', {
        width : fixWidth($("#MusicManage").width(), 0.85),
        heigth : fixHeight($("#options").height(), 0.8)
    });
}

function getSelected() {

    var selected = $('#musicList').datagrid('getSelected');
    if (selected) {
        alert(selected.code + ":" + selected.name + ":" + selected.addr + ":" + selected.col4);
    }
}

function getSelectionIds(obj) {
    var ids = [];
    var rows = obj.datagrid('getSelections');
    var id = obj.attr("id");
    if (rows.length < 1)
        return null;
    for (var i = 0; i < rows.length; i++) {
        ids.push(id=="musiclevelList"?rows[i].musicDifficultyId:rows[i].musicId);
    }
    return ids.join('-');
}

function clearSelections() {
    $('#musicList').datagrid('clearSelections');
}

function selectRow() {
    $('#musicList').datagrid('selectRow', 2);
}

function selectRecord() {
    $('#musicList').datagrid('selectRecord', '002');
}

function unselectRow() {
    $('#musicList').datagrid('unselectRow', 2);
}

function mergeCells() {
    $('#musicList').datagrid('mergeCells', {
        index : 2,
        field : 'addr',
        rowspan : 2,
        colspan : 2
    });
}

function selectClick(current) {

    switch (current.id) {
        case "all_music": {

            var name = $('#seach').searchbox('getName');
            var opts = $('#seach').searchbox('options');
            if (name != "all" && opts != "无需输入") {
                $('#seach').searchbox({
                    prompt : "无需输入"

                }).searchbox('textbox').validatebox({
                    required : false,
                    validType : 'kong'
                });
            }
            break;
        }
        case "id_music": {

            $('#seach').searchbox({
                prompt : "请输入数字"
            }).searchbox('textbox').validatebox({
                required : true,
                validType : 'number'
            });
            break;
        }
        case "name_music": {
            $('#seach').searchbox({
                prompt : "输入歌曲名称"
            }).searchbox('textbox').validatebox({
                required : true,
                validType : 'names[1,7]'
            });
            break;
        }
    }

}

function change(current) {
    var data = $("#" + current.id).val();
    var id = "#music_" + current.id.split("_")[0];
    if (id != "") {
        data = data.split("\\");
        $(id).val(data[data.length - 1]);
        $(id).focus();
        $("#" + current.id.split("_")[0] + "_file_process").progressbar('setValue', 0);
    }
}

function UpladFile(Element, url) {
    // js 获取文件对象
    var FileController = url;
    // 接收上传文件的后台地址

    // FormData 对象
    var form = new FormData();
    form.append("file", document.getElementById(Element.attr("id")).files[0]);
    // 文件对象

    // XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();
    xhr.open("post", FileController, true);
    xhr.onload = function() {
        alert("上传完成!");
    };
    currentbuttonID = Element.attr("id");

    xhr.upload.addEventListener("progress", process, false);

    xhr.send(form);

}

function process(evt) {
    var value = Math.round(evt.loaded / evt.total * 100);
    $("#" + currentbuttonID + '_process').progressbar('setValue', value);
}

function fixWidth(width, percent) {
    return width * percent;
    // 这里你可以自己做调整
}

function fixHeight(height, percent) {
    return height * percent;
    // 这里你可以自己做调整
}

/**
 * 封装一个公用的方法
 *
 * @param {Object}
 *            grid table的id
 * @param {Object}
 *            func 获取异步数据的方法
 * @param {Object}
 *            time 延时执行时间
 */
function Exec_Wait(grid, func, data, time) {
    var dalayTime = 500;
    __func_ = func;
    __selector_ = '#' + grid;
    $(__selector_).datagrid("loading");
    if (time) {
        dalayTime = time;
    }
    gTimeout = window.setTimeout(_Exec_Wait_, dalayTime);
}

function _Exec_Wait_() {
    try {
        eval(__func_);
    } catch (e) {
        alert("__func_:" + __func_ + ";_ExecWait_" + e.message);
    } finally {
        window.clearTimeout(gTimeout);
        $(__selector_).datagrid("loaded");
    }
}
