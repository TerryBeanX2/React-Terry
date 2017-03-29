import React from 'react'
import css from '../styles/welcome.scss'

export default class Detail extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            clicked:false
        }
    };
    componentWillMount() {

    };
    handleClick(){
        this.setState({clicked:true})
    };
    render(){
        return (
            <div className="welcome" onClick={e => this.handleClick(e)}>
                {this.props.name}
                <br/>
                {this.state.clicked?'点我干嘛':''}
            </div>
        )
    }
}

Detail.defaultProps = {
    name:'欢迎来到小妹子'
};

Detail.propTypes = {

};
