# 前言
   多前端刚刚开始学习的时候，感觉摸不着头脑，感觉会很混乱，一会webpack，一会es6，一会redux，等等，目前本人在学习的过程中也碰到了很多问题，然后跌跌撞撞的，做了以下这个项目。本教程是针对刚刚接触react，并且也不知道什么是webpack，什么是es6，更不知道命令是该在哪里写的小白菜鸟讲的，是让一个不懂这方便的小白从0开始学起，希望大神们看到有什么错误，能够给予指正。

   首先解释下什么是webpack，有兴趣的可以百度下，很多教程都有提到，我再这里是说大概的意思：就是对于初学者来说，只要记得是用来打包项目，跟下载各类组件的就可以了。下来再来说说es6，它就是一个语法，多学习多写，就熟悉了。其实如果只是想单纯的是想学习react，可以不需使用webpack，直接按照网上的教程即可学习到，本项目用到的是webpack来作为打包工具，因此在这里附带webpack的一些简单操作。

好了，现在大家跟着我一起从零来开始学习吧！

本项目使用了以下组件创建一个《个人简介》项目
webpack+react+react-route+react-bootstrap+react-highcharts+react-addons-css-transition-group（动画）

# 安装
以下说的命令我是用打开命令提示符来操作的，请用快捷键 ： windows+R→CMD ，首先去到你需要创建项目的路径那里，我这里把项目放到E盘，因此，需要用命令去到E盘，命令如下图：E+Enter，本人用的是淘宝 NPM 镜像,因为这样安装会快些，操作命令是npm install -g cnpm --registry=https://registry.npm.taobao.org  ，接下来的操作跟npm的命令一样，只是前面都是cnpm

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/2.png)


1、全局安装webpack，命令是：cnpm install webpack -g，如下图

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/3.png)

(已安装的朋友，忽略)

2、创建一个新的文件夹名为report（我的项目名）

命令：md report

3、去到report目录，并创建package.json

命令是：cnpm init 按提示输入，并按enter完毕即可，此时，report文件夹里面多了一个package.json文件

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/4.png)

4、在report目录下局部安装webpack，此时，report文件夹里面多了一个node_modules文件夹

命令是：cnpm i webpack --save-dev

5、安装react

命令是：cnpm i --save react react-dom

6、新建配置文件webpack.dev.config.js，该文件里写的代码为以下图片

命令是：cd.>webpack.dev.config.js   

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/5.png)


7、使用babel转义es6或者7，并且新建babel配置文件.babelrc 

安装命令是cnpm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

新建.babelrc命令：type nul>.babelrc

.babelrc的文件里面要写入

{
   "presets": [
     "es2015",
     "react",
     "stage-0"
   ],
   "plugins": []
 }
 
 此时需要修改webpack.dev.config.js，增加babel-loader！

 module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     }]
 }

现在webpack.dev.config.js里面是这样的

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/7.png)

6、接下来我们项目会用到css，所以我们需要安装css，并且在webpack.dev.config.js rules增加
命令是：cnpm i css-loader style-loader --save-dev


{
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}


此时基本完成安装，我们可以来写个简单的demo，新建index.html,index.js,src(文件夹)，在src里面新建pub.css

在index.html里面的代码为：





