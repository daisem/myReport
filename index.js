import React from 'react';
import ReactDom from 'react-dom';
import {Row,Col} from "react-bootstrap";
import {Router,Route,IndexRoute,hashHistory} from 'react-router';


import TabsInstance from "./component/List/List.js";
import Head from "./component/Head/Head.js";
import About from "./component/Main/About.js";
import Job from './component/Main/Job.js';
import Main from './component/Main/Main.js';
import List from './component/List/List.js';
import './src/pub.css';

import GetRouter from './component/List/List.js';

class App extends React.Component{
     render(){
          return(
                    <div className="main">
                         <Row className="show-grid">
                               <Col xs={12} md={3}><Head/><List/></Col>
                               <Col xs={12} md={9}><Main/></Col>
                         </Row>
                    </div>
               )
     }
}
ReactDom.render(<App/>, document.getElementById('app'));

