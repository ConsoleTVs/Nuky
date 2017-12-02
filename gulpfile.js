var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./theme/css'));
});

gulp.task('js', function() {
    gulp.src('src/js/theme.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./theme/js'))
});

gulp.task('watch', function () {
  gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss', './src/js/*.js'], ['sass', 'js']);
});
