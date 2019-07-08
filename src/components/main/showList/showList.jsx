import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Tabs, WhiteSpace } from 'antd-mobile';
import './css/show.scss';
// import axios from 'axios'
import { connect } from "react-redux";
import { GetshowListData } from './actionCreator'
import ListView from './ListView'
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavList: [
                { title: '全部', category: 0, page: 5 },
                { title: '演唱会', category: 35, page: 1 },
                { title: '音乐会', category: 36, page: 2 },
                { title: '话剧歌剧', category: 37, page: 1 },
                { title: '儿童亲子', category: 38, page: 2 },
                { title: '音乐剧', category: 79, page: 1 },
                { title: '舞蹈芭蕾', category: 86, page: 1 },
                { title: '戏曲综艺', category: 91, page: 1 },
                { title: '展览', category: 99, page: 1 },
            ],
            tid: 2,
            category: '35'
        }
        // console.log(this.props.location.search.slice(1));
        // 剧院点击查看更多 全部这一栏的接口 Theatre/showListData?tid=2&category=0&page=1
        // 详点击查看更多   Search/getShowList?category=36&city_id=36&page=1&keywords=&&version=5.1.4&referer=2
    }
    render() {
        return (
            <Fragment>
                <div>
                    <WhiteSpace />
                    <Tabs tabs={this.state.NavList} initialPage={0} animated={false} useOnPan={false} onTabClick={this.props.show.bind(this)}>
                        {
                            this.state.NavList.map((item, index) => {
                                return <div key={index}>
                                    <ListView list={item}></ListView>
                                </div>
                            })
                        }
                    </Tabs>
                    <WhiteSpace />
                </div>
            </Fragment >
        )
    }

    componentDidMount() {
        this.props.showListData();
        // console.log(this.props.showData)
    }
}
const mapStateToProps = (store) => ({
    showData: store.getIn(['showListreducer', 'showListData']),//
})
const mapDispathToProps = (dispatch) => ({
    showListData() {
        dispatch(GetshowListData(dispatch))
    },
    show() {
        // console.log('ok')
        this.props.history.push(`/showList?tid=${this.state.tid}&category=${this.state.category}`);
        this.state.category++;
    }

})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(One));