import React, { Fragment, Component } from "react"
import { withRouter } from "react-router-dom";
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom'
import axios from "axios";
import './showCate.scss'




class cateShow extends Component {
  constructor(props) {
    // console.log(props);
    super(props);

    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      num: 1
    };
    console.log(this.props);
  }

  componentDidMount() {
    // console.log(this.props.list);
    this.getShow(this.state.num, (res) => {
      // console.log(res);
      // console.log(res.data.data.list);
      this.setState({
        data: res.data.data.list,
        height: hei,
      })
    })
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
  }

  render() {

    if (this.state.data) {
      //  console.log(this.state.data);
      return (<div>
        <PullToRefresh
          damping={200}
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
            if (this.props.list < this.state.num) {
              return;
            } else {
              this.getShow(this.state.num, (res) => {
                this.setState({ data: this.state.data.concat(res.data.data.list) })
              });
            }
          }}
        >
          <div>
            {
              this.state.data.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="left">
                      <img src={item.pic} alt="" onClick={this.xiangq.bind(this, item)} />

                    </div>
                    <div className="right">
                      <p className="data">
                        <strong>{item.show_time_top}</strong>
                        {item.show_time_bottom}
                      </p>
                      <a href="">
                        <h3>{item.name}</h3>
                      </a>
                      <p className="add">{item.city_name} | {item.venue_name}</p>
                      <p className="price">
                        <strong>￥{item.min_price}</strong>
                        起
                        </p>
                    </div>
                  </li>
                )
              }

              )
            }

          </div>

        </PullToRefresh>


      </div>
      );

    } else {
      return (
        <div className="show-nodata">抱歉，没有相关演出内容</div>
      )
    }
  }
  getShow(num, callback) {
    // console.log(this.props.list.key)
    axios({
      method: 'get',
      url: 'apis/Search/getShowList',
      params: {
        city_id: "0",
        category: this.props.list,
        page: num,
        keywords: "",
        version: "5.1.4",
        referer: "2"
      }
    }).then((res) => {
      callback(res);
      // console.log(res);
    })
  }
  //跳转详情
  xiangq(item) {
    //  console.log(this.props);
    this.props.history.push(`/show?id=${item.schedular_id}`)
  }
}
export default withRouter(cateShow);
