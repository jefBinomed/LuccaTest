"use strict";
// Include gulp
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;


gulp.task('serve',function(){
  browserSync.init({
    server:"./"
  });
  gulp.watch("./index.html").on('change', reload);  
  gulp.watch("./style.css").on('change', reload);  
  gulp.watch("./app.js").on('change', reload);
});


/* Default task */
gulp.task("default", ["serve"]);
