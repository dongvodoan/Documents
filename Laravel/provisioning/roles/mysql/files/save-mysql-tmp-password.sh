log_file=/var/log/mysqld.log
tmp_pass=$(sudo grep 'password is generated' $log_file | awk -F'root@localhost: ' '{print $2}')
tmp_file=/root/.tmp.my.cnf
umask 0077
cat > $tmp_file <<EOF
[client]
user=root
password=$tmp_pass
connect-expired-password
EOF
