<VirtualHost *:80>
  ServerAdmin webmaster@localhost
  DocumentRoot {{ doc_root }}/public
  ServerAlias {{ domain }}


  <Directory {{ doc_root }}/public>
    Options Indexes FollowSymLinks Includes ExecCGI
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>

  ErrorLog "/var/log/httpd/{{domain}}.log"
  CustomLog "/var/log/httpd/html-access_log" common
</VirtualHost>
