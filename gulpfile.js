const elixir = require('laravel-elixir');
var gulp = require('gulp');
var shell = require('gulp-shell');
var task = elixir.Task;

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir.extend('routes', function(message) {
  new task('routes', function() {
    return gulp.src('').pipe(shell('php artisan routes:javascript'));
  });
});

elixir(mix => {
    // mix.sass('app.scss')
    mix.copy('node_modules/font-awesome', 'public/vendors/font-awesome');
    mix.copy('node_modules/semantic-ui/dist', 'public/vendors/semantic-ui');
    // mix.routes();
    mix.webpack('app.js');
});
