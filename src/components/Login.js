import React from 'react';
import css from '../styles/Login.scss';
export default class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {

        }
    }
    render(){
        return(
            <div className="loginWrap">
                <input type="username" placeholder="请输入用户名" className="loginInput" />
                <input type="password" placeholder="请输入密码" className="loginInput" />
                <input type="submit" value="登录" className="loginInputSub" />
            </div>
        )
    }
}