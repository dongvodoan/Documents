# SETUP LARAVEL NEW VERSION ON WINDOWS
## Step 1
	- Install a WebServer such as Wampp, Xampp,...
	- Link download Xampp: https://www.apachefriends.org/index.html
	- Link download Wampp: http://www.wampserver.com/en/
	- When download completed, then install normal
## Step 2
	- Open file php.ini then find to line this ;extension=php_openssl.dll, ignore ; in this line. Next, save file and restart apache.
	- Note: this setup can skip if install composer cannot error
## Step 3
	- Install composer
	- Link download composer: https://getcomposer.org/Composer-Setup.exe
	- In processing install composer, a notification will display question choose foldel to save file php.exe. With wamp, this path: `C:\wamp\bin\php\php5.5.12\php.exe` or with xampp, this path: `c:\xampp\php\php.exe`
	- Install normal
## Step 4
	- Download and Install Git if you want to use GitHub for My project
	- Note: To sure you installed everything OK! you open command line and run command:
	- `php -v`
	- `composer -v`
	- `git --version`
## Step 5
	- Open command line to foldel `htdocs` if use Xampp. To `www` if use Wampp
	- Run command: `composer create-project laravel/laravel Name-my-project --prefer-dist`
	- Waiting for some times.
	- run browser: `http://localhost/name-my-project/puclic`
	- Note: You need sure runed Apache
	Good Luck!