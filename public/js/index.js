"use strict";

var $ = require("jquery");
require("slick-carousel");

$(".ssg-image-list-widget").on("init", function () {
  $(".ssg-image-list-widget__img").fadeIn(500);
});

$(".ssg-image-list-widget").slick({
  infinite: true,
  arrows: false,
  autoplay: true
});
