import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import styled from "styled-components";
const Oset = styled.div`
    
    .head{
        display:flex;
        padding:15px ;
        background: #fff;
        justify-content:space-between;
    }
    .list{
        margin-top:10px;
        img{
            width:38px;
            height:38px;
            border-radius:50%;
            background: #f5f5f5;
        }
        p{
            width:100%;
            display:flex;
            padding:15px ;
            background: #fff;
            justify-content:space-between;
            border-top: 1px solid #ebebeb;
            button{
                display: block;
                border: none;
                border-radius: 5%;
                width: 100%;
                height: 40px;
                font-size: 12px;
                line-height: 40px;
                text-align: center;
                color: #212121;
                background-color: #fff;
                margin:10px;
            }
        }
    }
`
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <Fragment>
                <Oset>
                    <div className='head'>
                        <i className="fa fa-angle-left fa-lg"></i>
                        <span>账户设置</span>
                        <i>...</i>
                    </div>
                    <div className='list'>
                        <p style={{border:0,lineHeight:'38px'}}>
                            <span>头像</span>
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" alt="" />
                        </p>
                        <p style={{marginBottom:'10px'}}>
                            <span>昵称</span>
                            <span> </span>
                        </p>
                        <p>
                            <span>手机号</span>
                            <span>183****7732</span>
                        </p>
                        <p>
                            <span>邮箱</span>
                            <span> </span>
                        </p>
                        <p>
                            <span>生日信息<i style={{fontSize:'6px',fontStyle:'normal',color:'#ccc'}}>(只允许设置一次)</i></span>
                            <span>去完善</span>
                        </p>
                        <p>
                            <span>登录密码</span>
                            <span>修改</span>
                        </p>
                        <p>
                            <span>支付密码</span>
                            <span>设置</span>
                        </p>
                        <p>
                            <span>实名认证</span>
                            <span>未认证</span>
                        </p>
                        <p>
                            <span>学生身份验证</span>
                            <span>去验证</span>
                        </p>
                        <p style={{background:'#f5f5f5'}}>
                            <button onClick={this.quit.bind(this)}>退出登录</button>
                        </p>
                    </div>
                </Oset>
            </Fragment>
        )
    }
    quit(){
        localStorage.setItem(('value'),'');
        this.props.history.push(`/mine`)
    }
    componentDidMount() {

    }

}
const mapStateToProps = (store) => ({

})
const mapDispathToProps = (distach) => ({
    handele() {

    }
})
export default connect(mapStateToProps, mapDispathToProps)(Test)