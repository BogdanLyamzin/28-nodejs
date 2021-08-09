const {watch} = require("gulp");
const browserSync = require('browser-sync').create();

const pages = require("./pages");
const styles = require("./styles");
const images = require("./images");
const scripts = require("./scripts");

const {html, css, img, js} = require("./paths");

const watchFiles = ()=> {
    browserSync.init({
        server: {
            baseDir: html.dist,
            routes: {
                "/css": css.dist,
                "/js": js.dist,
                "/img": img.dist
           }
        },
        port: 3000
    });
    
    watch(html.src, pages);
    watch(html.dist).on('change', browserSync.reload);
    watch(js.src).on('change', browserSync.reload);
    watch(css.src, styles);
    watch(img.src, images);
    watch(js.src, scripts);
}

module.exports = watchFiles;