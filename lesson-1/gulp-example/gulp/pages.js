const {src, dest} = require("gulp");
const fileinclude = require('gulp-file-include');

const {html} = require("./paths");

const pages = () =>
    src(html.pages)
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file"
        })
      )
      .pipe(dest(html.dist));

module.exports = pages;