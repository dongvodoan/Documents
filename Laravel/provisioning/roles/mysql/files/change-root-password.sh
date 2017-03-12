new_pass='Secret@123'
mysql --defaults-file=/root/.tmp.my.cnf -e "ALTER USER 'root'@'localhost' IDENTIFIED BY  '$new_pass' "
umask 0077
cat > /root/.my.cnf <<EOF
[client]
user=root
password=$new_pass
EOF