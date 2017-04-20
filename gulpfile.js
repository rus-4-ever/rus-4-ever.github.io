var gulp 		= require('gulp'),
	concatCSS 	= require('gulp-concat-css'),
	bs 			= require('browser-sync').create(),
	reload      = bs.reload;

gulp.task('default',function(){
	console.log('TEST!!!')
});

gulp.task('html_copy',function(){
	return gulp.src("src/*.html")
		.pipe(gulp.dest('dist'));
});

gulp.task('css_concat',function(){
	return gulp.src("src/css/*.css")
		.pipe(concatCSS('css/main.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('server',function(){
	bs.init({
		server: {
			baseDir: "./src/"
		}
	});
	gulp.watch("*.html").on('chahge',reload);
});