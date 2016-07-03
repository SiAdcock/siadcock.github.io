const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/styles/**.scss', ['sass']);
});
gulp.task('build', ['sass', 'copy:img']);
gulp.task('sass', () => {
  gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
});
gulp.task('copy:img', () => {
  gulp.src('src/assets/img/*')
    .pipe(gulp.dest('build/assets/img/'));
});
