> Gulp plugin for indent any file

```javascript
$.gulp.task('indent', () => {
    const indent = require('gulp-transform-indent')

    return $
    .gulp
    .src('app/**/*')
    .pipe(indent({
        spacesBefore: '  ',
        spacesAfter: '    '
    }))
    .pipe($.gulp.dest('app'))
})
```