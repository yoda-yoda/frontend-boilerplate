angular.module('templates-app', ['common/tpls/content.tpl.html', 'common/tpls/main-nav.tpl.html']);

angular.module("common/tpls/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/content.tpl.html",
    "<pre>\n" +
    "    <span class=\"comment\">// Copyright 2015 Denis Karanja. All rights reserved.\n" +
    "    // Use of this source code is governed by a MIT-style\n" +
    "    // license that can be found in the LICENSE file.\n" +
    "    // Find the code <a href=\"https://github.com/yoda-yoda/yoda-face.git\" target=\"_blank\">HERE</a> </span>\n" +
    "\n" +
    "    <span class=\"keyword\">package</span> deebeat\n" +
    "\n" +
    "    <span class=\"keyword\">import</span> <span class=\"string\">\"net/url\"</span>\n" +
    "\n" +
    "    <span class=\"reserved\">typedef</span> <span class=\"reserved\">struct</span> Profile {\n" +
    "        <span class=\"reserved\">char</span> author = <span class=\"string\">\"Denis Karanja\"</span>;\n" +
    "\n" +
    "        <span class=\"comment\">// You can check out my code at these places:</span>\n" +
    "        <span class=\"reserved\">char </span><a href=\"https://github.com/yoda-yoda\" target=\"_blank\">github;</a>\n" +
    "\n" +
    "        <span class=\"comment\">// You can stalk me on these places:</span>\n" +
    "        <span class=\"reserved\">char </span> <a href=\"mailto:dee.caranja@gmail.com\" target=\"_blank\">email,</a> <a href=\"htpps://twitter.com/dee_beat\" target=\"_blank\">twitter;</a>\n" +
    "    } open;\n" +
    "</pre>");
}]);

angular.module("common/tpls/main-nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/main-nav.tpl.html",
    "");
}]);
