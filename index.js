var gulp = require('gulp'),
    bootlint  = require('gulp-bootlint'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    _ = require('underscore'),
    elixir = require('laravel-elixir'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities'),
    notification = require('laravel-elixir/ingredients/commands/Notification');

elixir.extend('bootlint', function (src, options) {
    var config = this;

    options = _.extend({
        stoponerror:   !config.production,
        stoponwarning: !config.production,
        loglevel:      !config.production
    }, options);

    src = "./" + utilities.buildGulpSrc(src);

    gulp.task('bootlint', function () {
        var onError = function(e) {
            new notification().error(e, 'Bootlint Failed!');
            this.emit('end');
        };

        return gulp.src(src)
            .pipe(bootlint(options)).on('error', onError)
            .pipe(new notification().message('Bootlint Succeed!'));
    });

    this.registerWatcher('bootlint', config.assetsDir + '/**/*.+(blade.php|html)');

    return this.queueTask('bootlint');
});
