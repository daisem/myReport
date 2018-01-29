import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, NavLink,HashRouter} from 'react-router-dom';
import Job from '../Main/Job.js';
import About from '../Main/About.js';
import Me from '../Main/Me.js';
import {Row,Col} from "react-bootstrap";
import './List.css';

export default class List extends React.Component{
  render(){
    	return(
	        <HashRouter>
		    	<ul className="navDiv">
				    <li>
				    <NavLink to="/" activeClassName="active" exact={true}>前言</NavLink></li>
				    <li><NavLink to="/About" activeClassName="active">工作概述</NavLink></li>
				    <li><NavLink to="/Job" activeClassName="active">工作计划</NavLink></li>
				    <li><NavLink to="/Me" activeClassName="active">自我评价</NavLink></li>
				</ul>
	    	</HashRouter>
      	)
  }
}