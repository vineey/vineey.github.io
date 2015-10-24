var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var assets = require('./asset.json');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

gulp.task("clean", function(){
  return gulp.src('./dist', {read: false})
          .pipe(clean());
});

gulp.task("vendor-js", function(){
    gulp.src(assets.vendor.js)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(connect.reload());
});

gulp.task("vendor-css", function(){
gulp.src(assets.vendor.css)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./dist/css'))
      .pipe(connect.reload());
});

gulp.task("vine-js", function(){
gulp.src(assets.vine.js)
      //.pipe(uglify())
      .pipe(concat('vine.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(connect.reload());
});

gulp.task("vine-css", function(){
gulp.src(assets.vine.css)
      .pipe(concat('vine.css'))
      .pipe(gulp.dest('./dist/css'))
      .pipe(connect.reload());
});
var fonts = ['./src/**/*.eot','./src/**/*.svg','./src/**/*.ttf','./src/**/*.woff','./src/**/*.woff2'];

gulp.task('fonts', function() {

    return gulp.src(fonts)
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
})

gulp.task('html', function() {

    return gulp.src(['./src/*.html', './src/**/*.html'])
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
})

gulp.task("server", function(){
  connect.server({root : './dist', livereload : true, port : 80});
});

gulp.task('watch', function () {

  gulp.watch(fonts, ['fonts']);
  gulp.watch(['./src/*.html', './src/**/*.html'], ['html']);
  gulp.watch(assets.vine.js, ['vendor-js']);
  gulp.watch(assets.vendor.css, ['vendor-css']);
  gulp.watch(assets.vine.js, ['vine-js']);
  gulp.watch(assets.vine.css, ['vine-css']);
});

gulp.task("default", function(callback){
  return runSequence('clean', ['html', 'fonts', 'vendor-js', 'vendor-css' ,'vine-js', 'vine-css'], callback);
});

gulp.task("deploy", function(callback){
  return runSequence('clean', ['watch', 'html', 'fonts', 'vendor-js', 'vendor-css' ,'vine-js', 'vine-css'], ['server'], callback);
});