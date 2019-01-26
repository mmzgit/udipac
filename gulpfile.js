var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	gulpIf = require('gulp-if'),
	eslint = require('gulp-eslint'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');
  
  
  gulp.task('sass', function () {
    gulp.src('./web/themes/custom/udipac/scss/**/*.scss')
      //.pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
          .pipe(autoprefixer('last 2 version'))
      //.pipe(sourcemaps.write('./themes/custom/udipac/'))
      .pipe(gulp.dest('./web/themes/custom/udipac/css'));
  });

  gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./web/themes/custom/udipac/scss/**/*.scss', gulp.series('sass'));
    gulp.watch(['./web/themes/custom/udipac/css/style.css'], function (files){
        livereload.changed(files)
    });
});