import React, { Component, Fragment } from "react"
import { Route, Redirect } from "react-router-dom";
import Info from "@/components/main/Info/Info.jsx"//剧院
import News from "@/components/main/News/News.jsx"//主页
import Mine from "@/components/main/Mine/Mine.jsx"//我的
import Myinfo from "@/components/main/Mine/myinfo.jsx"//个人信息页面
import Test from "@/components/main/Test/Test.jsx"//下拉加载
import Show from "@/components/main/show/"//演出详情
import Showt from "@/components/main/show/showt/"//巡回演出
import ShowList from "@/components/main/showList/showList"//演出库
import Search from "@/components/layheader/search/search"//搜索
import Minesong from "@/components/main/Minesong"//首页里面组件
import TabExample from "@/components/layheader/tabnav/tabnav"//导航
import ShowCate from "@/components/main/showCate/showCate" //演唱会
import Chengka from '@/components/layheader/chengka/chengka'
import Jifen from '@/components/layheader/jifen/jifen'
import SelectCity from '@/components/layheader/selectCity/selectCity'//城市
import Seting from '@/components/main/Mine/seting'
import MoreTourShowList from '@/components/layheader/moreTourShowList/moreTourShow'//城市

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/info" component={Info} />
                <Route path="/news" component={News} />
                <Route path="/test" component={Test} />
                <Route path="/show" component={Show} />
                <Route path="/showt" component={Showt} />
                <Route path="/mine" component={Mine} />
                <Route path="/seting" component={Seting} />
                <Route path="/tabnav" component={TabExample} />
                <Route path="/myinfo" component={Myinfo} />
                <Route path="/showlist" component={ShowList} />
                <Route path="/search" component={Search} />
                <Route path="/minesong" component={Minesong} />
                <Route path="/showcate" component={ShowCate} />
                <Route path="/chengka" component={Chengka} />
                <Route path="/jifen" component={Jifen} />
                <Route path="/selectCity" component={SelectCity} />
                <Route path="/moreTourShowList" component={MoreTourShowList} />

                {/* <Redirect path="/" to="/news"/> */}

            </Fragment>
        )
    }
}
