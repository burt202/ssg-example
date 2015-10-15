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
var swig = require("gulp-swig");
var data = require("gulp-data");
var path = require("path");
var jshint = require("gulp-jshint");
var htmlreplace = require("gulp-html-replace");

gulp.task("default", ["build:dev", "watch"]);

gulp.task("watch", function () {
  gulp.watch("public/**", ["build:dev"]);
});

gulp.task("build:dev", function (callback) {
  runSequence(
    "clean",
    "copy-assets",
    "copy-manifest",
    "compile-swig",
    "compile-less",
    "webpack:dev",
    callback
  );
});

gulp.task("build:prod", function (callback) {
  runSequence(
    "clean",
    "copy-assets",
    "copy-manifest",
    "compile-swig",
    "remove-test-content",
    "compile-less",
    "webpack:prod",
    callback
  );
});

gulp.task("remove-test-content", function () {
  return gulp.src("dist/*.html")
    .pipe(htmlreplace({
      "test-content": ""
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("jshint", function () {
  return gulp.src([
      "public/js/**/*js"
    ])
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("clean", function () {
  return gulp.src("dist")
    .pipe(clean());
});

gulp.task("copy-assets", function () {
  return gulp.src([
      "public/assets/*",
      "node_modules/ionicons/fonts/ionicons.woff",
      "node_modules/ionicons/fonts/ionicons.ttf",
      "node_modules/slick-carousel/slick/fonts/slick.woff",
      "node_modules/slick-carousel/slick/fonts/slick.ttf",
      "node_modules/slick-carousel/slick/ajax-loader.gif"
    ])
    .pipe(gulp.dest("dist/assets"));
});

gulp.task("copy-manifest", function () {
  return gulp.src([
      "manifest.json",
    ])
    .pipe(gulp.dest("dist/"));
});

var getJsonData = function (file) {
  return require("./public/templates/data/" + path.basename(file.path, ".html") + ".json");
};

gulp.task("compile-swig", function () {
  return gulp.src("public/templates/*.html")
    .pipe(data(getJsonData))
    .pipe(swig({ defaults: { cache: false } }))
    .pipe(gulp.dest("dist/"));
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

gulp.task("webpack:dev", function (callback) {
  webpack(Object.create(webpackConfig), function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});

gulp.task("webpack:prod", function (callback) {
  var config = Object.create(webpackConfig);

  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(config, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});
