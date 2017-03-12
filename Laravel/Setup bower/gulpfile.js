var gulp = require('gulp');
var elixir = require('laravel-elixir');

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

elixir(function(mix) {
    // Combine scripts
  mix.scripts([ 
      'gentelella/vendors/jquery/dist/jquery.min.js',
      'gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
      'datatables.net/js/jquery.dataTables.min.js',
      'jquery-ui/jquery-ui.min.js',
      'raphael/raphael.min.js',
      'morris.js/morris.min.js'
    ],
    'public/backend/js/vendor.js',
    'vendor/bower_dl'
  );

  // Compile css
  mix.styles([
  	  'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css',
  	  'gentelella/vendors/font-awesome/css/font-awesome.min.css',
      'datatables.net-dt/css/jquery.dataTables.min.css',
      'datatables.net-responsive-dt/css/responsive.dataTables.min.css',
      'jquery-ui/themes/base/jquery-ui.min.css',
      'morris.js/morris.css' 
  ], 
    'public/backend/css/vendor.css',
    'vendor/bower_dl'
  );
});
