var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('app', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('watch', ['app'], function() {
    gulp.watch('src/app/*.ts', ['app']);
});
