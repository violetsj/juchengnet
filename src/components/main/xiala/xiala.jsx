import { PullToRefresh } from 'antd-mobile';
import React, { PureComponent } from "react"
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import OBserver from "@/Observer"
const Obox = styled.div`
            position: relative;
            /* display: flex; */
            /* font-size: 12px; */
            padding: 0 20px 0 12px;
            img {
              display: inline-block;
              width: 94px;
              height: 128px;
              margin-right: 10px;
            }
            .re-right {
              margin-bottom: 28px;
              position: absolute;
              left:120px;
              top:0px;
              h6 {
                margin: 10px 0;
                font-size: 13.5px;
                span {
                  font-weight: 100;
                  font-size: 12px;
                }
              }
              h4 {
                width:185px;
                height:36px;
                font-size: 15px;
                margin: 10px 0;
                 
                overflow: hidden;
                text-overflow: ellipsis;
              }
              p {
                margin: 10px 0;
                span {
                  color: #ff6743;
                }
              
            }
          }
        
`;
class Xiala extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      pageNum: 1,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    this.getRecommendShow(1, (res) => {
      this.setState({
        height: hei,
        data: res
      });
    })

  }
  // 监听滚动条事件
  handleOnScroll() {
    // console.log(ReactDOM.findDOMNode(this.ptr).scrollTop);
    if (ReactDOM.findDOMNode(this.ptr).scrollTop > 200) {
      OBserver.$emit("runFrom", true)
    } else {
      OBserver.$emit("runFrom", false)
    }
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
        // 监听滚动条
        onScrollCapture={this.handleOnScroll.bind(this)}
        indicator={{ deactivate: '上拉可以刷新' }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.state.pageNum++;
          // console.log(this.state.pageNum)
          this.getRecommendShow(this.state.pageNum, (res) => {
            // console.log(res)
            this.setState({
              data: this.state.data.concat(res)
            });
          })
          // console.log(this.state.data)
        }}
      >
        {this.props.children}
        <div className="recommend">
          <h3 style={{height:'2rem',lineHeight:'2rem',paddingLeft:'0.4rem'}}>为你推荐</h3>
        </div>
        {this.state.data.map((item, index) => (
          <Obox key={index}>
            <img src={item.schePic} alt='' onClick={this.xlroute.bind(this, item)} />
            <div className="re-right">
              <h6>
                {item.show_time}
                <span>{item.week}</span>
              </h6>
              <h4>{item.show_name}</h4>
              <p>{item.c_name}</p>
              <p>
                <span>￥{item.low_price.slice(0, item.low_price.indexOf('.'))}</span>起
            </p>
            </div>
          </Obox>
        ))}
      </PullToRefresh>
    </div>);
  }
  xlroute(item) {
    this.props.history.push(`/show?id=${item.sche_id}`)
  }
  getRecommendShow(page, callBack) {

    axios({
      method: 'get',
      url: 'apis/home/getRecommendShow',
      params: {
        page: page,
        version: '5.1.4',
        referer: '2'
      }
    }).then((res) => {
      callBack(res.data.data.recommend_show_list)
    })
  }
}
const mapStateToProps = (store) => ({

})
const mapDispathToProps = (distach) => ({
  handele() {

  }
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Xiala))