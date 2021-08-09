const {src, dest} = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const {css} = require("./paths");

const styles = () =>
    src(css.src)
    .pipe(sass())
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(dest(css.dist))
    .pipe(browserSync.stream());

module.exports = styles;