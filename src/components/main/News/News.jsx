import './news.scss'
import React, { Fragment, PureComponent } from "react";
import {
    GetSildeList, getClassifyItemAsyanc, GetAd, GetHotsRecommendList,
    GetRecommendListTOUR, GetHotTheatre, GetRecommendShow
} from "./actionCreator";
import { connect } from "react-redux";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import { withRouter } from "react-router-dom"; // onPress 编程式跳转hostory
import Minesong from "@/components/main/Minesong";
import Test from "@/components/main/xiala/xiala";
import OBserver from "@/Observer"
import axios from 'axios'
import { Toast } from 'antd-mobile';
class News extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            operationA: [],
            operationB: [],
            data: '',
            style: { background: '' },
            style1: { fontSize: '.3rem', color: '#fff' },
            stylep: { color: '#fff' },
            stylep1: { color: '#fff' },
            img: 'https://m.juooo.com/static/img/nav_icon_search.f194288.png'
        }
    }
    render() {
        return (
            <Fragment>

                {/* 为你推荐 */}
                <Test >
                    <div id='main'>
                        {/* 固定头部 */}
                        <div className="top" style={this.state.style}>
                            <p type="primary" onClick={this.props.City.bind(this)} style={this.state.stylep}>
                                <i className="fa fa-map-marker fa-lg" style={this.state.style1}></i>
                                
                                {this.state.data}
                            </p>

                            <p className="p2" onClick={this.props.search.bind(this)} style={this.state.stylep1}>
                                <img src={this.state.img} alt="" />
                                <span>搜索热门演出</span>
                            </p>

                            <div className="p3" onClick={this.props.City.bind(this)}>
                                <img src="http://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="" />

                            </div>
                        </div>
                        {/* 轮播图 */}
                        <div className='carousel'>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {
                                        this.props.carousel.map((item, index) => {
                                            return (
                                                <div className="swiper-slide" key={index} >
                                                    <img src={item.get('touch_image_url')} alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 5个焦点图 */}
                        <div className="classfiy" style={{ display: this.props.classify_list.length === 0 ? 'none' : 'flex' }}>
                            {
                                this.props.classify_list.slice(0, 5).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item.get('pic')} alt="" onClick={this.btns.bind(this, item)} />
                                            <p>{item.get('name')}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* 一长条图片 */}
                        <div className="pic" style={{ display: this.props.imgs.length === 0 ? 'none' : 'flex' }}>
                            {
                                this.props.imgs.slice(0, 1).map((item, index) => {
                                    return (

                                        <img key={index} src={item.get('pic')} alt="" />

                                    )
                                })
                            }

                        </div>
                        {/* PLus卡 */}
                        <div className="operation">
                            <ul className="operation-t">
                                {
                                    this.state.operationA.map((item, index) => (
                                        <a href={item.url} key={index}>

                                            <li className="operation-li" >
                                                <span className="span1" >
                                                    <h3 className="title">{item.name}</h3>
                                                    {/* <p className="titlea" v-html="item.describe"></p> */}
                                                    <p className="titlea" dangerouslySetInnerHTML={{ __html: item.describe }}></p >
                                                </span>
                                                <span className="span2">
                                                    <img className="imgs" src={item.pic} />
                                                </span>
                                            </li>
                                        </a>
                                    ))
                                }
                            </ul>

                            <ul className="operation-t">
                                {
                                    this.state.operationB.map((item, index) => (
                                        <a href={item.url}>
                                            <li className="operation-li2" key={index}>
                                                <span className="span1">
                                                    <h3 className="title">{item.name}</h3>
                                                    <p className="titlea" dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                                                </span>
                                                <span className="span2">
                                                    <img className="imgs" src={item.pic} />
                                                </span>
                                            </li>
                                        </a>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* 热门演出 */}
                        <div className="hotshow">
                            <p>
                                <b>热门演出</b>
                                <i>&gt;</i>
                            </p>
                            <div className="show" >
                                <div className="swiper-containers">
                                    <div className="swiper-wrapper" >
                                        {
                                            this.props.hotshow.slice(0, 10).map((item, index) => {
                                                return (
                                                    <div className="swiper-slide" key={index} id='swiper'
                                                        onClick={this.hotList.bind(this, item.get('schedular_url'))} >
                                                        <img src={item.get('pic')} alt="" onClick={this.tz.bind(this, item)} />
                                                        <p>{item.get('show_name')}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 巡回演出 */}
                        <div className="tour">
                            <p>
                                <b>巡回演出</b>
                                <i onClick={this.props.gomoreTourShow.bind(this)}>&gt;</i>
                            </p>
                            <div className="showtime" >
                                <div className="swiper-containerx">
                                    <div className="swiper-wrapper" >
                                        {
                                            this.props.tourList.slice(0, 6).map((item, index) => {
                                                return (
                                                    <div className="swiper-slide" key={index}
                                                        onClick={this.show.bind(this, item.get('tour_show_url'))}
                                                    >
                                                        <a href={item.get('tour_show_url')} style={{ color: '#000' }}>
                                                            <img src={item.get('pic')} alt="" />

                                                            <h4>{item.get('show_name')}</h4>
                                                            <p>{item.get('schedular_num')}场巡演</p>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 演唱会.. */}
                        <Minesong props={this.props}></Minesong>
                        {/* 热门场馆 */}
                        <div className="theatre">
                            <p>
                                <b>热门场馆</b>
                                <i>&gt;</i>
                            </p>
                            <div className="swiper-containerh">
                                <div className="swiper-wrapper" >
                                    {
                                        this.props.hotlist.slice(0, 6).map((item, index) => {
                                            return (
                                                <div className="swiper-slide box" key={index} id='box'
                                                    style={{ width: '193px', height: '217px' }}
                                                >
                                                    <div className="head">
                                                        <img src={item.get('pic')} alt="" />
                                                        <div>
                                                            <h6>{item.get('name')}</h6>
                                                            <p>{item.get('count')}场在售演出</p>
                                                        </div>
                                                        <a href="#">...</a>
                                                    </div>

                                                    <div className="bottom">
                                                        {
                                                            item.get('show_list').map((ele, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        <span className="xian">{ele.get('show_time')}</span>
                                                                        <span className="circle"></span>
                                                                        <img src={ele.get('pic')} alt="" onClick={this.tz.bind(this, ele)} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        {/* <div v-for="(ele,index) in item.show_list" :key="index">
                                                        <span class="xian">{{ele.show_time}}</span>
                                                        <span class="circle"></span>
                                                        <img :src="ele.pic" alt>
                                                    </div> */}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </Test>


            </Fragment >
        )
    }
    // hotList(id){
    //     // const sch_id=id.slice((id.indexOf('ket/'))+4);
    //     // this.props.history.push(`/show?id=${sch_id}`)
    // }
    show() {

    }
    hotList(id) {
        const sch_id = id.slice((id.indexOf('ket/')) + 4);
        // console.log(sch_id)
        // schedular_url: "https://m.juooo.com/ticket/102591"
        // console.log(this.props);
        //         sch_id: 102591
        // current_url: https://m.juooo.com/ticket/102591
        // (empty)
        // version: 5.1.4
        // referer: 2
        //sch_id=102591&current_url=https%3A%2F%2Fm.juooo.com%2Fticket%2F102591&&version=5.1.4&referer=2
        this.props.history.push(`/show?id=${sch_id}`)
    }
    tz(ele) {
        this.props.history.push(`/show?id=${ele.get("id")}`)
    }
    btns(item) {
        this.props.history.push(`/showcate`)

        // console.log(item.get());
    }
    componentWillMount() {
        this.props.handleAdd();//轮播
        this.props.handle();//焦点图,广告图
        this.props.handleAd();//一长条图片
        this.props.handleHot();//热门演出
        this.props.handleTOUR();//巡回演出
        this.props.handlehot();//热门场馆

    }
    componentDidMount() {
        // console.log(this.props.location.data);
        if (this.props.location.data == undefined) {
            this.setState({ data: '全国' })
        } else {
            this.setState({ data: this.props.location.data })
        }
        // console.log(document.body.scrollTop)
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });

        setTimeout(() => {
            if (this.props.carousel.length != 0) {
                Toast.hide();
            }
        }, 3000);
        //分类 PLUS卡
        axios({
            method: "get",
            url: "apis/home/getClassifyItem",
            params: {
                city_id: '0',
                operation_limit: '5',
                abbreviation: '',
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            //  数据就变成了可以触发事件监听类型 
            this.setState({ getClassifyItem: res.data.data.classify_list })
            // this.state.getClassifyItem = res.data.data.classify_list
            // console.log(this.state.getClassifyItem)

            this.setState({ operationA: res.data.data.operation_list.slice(0, 2) }) //上面两个
            // console.log(this.state.operationA)

            this.setState({ operationB: res.data.data.operation_list.slice(2, 5) }) //下面两个
            // console.log(this.state.operationA)
        })
        OBserver.$on("runFrom", (bool) => {
            // console.log(bool);
            if (bool) {
                var style = { background: '#fff' }
                var style1 = { fontSize: '.6rem', color: '#ff6743' }
                var stylep = { color: '#000', background: '#fff', fontWeight: '600' }
                var stylep1 = { color: '#b3b3b3', background: '#f5f5f5', fontWeight: '600' }
                this.setState({ style })
                this.setState({ stylep })
                this.setState({ style1 })
                this.setState({ stylep1 })
                this.setState({ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC' })
            } else {
                var style = { background: '' }
                var style1 = { fontSize: '.3rem', color: '#fff' }
                var stylep = { color: '#fff' }
                this.setState({ style1 })
                this.setState({ stylep })
                this.setState({ stylep1 })
                this.setState({ style })
                this.setState({ img: 'https://m.juooo.com/static/img/nav_icon_search.f194288.png' })

            }
        })
    }

}
const mapStateToProps = (store) => ({
    carousel: store.getIn(['Newsreducer', 'carousel']),//轮播
    classify_list: store.getIn(['Newsreducer', 'classify_list']),//5个焦点图
    operation_list: store.getIn(['Newsreducer', 'operation_list']),//5个广告图
    imgs: store.getIn(['Newsreducer', 'imgs']),//一长条图片
    hotshow: store.getIn(['Newsreducer', 'hotshow']),//热门演出
    tourList: store.getIn(['Newsreducer', 'tourList']),//巡回演出
    hotlist: store.getIn(['Newsreducer', 'hotlist']),//热门场馆
    recommen: store.getIn(['Newsreducer', 'recommen']),//为你推荐

})

const initSwiper = () => {  //顶部轮播
    new Swiper('.swiper-containerlu', {
        autoplay: 2000
    })
}
const swiper2 = () => {//热门演出轮播
    new Swiper('.swiper-containers', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
    });
}
const swiper3 = () => {
    new Swiper('.swiper-containerx', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    });

}
const initSwiper3 = () => {  //热门场馆
    new Swiper('.swiper-containerh', {
        slidesPerView: 1.5
    })

}
const mapDispathToProps = (dispatch) => ({
    handleAdd() {//轮播
        dispatch(GetSildeList(dispatch, initSwiper))
    },
    handle() {//焦点图,广告图
        dispatch(getClassifyItemAsyanc(dispatch))
    },
    handleAd() {//一长条图片
        dispatch(GetAd(dispatch))
    },
    handleHot() {//热门演出
        dispatch(GetHotsRecommendList(dispatch, swiper2))
    },
    handleTOUR() {//巡回演出
        dispatch(GetRecommendListTOUR(dispatch, swiper3))
    },
    // handlehot() {//热门球馆
    //     dispatch(GetHotTheatre(dispatch, initSwiper))
    // },
    search() {//搜索框
        this.props.history.push("/search")
    },
    handlehot() {//热门球馆
        dispatch(GetHotTheatre(dispatch, initSwiper3))
    },
    City() {
        this.props.history.push("/selectCity")
    },
    gomoreTourShow() {
        this.props.history.push("/moreTourShowList")
    }



})


export default connect(mapStateToProps, mapDispathToProps)(withRouter(News))
