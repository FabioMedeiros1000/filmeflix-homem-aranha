const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function comprimeImagens(){
    return gulp.src('./assets/images/**/*')
        .pipe(changed('./dist/images'))
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest('./dist/images'));
}

// exports.default = comprimeImagens;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass, comprimeImagens))
}
