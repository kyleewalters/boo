var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename'); 
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var zip = require('gulp-zip');

var scripts = 'assets/js/*.js';
var scriptDist = 'src/assets/js';
var styles = 'assets/css/*.css';
var styleDist = 'src/assets/css';

gulp.task('javascript', function() {
    return gulp.src(scripts)
               .pipe(concat('index.js'))
               .pipe(uglify())
               .pipe(gulp.dest(scriptDist));
});

gulp.task('css', function() {
    return gulp.src(styles)
               .pipe(cssnano())
               .pipe(gulp.dest(styleDist));
});

gulp.task('zip', function() {
    return gulp.src('src/**/*')
               .pipe(zip('thewellspring.zip'))
               .pipe(gulp.dest('dist'));         
});

gulp.task('default', ['javascript', 'css', 'zip']);
