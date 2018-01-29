# 前言
   多前端刚刚开始学习的时候，感觉摸不着头脑，感觉会很混乱，一会webpack，一会es6，一会redux，等等，目前本人在学习的过程中也碰到了很多问题，然后跌跌撞撞的，做了以下这个项目。本教程是针对刚刚接触react，并且也不知道什么是webpack，什么是es6，更不知道命令是该在哪里写的小白菜鸟讲的，是让一个不懂这方便的小白从0开始学起，希望大神们看到有什么错误，能够给予指正。

   首先解释下什么是webpack，有兴趣的可以百度下，很多教程都有提到，我再这里是说大概的意思：就是对于初学者来说，只要记得是用来打包项目，跟下载各类组件的就可以了。下来再来说说es6，它就是一个语法，多学习多写，就熟悉了。其实如果只是想单纯的是想学习react，可以不需使用webpack，直接按照网上的教程即可学习到，本项目用到的是webpack来作为打包工具，因此在这里附带webpack的一些简单操作。

好了，现在大家跟着我一起从零来开始学习吧！

本项目使用了以下组件创建一个《个人简介》项目
webpack+react+react-route+react-bootstrap+react-highcharts+react-addons-css-transition-group（动画）

# 安装
以下说的命令我是用打开命令提示符来操作的，请用快捷键 ： windows+R→（输入）CMD ，首先去到你需要创建目录的路径那里，我这里把项目放到E盘，因此，需要用命令去到E盘，命令如下图：

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/2.png)


1、全局安装webpack， 本人用的是淘宝 NPM 镜像,因为这样安装会快些，操作命令是：

 npm install -g cnpm --registry=https://registry.npm.taobao.org
接下来的操作跟npm的命令一样，只是前面都是cnpm
全局安装webpack命令是：cnpm install webpack -g
(已安装的朋友，可以不用再次安装)

2、创建一个新的文件夹名为myReport

命令：md myReport

3、创建package.json

命令是：cnpm init 按提示输入，并按enter完毕即可

3、在目录下局部安装webpack

命令是：cnpm install webpack --save-dev

4、安装react

命令是：cnpm install  --save react react-dom

5、新建配置文件
命令：


5、使用babel转义es6或者7

命令是cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

6、接下来我们项目会用到css，所以我们需要安装css
命令是：






