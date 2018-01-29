import React, {Component} from 'react';
import ReactDOM from 'react-dom';
export default class Job extends  React.Component {
    render() {
        return (
        	
            <div className="JobDiv">
            	<div className ="title">工作计划</div>
                <div className = "titleJob tc fadeIn animated dp05">
					在接下来的时间里，在完成本职的工作外，继续去学习新的知识
                </div>
				<div className = "titleJob tc fadeIn animated dp2">
					在提升自己的专业水平外，希望能给大伙在工作上作出贡献
                </div>
                <div className="pr lineStyle">
					<div className = "line pa line1"><img src={require("./img/line1.png")}/></div>
					<div className = "line pa line2"><img src={require("./img/line2.png")}/></div>
					<div className = "line pa line3"><img src={require("./img/line3.png")}/></div>
					<div className = "box1 pa"></div>
					<div className = "box2 pa"></div>
					<div className = "box3 pa"></div>
					<div className = "lineWords pa zoomIn animated">学习知识</div>
					<div className = "lineWord1 pa lw rotateIn animated">01</div>
					<div className = "lineWord2 pa lw rotateIn animated">02</div>
					<div className = "lineWord3 pa lw rotateIn animated">03</div>
					<div className = "lineWord1_1 pa ls fadeIn animated">Webpack</div>
					<div className = "lineWord2_1 pa ls fadeIn animated">React</div>
					<div className = "lineWord3_1 pa ls fadeIn animated">其他组件</div>
                </div>
            </div>
        )
    }
}