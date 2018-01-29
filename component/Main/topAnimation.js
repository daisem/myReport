import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Main.css';

export default class TopAnimation extends  React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName='wordStyle'
                transitionAppear={true}
                transitionAppearTimeout={500}
                >
                <div className="words">
                   <div style={{backgroundColor:'#48C3F0'}} >Strengths</div>
                   <div style={{backgroundColor:'#3B5998'}}>Weaknesses</div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}
