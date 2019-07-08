import React, { Fragment, PureComponent } from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

import "./index.scss"
// import styled from 'styled-components';
import axios from 'axios'
import { withRouter } from "react-router-dom";

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}










class Show extends PureComponent {
    constructor(props) {
        super(props)
        // console.log(this.props.location.search.slice(1))
        this.state = {
            style: { overflow: 'hidden', height: '16.89333rem' },
            bool: true,
            bools: false,
            infos: {},
            city: [],
            xgtj: [],
            booll: false,
            yccc: [],
            nums: 0,
        }
    }
    render() {
        if (this.state.infos.scheInfo && this.state.city.tourlist && this.state.infos.notice) {
            return (
                < Fragment >
                    <div id="showone">
                        <div className="showone" >
                            <div onClick={this.boolls.bind(this)} >
                                <div className="showtop">
                                    <div className="stopt">
                                        {/* <img src="http://image.juooo.com/group1/M00/02/C4/rAoKmV0Ue0SACLrdAABs9_U0sP8432.jpg" alt="" /> */}
                                        <img src={this.state.infos.scheInfo.pic} alt="" />
                                        <div></div>
                                        <div>
                                            <div className="showhead">
                                                <span>
                                                    演出详情
                                            </span>
                                                <i className="fa fa-chevron-left fa-lg" onClick={this.tzinfo.bind(this)}></i>
                                                <i className="fa fa-heart-o fa-lg"></i>
                                                <i className="fa fa-home fa-lg"></i>
                                            </div>
                                            <div className="showhb">
                                                <div>
                                                    <img src={this.state.infos.scheInfo.pic} alt="" />
                                                    {/* <img src="http://image.juooo.com/group1/M00/02/C4/rAoKmV0Ue0SACLrdAABs9_U0sP8432.jpg" alt="" /> */}
                                                </div>
                                                <div>
                                                    <span>聚橙主办</span>
                                                </div>
                                                <div>
                                                    <h3>{this.state.infos.scheInfo.schedular_name}</h3>
                                                    <div className="showhbd">
                                                        <span>￥{this.state.infos.scheInfo.price_interval}</span>
                                                        <i>V</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stopb">
                                        <div>
                                            <div>
                                                <div>
                                                    <span>{this.state.infos.scheInfo.time_interval}</span>
                                                    <i></i>
                                                </div>
                                                <div>
                                                    {this.state.infos.scheInfo.city_name} | {this.state.infos.scheInfo.venue_name}
                                                </div>
                                            </div>
                                            <div>
                                                <i className="fa fa-map-marker fa-2x" style={{ color: 'orange' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 专享5折 */}
                                <div className="zxwz">
                                    <div>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAcCAMAAACDFrsfAAAAbFBMVEUAAAA6ODdFQ0FFQ0FFQ0FFQ0EsKiksKiksKiksKiksKilFQ0FFQ0FFQ0H13qnQvZK8q4Xs1qPjzp5mYFOCeGPZxZimmHibjnFWUkqxon/GtIx1bFtNSkWPg2rgy5wsKinKuI/Ar4lvaFpfWVBK1qJ1AAAADXRSTlMAB/XJbtD11aBeKRvRN2x4+gAAAe9JREFUSMft1OmumzAQhmGynL3fjMcLNlu2c//3WA8BdNLSUlSJX+dVolgo0iPjgaIo3rBxb0Xu/Rkb9/xeFLuXMzbu/LIrXs/bs+fXIoeNy+Q3+1tskMqybBjcrDXI/xMbaSg+sI5ZYhAG4Eut09X4n3HR6dWSufYr2Yammi9stpKgE9Q1DIlGHsaib1owoxFhDsQT2xf/zrYnotNF8vdEpxZ9lnKdFQMECZPBMsuGHvQU1+y2osyiI4MrUYU+56R2MJLvbEVxMjpKc6w10EK9hiWt9fTpKYfBJZuCRM5FqhbYWsbDqVmjwH1xabf0eatam3+r6aLlKqHPu8FIwWKORSCpm5UsTOZuKSlvMGSDsZHH2RhGisTPs0hllst1k9xeiTxuGbi2uFcyG6/TnLPK6ilHB8yzfSWZkQ3NIqvuhS7liegyqkm8kly7XGZHY461phEPrbIjy8RuiVWXKcctxiooW0vfPNvdH3JHEVL9wvqU4bTAqhuIgqpjPZuCB0qDR9b1JVib3cZK9kiPNcrXB8gFXmRVCAmPrBoBkO6Rnd6jLlAuOKirmTUjNZ+ytQj1n4j5km76nnPK/z9bRbixhHWx+xO7x6btB/aATTsM7BGbdhzY3RM27MeuGPrY0H36KKZ2x8Mmc7U/HO97/QlTd6w9nye0eAAAAABJRU5ErkJggg==" alt="" />
                                        <div>
                                            <span>专享5折起 最高可省￥165</span>
                                            <i></i>
                                        </div>
                                    </div>
                                </div>
                                {/* 入场 */}
                                <div className="rc">
                                    <div>
                                        <span>入场</span>
                                        <span>
                                            <div>
                                                {this.state.infos.scheInfo.tips}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="rcbot">
                                    <div>
                                        <span>支持</span>
                                        <span>
                                            <span>
                                                {
                                                    this.state.infos.supportType.map((item, index) => {
                                                        return (
                                                            // <span key={index}><span></span><span>{item}</span></span>
                                                            <span key={index}><span>{item}</span><span></span></span>
                                                        )
                                                    })
                                                }
                                                {/* <span><span>在线选座</span><span></span></span>
                                            <span><span>电子票</span><span></span></span>
                                            <span><span>同城满200免邮</span></span> */}
                                            </span>
                                        </span>

                                    </div>
                                </div>
                                {/* 巡演城市 */}
                                <div className="xycity">
                                    <div className="xycitytop">
                                        <span>巡演城市</span>
                                        <span>
                                            <span className="tspan">{this.state.city.showtotal}</span>场
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAMAAACDMFxkAAAAM1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyOefYBvAAAAEXRSTlMA/AW1wr2r3K+fy6YKz5OSB/KUf8wAAABKSURBVAjXbc7bDoAwCAPQwjbBzdv/f60PSsUoTyehTQorivtcaG0yIVxedvxlqozkOWU2ultwWS3UZb90sKaNqkmDX/8MewTz0AmWCAFo1w/zpQAAAABJRU5ErkJggg==" alt="" />
                                        </span>
                                    </div>
                                    <div className="xycitybot">
                                        <div>
                                            {
                                                this.state.city.tourlist.map((item, index) => {
                                                    return (
                                                        <div className="xytop" key={index}>
                                                            <div>
                                                                {item.city_name}
                                                            </div>
                                                            <div>
                                                                {item.date}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* 演出介绍 */}
                                <div className="ycjs" style={this.state.style}>
                                    <h3>演出介绍</h3>
                                    <div className="ycjsdo"
                                        dangerouslySetInnerHTML={{
                                            __html: ` ${this.state.infos.scheInfo.schedular_desc}`
                                        }} />
                                </div>
                                {/* 展示全部 */}
                                <div className="showall" onClick={this.btn.bind(this)} style={{ display: this.state.bool ? 'block' : 'none' }}>展示全部</div>

                            </div>
                            {/* 温馨提示 */}
                            <div className="wxtip">
                                <div>
                                    <span>温馨提示</span>
                                    <i className="fa fa-chevron-right" onClick={this.wenxin.bind(this)}></i>
                                </div>
                                <div>
                                    {
                                        this.state.infos.notice.map((item, index) => {
                                            return (
                                                <span key={index}>
                                                    <i></i><span>{item.title}</span>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* 弹框温馨提示 */}
                            <div className="dw" style={{ display: this.state.bools ? 'block' : 'none' }}>
                                <div className="wxtipt">
                                    <div>
                                        <h3>温馨提示</h3>
                                        {
                                            this.state.infos.notice.map((ele, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div>
                                                            <div>
                                                                <span></span>
                                                                <span>{ele.title}</span>
                                                            </div>
                                                            <div>
                                                                {ele.desc}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <i className="fa fa-close fa-lg" style={{ color: '#666666' }} onClick={this.wenxinxs.bind(this)}></i>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* 相关推荐 */}
                            <div className="xgtj">
                                <h3>相关推荐</h3>
                                <div>
                                    {
                                        this.state.xgtj.slice(1, 4).map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className="xgtjleft">
                                                        <img src={item.pic} alt="" />
                                                    </div>
                                                    <div className="xgtjright">
                                                        <div>
                                                            <span>{item.show_time_top}</span>
                                                            <i>{item.show_time_bottom}</i>
                                                        </div>
                                                        <div>
                                                            <h3>{item.name}</h3>
                                                        </div>
                                                        <div>
                                                            {item.city_name} | {item.venue_name}
                                                        </div>
                                                        <div>
                                                            <span>￥{item.min_price}</span>
                                                            <i>起</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    ((n) => {
                                        if (n > 4) {
                                            return (
                                                <div onClick={this.seeduo.bind(this, this.state.infos.scheInfo)}>
                                                    查看更多
                                            </div>
                                            )
                                        }
                                    })(this.state.xgtj.length)
                                }
                            </div>
                        </div>
                        {/* 立即购买 */}
                        <div className="ljbuy">
                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="" />
                                <p>客服</p>
                            </div>
                            <div onClick={this.buy.bind(this)}>
                                选座购买
                                </div >
                        </div>
                        {/* 点击后的选座购买 */}
                        <div className="selbuy" style={{ display: this.state.booll ? 'block' : 'none' }}>
                            <div>
                                <div>
                                    <h3>选择场次</h3>
                                    <div className="buytop">
                                        <div>
                                            <span>2019.07.05 周五 19:30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment >
            )
        } else {
            return (
                <div> <WhiteSpace />
                    <h3>{loadingToast}</h3>
                    {/* <Button onClick={loadingToast}>loading</Button> */}
                    <WhiteSpace /></div>
            )
        }

    }
    componentDidMount() {
        this.getSchDetail();

        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
    }



    getSchDetail(numid = this.props.location.search.slice(4)) {
        return axios({
            method: 'get',
            url: '/apis/restTicket/getSchDetail',
            params: {
                sch_id: numid,
                current_url: 'https://m.juooo.com/ticket/100260',
                version: '5.1.4',
                referer: '2',
            }
        }).then(res => {
            this.setState({ infos: res.data.data })
            this.getTour(res.data.data.scheInfo.show_id);
            this.getSearch(res.data.data.scheInfo.cate_parent_id, res.data.data.scheInfo.city_id)
            Toast.hide();
        })
    }
    // 巡演城市 restTicket/getTour?show_id=38175&venue_id=1078&&version=5.1.4&referer=2
    getTour(num) {
        return axios({
            method: 'get',
            url: '/apis/restTicket/getTour',
            params: {
                show_id: num,
                venue_id: '1078',
                version: '5.1.4',
                referer: '2',
            }
        }).then(res => {
            this.setState({ city: res.data.data })
        })
    }

    // 相关推荐 Search/getShowList?category=91&city_id=10078&&version=5.1.4&referer=2
    getSearch(num1, num2) {
        return axios({
            method: 'get',
            url: '/apis/Search/getShowList',
            params: {
                category: num1,
                city_id: num2,
                version: '5.1.4',
                referer: '2',
            }
        }).then(res => {
            this.setState({ xgtj: res.data.data.list })

        })
    }
    btn(e) {
        var style = {}
        this.setState({ style })
        this.setState({ bool: false })
    }
    // 温馨提示的按钮
    wenxin() {
        this.setState({ bools: true })
    }
    wenxinxs() {
        this.setState({ bools: false })
    }
    // 查看更多点击
    seeduo(ids) {
        this.props.history.push(`/showlist/?category=${ids.cate_parent_id}&city_id=${ids.city_id}`)
    }
    // 返回剧院页面
    tzinfo() {
        this.props.history.goBack()
    }
    buy() {
        if (this.state.nums == 0) {
            this.setState({ booll: true })
            this.getTicketList(this.props.location.search.slice(4));
            this.setState({ nums: 1 })

        } else {
            this.props.history.push("/mine")

        }
    }
    boolls() {
        this.setState({ booll: false })
        // console.log(this.props.location.search.slice(4));
    }
    // RestTicket/getTicketList
    // ?sch_id=101299&show_id=37531&city_id=3&venue_id=1332&isFamilyCard=0&cardRuleId=undefined&isManager=0&&version=5.1.4&referer=2
    getTicketList(n) {
        return axios({
            method: 'get',
            url: 'apis/RestTicket/getTicketList',
            params: {
                sch_id: n,
                show_id: '37531',
                city_id: '3',
                venue_id: '1332',
                isFamilyCard: '0',
                cardRuleId: 'undefined',
                isManager: '0',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            console.log(res.data);
            this.setState({ yccc: res.data.data.ticket })
        })
    }

}
export default withRouter(Show)