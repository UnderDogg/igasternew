var elixir = require('laravel-elixir');

var gulp  = require('gulp'),
    gutil = require('gulp-util'),


    sass       = require('gulp-sass'),

    input  = {
      'sass': 'source/scss/**/*.scss',
      'javascript': 'source/javascript/**/*.js',
      'vendorjs': 'public/assets/javascript/vendor/**/*.js'
    },

    output = {
      'stylesheets': 'public/css',
      'javascript': 'public/js'
    };


/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(gulp.dest(output.stylesheets));
});


elixir(function(mix) {
    mix.sass('app.scss')
        .browserify('app.js');
});

