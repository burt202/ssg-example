"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var less = require("gulp-less");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var runSequence = require("run-sequence");
var clean = require("gulp-clean");

gulp.task("default", ["watch"]);

gulp.task("watch", function () {
  gulp.watch("public/**", ["build"]);
});

gulp.task("build", function (callback) {
  runSequence(
    "clean",
    "copy-assets",
    "compile-less",
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

gulp.task("compile-less", function () {
  return gulp.src("public/css/imports.less")
    .pipe(less({
      paths: ["public/css/"]
    }))
    .pipe(rename("combined.css"))
    .pipe(gulp.dest("dist/"))
    .pipe(minifyCSS())
    .pipe(rename("combined.min.css"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("webpack", function(callback) {
  webpack(Object.create(webpackConfig), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});
