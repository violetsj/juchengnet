import React, { Fragment, Component } from "react";
import './mine.scss';
import { connect } from "react-redux";
import axios from "axios"
import Observer from '@/Observer'
import { Toast } from 'antd-mobile';
class Mine extends Component {
    constructor(){
        super();
        this.state = {
            bool: 'one',
            eyes: false,
           text:'',
           upwd:'',
           utel:'',
           mima:'',
           style:{background:'#ebebeb'},
           style2:{background:'#ebebeb'},
        }
    }
    render() {
        
        return (
            <Fragment>
                <div id='mine' >
                    <div className='mine' >
                        <div className='tou'>
                            <i className="fa fa-angle-left fa-lg" onClick={this.main.bind(this)}></i>
                        </div>
                        <h1>欢迎来到聚橙网</h1>
                        <div>
                            {
                                ((bool) => {
                                    if (bool === 'one') {
                                        return (
                                            <div>
                                                <div className='from'>
                                                    <label>+86</label>
                                                    <input placeholder="请输入手机号" />
                                                </div>
                                                <i>未注册手机号验证成功后自动创建账户</i>
                                                <button>获取验证码</button>
                                                <div className='space'>
                                                    <span onClick={this.register.bind(this)}>密码注册</span>
                                                    <span onClick={this.login.bind(this)}>密码登录</span>
                                                </div>
                                            </div>
                                        )
                                    } else if (bool === 'two') {
                                        return (
                                            <div className='box'>
                                                <input type="text" placeholder='请输入手机号/邮箱号' value={this.state.utel} onChange={this.utel.bind(this)} />
                                                <br/>
                                                <input type="text"   placeholder="请输入密码" value={this.state.mima} onChange={this.mima.bind(this)} />
                                                <i>注 : 非大陆用户请用邮箱注册</i>
                                                <button onClick={this.registerin.bind(this)} style={this.state.style}>注册</button>
                                               
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='login'>
                                                <div >
                                                    <ul>
                                                        <li>
                                                            <input type="text" placeholder='请输入手机号/邮箱号' value={this.state.text} onChange={this.text.bind(this)} />
                                                        </li>
                                                        <li className='eyes'>
                                                            {
                                                                ((eyes) => {
                                                                    if (eyes) {
                                                                        return (
                                                                            <div className='see'>
                                                                                <input placeholder="请输入密码" value={this.state.upwd} onChange={this.upwd.bind(this)} />
                                                                                <i onClick={this.see.bind(this)}></i>
                                                                            </div>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <div className='no'>
                                                                                <input type='password' placeholder="请输入密码" value={this.state.upwd} onChange={this.upwd.bind(this)} />
                                                                                <i onClick={this.noSee.bind(this)}></i>
                                                                            </div>
                                                                        )
                                                                    }
                                                                })(this.state.eyes)
                                                            }
                                                        </li>
                                                    </ul>
                                                </div>

                                                <button onClick={this.loginIn.bind(this)} style={this.state.style2}>登录</button>
                                                <div className='space'>
                                                    <span>忘记密码</span>
                                                    <span>验证码登录</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })(this.state.bool)
                            }
                        </div>
                        <div className='icon'>
                            <span className='sp1'></span>
                            <span className='sp2'></span>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
   
    componentDidMount(){
        if(localStorage.getItem('value')){
            this.props.history.push(`/myinfo`)
        }else{
            this.setState({bool:'one'})
        }
        Observer.$on('info',(bool)=>{
            if(bool){
                this.setState({
                    text:bool.utel,
                    upwd:bool.mima,
                })
                if(this.state.text&&this.state.upwd){
                    var style2={background:'#ff4d4a'}
                    this.setState({
                        style2
                    })
                }
            }  
        })
    }
    text(e){
        this.setState({text:e.target.value});
        if(this.state.text&&this.state.upwd){
            var style2={background:'#ff4d4a'}
            this.setState({
                style2
            })
        }else{
            this.setState({
                style2:{background:'#ebebeb'}
            })
        }
    }
    upwd(e){
        this.setState({upwd:e.target.value});
        if(this.state.text&&this.state.upwd){
            var style2={background:'#ff4d4a'}
            this.setState({
                style2
            })
        }else{
            this.setState({
                style2:{background:'#ebebeb'}
            })
        }
    }
    utel(e){
        this.setState({utel:e.target.value});
        if(this.state.utel&&this.state.mima){
            var style={background:'#ff9a34'}
            this.setState({
                style
            })
        }else{
            this.setState({
                style:{background:'#ebebeb'}
            })
        }
    }
    mima(e){
        this.setState({mima:e.target.value});
        if(this.state.utel&&this.state.mima){
            var style={background:'#ff9a34'}
            this.setState({
                style
            })
        }else{
            this.setState({
                style:{background:'#ebebeb'}
            })
        }
    }
    loginIn(){
        axios({
            method: 'get', 
            url: './login',
            params:{
                text:this.state.text,
                upwd:this.state.upwd
            }
        }).then((res)=>{
            if(res.config.params.text===this.state.utel&&res.config.params.upwd===this.state.mima){
                Toast.success('登录成功 !!!', 1,()=>{
                });
                setTimeout(() => {
                    Toast.hide();
                    localStorage.setItem('value',`[${this.state.text},${this.state.upwd}]`);
                    this.props.history.push(`/myinfo?name=${res.config.params.text}`)
                  }, 1000);
            }else{
                Toast.fail('登录失败 !!!', 1);
            }
        })
    }
    registerin(){
        this.setState({animate:true})
        axios({
            method: 'get',
            url: './getUserInfo',
            params:{
                utel:this.state.utel,
                mima:this.state.mima
            }
           
        }).then((res) => {
            Toast.loading('正在跳转登录...', 1, () => {
                
              });
              setTimeout(() => {
                Toast.hide();
                Observer.$emit('info',{utel:this.state.utel,
                    mima:this.state.mima})
                    this.setState({bool:'three'})
              }, 1000);
          
        })
    }
    main(){
        this.props.history.push("/news")
    }
    register(){
        this.setState({bool:'two'});
       
    }
    login(){
        this.setState({bool:'three'})
    }
    see(){
        this.setState({eyes:false})
    }
    noSee(){
        this.setState({eyes:true})
    }
    
}
const mapStateToProps=(store)=>({
  
    
})
const mapDispathToProps=(dispatch)=>({
    handleInput(e){
       
    }
   
   
})
export default connect(mapStateToProps, mapDispathToProps)(Mine);