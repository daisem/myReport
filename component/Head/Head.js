import React from 'react';
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