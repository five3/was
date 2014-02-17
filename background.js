// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.browserAction.onClicked.addListener(function(tab) {
	// No tabs or host permissions needed!
	//console.log('Turning ' + tab.url + ' red!');
	chrome.tabs.executeScript({
		file: "inject.js"
		//code: 'alert("JS Test");'
	});
	chrome.tabs.insertCSS({
		//file: "inject_style.css"
	});
	chrome.tabs.insertImage
});
