import React, {Component, PropTypes} from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import css from '../styles/List.scss';
import ajax from './Ajax';
import config from './Config';

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    handelClick() {
        this.props.handelRemove(this.key);
    }

    render() {
        return (
            <li className="userListItem">
                <ul>
                    <li style={{width: '100px'}}>名称: {this.props.value.staffName}</li>
                    <li style={{width: '100px'}}>电话: {this.props.value.mobilephone}</li>
                    <li style={{width: '100px'}}>邮箱: {this.props.value.userEmail}</li>
                    <li onClick={()=>this.handelClick()} style={{width: '75px'}}>删除</li>
                </ul>
            </li>
        )
    }
}

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    getData() {
        ajax(`${config.address}user/queryUserByCondition`, {
            userName: null,
            staffName: null,
            userEmail: null,
            mobilephone: null,
            page: 1,
            pageSize: 20
        }, (data)=> {
            this.setState({
                listItems: data.voList.map((obj) =>
                    <ListItem handelRemove={()=>this.handelRemove(obj.id)} key={obj.id}
                              value={obj}/>
                )
            })
        })

    }

    handelRemove(id) {
        this.state.listItems.forEach((item,index)=>{
            if(item.key==id) this.state.listItems.splice(index,1);
        });
        this.setState({
            listItems:this.state.listItems
        })
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <ul className="userList">
                {this.state.listItems}
            </ul>
        )
    }
};