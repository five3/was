// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.browserAction.onClicked.addListener(function(tab) {
	// No tabs or host permissions needed!
	//console.log('Turning ' + tab.url + ' red!');
	chrome.tabs.executeScript({
		file: "inject.js"
		//code:'alert($("#su").val());\
		//document.body.style.backgroundColor="green";\
		//alert($("#su").val());\
		//$("body").append("<div id=injectUI><div class=inject_tip>Please<br/><div><TEXTAREA id=show_attr class=iframe_plug></TEXTAREA></div>");\
		//alert($("#su").val());\
		//$("input").click(function(){alert(111)});\
		//$("img").bind("click", function(){alert(222)});'
	});
	chrome.tabs.insertCSS({
		file: "inject_style.css"
	});
	chrome.tabs.insertImage
});
