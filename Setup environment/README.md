# TUTORIAL SETUP ENVIRONMENT CODE PHP LARAVEL - step by step
## 1. Install Virtual-Box
 - Link download Virtual-box:  https://www.virtualbox.org/wiki/Downloads
 - way to install package in ubuntu (you can see this): https://github.com/at-dongvd/Documents
 - way to install don't need download package, use install thought terminal in ubuntu:
 	- Add PPA: 'sudo apt-get install dkms'
               'wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -'
        - For Ubuntu 14.04
               'sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian trusty contrib" >> /etc/apt/sources.list.d/virtualbox.list''
        - For Ubuntu 13.10
               'sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian saucy contrib" >> /etc/apt/sources.list.d/virtualbox.list''
        - For Ubuntu 13.04
               'sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian raring contrib" >> /etc/apt/sources.list.d/virtualbox.list''
        - For Ubuntu 12.10
               'sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian quantal contrib" >> /etc/apt/sources.list.d/virtualbox.list''
        - For Ubuntu 12.04
               'sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian precise contrib" >> /etc/apt/sources.list.d/virtualbox.list''
    - Next run this command:
        - 'sudo apt-get update'
    - Now, Install it:
        - 'sudo apt-get install virtualbox-4.3'
        OK! Complete install Virtual-box.
## 2. Install Vagrant
    - Link download: https://www.vagrantup.com/downloads.html
    - install vagrant-plugin by this cmd: 'vagrant plugin install vagrant-vbguest'
## 3. Install Composer
    - Open terminal run this cmnd: 'curl -s http://getcomposer.org/installer | php'
    - Use this cmd to check download composer complete: 'php composer.phar'
    - move file downloaded to folder /user/bin and rename it from composer.phar to composer, all run by this cmd:
    'sudo mv composer.phar /usr/bin/composer'
    - '*Note'
    	- above commands and composer need PHP 5.3.2+ to run, you must sure installed it. when you run aboce commands by terminal, it'll has error and 1 line command to install PhP. you run this command to OK!
## 4.1 Setup environment Homestead
    - Add box vagrant: 'vagrant box add laravel/homestead'
    download box too long, you waitting for it download complete.
    - Clone and config Homestead
       - Clone by git: 'cd ~'
                       'git clone https://github.com/laravel/homestead.git Homestead'
       - Config homestead:
                       'cd Homestead'
                - Create file Homestead.yaml into folder ~/.homestead
                       'bash init.sh'
                - create ssh key
                       'cd ~/.ssh'
                       'ssh-keygen -t rsa -C "you@homestead"'
                       or you can follow this link: https://github.com/at-dongvd/Documents/blob/master/README.md
    - Create 1 example project Laravel
		- Create folder project to comprise source code
			'cd ~'
			'sudo mkdir project'
		- Create 1 project laravel into folder project new create
			'cd project'
			'composer create-project laravel/laravel laravel --prefer-dist'
	    - Config file Homestead.yaml
			'cd ~'
			'sudo nano .homestead/Homestead.yaml or sudo gedit .homestead/Homestead.yaml'
			Then config it!
		- Open file /etc/hosts  and add into this line into last line of file:
            '192.168.10.10 bloglaravel.app'
    - OK! Complete setup environment Homestead! you run box to experiense
        - Some command to work with vagrant:
			'vagrant up #start virtual-machine'
			'vagrant reload #Restart virtual-machine'
			'vagrant halt #Shutdown virtual-machine'
			'vagrant ssh #go to virtual-machine thought ssh'
			'vagrant provision #update config virtual-machine'
## 4.2 Setup environment Cestos-7
	-  Steps to install

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
- link: https://github.com/at-dongvd/Documents
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
###### source: asiantech
