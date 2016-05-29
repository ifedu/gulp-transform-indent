> Gulp plugin for indent any file

```javascript
const gulp = require('gulp')

gulp.task('indent', () => {
    const indent = require('gulp-transform-indent')

    return gulp
    .src('app/**/*')
    .pipe(indent({
        spacesBefore: 2,
        spacesAfter: 4
    }))
    .pipe(gulp.dest('app'))
})
```