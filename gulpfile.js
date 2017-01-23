var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    htmlreplace = require('gulp-html-replace'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    sass = require('gulp-sass'),
    // connect = require('gulp-connect-php'),
    browserSync = require('browser-sync').create();

gulp.task('server',['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// gulp.task('connect-sync', function(){
//   connect.server({}, function (){
//     browserSync({
//       proxy: '127.0.0.1:8080'
//     });
//   });
// 代理

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "leoDev"
//     });
// });

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.+(scss|sass)',['sass']);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    // gulp.watch('**/*.php').on('change', browserSync.reload);
});


gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

// gulp.task('webserver', function() {
//     gulp.src('./src/')
//         .pipe(webserver({
//             port: 1234,
//             livereload: true,
//             directoryListing: false,
//             open: true,
//             fallback: 'index.html'
//         }));
// });



gulp.task('concatCSS', function() {
    return gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css/'));
});//合併css

gulp.task('concatJS', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});//合併js

gulp.task('minify-css', function() {
    return gulp.src('./dist/css/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./dist/css/'));
});//壓縮css

gulp.task('uglify',function() {
    return gulp.src('./dist/js/all.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/js/'));
});//壓縮js

gulp.task('html-replace', function() {
    var opts = { comments: false, spare: false, quotes: true };
    return gulp.src('./*.html')
        .pipe(htmlreplace({
            'css': 'css/all.min.css',
            'js': 'js/all.min.js'
        }))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'));
});
 
gulp.task('imagemin', function() {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});//壓縮圖片


gulp.task('minify', ['html-replace', 'minify-css', 'uglify', 'imagemin']);
gulp.task('default', ['watch','server']);
