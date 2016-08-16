##Installing Bower tutorial - Setup by setup
 I. Setup node.js:

- link research: https://nodejs.org/en/download/package-manager/ 
or please you search google if this cannot install nodejs :)

 II. Installing Bower Globally:

 - run command: `npm install -g bower` or `sudo npm install -g bower`.
 - Next create a `.bowerrc` file in the root of the your project
   - Contents of .bowerrc
		`{
  			"directory": "vendor/bower_dl"
		}`

 III. Installing Bower Locally:

 - stay your project run command: `npm install bower` or `sudo npm install bower`.
 - create the `bower.json file` in the project root:
 Contents bower.json file
	`{
	  "name": "l5beauty",
	  "description": "My awesome blog",
	  "ignore": [
	    "**/.*",
	    "node_modules",
	    "vendor/bower_dl",
	    "test",
	    "tests"
	  ]
	}`

	- OK! we can begin use bower!
	- example: setup bootstrap into bower
		`bower install jquery bootstrap --save`.

 IV. Use gulp zip file of laravel elixir:
 ## Install package
 - Run command: `npm install`.
 (it'll install gulp and laravel elixir package, check it in package.json file).

 ## Working with gulpfile.js
 - zip file .js: Combine scripts

  `mix.scripts([ 
      'gentelella/vendors/jquery/dist/jquery.min.js',
      'gentelella/vendors/bootstrap/dist/js/bootstrap.min.js',
      'datatables.net/js/jquery.dataTables.min.js',
      'jquery-ui/jquery-ui.min.js',
      'raphael/raphael.min.js',
      'morris.js/morris.min.js'
    ],
    'public/backend/js/vendor.js',
    'vendor/bower_dl'
  );`

  - zip file .css: Compile css

  `mix.styles([
  	  'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css',
  	  'gentelella/vendors/font-awesome/css/font-awesome.min.css',
      'datatables.net-dt/css/jquery.dataTables.min.css',
      'datatables.net-responsive-dt/css/responsive.dataTables.min.css',
      'jquery-ui/themes/base/jquery-ui.min.css',
      'morris.js/morris.css' 
  ], 
    'public/backend/css/vendor.css',
    'vendor/bower_dl'
  );`

  - link research if u want zip type another: https://laravel.com/docs/5.2/elixir

  ## Running Elixir

  - run command in your project: `gulp` or `sudo gulp`

  ## Complete! if you have question about setup bower, you can contact me! fb:Cu Spirit

  - link need: http://laravelcoding.com/blog/laravel-5-beauty-using-bower 


