import React, { Fragment, Component } from 'react';
import "./showt.scss"

// import axios from 'axios'
// import styled from 'styled-components';
class Showt extends Component {

    render() {
        return (
            <Fragment>
                <div id="showone">
                    <div className="showone">
                        <div className="showtop">
                            <div className="stopt">
                                <img src="http://image.juooo.com//group1/M00/03/4F/rAoKNVzs9p-ABym0AABvrh6ZHiw925.jpg" alt="" />
                                <div></div>
                                <div>
                                    <div className="showhead">
                                        <span>
                                            巡演详情
                                        </span>
                                        <i className="fa fa-chevron-left fa-lg"></i>
                                        <i className="fa fa-share-square-o fa-lg"></i>
                                    </div>
                                    <div className="imgdiv">
                                        <img src="http://image.juooo.com//group1/M00/03/4F/rAoKNVzs9p-ABym0AABvrh6ZHiw925.jpg" alt="" />
                                        <div className="imgbac"></div>

                                    </div>
                                    <a href="">8场巡演</a>
                                </div>
                                <div className="nulld"></div>
                            </div>
                        </div>
                        <div className="twop">
                            <h3>2019音乐剧明星集锦音乐会</h3>
                            <p>时间:<span>2019.07.03 - 2019.07.20</span></p>
                        </div>
                        {/* 下面城市 */}
                        <div className="scity">
                            <div></div>
                            <ul>
                                <li>
                                    <div className="divo">
                                        <span>7.3</span>
                                        <i>周三 19:30</i>
                                    </div>
                                    <div className="divt">
                                        <div></div>
                                    </div>
                                    <div className="divs">
                                        <span>深圳站</span>
                                        <i>南山文体中心剧院大剧院</i>
                                    </div>
                                    <div className="divst">
                                        购票
                                    </div>
                                </li>
                                <li>
                                    <div className="divo">
                                        <span>7.3</span>
                                        <i>周三 19:30</i>
                                    </div>
                                    <div className="divt">
                                        <div></div>
                                    </div>
                                    <div className="divs">
                                        <span>深圳站</span>
                                        <i>南山文体中心剧院大剧院</i>
                                    </div>
                                    <div className="divst">
                                        购票
                                    </div>
                                </li>
                                <li>
                                    <div className="divo">
                                        <span>7.3</span>
                                        <i>周三 19:30</i>
                                    </div>
                                    <div className="divt">
                                        <div></div>
                                    </div>
                                    <div className="divs">
                                        <span>深圳站</span>
                                        <i>南山文体中心剧院大剧院</i>
                                    </div>
                                    <div className="divst">
                                        购票
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <Xl></Xl> */}
                    </div>
                </div>
            </Fragment >

        )
    }

}
export default Showt;
