$(document).ready(function(){
	handleSaving();
	showTags();
});

handleSaving = function() {
  return $("#save").click(function() {
    saveTags();
		showSavedNotice();
  });
};

var saveTags = function() {
	$("input").each( function() {
		tag = $(this).val();
		id = $(this).data("host");
		window.localStorage.setItem(id, tag);
	});
}

var showTags = function() {
	$("input").each( function() {
		id = $(this).data("host");
		tag = window.localStorage.getItem(id);
		$(this).val(tag);
	});
}

showSavedNotice = function() {
  $("#toggle_notice").text("Options (saved)");
  return setTimeout((function() {
    return $("#toggle_notice").text("Options");
  }), 1000);
};
