import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter} from 'react-router-dom';
import About from './About.js';
import Job from './Job.js';
import JiaShao from './JiaShao.js';
import Me from './Me.js';
import List from '../List/List.js';
import './Main.css';


class Main extends Component{
    render(){
        return(
              <HashRouter>
              	<div> 
				    <Route exact path='/' component={JiaShao} />
				    <Route path='/About' component={About}/>
				    <Route path='/Job' component={Job}/>
				    <Route path='/Me' component={Me}/>
		        </div> 
		      </ HashRouter>
        )
    }
}

export default Main;