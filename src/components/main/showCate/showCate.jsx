import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Tabs, WhiteSpace } from 'antd-mobile';
import './showCate.scss';

import axios from 'axios'
import { connect } from "react-redux";
import Observer from '@/Observer'
import { ListShow, ShowCategory } from './actionCreator'

import ListView from './ListView'
class cate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }

    }
    render() {
        if (this.props.showcates.size === 0) {
            return (
                <Tabs tabs={this.props.showcates} initialPage={0} animated={false} useOnPan={false} onChange={this.show.bind(this)}>
                    <i className="fa fa-spinner fa-pulse" style={{ marginTop: '500px', fontSize: '50px' }}></i>
                </Tabs>
            )
        } else {
            // console.log(this.props.showcates);
            let tabList = [];
            this.props.showcates.map((item, index) => {
                tabList.push({ key: item.get("category_id"), title: item.get("name") })
            })

            tabList.unshift({ key: "0", title: "全部" })
            // console.log(tabList);

            return (

                <Fragment>
                    <div id="app">
                        <div className="page">
                            <header>
                                <i className="fa fa-angle-left fa-lg" onClick={this.shouy.bind(this)}></i>
                                <h3>演出</h3>
                            </header>

                            <WhiteSpace />
                            <Tabs tabs={tabList} initialPage={0} animated={false} useOnPan={false} onTabClick={this.show.bind(this)}>
                                {/* <div className="tab"></div> */}

                                <div className="lists">
                                    <section>
                                        <div className="relist">
                                            <ul>
                                                <div>
                                                    <ListView list={this.state.num}></ListView>
                                                </div>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </Tabs>
                            <WhiteSpace />

                        </div>
                    </div>
                </Fragment>
            )
        }
    }
    componentDidMount() {

        this.props.listshow()

        this.props.showcate()//演出导航
        // console.log(this.props);

    }
    show(n) {
        this.props.listshow(n.key)
        this.setState({
            num: n.key.toString()
        })
    }
    shouy() {
        this.props.history.push(`/news`)
    }
    


}

const mapStateToProps = (store) => ({

    listshows: store.getIn(['showCatereducer', 'listshow']),

    showcates: store.getIn(['showCatereducer', 'showcate'])

})
const mapDispathToProps = (dispatch) => ({
    //列表
    listshow() {
        // console.log(this);
        dispatch(ListShow(dispatch))
    },

    //导航
    showcate() {

        dispatch(ShowCategory(dispatch))

    }

})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(cate));



