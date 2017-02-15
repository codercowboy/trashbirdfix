// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    //console.log("Intercepted: " + info.url);
    return { redirectUrl: "http://onejasonforsale.com/trentsticker.png"};
  },
  // filters
  {
    urls: [
      "*://*/*16344631_1846059619003269_2434487372902039552*"
    ]
  },
  // extraInfoSpec
  ["blocking"]
);
