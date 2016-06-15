// var gulp          = require('gulp');
// var sourcemaps    = require('gulp-sourcemaps');
// var sass          = require('gulp-sass');
// var autoprefixer  = require('gulp-autoprefixer');
// var concat        = require('gulp-concat');
// var uglify        = require('gulp-uglify');
//
// // Static Server + watching scss/html files
// gulp.task('watch', function() {
//     gulp.watch("src/scss/*.scss", ['sass']).on('change', function(event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
//     gulp.watch("src/scss/pages/*.scss", ['sass']).on('change', function(event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
//     gulp.watch("src/scss/components/*.scss", ['sass']).on('change', function(event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
//     gulp.watch("src/js/*.js", ['scripts']).on('change', function(event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
//
// });
//
// //falta tratamento de JS
// gulp.task('scripts', function() {
//   return gulp.src('src/js/*.js')
//     .pipe(sourcemaps.init())
//     .pipe(concat('application.min.js'))
//     .pipe(uglify())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./dist/js'));
// });
// //lint
//
// // Compile Our Sass
// var sassOptions = {
//   errLogToConsole: true,
//   outputStyle: 'compressed'
// };
//
// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("src/scss/style.scss")
//         .pipe(sourcemaps.init())
//         .pipe(sass(sassOptions).on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(autoprefixer())
//         .pipe(sass())
//         .pipe(gulp.dest("dist/css"));
// });
//
// gulp.task('default', ['sass', 'scripts', 'watch']);
