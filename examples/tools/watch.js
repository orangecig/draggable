import gulp from 'gulp';
import {reloadServer, startServer} from './server';
import {scripts} from './tasks/scripts';
import {styles} from './tasks/styles';
import {extViews, views} from './tasks/views';
import {reportWatchStats} from './helpers';

export function watch() {
  startServer();

  gulp.watch('src/**/*.js', gulp.series(scripts, reloadServer));

  // only need to watch `styles` task, as it will `stream` changes to the server
  const watchStyles = gulp.watch('src/**/*.scss', styles);
  watchStyles.on('change', reportWatchStats);

  const watchViews = gulp.watch(`src/**/${extViews}`, gulp.series(views, reloadServer));
  watchViews.on('change', reportWatchStats);
}
