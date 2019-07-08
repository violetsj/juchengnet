import React, { Fragment, Component } from "react";
import './myinfo.scss'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

class Myinfo extends Component{
    constructor(props){
        super(props);
         const val=localStorage.getItem('value')
        this.state={
            uname:val.slice(val.indexOf('[')+1,val.indexOf(','))
        }
    }
    render() {
        return (
            <Fragment>
                <div id="view">
                    <div className="pages">
                        <div className="mtop" onClick={this.seting.bind(this)}>
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" alt=""/>
                            <p className="name">
                                <span>{this.state.uname}@qq.com</span>
                            </p>
                            <p className="grad">ID：6742895</p>
                            <i className="fa fa-angle-right fa-lg" ></i>

                            <div className="card">
                                <p className="tehui">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/icon-cardLogo.png" alt=""/>
                                    <span className="tequan">尊享多项特权</span>
                                </p>
                                <p>开通橙PLUS卡，限时送100元</p>
                            </div>
                        </div>

                        <div className="cate">
                            <ul>
                                <li>
                                    <a href="">
                                        <p>
                                            <span>0.00</span>元
                                        </p>
                                        <p>余额</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p>
                                            <span>0</span>分
                                        </p>
                                        <p>积分</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p>
                                            <span>0</span>张
                                        </p>
                                        <p>优惠券</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="list">
                            <a href="">
                                <i className="fa fa-file-text-o fa-lg"></i> 我的订单                           
                            </a>
                        </div>
                        <div className="list">
                            <a href="">
                                <i className="fa fa-newspaper-o fa-lg"></i> 电子票夹
                                <div className="listr">
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                        </div>
                        <div className="list">
                            <a href="">
                                <i className="fa fa-credit-card fa-lg"></i>我的卡包  
                                <div className="listr">
                                   了解详情<i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                        </div>

                        <div className="list">
                            <a href="" className="listp">
                                <i className="fa fa-star-o fa-lg"></i>我的关注
                                <div className="listr">
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                            <a href="">
                                <i className="fa fa-map-marker fa-lg"></i>收货地址  
                                <div className="listr">
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                        </div>

                        <div className="list">
                            <a href="" className="listp">
                                <i className="fa fa-envelope-o fa-lg"></i>我的消息  
                                <div className="listr">
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                            <a href="">
                                <i className="fa fa-pencil-square-o fa-lg"></i>意见反馈  
                                <div className="listr">
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                        </div>   
                        <div className="list">
                            <a href="">
                                <i className="fa fa-volume-control-phone fa-lg"></i>联系电话  
                                <div className="listr">
                                    400-185-8666
                                   <i className="fa fa-angle-right fa-lg"></i>
                                </div>
                            </a>
                        </div>


                        <a href="" className="kefu">
                            <i className="fa fa-volume-control-phone fa-lg"></i>
                            <span>在线客服</span>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
    seting(){
        this.props.history.push(`/seting`)
    }
}


const mapStateToProps = (store) => {
    return {
        
    }
}
const mapDispathToProps = (dispatch) => ({
    handleAdd() {

    }
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Myinfo));