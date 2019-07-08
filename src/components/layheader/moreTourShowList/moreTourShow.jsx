import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import './moreTourShow.scss'
import ReactDOM from 'react-dom'
import { PullToRefresh, Button } from 'antd-mobile';
import axios from 'axios'
class One extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            num: 1,
            list: []
        };
        //   console.log(this.props)
    }
    componentDidMount() {
        this.getShow(this.state.num, (res) => {
            this.setState({
                data: res.data.data,
                height: hei,
            })

        })

        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;

    }

    render() {
        if (this.state.data) {
            return (<div>
                <div className='navbar tour-navbar'>
                    <div className="Navbar">
                        <div className="left">
                            <Icon className="icon" type={'left'} size='lg' onClick={this.goback.bind(this)}/>
                        </div>
                        <div className="center" >巡回演出</div>
                        <Icon className="right" type={'ellipsis'} />
                    </div>
                </div>

                {/* <div className="flex-navbar">
                    <Icon className="icon" type={'left'} size='md' />
                    <div className="center">切换城市</div>
                    <Icon className="right" type={'ellipsis'} />
                </div> */}
                <PullToRefresh
                    damping={80}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.state.num++;
                        //   if (this.props.list.page < this.state.num) {
                        //     return;
                        //   } else {
                        this.getShow(this.state.num, (res) => {
                            this.setState({ data: this.state.data.concat(res.data.data) })
                        });
                        //   }
                    }}
                >
                    <Fragment>
                        <div className="show-wrap tour-show-wrap">
                            {this.state.data.map((item, index) => {
                                return (
                                    <div className='show-item clearfix' key={index}>
                                        <a href="" className='show-left fl '>
                                            <img src={item.pic} alt="" />
                                            <span className="icon-img icon-presell"></span>
                                            <span className="logo_i"></span>
                                        </a>
                                        <div className='show-right fl '>
                                            <p className='title '>
                                                {item.show_name ? (item.show_name.length > 39 ? item.show_name.substr(0, 39) + "..." : item.show_name) : ""}</p>
                                            <p className='times'>{item.display_show_time}</p>
                                            {
                                                item.cityItems.map((item, index) => {
                                                    if (index < 5) {
                                                        return (
                                                            <div className='city-wrap clearfix' key={index}>
                                                                <div className='item fl'>{item.city_name}</div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }

                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </Fragment>
                </PullToRefresh>


            </div>);

        } else {
            return (
                <div>
                    查看更多
                </div>
            )
        }


    }
    componentWillMount() {
        document.documentElement.style.fontSize = '20px'
    }
    componentWillUnmount() {
        document.documentElement.style.fontSize = '32px'
    }
    getShow(num, callback) {
        axios({
            method: 'get',
            url: '/apis/tour/ShowList',
            params: {
                page: num
            }
        }).then((res) => {
            callback(res);
            console.log(res.data.data)
            var arr = []
            res.data.data.map((item, index) => {
                item.cityItems.map((item, index) => {
                    // // console.log()
                    // this.setState({list:item.city_name.slice(0,5)})
                    // console.log(this.state.list)
                })
            })

            // if(res.data.data.cityItems>5){
            //     return (<div>查看更多</div>)
            // }

        })
    }
    goback(){
        this.props.history.push("/news")
    }
}
export default withRouter(One)