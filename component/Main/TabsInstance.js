import React from 'react';
import ReactDom from 'react-dom';
import {Row,Tab,Col,Nav ,NavItem} from "react-bootstrap";
import ReactHighcharts from 'react-highcharts';
const config ={
  chart: {
            type: 'bar',
             width: 520,
             height: 800
        },
        title: {
             text: null
        },
        subtitle: {
           text: null
        },
        colors: ['#395693', '#1349bd', '#30C9F9', '#7CB5EC'],
        xAxis: {
           tickPixelInterval: 200,
           categories: ['3周年', '砸金蛋', '燃油宝', '油价', '附近油站'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '数量(万)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
           bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true
                }
            }
        },
        legend: {
             align: 'center',
            verticalAlign: 'top',
            x: 0,
            y: 0
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '活动时间(天)',
            data: [18, 25, 27, 41, 30]
        },{
            name: '访问数(UV)(万)',
            data: [46, 31, 27, 41, 29]
        }, {
            name: '浏览量(PV)(万)',
            data: [35, 48, 40, 33, 25]
        }, {
            name: 'IP数(万)',
            data: [2, 7, 5, 6, 3]
        }]
   
}

export default class TabsInstance extends React.Component{
  render(){
    return(
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">
                  石化活动
                </NavItem>
                <NavItem eventKey="second">
                  其他
                </NavItem>
              </Nav> 
            </Col>
            <Col sm={12} >
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <div className = "chartDiv">
                    <div className = "Img1 imgStyle">
                        <img src={require("./img/1.jpg")}/>
                    </div>
                    <div className = "Img2 imgStyle">
                         <img src={require("./img/2.jpg")}/>
                    </div>
                    <div className = "Img3 imgStyle">
                         <img src={require("./img/3.jpg")}/>
                    </div>
                    <div className = "Img4 imgStyle">
                        <img src={require("./img/4.jpg")}/>
                    </div>
                    <div className = "Img5 imgStyle">
                         <img src={require("./img/5.jpg")}/>
                    </div>
                    <ReactHighcharts config = {config}></ReactHighcharts>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <div className = "imgDiv pr">
                      <img src={require("./img/6.jpg")}/>
                      <div className="pa imgList">中秋祝福</div>
                    </div>
                    <div className = "imgDiv pr">
                      <img src={require("./img/7.jpg")}/>
                      <div className="pa imgList">中秋订购月饼活动</div>
                    </div>
                     <div className = "imgDiv pr">
                      <img src={require("./img/8.jpg")}/>
                      <div className="pa imgList">集团搬迁活动</div>
                    </div>
                     <div className = "imgDiv pr">
                      <img src={require("./img/9.jpg")}/>
                      <div className="pa imgList">新能源汽车上市</div>
                    </div>
                     <div className = "imgDiv pr">
                      <img src={require("./img/10.jpg")}/>
                      <div className="pa imgList">集团招聘活动</div>
                    </div>
                     <div className = "imgDiv pr">
                      <img src={require("./img/11.jpg")}/>
                      <div className="pa imgList">Photo</div>
                    </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
  </Tab.Container>
      )
  }
}
