// This gets triggered by each match specified in manifest.json.
// It sends a message to background.js to show the PageAction icon.
chrome.extension.sendRequest({
  "message": "showPageAction"
});