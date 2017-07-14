$(document).ready(function() {
		$("#buttonlist-album").hide();
	    $("#buttonlist-activity").hide();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
	$("#buttonlist-award").hide();


	$("#buttonlist-userEmail").hide();

	$("#buttonlist-charges").hide();
		
		var val=$("#buttonlist-album").attr("class");
		var array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-album").toggle();
		}
	var val=$("#buttonlist-activity").attr("class");
	var array=val.split(" ");
	if(2==array.length){
		$("#buttonlist-activity").toggle();
	}

	var val=$("#buttonlist-award").attr("class");
	var array=val.split(" ");
	if(2==array.length){
		$("#buttonlist-award").toggle();
	}

		val=$("#buttonlist-props").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-props").toggle();
		}

		val=$("#buttonlist-challege").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-challege").toggle();
		}
		val=$("#buttonlist-equip").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-equip").toggle();
		}
		val=$("#buttonlist-headimage").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-headimage").toggle();
		}
		val=$("#buttonlist-music").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-music").toggle();
		}
		val=$("#buttonlist-schema").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-schema").toggle();
		}
		val=$("#buttonlist-storygate").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-storygate").toggle();
		}
		val=$("#buttonlist-announcement").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-announcement").toggle();
		}
		val=$("#buttonlist-sysemail").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-sysemail").toggle();
		}


	val=$("#buttonlist-charges").attr("class");
	array=val.split(" ");
	if(2==array.length){
		$("#buttonlist-charges").toggle();
	}



	val=$("#buttonlist-userEmail").attr("class");
	array=val.split(" ");
	if(2==array.length){
		$("#buttonlist-userEmail").toggle();
	}

		val=$("#buttonlist-goods").attr("class");
		array=val.split(" ");
		if(2==array.length){
			$("#buttonlist-goods").toggle();
		}

		$("#props").click(function() {
			$("#buttonlist-props").toggle();
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});

		$("#album").click(function() {
			$("#buttonlist-album").toggle();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});

	$("#activity").click(function() {
		$("#buttonlist-activity").toggle();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
		$("#buttonlist-album").hide();
		$("#buttonlist-award").hide();
		$("#buttonlist-userEmail").hide();

		$("#buttonlist-charges").hide();
	});


	$("#award").click(function() {

		$("#buttonlist-award").toggle();
		$("#buttonlist-activity").hide();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
		$("#buttonlist-album").hide();
		$("#buttonlist-userEmail").hide();

		$("#buttonlist-charges").hide();
	});

	$("#dataSource").click(function() {
		$("#buttonlist-activity").hide();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
		$("#buttonlist-album").hide();
		$("#buttonlist-award").hide();
		$("#buttonlist-userEmail").hide();

		$("#buttonlist-charges").hide();
	});

		$("#schema").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").toggle();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#challege").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").toggle();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#equip").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").toggle();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#headimage").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").toggle();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#music").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").toggle();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#storygate").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").toggle();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();

		});
		$("#announcement").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").toggle();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#sysemail").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").toggle();
			$("#buttonlist-goods").hide();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();
		});
		$("#goods").click(function() {
			$("#buttonlist-album").hide();
			$("#buttonlist-activity").hide();
			$("#buttonlist-challege").hide();
			$("#buttonlist-equip").hide();
			$("#buttonlist-headimage").hide();
			$("#buttonlist-music").hide();
			$("#buttonlist-schema").hide();
			$("#buttonlist-storygate").hide();
			$("#buttonlist-announcement").hide();
			$("#buttonlist-sysemail").hide();
			$("#buttonlist-goods").toggle();
			$("#buttonlist-props").hide();
			$("#buttonlist-award").hide();
			$("#buttonlist-userEmail").hide();

			$("#buttonlist-charges").hide();

		});

	$("#userEmail").click(function() {
		$("#buttonlist-album").hide();
		$("#buttonlist-activity").hide();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
		$("#buttonlist-award").hide();
		$("#buttonlist-userEmail").toggle();

		$("#buttonlist-charges").hide();

	});

	$("#charges").click(function() {
		$("#buttonlist-album").hide();
		$("#buttonlist-activity").hide();
		$("#buttonlist-challege").hide();
		$("#buttonlist-equip").hide();
		$("#buttonlist-headimage").hide();
		$("#buttonlist-music").hide();
		$("#buttonlist-schema").hide();
		$("#buttonlist-storygate").hide();
		$("#buttonlist-announcement").hide();
		$("#buttonlist-sysemail").hide();
		$("#buttonlist-goods").hide();
		$("#buttonlist-props").hide();
		$("#buttonlist-award").hide();
		$("#buttonlist-userEmail").hide();

		$("#buttonlist-charges").toggle();

	});

	});

	function openJSP(jsp) {
		window.open(jsp, 'self');
	}