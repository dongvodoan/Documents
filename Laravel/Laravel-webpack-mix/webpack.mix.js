let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine([ 
		'vendor/bower_dl/jquery/dist/jquery.min.js',
		'vendor/bower_dl/boostrap/dist/js/bootstrap.min.js',
	], 
	'public/js/vendor.js'
);

mix.combine([ 
		'vendor/bower_dl/boostrap/dist/css/bootstrap.min.css',
		'vendor/bower_dl/font-awesome/css/font-awesome.min.css',
	], 
	'public/css/vendor.css'
);
