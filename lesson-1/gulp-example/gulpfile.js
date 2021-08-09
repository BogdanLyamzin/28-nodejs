const {series, parallel} = require("gulp");

const {clean, pages, styles, images, scripts, watchFiles} = require("./gulp");

// Define complex tasks
const build = series(clean, parallel(pages, styles, images, scripts));
const dev = series(build, watchFiles);

exports.build = build;
exports.dev = dev;
exports.default = dev;