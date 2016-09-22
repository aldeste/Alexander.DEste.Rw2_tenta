const gulp = require('gulp');
const plumber = require('gulp-plumber');

gulp.task('styles', () => {
  const sass = require('gulp-sass');
  const cleanCSS = require('gulp-clean-css');
  const postcss = require('gulp-postcss');
  const autoprefixer = require('autoprefixer');

  return gulp.src([
    './source/style/style.scss',
    './source/style/pattern_scaffolding.scss'
  ])
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true,
      omitSourceMapUrl: true
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({remove: false})
    ]))
    .pipe(cleanCSS({
      roundingPrecision: -1,
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('scripts', () => {
  const rollupBabel = require('rollup-plugin-babel');
  const rollup = require('rollup-stream');
  const source = require('vinyl-source-stream');
  const uglify = require('rollup-plugin-uglify');
  const includepaths = require('rollup-plugin-includepaths');

  return rollup({
    entry: './source/script/app.js',
    plugins: [
      rollupBabel({presets: ['es2015-rollup'], ignore: ['node_modules']}),
      includepaths({paths: ['./source/script']}),
      uglify()
    ]
  })
  .pipe(source('app.js'))
  .pipe(gulp.dest('./source/js'));
});

gulp.task('louis', () => {
  const louis = require('gulp-louis');

  louis({
    url: './public/patterns/04-pages-00-homepage/04-pages-00-homepage.html',
    timeout: 60,
    viewport: '1280x1024',
    engine: 'webkit',
    userAgent: 'Chrome/37.0.2062.120',
    noExternals: false,
    performanceBudget: {
      cssSize: 2550,
      cssCount: 1,
      jsCount: 1,
      requests: 25,
      medianLatency: 100,
      slowestResponse: 1000
    }
  });
});

gulp.task('watch', () => {
  gulp.watch('./source/style/**/*.scss', ['styles']);
  gulp.watch('./source/script/**/*.js', ['scripts']);
});

// Default gulp task
gulp.task('default', ['styles', 'scripts', 'watch']);
