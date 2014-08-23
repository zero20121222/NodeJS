
deJS开发环境搭建
===

1.安装NodeJS
---
1.编译环境
源代码编译器，通常 Unix/Linux平台都自带了C++的编译器（GCC/G++）。如果没有，请通过当前发行版的软件包安装工具安装make，g++这些编译工具。
Debian/Ubuntu下的工具是apt-get
RedHat/centOS下通过yum命令
Mac OS X下你可能需要安装xcode来获得编译器

2.网络加密
其次，如果你计划在Node.js中启用网络加密，OpenSSL的加密库也是必须的。该加密库是libssl-dev，可以通过apt-get install libssl-dev等命令安装。

3.手动编译
wget http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz 
tar zxvf node-v0.6.1.tar.gz 
cd node-v0.10.26
./configure 
上面几行命令是通过wget命令下载最新版本的代码，并解压之。./configure命令将会检查环境是否符合Nodejs的编译需要。
make 
make install 

2.安装NPM
---
1.NPM的全称是Node Package Manager, 是NodeJs的第三方安装库。
curl http://npmjs.org/install.sh | sh 
curl http://npmjs.org/install.sh是通过curl命令获取这个安装shell脚本，按后通过管道符| 将获取的脚本交由sh命令来执行。

2.更改第三方库
npm install underscore 
underscore@1.2.2 ./node_modules/underscore 
由于一些特殊的网络环境，直接通过npm install命令安装第三方库的时候，经常会出现卡死的状态。幸运的是国内CNode社区的@fire9 同学利用空余时间搭建了一个镜像的NPM资源库，服务器架设在日本，可以绕过某些不必要的网络问题。你可以通过以下这条命令来安装第三方库：
npm --registry "http://npm.hacknodejs.com/

如果你想将它设为默认的资源库，运行下面这条命令即可：
npm config set registry "http://npm.hacknodejs.com/ "

通过npm安装包。安裝好之後會自動被安裝到 /usr/local/bin 目錄下，而相依的函式庫也會自動安裝到 /usr/local/lib/node 目錄下，實在是非常方便。

3.安装NodeJS调试环境
---
1.用npm命令安装全局模式的 node-inspector组件
sudo npm install -g node-inspector

2.更改端口
修改 node-inspector/lib/config.js的端口
'web-port': {
    desc: 'Port to host the inspector',
    convert: conversions.stringToInt,
    defaultValue: 6868
  },

3.使用
node-inspector启动一个调试工具
在chrome浏览器中输入http://127.0.0.1:6868/debug?port=5858打开chrome的调试模式

使用node debug调试nodeJS项目
node --debug-brk=5858 read.js

可以在chrome中查看到调试信息

4.使用Sublime构建NodeJS
---
设置Sublime的Builder->>
Tools ->> Build System ->> New Build System
将如下代码写入
{
    "cmd": ["/usr/local/bin/node", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.javascript"
}
保存为NodeJs.sublime-build文件
如此可以直接使用Com+B来使用nodejs运行程序
