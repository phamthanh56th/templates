const gulp = require('gulp');
const sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minCss = require('gulp-minify-css');
var rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');



const file = {
	srccss: 'admin/scss/mystyle.scss',
	destcss: 'assets/css',
	srcjs: 'admin/js/*.js',
	destjs: 'assets/js'
}
function css() {
 	return gulp.src(file.srccss)
 	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(file.destcss))

    // output the minified version
    .pipe(minCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(file.destcss))


    .pipe(livereload())
    .pipe(browserSync.stream());
}
function js(){
    return gulp.src(file.srcjs,{ sourcemaps: true })
        .pipe(concat('myscript.js'))
        .pipe(gulp.dest(file.destjs),{ sourcemaps: true })
        .pipe(livereload());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: './assets'
        },
    });
    livereload.listen();
    gulp.watch(file.srccss, css);
    gulp.watch(file.srcjs, js);
    gulp.watch(['./assets/*.html']).on('change', browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.watch = watch;



// let gulp = require('gulp');
// let cleanCSS = require('gulp-clean-css');
 
// gulp.task('minify-css', () => {
//   return gulp.src('styles/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'));
// });