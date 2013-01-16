chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.message == "showPageAction") {
		showPageAction(sender.tab)		
  } else if (request.message == "getRewrittenUrl") {
		sendResponse(rewriteUrl(request.url));
	}
});

var rewriteUrl = function(url) {
	uri = new Uri(url);
	tag = tagForUri(uri);
	uri.addQueryParam('tag', tag);
	return uri.toString();
}

var tagForUri = function(url) {
	return window.localStorage.getItem(url.host());
}

var showPageAction = function(tab) {
	uri = new Uri(tab.url);
	tag = tagForUri(uri);
	if (tag != "" && tag != null && tag != undefined) {
		chrome.pageAction.show(tab.id);
	}
}