import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Welcome from './Welcome';
import Login from './Login';
import List from './List';
import ajax from './Ajax'
import config from './Config';

const history = createHistory();

export default class BasicExample extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            isLogin:false
        }
    }
    componentWillMount(){
        ajax(`${config.address}user/isRemembered`,null, (data)=> {
            if(data.retCode == '00000'){
                this.setState({isLogin:true})
            }
        })
    }
    handelLoginState(bool){
        this.setState({isLogin:bool})
    }
    render(){
        if(this.state.isLogin){
            return(
                <Router>
                    <div>
                        <div className="logOut" onClick={()=>this.handelLoginState(false)} style={{width:'50px',height:'20px',textAline:'center',fontSize:'14px',lineHeight:'20px',position:'fixed',top:10,right:10,background:'#fff'}}>退出</div>
                        <ul className="nav">
                            <li><Link to="/">欢迎</Link></li>
                            <li><Link to="/List">用户列表</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Welcome}/>
                        <Route path="/List" component={List}/>
                    </div>
                </Router>
            )
        }else{
            history.push('/');
            return(
                <Router>
                    <div>
                        <ul className="nav">
                            <li><Link to="/">登录</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" children={()=>(
                            <Login loginChange={bool=>this.handelLoginState(bool)} />
                        )}/>
                    </div>
                </Router>
            )
        }
    }
}