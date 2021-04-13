const gulp = require('gulp');
const del = require('del');
const path = require('path');

const defaultBuildPath = path.join(__dirname, '../../out-tsc/main');
 /** tasks */

gulp.task(
  'prismaClient',
  gulp.series(cleanPrismaClient, prismaClient),
);

gulp.task('default', gulp.series(prismaClient));


/** helper functions */
function clean(folderPath) {
    return del(`${folderPath}/**`)
}

function cleanPrismaClient() {
    return clean(path.join(__dirname, './dist/electron'))
}

function prismaClient() {
  return gulp
    .src('src/electron/prisma-client/**/*')
    .pipe(gulp.dest(path.join(__dirname, './dist/electron/prisma-client')));
}
