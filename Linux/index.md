cd [Linux 路径]

- cd 来自：Change Directory
- cd 命令可以切换当前工作目录

pwd

- pwd 来自： Print Work Directory
- pwd 命令可以输出当前所在的工作目录

mkdir [-p] Linux 路径

- mkdir 来自：Make Directory
- 参数必填，表示 Linux 路径，即要创建的文件夹的路径，相对路径或绝对路径均可。
- -p 选项可选，表示自动创建不存在的父目录，适用于创建多层级的目录。

touch Linux 路径

- touch 命令无选项，参数必填，表示要创建的文件路径，相对路径或绝对路径均可。
- 创建文件

cat Linux 路径

- cat 命令无选项，参数必填，表示要创建的文件路径，相对路径或绝对路径均可。
- 查看文件内容

more Linux 路径

- more 命令无选项，参数必填，表示要创建的文件路径，相对路径或绝对路径均可。
- more 同样可以查看文件内容，但是内容过多的时候，可以一页一页的展示。

cp [-r] Linux 路径 1 Linux 路径 2

- cp 命令可以用来复制文件夹 or 文件，cp 来自：Copy
- -r 选项可选，用于复制文件夹，表示递归
- 参数 1，Linux 路径 1，表示要被复制的文件夹 or 文件。
- 参数 2 ，Linux 路径 2，表示要复制去的地方

mv Linux 路径 1 Linux 路径 2

- mv 命令可以移动文件 or 文件夹，mv 来自：Move
- 参数 1，Linux 路径 1，表示要被移动的文件夹 or 文件。
- 参数 2 ，Linux 路径 2，表示要移动去的地方

rm [-r -f] 参数 1，参数 2，....参数 n

- rm 命令可以删除文件 or 文件夹，rm 来自：remove
- -r 选项用于删除文件夹
- -f 表示 force，强制删除
- 参数 1，参数 2...参数 n 表示 要删除的文件 or 文件夹的路径，按照空格隔开。

## 通配符 \*

- [*] 表示匹配任意内容
- test[*]， 表示匹配任何以 test 开头的内容
- [*]test， 表示匹配任何以 test 结尾的内容
- [*]test[*]， 表示匹配任何包含 test 的内容

## 管道符 |

- 管道符的含义是：将管道符左边的命令的结果，作为右边命令的输入
- 如：cat main.txt | grep hello

## 重定向符号 >,>>

- \> ，将左侧命令的结果，覆盖写入到符号右侧指定的文件中

```vim
 [root]#: cat main.txt
 hello world
 [root]#: echo hello Linux! > main.txt
 [root]#: cat main.txt
 hello Linux!
```

- \>> ，将左侧命令的结果，追加写入到符号右侧指定的文件中

```vim
 [root]#: cat main.txt
 hello world
 [root]#: echo hello Linux! >> main.txt
 [root]#: cat main.txt
 hello world
 hello Linux!
```

which

- which 可以查找执行命令所在程序在哪个文件里

find 起始文件路径 -name 文件名

- 通过 find 命令去搜索指定的文件
- 文件名可以使用通配符
  如: find / -name main[*]

find 起始文件路径 -size +|-n [K/M/G]

- 通过 find 命令去搜索指定文件大小的文件
- 如 查找小于 10KB 的文件： find / -size -10k
- 如 查找大于 100MB 的文件： find / -size +100M

grep [-n] 关键字 文件路径

- 选项 -n 可选，表示在结果中显示匹配的行的行号
- 参数，关键字，必填，表示过滤的关键字
- 参数，文件路径，必填，表示要过滤内容的文件路径

wc [-c -m -l -w] 文件路径

- 可通过 wc 命令统计文件的行数，单词数量等
- 选项 -c ，统计 bytes 的数量
- 选项 -m ，统计字符数量
- 选项 -l ，统计行数
- 选项 -w ，统计单词数量
- 参数 文件路径， 被统计的文件，可作为内容输入

## echo 输出的内容

- 无选项，只有一个参数，表示要输出的内容

```vim
 [root]#: echo hello world!
 hello world!
```

## tail [-f -num] 文件路径

- 选项 -f，表示持续跟踪
- 选项 -num, 表示查看尾部内容行数
- 参数 文件路径，表示被跟踪文件路径

## chmod [-R] 权限 文件或文件夹

- 选项 -R ，对文件夹内的全部内容应用同样的操作

```vim
 [root]#:chmod u=rwx,g=rx,o=x main.txt
 // 其中，u表示user所属用户权限，g表示group组权限，o表示other其他用户权限
```

## yum [-y] install | remove | search

- 选项 -y ， 自动确认，无需手动确认安装或卸载过程
- install：安装
- remove：卸载
- search：搜索

### mysql 操作

查看是否安装 mysql
rpm -qa | grep mysql

查看是否有安装 mariadb,该软件与 mysql 数据库有冲突，需要手动卸载
rpm -qa | grep mariadb

查看当前所有 tcp 端口·
netstat -ntlp

查看所有 1935 端口使用情况·
netstat -ntulp |grep 1935

重启防火墙
firewall-cmd --reload

解压文件夹
tar -xvf 文件名.tar
tar -xzvf 文件名.tar.gz
tar -xjvf 文件名.tar.bz2
tar -xJvf 文件名.tar.xz

打包文件夹
tar -cvf 打包文件名.tar 文件或目录
tar -czvf 打包文件名.tar.gz 文件或目录

修改 mysql 密码策略
set global validate_password.policy=LOW;

修改 mysql 用户密码
ALTER USER 'root'@'%' IDENTIFIED BY 'password';
  