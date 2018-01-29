const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
     module: {
	     rules: [{
	         test: /\.js$/,
	         use: ['babel-loader?cacheDirectory=true'],
	         include: path.join(__dirname, '')
	     },{
		   test: /\.css$/,
		   use: ['style-loader', 'css-loader']
		},{
		    test: /\.(png|jpg|gif)$/,
		    use: [{

		        loader: 'url-loader'
		    }]
		}]
		
 	},
 	 devServer: {
        contentBase: path.join(__dirname, '')
    }
    
};