"use strict";

var $ = require("jquery");

$(document).on("click", "a.external", function (e) {
  e.preventDefault();
  var href = $(e.currentTarget).attr("href");
  window.open(href, "_blank");
});
