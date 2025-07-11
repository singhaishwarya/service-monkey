const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Service Monkey licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Service Monkey - v1.1.0 based on Tailwind Starter Kit by Service Monkey
=========================================================

* Product Page: https://www.service-monkey.com/product/service-monkey
* Copyright 2021 Service Monkey (https://www.service-monkey.com)
* Licensed under MIT (https://github.com/servicemonkey/service-monkey/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.service-monkey.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Service Monkey

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Service Monkey licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Service Monkey - v1.1.0 based on Tailwind Starter Kit by Service Monkey
=========================================================

* Product Page: https://www.service-monkey.com/product/service-monkey
* Copyright 2021 Service Monkey (https://www.service-monkey.com)
* Licensed under MIT (https://github.com/servicemonkey/service-monkey/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.service-monkey.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Service Monkey

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Service Monkey licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Service Monkey - v1.1.0 based on Tailwind Starter Kit by Service Monkey
=========================================================

* Product Page: https://www.service-monkey.com/product/service-monkey
* Copyright 2021 Service Monkey (https://www.service-monkey.com)
* Licensed under MIT (https://github.com/servicemonkey/service-monkey/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.service-monkey.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Service Monkey

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
