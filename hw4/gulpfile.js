const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rewriteCSS = require('gulp-rewrite-css');

gulp.task('styles', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rewriteCSS({destination: './dist/css'}))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['styles']);
});
