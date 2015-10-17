var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
        branch : 'master',
        remoteUrl : 'https://vineey:SuperApocalypse416@github.com/vineey/vineey.github.io.git'
    }));
});