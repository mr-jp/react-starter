"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');  //run a local dev server
var open = require('gulp-open');        //open a URL in a web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify');      //Transforms react JSX to JS
var source = require('vinyl-source-stream');    //use conventional text streams with Gulp
var concat = require('gulp-concat');    //concatenates files
var lint = require('gulp-eslint');    //Lint JS files, including JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html', //match any HTMl file
        js: './src/**/*.js', //match any JS file and subdirectories
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }    
};

//Start a local development server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//Go get index.html and open it in a browser at this URL
gulp.task('open', ['connect'], function() {
   gulp.src('dist/index.html')
    .pipe(open({uri:config.devBaseUrl + ':' + config.port + '/'}));
});

//handle HTML files and move to 'dist' and reload
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//handle JS files and move to 'dist' and reload
gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)                                //transform JSX to JS
        .bundle()                                           //bundle to single file
        .on('error', console.error.bind(console))           //log errors to console
        .pipe(source('bundle.js'))                          //name the bundle
        .pipe(gulp.dest(config.paths.dist + '/scripts'))    //where to put bundles
        .pipe(connect.reload());
})

//handle CSS files
gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
})

//Lint JS files
gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
})

//watch files for changes
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
})

//run when using 'gulp' in command line
gulp.task('default', ['html', 'open', 'watch', 'js', 'css', 'lint']);