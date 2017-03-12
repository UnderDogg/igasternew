var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),

    input  = {
      'sass': 'sass/**/*.scss'
    },

    output = {
      'stylesheets': 'public/flatly/css',
    };



/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(gulp.dest(output.stylesheets));
});



/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.sass, ['build-css']);
});