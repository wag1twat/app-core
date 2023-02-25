const gulp = require('gulp')
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const merge = require('merge-stream')
const typescript = require('typescript')
const concat = require('gulp-concat')
const config = require('./tsconfig.json')

const srcPath = __dirname + '/src/**/*.ts'
const docsPath = [__dirname + '/src/.md', __dirname + '/src/**/.md']
const distPath = __dirname + '/dist'

function cleanup(path) {
    return gulp
        .src(path, { read: true, allowEmpty: true })
        .pipe(clean({ force: true }))
}

gulp.task('cleanDocs', () => {
    return cleanup(__dirname + '/*.md')
})

gulp.task('createDocs', () => {
    return gulp.src(docsPath).pipe(concat('README.md')).pipe(gulp.dest('./'))
})

gulp.task('cleanDist', () => {
    return cleanup(distPath)
})

gulp.task('createDist', () => {
    const tsResult = gulp
        .src(srcPath)
        .pipe(sourcemaps.init())
        .pipe(
            ts({
                typescript,
                ...config.compilerOptions,
            })
        )

    return merge([
        tsResult.dts.pipe(gulp.dest(distPath)),
        tsResult.js
            .pipe(
                babel({
                    presets: [
                        ['@babel/preset-env', { targets: { node: '16' } }],
                    ],
                })
            )
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist')),
    ])
})