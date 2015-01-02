var gulp = require('gulp'),
    pipe = require('multipipe'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')()
    ;


// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync.init(['styles/main.css', '*.html', 'scripts/**/*.js'], {
        server: {
            baseDir: '.'
        }
    });
});

// Sass task, will run when any SCSS files change.
gulp.task('sass', function() {
    var combined = pipe(
        gulp.src('styles/main.scss'),
        plugins.sass({ style: 'expanded' }),
        plugins.autoprefixer(),
        gulp.dest('styles')
    );
    combined.on('error', function(err) {
        console.warn(err.message);
    });
    return combined;
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch('styles/*.scss', ['sass']);
});