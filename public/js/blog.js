"use strict";

require("./site");
var $ = require("jquery");

$("article.blog-entry .content a").addClass("site-link external");
$(".next-prev-links li a").addClass("site-link");
