const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

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

function comprimeJavascript(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

// function moveHtml(){
//     return gulp.src('./src/index.html')
//         .pipe(rename({ suffix: '-copy' }))
//         .pipe(gulp.dest('./temp'))
//         .pipe(gulp.src('./temp/*.html'))
//         .pipe(replace('ENDERECO_CSS', './styles/main.css'))
//         .pipe(replace('ENDERECO_JAVASCRIPT', './scripts/main.js'))
//         .pipe(gulp.dest('./dist/'))
//         .pipe(gulp.src('./temp', { read: false, allowEmpty: true }))
//         .pipe(clean({ force: true }));
// }

function moveHtml() {
    return gulp.src('./src/index.html') // Seleciona o arquivo HTML original
        .pipe(rename({ suffix: '-copy' })) // Renomeia o arquivo com um sufixo
        .pipe(gulp.dest('./temp')) // Salva a cópia na pasta temporária
        .on('end', function() {
            gulp.src('./temp/index-copy.html') // Seleciona o arquivo renomeado
                .pipe(replace('ENDERECO_CSS', './styles/main.css')) // Substitui o endereço do CSS
                .pipe(replace('ENDERECO_JAVASCRIPT', './scripts/main.js')) // Substitui o endereço do JS
                .pipe(rename({ basename: 'index' })) // Renomeia para 'index.html'
                .pipe(gulp.dest('./dist/')) // Salva os arquivos modificados na pasta final
                .on('end', function() {
                    // Após a substituição ser concluída, exclui a pasta temporária
                    gulp.src('./temp', { read: false, allowEmpty: true })
                        .pipe(clean({ force: true }));
                });
        });
}

exports.dist = gulp.parallel(comprimeImagens, compilaSass, comprimeJavascript, moveHtml);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass, comprimeImagens))
}
