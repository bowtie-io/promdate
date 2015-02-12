var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var assets = [
  "./vendor/handlebars.js",
  "./src/main.js"
];

gulp.task('min', function(){
  gulp.src(assets)
    .pipe(uglify())
    .pipe(concat('bowtie.min.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('dist', function(){
  gulp.src(assets)
    .pipe(concat('bowtie.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('default', ['min', 'dist']);
