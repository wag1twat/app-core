const gulp = require('gulp')
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const clean = require('gulp-clean');
const merge = require('merge-stream')
const typescript = require('typescript')
const config = require('./tsconfig.json')

const sourcePath = __dirname + '/lib/**/*.ts'
const destinationPath = __dirname + '/dist'

function cleanup(cb) {
    gulp.src(destinationPath, { read: false })
        .pipe(clean())
    cb()
}

function build (cb) {
    const tsResult = gulp.src(sourcePath)
        .pipe(sourcemaps.init())
        .pipe(ts({
            typescript,
            ...config.compilerOptions
        }))

    merge([
        tsResult.dts
            .pipe(gulp.dest(destinationPath)),
        tsResult.js
            .pipe(babel({
                presets: [
                    ["@babel/preset-env", { targets: { node: '16' }}]
                ]
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write('.')).pipe(gulp.dest('dist'))
    ]);

    cb()
}   

module.exports.default = gulp.series(cleanup, build);