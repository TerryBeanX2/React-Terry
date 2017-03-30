import React from 'react';
import css from '../styles/Login.scss';
import ajax from './Ajax';
import config from './Config';

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: ''
        }
    };

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    };

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    };
    handleSubmit() {
        if (!this.state.username || !this.state.password) return alert('用户名和密码不能为空');
        ajax(`${config.address}user/login`, {
            username: this.state.username,
            password: this.state.password,
            rememberMe: 1
        }, (data)=> {
            if(data.retCode=='00000')
            this.props.loginChange(true);
        })
    }

    render() {
        return (
            <div className="loginWrap">
                <input type="username" placeholder="请输入用户名" className="loginInput"
                       onChange={e=>this.handleUsernameChange(e)}/>
                <input type="password" placeholder="请输入密码" className="loginInput"
                       onChange={e=>this.handlePasswordChange(e)}/>
                <input type="button" value="登录" className="loginInputSub" onClick={e=>this.handleSubmit(e)}/>
            </div>
        )
    }
}