import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import nunjucks from 'nunjucks'; // eslint-disable-line import/no-extraneous-dependencies
import gulpjucks from 'gulp-nunjucks';

const srcViews = 'src/views/';
const distViews = 'dist/';
export const extViews = '*.+(html|njk)';

export function views() {
  const nunjucksEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader('src'));

  return gulp
    .src(`${srcViews}${extViews}`)
    .pipe(
      gulpjucks.compile(
        {},
        {
          env: nunjucksEnv,
        }
      )
    )
    .pipe(
      htmlmin({
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest(distViews));
}
