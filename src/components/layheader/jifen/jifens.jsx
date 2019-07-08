import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom'
import React, { Fragment, Component } from "react";
import axios from 'axios'


class jifens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            num: 1
        };
    }

    componentDidMount() {
        this.getScores(this.state.num, (res) => {
            this.setState({
                // data: res.data.data.list,
                height: hei
            })
        })
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    }

    render() {
        return (<div>
            <PullToRefresh
                damping={60}
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
                  
                }}
            >
            </PullToRefresh>
        </div>);
    }
    getScores(num, callback) {
        let fm=new FormData();
        fm.append('type',0)
        fm.append('city',0)
        fm.append('page',1)  
        axios({
            method: 'POST',
            url: '/apis/Scores/getAllScoresList?haha=1111',
            headers:{'ContentType':'application/json, text/javascript'},
            data: fm
        }).then((res) => {
            // callback(res);
            console.log(res)
        })
    }
}
export default jifens;