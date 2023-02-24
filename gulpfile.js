import path from 'path';
import { fileURLToPath } from 'url';
import gulp from 'gulp'
import ts from 'gulp-typescript'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify';
import babel from 'gulp-babel'
import { deleteSync } from 'del'
import merge from 'merge-stream'
import typescript from 'typescript'
import config from './tsconfig.json' assert { type: 'json' }

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const sourcePath = __dirname + '/lib/**/*.ts'
const destinationPath = __dirname + '/dist'

function cleanup(cb) {
    deleteSync(__dirname + '/dist', { force: true });
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

export default gulp.series(cleanup, build);