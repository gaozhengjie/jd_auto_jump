// ==UserScript==
// @name         京东移动URL自动跳转为PC端URL
// @namespace    https://www.gaozhengjie.cn
// @version      0.1
// @description  在桌面电脑上，打开移动端分享的URL，自动跳转到PC端URL
// @author       Gaozhengjie
// @include      http*://item.m.jd.com/product/*.html*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';
	var result;
	if((result = (new RegExp(/(\d+)\.html/,'i')).exec(location.pathname)) !== null)
	{
		location.href='https://item.jd.com/'+result[1]+'.html';
	}
})();
