import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Welcome from './Welcome';
import Login from './Login';
import ajax from './Ajax';


const List = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={ListItem}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const ListItem = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default class BasicExample extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            isLogin:false
        }
    }
    componentWillMount(){
        ajax('http://172.16.218.71:8080/mam/user/isRemembered',null, (data)=> {
            console.log(data);
            if(data.retCode == '00000'){
                this.setState({isLogin:true})
            }
        })
    }
    render(){
        if(this.state.isLogin){
            return(
                <Router>
                    <div>
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
            return(
                <Router>
                    <div>
                        <ul className="nav">
                            <li><Link to="/">登录</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Login}/>
                    </div>
                </Router>
            )
        }
    }
}