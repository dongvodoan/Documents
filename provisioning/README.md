# Vagrant Ansible for Laravel 5.2
## Vagrant Ansible creates a Vagrant installation for Laravel 5.2 using Ansible with the following environment information:
- Centos 7
- Apache 2.4.6
- PHP 7.0.4
- Mysql 5.7.11
- Private IP: 192.168.22.66
- Mysql
 - DB_USER: mydatabase
 - DB_PASSWORD: Secret@123
 - DB_DATABASE: mydatabase

## Local environment installation

### Required
- Vagrant >= 1.8
- [Vagrant vbguest plugin](https://github.com/dotless-de/vagrant-vbguest)

### Steps to install

##### Create Laravel project by composer
Refer [Laravel document] (https://laravel.com/docs/5.2)
```bash
composer create-project --prefer-dist laravel/laravel myproject
```
##### Checkout provision
```bash
git clone git@github.com: provisioning github url
cp provisioning  ~/myproject/provisioning ## copy provisioning to project folder
```
##### Vagrant up

```bash
cd provisioning
vagrant up
```
If there is something changed in provisioning folder you have to execute this command to update box
```bash
vagrant provision
```

##### SSH to box

```bash
vagrant ssh
```

##### Directory Permissions (after vagrant ssh)

```bash
cd ~/myproject
sudo chmod -R 777 $(find /home/vagrant/myproject/storage -type d)
sudo chmod -R 777 $(find /home/vagrant/myproject/bootstrap/cache -type d)
sudo chmod -R 644 $(find /home/vagrant/myproject/storage -type f)
sudo chmod -R 644 $(find /home/vagrant/myproject/bootstrap/cache -type f)
```

##### Add hosts

Open `/etc/hosts` file and add this line `192.168.22.66   myproject.me`

##### Fix issue change root password on MySQL 5.7

If you get permission denied when create database, you can run 2 commands to fix it after SSH to box

```bash
vagrant ssh
grep 'temporary password' /var/log/mysqld.log
mysql_secure_installation
```


# Coding style

[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) and [PHPMD](http://phpmd.org/) are used to check the coding style. The `cicle.yml` file is also available in the project root folder, it can help us to check coding style and unit testing when a member try to create a new pull request. The circelci configurations also can help us to make comments on github commit if something is wrong.  

#### PHP_CodeSniffer
Check the coding convention following [PSR-1](http://www.php-fig.org/psr/psr-1/), [PSR-2](http://www.php-fig.org/psr/psr-2/). Beside that function comment must follow some rules bellow:
- All global functions, class methods must have comment to explain the meaning of functions.
- Line 1 : Short description. There is a blank line after line 1
- Next lines: explain for parameters
 - `@param   type $paramName description`
 - Explain for all parameters line by line, there is no blank line bettween parameters description.
- Last line: return description
 - `@return type`
 - There is a blank line before return description line.

Local checking:
```bash
./vendor/bin/phpcs --standard=phpcs.xml
```
#### PHPMD
- [Code Size Rules](http://phpmd.org/rules/codesize.html)
- [Controversial Rules](http://phpmd.org/rules/controversial.html)
- [Design Rules](http://phpmd.org/rules/design.html)
- [Naming Rules](http://phpmd.org/rules/naming.html)
 - ShortVariable except for `$id`, `$e`
- [Unused Code Rules](http://phpmd.org/rules/unusedcode.html)

Local checking:
```bash
./vendor/bin/phpmd app text phpmd.xml
```
