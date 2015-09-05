"use strict";

var $ = require("jquery");
require("slick-carousel");

$(".slideshow").on("init", function () {
  $(".slideshow img").fadeIn(500);
});

$(".slideshow").slick({
  infinite: true,
  arrows: false,
  autoplay: true
});
