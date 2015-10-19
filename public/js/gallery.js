"use strict";

var $ = require("jquery");
require("slick-carousel");

$(".ssg-image-list-widget").on("init", function () {
  $(".ssg-image-list-widget img").fadeIn(500);
});

$(".ssg-image-list-widget").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6
});

$(".ssg-image-list-widget img").click(function () {
  $(".main-img img").attr("src", $(this).data("hd"));
});

$(window).load(function () {
  $(".main-img img")
    .attr("src", $(".ssg-image-list-widget img").first().data("hd"))
    .fadeIn(500);
});