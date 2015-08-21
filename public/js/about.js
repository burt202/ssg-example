require("../css/imports.less");

var $ = require("jquery");
var template = require("swig!../templates/about.html?pageName=about");

$("body").prepend(template);
