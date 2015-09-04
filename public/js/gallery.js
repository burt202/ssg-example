"use strict";

var $ = require("jquery");
require("slick-carousel");

$(".thumbnail-carousel").on("init", function () {
  $(".thumbnail-carousel img").fadeIn(500);
});

$(".thumbnail-carousel").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6
});

$(".thumbnail-carousel img").click(function () {
  $(".main-img img").attr("src", $(this).data("hd"));
});

$(window).load(function () {
  $(".main-img img")
    .attr("src", $(".thumbnail-carousel img").first().data("hd"))
    .fadeIn(500);
});