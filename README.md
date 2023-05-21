# Introduction
* 在`linux`系统上配置`bcc`、`prometheus`、`grafana`、`mysql`，`bcc`将监控到的数据发往`mysql`
* 在本地中开发前后端，后端访问`Linux`中的`mysql`查找数据，返回给前端，前端使用`Vue2`开发，后端使用`Koa`开发

# 项目启动前置准备工作
> 前置操作: 使用`root`身份登录 `sudo -s`
## `Linux`
1. 使用`Ubuntu`
2. 配置`Nat`，将虚拟机地址设置为`10.0.0.155`
3. 开启`telnet`
## `bcc`
在`Ubuntu`中安装`bcc`
1. 根据`Ubuntu`版本执行
   ```shell
    # Trusty (14.04 LTS) and older
    VER=trusty
    echo "deb http://llvm.org/apt/$VER/ llvm-toolchain-$VER-3.7 main
    deb-src http://llvm.org/apt/$VER/ llvm-toolchain-$VER-3.7 main" | \
      sudo tee /etc/apt/sources.list.d/llvm.list
    wget -O - http://llvm.org/apt/llvm-snapshot.gpg.key | sudo apt-key add -
    sudo apt-get update

    # For Bionic (18.04 LTS)
    sudo apt-get -y install zip bison build-essential cmake flex git libedit-dev \
      libllvm6.0 llvm-6.0-dev libclang-6.0-dev python zlib1g-dev libelf-dev libfl-dev python3-setuptools \
      liblzma-dev arping netperf iperf

    # For Focal (20.04.1 LTS)
    sudo apt install -y zip bison build-essential cmake flex git libedit-dev \
      libllvm12 llvm-12-dev libclang-12-dev python zlib1g-dev libelf-dev libfl-dev python3-setuptools \
      liblzma-dev arping netperf iperf

    # For Hirsute (21.04) or Impish (21.10)
    sudo apt install -y zip bison build-essential cmake flex git libedit-dev \
      libllvm11 llvm-11-dev libclang-11-dev python3 zlib1g-dev libelf-dev libfl-dev python3-setuptools \
      liblzma-dev arping netperf iperf

    # For Jammy (22.04)
    sudo apt install -y zip bison build-essential cmake flex git libedit-dev \
      libllvm14 llvm-14-dev libclang-14-dev python3 zlib1g-dev libelf-dev libfl-dev python3-setuptools \
      liblzma-dev libdebuginfod-dev arping netperf iperf

    # For other versions
    sudo apt-get -y install zip bison build-essential cmake flex git libedit-dev \
      libllvm3.7 llvm-3.7-dev libclang-3.7-dev python zlib1g-dev libelf-dev python3-setuptools \
      liblzma-dev arping netperf iperf

    # For Lua support
    sudo apt-get -y install luajit luajit-5.1-dev
    ```
2. 下载[`bcc release v0.24.0`](https://github.com/iovisor/bcc/releases/tag/v0.24.0)的`bcc-src-with-submodule.tar.gz
`并解压
3. 编译`bcc`
    ```shell
    mkdir bcc/build; cd bcc/build
    cmake ..
    make
    sudo make install
    cmake -DPYTHON_CMD=python3 .. # build python3 binding
    pushd src/python/
    make
    sudo make install
    popd
    ```
## `prometheus`
1. 下载[`prometheus`](https://prometheus.io/download)
2. 解压
3. 后台运行启动prometheus
    ``` shell
    $(prometheus路径) --config.file="$(prometheus.yml的路径)" &
    ```
4. 配置开机时启动
## `granafa`
1. 下载[`grafana`](https://grafana.com/grafana/download?pg=get&plcmt=selfmanaged-box1-cta1)
    ``` shell
    sudo apt-get install -y adduser libfontconfig1
    wget https://dl.grafana.com/enterprise/release/grafana-enterprise_9.5.2_amd64.deb
    sudo dpkg -i grafana-enterprise_9.5.2_amd64.deb
    ```
2. 启动`grafana`并配置开机时启动
    ``` shell
    systemctl start grafana.server
    systemctl enable grafana.server
    ```
## `node_exporter`
1. 下载[`node_exporter`](https://prometheus.io/download)
2. 解压
3. 后台启动`node_exporter`
    ``` shell 
    #长时间运行
    nohup $(node_exporter所在路径) &
    ```
## `mysql`
1. 安装`mysql`
    ``` shell
    sudo apt install mysql -y
    ```
2. 配置`mysql`安全
    ``` shell
    sudo mysql_secure_installation

    #配置密码选择 yes
    #密码强度设置为 low
    #为root设置密码
    #不移除匿名用户
    #允许root用户远程登录
    #不移除设置数据库
    #重载权限表
    ```
3. 检测`mysql`是否运行
    ``` shell
    systemctl status mysql.service
    #或者
    lsof -i:3306
    #或者
    ss -naltp | grep 3306
    ```
4. 配置开机时启动
5. 进入`mysql`
    ``` shell
    mysql -u root -p
    ```
6. 配置密码连接
    ``` sql
    #查看当前的连接方式
    select user, plugin from mysql.user;
    #如果显示不是用户名和密码连接则
    use mysql;
    update user set plugin='mysql_native_password' where user='root';
    flush privileges;
    #以防万一，重新设置密码强度为Low
    set global validate_password_policy=LOW;
        #查看密码强度
        SHOW VARIABLES LIKE ‘validate_password%’;
        #看validate password policy是否为LOW
    #重新设置密码
    alter user 'root'@'localhost' identified by '你想设置的密码';
    ```
7. 配置`ip`为`0.0.0.0`
    ``` shell
    #寻找mysql的位置
    whereis mysql
    #编辑配置文件
    vi $(mysql的位置)mysql.conf.d/mysqld.cnf
    #将mysqld.cnf中的 bind-address = 127.0.0.1 修改为 0.0.0.0
    #重启mysql
    systemctl restart mysql.service
    ```
# `Ohters`
## `prometheus.yml`
1. 用这个文件替换`prometheus`中的`prometheus.yml`文件
2. 重启`prometheus`
## `mysql.txt`
1. 创建`software_test`数据库
    ``` shell
    systemctl start mysql.service
    mysql -u root -p
    ```
    ``` sql
    create database software_test;
    use software_test;
    ```
2. 使用文件中的`sql`代码创建4个表
## 四个`exporter`
使用`python3`启动这四个`exporter`
*如果启动的时候报错，说明有依赖缺失，使用`pip3`现在相应的缺失项即可*
# `back_end`
## 安装`node`环境
## 启动项目
``` shell
cd back_end
#安装依赖项目
npm install
#启动项目
npm start
```
# `front_end`
``` shell
cd front_end
#安装依赖项目
npm install
#启动项目
npm run server
#打包项目
npm run build
```
