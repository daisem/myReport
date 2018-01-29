import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TopAnimation from './topAnimation.js';
import TreeAnimation from './TreeAnimation.js';
import './Main.css';


export default class Me extends  React.Component {
    render() {
        return (
            <div >
            <div className ="title">
                	自我评价
                </div>
            	<TopAnimation/>
            	<div className = "WordsList pr">
            		<TreeAnimation/>
            		<div className="Words_1 pa fadeInLeft animated">掌握基本开发技术</div>
            		<div className="Words_2 pa fadeInRight animated">很少与同事交流，比较害羞</div>
            		<div className="Words_3 pa fadeInLeft animated">了解网址性能优化、seo</div>
            		<div className="Words_4 pa fadeInRight animated">对目前的新开发方式还处于比较懵懂状态</div>
            		<div className="Words_5 pa fadeInLeft animated">熟悉使用测试工具进行辅助开发</div>
            	</div>
            </div>
        )
    }
}

