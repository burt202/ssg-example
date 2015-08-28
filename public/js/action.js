"use strict";

var $ = require("jquery");
require("slick-carousel");

$(".thumbnail-carousel").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6
});

$(".thumbnail-carousel img").click(function () {
  $(".main-img").attr("src", $(this).data("hd"));
});

$(".main-img").attr("src", $(".thumbnail-carousel img").first().data("hd"));
