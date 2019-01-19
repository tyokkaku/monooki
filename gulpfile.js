var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('pug', function buildHTML() {
  return gulp.src('./*.pug')
  .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
  .pipe(pug({
      pretty: true
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./*.pug', gulp.task('pug'));
})