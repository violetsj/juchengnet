import React, { Fragment, PureComponent } from 'react';
import "./index.scss"
// import styled from 'styled-components';
import axios from "axios"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { withRouter } from "react-router-dom";
class Minesong extends PureComponent {
    constructor() {
        super();
        this.state = {
            songlist: [],
            slistlunbo: [],
        }
    }
    render() {
        // console.log(this.state.songlist);
        if (this.state.songlist.length) {
            return (
                <Fragment>
                    <div id="msong">
                        {/* 开始大的循环 */}
                        {
                            this.state.songlist.map((item, index) => {
                                return (
                                    <div className="msong" key={index}>
                                        <div className="msongtop">
                                            <h3>{item.title}</h3>
                                            <div>
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="" />
                                            </div>
                                        </div>
                                        <div className="msongcen" onClick={this.routs.bind(this, item)}>
                                            <div>
                                                <div>
                                                    <div className="sleft">
                                                        <img src={item.list[0].pic} alt="" />
                                                    </div>
                                                    <div className="sright">
                                                        <p><strong>{item.list[0].date}</strong>{item.list[0].week}</p>
                                                        <h3>{item.list[0].schedular_name}</h3>
                                                        <p>{item.list[0].city_name}  |  {item.list[0].venue_name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="msongbot">
                                            <div>
                                                <div className="swiper-containerdd">
                                                    <div className="swiper-wrapper">
                                                        {
                                                            item.list.slice(1, 10).map((ele, index) => {
                                                                // console.log(ele);
                                                                return (
                                                                    <div className="xhdiv swiper-slide" key={index} style={{ width: '102px' }}>
                                                                        <div className="xhdo" onClick={this.send.bind(this, ele.sche_id)}>
                                                                            <div className="xhdt">
                                                                                <img src={ele.pic} alt="" onClick={this.routst.bind(this, ele)} />
                                                                            </div>
                                                                            <h3>{ele.schedular_name}</h3>
                                                                            <p>
                                                                                <strong>￥{ele.low_price.slice(0, ele.low_price.indexOf('.'))}</strong>起
                                                                             </p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fragment >

            )
        } else {
            return (<div style={{ width: '100%', height: '200px' }}>
                <h3 className="fa fa-spinner fa-pulse" style={{ width: '100%', textAlign: 'center', height: '100%', lineHeight: '100%' }}></h3>
            </div>);
        }

    }
    send(id) {//sche_id
        //     console.log(this.props);
        //     // this.props.history.push(`/show?sch_id=${id}`)
    }
    componentDidMount() {
        return axios({
            method: 'get',
            // home/getFloorShow?city_abb=&city_id=0&&version=5.1.4&referer=2
            url: '/apis/home/getFloorShow',
            data: {
                city_abb: '',
                city_id: '0',
                version: "5.1.4",
                referer: "2"
            }
        }).then(res => {
            var songlist = res.data.data;
            this.setState({ songlist })
            this.swipers();

        })
    }
    routs(item) {
        this.props.props.history.push(`/show?id=${item.list[0].sche_id}`)
    }
    routst(ele) {
        this.props.props.history.push(`/show?id=${ele.sche_id}`)
    }
    swipers() {
        new Swiper('.swiper-containerdd', {
            pagination: ".swiper-pagination",
            // 第一页和最后一页不在滑动留空白
            // resistance: true,
            slidesPerView: 3,
            paginationClickable: true,
            observer: true,
            observeParents: false
        })
    }
}
export default Minesong;