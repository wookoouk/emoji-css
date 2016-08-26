var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
    var spriteData =
        gulp.src('./src/_emoji/*.*')
            .pipe(spritesmith({
                imgName: 'emoji.png',
                cssName: 'emoji.css',
                cssFormat: 'stylus',
                algorithm: 'binary-tree',
                cssTemplate: './src/handlebarsStr.css.handlebars',
                cssVarMap: function (sprite) {
                    sprite.name = 'em-' + sprite.name;
                    sprite.name = sprite.name.replace('+', '--');
                }
            }));

    spriteData.img.pipe(gulp.dest('./dist/'));
    spriteData.css.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sprite']);


