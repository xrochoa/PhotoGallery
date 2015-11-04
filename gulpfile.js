// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cdnizer = require("gulp-cdnizer");
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');




// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

// Minify Css
gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));

});

// Minify Bundle JS
gulp.task('scripts', function() {
    return gulp.src('js/bundle.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('dist/js'));
});

//Replacing local links with CDNs and minify index.html
gulp.task('cdn', function() {
    return gulp.src("index.html")
        .pipe(cdnizer([{
            file: 'bower_components/angular/angular.js',
            package: 'angular',
            cdn: 'https://ajax.googleapis.com/ajax/libs/angularjs/${ version }/angular.min.js'
        }, {
            file: 'bower_components/angular-animate/angular-animate.js',
            package: 'angular-animate',
            cdn: 'https://ajax.googleapis.com/ajax/libs/angularjs/${ version }/angular-animate.min.js'
        }, {
            file: 'bower_components/angular-route/angular-route.js',
            package: 'angular-route',
            cdn: 'https://ajax.googleapis.com/ajax/libs/angularjs/${ version }/angular-route.min.js'
        }, {
            file: 'bower_components/bootstrap/dist/css/bootstrap.css',
            package: 'bootstrap',
            cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/${ version }/css/bootstrap.min.css'
        }, {
            file: 'bower_components/bootstrap/dist/js/bootstrap.js',
            package: 'bootstrap',
            cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/${ version }/js/bootstrap.min.js'
        }, {
            file: 'bower_components/jquery/dist/jquery.js',
            package: 'jquery',
            cdn: 'https://ajax.googleapis.com/ajax/libs/jquery/${ version }/jquery.min.js'
        }, {
            file: 'css/style.css',
            cdn: 'css/style.min.css'
        }, {
            file: 'js/bundle.js',
            cdn: 'js/bundle.min.js'
        }]))
        .pipe(minifyHTML())
        .pipe(gulp.dest("dist"));


});

//Minify  content HTML
gulp.task('minify-html', function() {
    return gulp.src('views/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/views'));
});



// Default Task
gulp.task('default', ['lint', 'css', 'scripts', 'cdn', 'minify-html']);