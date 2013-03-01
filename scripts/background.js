chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.message == "showPageAction") {
		console.log("received message: ShowPageAction");
		showPageAction(sender.tab)		
  } else if (request.message == "getRewrittenUrl") {
		sendResponse(rewriteUrl(request.url));
	}
});

var rewriteUrl = function(url) {
	uri = new Uri(url);
	host = uri.host();
	tag = tagForHost(host);
	if (host == 'www.threadless.com') {
		uri.addQueryParam('from', tag);
	} else if (host == 'www.bookdepository.co.uk') {
		uri.addQueryParam('a_aid', tag);
	} else if (host == 'www.bookdepository.com') {
		uri.addQueryParam('a_aid', tag);
	} else {
		uri.addQueryParam('tag', tag);
	}	
	return uri.toString();
}

var tagForHost = function(host) {
	return window.localStorage.getItem(host);
}

var showPageAction = function(tab) {
	uri = new Uri(tab.url);
	console.log(uri);
	console.log(uri.host());
	tag = tagForHost(uri.host());
	console.log(tag);
	if (tag != "" && tag != null && tag != undefined) {
		console.log("showing pageAction");
		chrome.pageAction.show(tab.id);
		console.log(tab.id)
		console.log("^ tab.id")
	}
}

function install_notice() {
    if (localStorage.getItem('install_time'))
        return;

    var now = new Date().getTime();
    localStorage.setItem('install_time', now);
    chrome.tabs.create({url: "pages/options.html"});
}
install_notice();