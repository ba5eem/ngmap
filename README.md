# ngmap

```
cat /etc/os-release
PRETTY_NAME="Debian GNU/Linux 9 (stretch)"
NAME="Debian GNU/Linux"
VERSION_ID="9"
```

## setup docker

```
$ sudo apt update
$ sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
$ sudo apt update
$ apt-cache policy docker-ce
$ sudo apt install docker-ce
$ sudo systemctl status docker
$ sudo systemctl enable docker
```

## setup tileserver
```
$ git clone https://github.com/ba5eem/ngmap.git
$ cd ngmap
$ hostname -I | awk '{print $1}'
# outputs your ip address, for example: 123.456.0.50
$ sed -i -e 's/localhost/123.456.0.50/g' html/index.html
# move all the files into the folder your apache conf file is referencing
$ mv html/* /var/www/example.com/html/
```

## setup apache
```
sudo apt install apache2
sudo ufw allow 'WWW'
sudo systemctl status apache2
sudo systemctl enable apache2
```

### start tileserver
```
$ cd ~/ngmap/tiles
$ bash start_server.sh
```


### Visit your IP address


