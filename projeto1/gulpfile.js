"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task('default', watch);

gulp.task('sass', compilasass);

function compilasass(){
    return gulp
      .src("sass/*.sass")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(gulp.dest("css"));
}

function watch() {
    gulp.watch("sass/*.sass", compilasass)
}