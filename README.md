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

```const path = require('path');

module.exports = {

  	/*入口*/
     entry: path.join(__dirname, 'index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
};
```


7、使用babel转义es6或者7，并且新建babel配置文件.babelrc 

安装命令是cnpm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

新建.babelrc命令：type nul>.babelrc

.babelrc的文件里面要写入

```{
   "presets": [
     "es2015",
     "react",
     "stage-0"
   ],
   "plugins": []
 }
 ```
 
 此时需要修改webpack.dev.config.js，增加babel-loader！
```
 module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     }]
 }
```

8、接下来我们项目会用到css，所以我们需要安装css，并且在webpack.dev.config.js rules增加
命令是：cnpm i css-loader style-loader --save-dev

```
{
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}
```
现在webpack.dev.config.js里面是这样的

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/7.png)

# 创建第一个demo
此时基本完成安装，我们可以来写个简单的demo，新建index.html,index.js,src(文件夹)，在src里面新建pub.css

在index.html里面的代码为：

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="app"></div>
	<script type="text/javascript" src="dist/bundle.js" charset="utf-8"></script>
</body>
</html>
```

在index.js里面的代码为：

```
import React from 'react';
import ReactDom from 'react-dom';
import './src/pub.css';

class App extends React.Component{
     render(){
          return(
                    <div className="main f24">
                         这是我的一个react
                    </div>
               )
     }
}
ReactDom.render(<App/>, document.getElementById('app'))
```

在pub.css里面的代码为：

```
*{margin:0;padding:0;font-family: '微软雅黑'}
.f24{font-size: 24px;color: red}
```

输入命令webpack --config webpack.dev.config.js进行打包，打开index.html,就可以看到如图

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/11-1.png)

当你看到这个页面的时候，证明你上述的基本安装成功。

下节课我们再继续说引用react的各种组件。

————————————————————————分割线————————————————————————

这节课，我们接下来继续来写myReort项目的相关内容。

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/12.png)

首先我们看看上图，我们把项目分割成左右结构，左边结构，有分成上下部分来做的，所有我们需要做的组件，分别有Head、List、Main，因此现在我们来新建一个文件夹component，来放这些组件，在component文件夹里面，分别新建Head、List、Main文件夹，来放好里面对应的组件。此时的文件夹是这样的。

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/14.png)
![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/13.png)

新建好文件夹后，现在我们先来写Head里面的组件，我们需要在Head里面新建一个Head.js,与对应的Head.css,为了方便管理，我再里面也建了一个img的文件夹，并且把自己喜欢的图片放到里面去，我这里备用的图片是1.jpg，用来管理我的头像图片。

在Head.js里面写的内容是：

```import React from 'react';
import ReactDom from 'react-dom';
import './Head.css';
import image from './img/1.jpg';
export default class Head extends React.Component{
	render(){
		return(
				<div className = "head">
					<div className = "headImg">
						<img src={image}/>
					</div>
					<div className="nemeTite">
						<div className = "name tc f36">
							daisem
						</div>
						<div className = "name tc f28">
							前端开发
						</div>
					</div>
				</div>
			)
	}
}
```

由于Head.js里面，我添加了图片所以，这个时候需要编译图片，命令是：cnpm install url-loader file-loader --save-dev ，同时需要在webpack.dev.config.js rules增加<br>
```
{
  test: /\.(png|jpg|gif)$/,
	use: [{
	 	loader: 'url-loader'
	}]
}
```

在Head.css里面写的内容是：

![image](https://raw.githubusercontent.com/daisem/myReport/master/screenshots/16.png)


然后再index.js里面添加Head.js,代码如下：<br>
```import React from 'react';
import ReactDom from 'react-dom';
import Head from "./component/Head/Head.js";
import './src/pub.css';

class App extends React.Component{
     render(){
        return(
            <Head/>
     	  )
     }
}
ReactDom.render(<App/>, document.getElementById('app'));
```
再次输入命令webpack --config webpack.dev.config.js运行，这时候你会看到下图，head组件就成功了






















