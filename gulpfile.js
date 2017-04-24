var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var	concatCSS 	= require('gulp-concat-css');

gulp.task('default',function(){
	console.log('TEST!!!')
});

gulp.task('html_copy',function(){
	return gulp.src("src/*.html")
		.pipe(gulp.dest('dist'));
});

gulp.task('css_concat',function(){
	return gulp.src("./src/*/*.css")
		.pipe(concatCSS('main.css'))
		.pipe(gulp.dest('src/css/'));
});

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });

    gulp.watch("./src/*.html").on("change", reload);
    gulp.watch("./src/*/*.css").on("change", reload);
});