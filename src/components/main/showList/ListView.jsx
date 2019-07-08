import React, { Fragment, Component } from "react"
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom'
import axios from "axios";
import './css/show.scss'
import { withRouter } from "react-router-dom";

class Show extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      num: 1
    };
    console.log(this.props)
  }

  componentDidMount() {
    this.getShow(this.state.num, (res) => {
      this.setState({
        data: res.data.datas,
        height: hei,
      })

    })

    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;

  }

  render() {
    if (this.state.data) {
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
            if (this.props.list.page < this.state.num) {
              return;
            } else {
              this.getShow(this.state.num, (res) => {
                this.setState({ data: this.state.data.concat(res.data.datas) })
              });
            }
          }}
        >
          <div className="show-wrap">
            {
              this.state.data.map((item, index) => (
                <div className="show-items" key={index} >
                  <div className="img-box">
                    <img className="imgs" src={'http://image.juooo.com' + item.pic} onClick={this.btn.bind(this, item)} />
                    <span className="logo_i" dangerouslySetInnerHTML={{ __html: item.tag_icon }}></span>
                  </div>
                  <div className="detail-box">
                    <p className="title">

                      {item.schedular_name ? (item.schedular_name.length > 41 ? item.schedular_name.substr(0, 41) + "..." : item.schedular_name) : ""}
                    </p>
                    <p className="time">{item.show_time}</p>
                    <p className="place">{item.name}</p>
                    <p className="ft0">
                      <span className="fs24">¥</span>
                      <span className="fs32">{item.min_price}</span>
                      <span className="fs24">起</span>
                    </p>
                  </div>
                </div>
              ))
            }

          </div>

        </PullToRefresh>


      </div>);

    } else {
      return (
        <div>
          <img className="imgss" src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/no-data.png" alt="" />
          <div className="show-nodata">抱歉，没有相关演出内容</div>
        </div>
      )
    }

  }
  btn(item) {
    this.props.history.push(`/show?id=${item.id}`)
  }
  getShow(num, callback) {

    axios({
      method: 'get',
      url: 'apis/Theatre/showListData',
      params: {
        tid: 2,
        category: this.props.list.category,
        page: num
      }
    }).then((res) => {
      callback(res);
      console.log(res)
    })
  }
}
export default withRouter(Show);