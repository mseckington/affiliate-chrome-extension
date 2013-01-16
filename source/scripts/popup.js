$(document).ready(function(){
	chrome.tabs.getSelected(null, function(tab) {
		chrome.extension.sendRequest({
		  "message": "getRewrittenUrl",
			"url": tab.url
		}, showRewrittenUrl);		
  });

	handleCopying();
	linkToOptions();
});

var showRewrittenUrl = function(rewrittenUrl){
	$("#page_url").val(rewrittenUrl);
}

handleCopying = function() {
  return $("#page_url, #clipboard").click(function() {
    var field, value;
    field = $("#page_url");
    field.select();
    document.execCommand("copy");
    value = field.val();
    field.val("COPIED");
    field.blur();
    return setTimeout((function() {
      return field.val(value);
    }), 500);
  });
};

var linkToOptions = function() {
	$("#options_link").attr("href", chrome.extension.getURL("pages/options.html"));
}

// chrome.extension.getURL("options.html");