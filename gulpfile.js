var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function() {
	console.log('this test proves true');
});

gulp.task('sass', function() {
	return gulp.src('app/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});
