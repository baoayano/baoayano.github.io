# Cài đặt công cụ

[Công cụ bổ trợ](https://www.tampermonkey.net/)

# Script cài đặt gói công cụ
```js
// ==UserScript==
// @name         hoc va lam theo bac hackscript
// @namespace    http://shizuku.tech
// @version      2025-03-08
// @description  gianh giai nhat?!!!!
// @author       Doan Gia Bao
// @match        https://hocvalamtheobac.mobiedu.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mobiedu.vn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var iframe = document.createElement("iframe");
    iframe.src = "https://chat.socialintents.com/c/chat-1741428562417";
    iframe.style = "position:fixed;bottom:0;right:0;z-index:10000;width:300px;height:500px;display:none;";
    iframe.className = "hide";

    var toggle = document.createElement("button")
    toggle.style = "position:fixed;top:0;right:9px;z-index:10001;cursor:pointer;opacity:0;"
    toggle.innerText = "đóng =)))"
    toggle.addEventListener("click", function () {
        if (iframe.className == "show") {
            iframe.style = "position:fixed;bottom:0;right:0;z-index:10000;width:300px;height:500px;display:none;"
            iframe.className = "hide";
        } else {
            iframe.style = "position:fixed;bottom:0;right:0;z-index:10000;width:300px;height:500px;"
            iframe.className = "show";
        }
    })

    document.body.prepend(iframe);
    document.body.prepend(toggle);

})();
```

Chúc cheat thành công!
