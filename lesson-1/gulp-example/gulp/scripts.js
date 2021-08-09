const {src, dest} = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");

const {js} = require("./paths");

const scripts = ()=> 
    src(js.src)
        .pipe(concat("scripts.js"))
        .pipe(terser())
        .pipe(dest(js.dist));

module.exports = scripts;