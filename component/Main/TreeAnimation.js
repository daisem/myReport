import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Main.css';

export default class TreeAnimation extends  React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName='treeImg'
                transitionAppear={true}
                transitionAppearTimeout={2000}
                >
                <div className="css-test">
                   <img src={require("./img/12.png")}/>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}
