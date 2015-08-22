"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var runSequence = require("run-sequence");
var clean = require("gulp-clean");

gulp.task("default", ["watch"]);

gulp.task("watch", function () {
  gulp.watch("public/**", ["build"]);
});

gulp.task("webpack", function(callback) {
  webpack(Object.create(webpackConfig), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});

gulp.task("build", function (callback) {
  runSequence(
    "clean",
    "copy-assets",
    "webpack",
    callback
  );
});

gulp.task("clean", function () {
  return gulp.src("dist")
    .pipe(clean());
});

gulp.task("copy-assets", function () {
  return gulp.src([
      "public/assets/*"
    ])
    .pipe(gulp.dest("dist/assets"));
});
