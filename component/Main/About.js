import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import TabsInstance from './TabsInstance.js';


export default class About extends  React.Component {
    render() {
        return (
            <div>
                <div className ="title">
                	工作概述
                </div>
                <div className ="title1">
                	在过去的半年里，主要是负责活动页的制作。以下展示部分内容
                </div>
                <div className="">
					<TabsInstance/>
                </div>
            </div>
        )
    }
}


