var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var gutil = require("gulp-util");
var babelify = require("babelify");
var sass = require('gulp-sass');
var watch = require("gulp-watch");


var dependencies = [
    'react',
    'react-dom'
];
var scriptCount=0;

// gulp task satrt

gulp.task('scripts',function(){
    bundleApp(false);
})

// baasic gulp task has consist of below code
gulp.task('test', function (){
    console.log("hi gulp")
})

gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss') // get the src files 
    .pipe(sass()) // send the files to for some plugin
    .pipe(gulp.dest('app/dist/css'));// outputs the file in the destination folder
})

// gulp watch syntax

gulp.task('watcher',function(){
   gulp.watch('app/**/*.scss',['sass']);
})