'use strict';


import React from 'react';
import ReactDom from 'react-dom';
// import ReactUi from 'react-ui';

// import {Router, Route, hashHistory, Link} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from  './Login';

var App = React.createClass({
    getDefaultProps: ()=> {
        return {name: '妹子管理系统'};
    },
    render: function () {
        return (
            <div>
                <h1 className="title">{this.props.name}------------------------------</h1>
                {/*<div>React Router: </div>*/}
                {/*<div><Link activeStyle={{color:'red'}} to="/list">list page</Link></div>*/}
                {/*<div><Link to="/detail">detail page</Link></div>*/}

            </div>
        );
    }
});


//最终渲染
ReactDom.render((
    <div>
        <App/>
        <Login/>
    </div>
), document.getElementById('app'));
