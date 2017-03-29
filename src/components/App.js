'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery-ajax';

import Login from  './Routes';


class App extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {};
    };
    render(){
        return(
            <div>
                <h1 className="title">{this.props.name}</h1>
            </div>
            )
    }
}

App.defaultProps = {
    name: ''
};

//最终渲染
ReactDom.render((
    <div>
        <App/>
        <Login/>
    </div>
), document.getElementById('app'));
