const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass', 'copy:img'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/styles/**.scss', ['sass']);
  gulp.watch('index.html', ['html']);
});
gulp.task('build', ['sass', 'copy:img']);
gulp.task('sass', () => {
  gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/styles/'))
    .pipe(browserSync.stream());
});
gulp.task('html', () => {
  gulp.src('index.html')
    .pipe(browserSync.stream());
});
gulp.task('copy:img', () => {
  gulp.src('src/assets/img/*')
    .pipe(gulp.dest('build/assets/img/'));
});
