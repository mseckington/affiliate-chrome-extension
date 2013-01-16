$(document).ready(function(){
	saveTags();
	showTags();
});

var saveTags = function() {
	$("input").keyup( function() {
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