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

## 通配符

- [*] 表示匹配任意内容
- test[*]， 表示匹配任何以 test 开头的内容
- [*]test， 表示匹配任何以 test 结尾的内容
- [*]test[*]， 表示匹配任何包含 test 的内容
  