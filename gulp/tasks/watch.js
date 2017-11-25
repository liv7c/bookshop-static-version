const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('css-inject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app/"
    }
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

  watch('./app/**/*.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('css-inject');
  });
});
