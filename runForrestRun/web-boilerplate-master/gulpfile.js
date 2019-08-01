
'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var merge = require('merge-stream');
var path = require('path');
var fs = require('fs');
var historyApiFallback = require('connect-history-api-fallback');
var packageJson = require('./package.json');
var crypto = require('crypto');
var compass = require('gulp-compass');

var DIST = 'dist';

var dist = function(subpath) {
  return !subpath ? DIST : path.join(DIST, subpath);
};


// Css Styles
var styleTask = function(stylesPath, srcs) {
  return gulp.src(srcs.map(function(src) {
      return path.join('app', stylesPath, src);
    }))
    .pipe($.changed(stylesPath, {extension: '.css'}))
    .pipe(gulp.dest('.tmp/' + stylesPath))
    .pipe($.minifyCss())
    .pipe(gulp.dest(dist(stylesPath)))
    .pipe($.size({title: stylesPath}));
};

// Image optimization
var imageOptimizeTask = function(src, dest) {
  return gulp.src(src)
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(dest))
    .pipe($.size({title: 'images'}));
};

// Copy web fonts to dist
gulp.task('fonts', function() {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest(dist('fonts')))
    .pipe($.size({
      title: 'fonts'
    }));
});

// js ugligy for production environment
gulp.task('js-uglify', function() {
  gulp.src('app/js/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/js'))
});

// css minify for production environment
gulp.task('css-minyfy', function() {
  gulp.src('app/css/*.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('dist/css'))
});

// html minify for production environment
gulp.task('html-minyfy', function() {
  gulp.src('app/**/*.html')
    .pipe($.minifyHtml({
      quotes: true,
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest('dist'))
});

// compile and join scss files
gulp.task('compass', function() {
  return gulp.src(['app/scss/**/*.scss'])
    .pipe(compass({
      css: 'app/css',
      sass: 'app/scss',
      image: 'app/images'
    }))
    .pipe(gulp.dest('app/css'))
})


// Compile and automatically prefix stylesheets
gulp.task('styles', function() {
  return styleTask('styles', ['**/*.css']);
});

// Optimize images
gulp.task('images', function() {
  return imageOptimizeTask('app/images/**/*', dist('images'));
});

// Copy all files at the root level (app)
gulp.task('copy', function() {
  var app = gulp.src([
    'app/*',
    '!app/test',
    '!app/scss',
    '!app/elements',
    '!app/bower_components',
    '!app/cache-config.json',
    '!**/.DS_Store'
  ], {
    dot: true
  }).pipe(gulp.dest(dist()));

  // Copy over only the vendor js we need
  // These are things that we want to use like that
  var jsVendor = gulp.src([
    'app/js/vendor/*'
  ]).pipe(gulp.dest(dist('js/vendor')));

  return merge(app, jsVendor)
    .pipe($.size({
      title: 'copy'
    }));
});



// Clean output directory
gulp.task('clean', function() {
  return del(['.tmp', dist()]);
});

// Watch files for changes & reload
gulp.task('serve', ['styles'], function() {
  browserSync({
    port: 5000,
    notify: false,
    logPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: ['.tmp', 'app'],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['app/*.html'], reload);
  gulp.watch(['app/scss/**/*.scss'], ['compass']);
  gulp.watch(['app/css/*.css'], ['styles', reload]);
  gulp.watch(['app/js/**/*.js'], reload);
  gulp.watch(['app/images/**/*'], reload);
});

// Build production files, the default task
gulp.task('default', ['clean'], function(cb) {
  // Uncomment 'cache-config' if you are going to use service workers.
  runSequence(
    ['copy', 'styles', 'fonts'],
    ['images', 'js-uglify', 'css-minyfy', 'html-minyfy'],
    cb);
});












