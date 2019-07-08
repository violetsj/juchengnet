import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import './jifen.scss'
import Jifens from './jifens'

 class One extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return (
            <Fragment>
                <div className="Navbar">
                    <div className="left">
                        <Icon className="icon" type={'left'} size='lg' />
                    </div>
                    <div className="center">积分商城</div>
                  <Icon className="right" type={'ellipsis'}/>
                </div>
                <div className="js">
                    <span className="js1">6</span>
                    <span className="js-myscores">积分明细<Icon className="icon" type={'right'} size='xs' /></span>
                </div>
                <div>
                    <Jifens></Jifens>
                </div>
            </Fragment>
        )
    }
    handleToPath(){
        // console.log("OK");
        // console.log(this.props);
        this.props.history.push("/info")
    }
}
export default withRouter(One)