import React,{Fragment,Component} from "react";
import axios from "axios";
import './chengka.scss'
import { Icon, Grid } from 'antd-mobile';

 class Chengka extends Component{
    constructor(props){
        super(props);
        this.state={
            data:""
        }
    }
    render(){
        return (
            <Fragment>
                <div className="Navbar">
                    <div className="left">
                        <Icon className="icon" type={'left'} size='lg' />
                    </div>
                    <div className="center">欢聚橙卡</div>
                  <Icon className="right" type={'ellipsis'}/>
                </div>
                <div className="mine-btn">我的卡包></div>
                <img className="imgs" src="http://image.juooo.com/group1/M00/02/CA/rAoKNVx00zOACrrkAAE3RpfMkyw934.jpg" alt=""/>
                <div dangerouslySetInnerHTML={{ __html: this.state.data}}></div>
                
            </Fragment>
        )
    }
    componentDidMount(){
        // https://m.juooo.com/Cardproduct/ajaxGetCardGroupList
        axios({
            method: 'POST',
            url: 'apis/Cardproduct/ajaxGetCardGroupList',
            data: {
              page:1
            }
          }).then((res) => {
            console.log(res.data.data)
            this.setState({data:res.data.data.showData})
            console.log(res.data.data.showData)
          })
    }
}
export default Chengka