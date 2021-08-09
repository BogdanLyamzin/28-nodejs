const {src, dest} = require("gulp");
const imagemin = require("gulp-imagemin");
cache = require('gulp-cache');

const {img} = require("./paths");

const images = ()=> 
    src(img.src)
        .pipe(cache(imagemin()))
        .pipe(dest(img.dist));

module.exports = images;