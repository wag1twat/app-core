const gulp = require('gulp')
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const clean = require('gulp-clean');
const merge = require('merge-stream')
const typescript = require('typescript')
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const config = require('./tsconfig.json')

const sourcePath = __dirname + '/lib/**/*.ts'
const docsPath = [__dirname + '/lib/*.md', __dirname + '/lib/**/*.md']
const destinationPath = __dirname + '/dist'

function cleanup(cb) {
    gulp.src(destinationPath, { read: false })
        .pipe(clean())
    gulp.src(__dirname + '/README.md', { read: false })
        .pipe(clean())
    cb()
}

function concatMds(cb) {
    const stream = gulp.src(docsPath)
    
    stream
        .pipe(concat('README.md'))
        .pipe(gulp.dest('./'))

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

module.exports.default = gulp.series(cleanup, concatMds, build);