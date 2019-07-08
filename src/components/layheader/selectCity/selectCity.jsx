import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import axios from 'axios'
import selectCity from './selectCity.scss'
import { Link } from "react-router-dom";

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Citydata: []
        }
    }
    render() {
        return (
            <Fragment>
                <div className="flex-navbar">
                   <Link to='/news'>
                   <Icon className="icon" type={'left'} size='md' />
                   </Link>
                    <div className="center">切换城市</div>
                </div>
                <div className="select-area">
                    <div className='area-title'> 当前城市</div>
                    <div className="area-wrap">
                        <a href="javascript:void(0);" style={{ color: '#212121' }} className="area-items">全国</a>
                    </div>
                    <p className="area-title js-location">定位城市</p>
                    <div className="area-wrap">
                        <a href="javascript:void(0);" className="area-items js-auto-city dis" style={{ color: '#ff7919' }}>定位中...</a>
                    </div>
                    <p className="area-title js-hot">热门城市</p>
                    <div className="area-wrap" onClick={this.city.bind(this)}>
                    <a className="area-items" href="javascript:void(0);">全国</a>
                    <a className="area-items" href="javascript:void(0);" >广州</a>
                    <a className="area-items" href="javascript:void(0);" >深圳</a>
                    <a className="area-items" href="javascript:void(0);" >北京</a>
                    <a className="area-items" href="javascript:void(0);" >上海</a>
                    <a className="area-items" href="javascript:void(0);">成都</a>
                    <a className="area-items" href="javascript:void(0);">石家庄</a>
                    <a className="area-items" href="javascript:void(0);">重庆</a>
                    <a className="area-items" href="javascript:void(0);">陵水</a>
                    <a className="area-items" href="javascript:void(0);">武汉</a>
                    <a className="area-items" href="javascript:void(0);">廊坊</a>
                    <a className="area-items" href="javascript:void(0);">长沙</a>
                    <a className="area-items" href="javascript:void(0);">杭州</a>
                    <a className="area-items" href="javascript:void(0);">南京</a>
                    <a className="area-items" href="javascript:void(0);">无锡</a>
                    <a className="area-items" href="javascript:void(0);">合肥</a>
                    <a className="area-items" href="javascript:void(0);">苏州</a>
                    <a className="area-items" href="javascript:void(0);">泉州</a>
                    <a className="area-items" href="javascript:void(0);">绍兴</a>
                    <a className="area-items" href="javascript:void(0);">徐州</a>
                    <a className="area-items" href="javascript:void(0);">宜昌</a>
                    <a className="area-items" href="javascript:void(0);">济南</a>
                    <a className="area-items" href="javascript:void(0);">柳州</a>
                    <a className="area-items" href="javascript:void(0);">台北</a>
                    <a className="area-items" href="javascript:void(0);">天津</a>
                    <a className="area-items" href="javascript:void(0);">太原</a>
                    <a className="area-items" href="javascript:void(0);">郑州</a>
                    <a className="area-items" href="javascript:void(0);">澳门</a>
                    <a className="area-items" href="javascript:void(0);">昆明</a>
                    <a className="area-items" href="javascript:void(0);">西安</a>
                    <a className="area-items" href="javascript:void(0);">香港</a>
                    <a className="area-items" href="javascript:void(0);">宁波</a>
                    <a className="area-items" href="javascript:void(0);">厦门</a>
                    <a className="area-items" href="javascript:void(0);">兴安盟</a>
                    <a className="area-items" href="javascript:void(0);">马来西亚</a>
                    <a className="area-items" href="javascript:void(0);">内蒙古</a>
                    <a className="area-items" href="javascript:void(0);">吉隆坡</a>
                </div>
                <p className="area-title pt40 pb20 all-citylist">全部城市</p>


                <div className="area-lists js-area-lists js-all-city-list">
                            {
                                this.state.Citydata.map((item, index) => {
                                    return (<div key={index}>
                                        <a href="javascript:void(0)" className="area-Cap" >{item.id}</a>
                                        {
                                            item.lists.map((el, a) =>
                                                <div className="cap-list" key={a}>
                                                    <a className="area-items all-city" href="javascript:void(0)" onClick={this.City.bind(this,el.name)}>{el.name}</a>
                                                </div>
                                            )
                                        }
                                    </div>)
                                })
                            }
                        </div>

                <div className="city-index">
                    <a href="javascript:void(0);" data-id="-1" className="index-items">当前</a>
                    <a href="javascript:void(0);" data-id="-11" className="index-items">定位</a>
                    <a href="javascript:void(0);" data-id="-111" className="index-items">热门</a>
                    <div>
                    {
                        this.state.Citydata.map((item,index)=>(
                            <a href="javascript:void(0);" key={index} className="index-items" data-id="A">{item.id}</a>

                        ))
                    }
                    </div>
                </div>
                </div> 
            </Fragment>
        )
    }
    componentDidMount() {
        axios({
            method: 'POST',
            url: '/apis/Index/getCityList',
            params: {

            }
        }).then((res) => {
            var arr = []
            for (const key in res.data.city_list) {
                // console.log(res.data.city_list[key])
                arr.push(res.data.city_list[key])
            }
            this.setState({ Citydata: arr })
        })
    }
    City(item){
          console.log(item) 
          this.props.history.push({
              pathname:`/news`,
              data:item
          }) 
    }
    city(e){
        console.log(e.target.text)
        this.props.history.push({
            pathname:`/news`,
            data:e.target.text
        }) 
    }
}

export default One