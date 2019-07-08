import React, { Fragment, PureComponent } from 'react';
import { connect } from "react-redux"
import { GET_DATAajax } from "./actionCreator"
import { Toast } from 'antd-mobile';
// import { Button } from 'antd-mobile'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { withRouter  } from "react-router-dom"; // onPress 编程式跳转hostory
// console.log(URL.parse(this.props.location.search,true).query)
import "./info.scss"
class Info extends PureComponent {
    constructor() {
        super()
        this.state = {
            infolist: [],
            bool: true,
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props.infolist)
    //     if (this.props.infolist != nextProps.infolist) {
    //     }
    // }
    render() {
        let { infolist } = this.props
        return (
            <Fragment>
                <div id="wrap">
                    <div className="header">
                        <h3>剧院</h3>
                    </div>
                    <div className="theabody">
                        <div className="wrapper">
                            <div className="theaList">
                                <ul>
                                    {
                                        infolist.slice(0, 12).map((item, index) => (
                                            <li key={index}>
                                                <div className="theainfo">
                                                    <a href="">
                                                        <img src={item.get("pic")} alt="" />
                                                        <div className="thinfo">
                                                            <p>{item.get("name")}</p>
                                                            <p>{item.get("count")}场在售演出</p>
                                                        </div>
                                                    </a>
                                                    <span>...</span>

                                                    <div className="theashow" >
                                                        <div className="swiper-container">
                                                            <div className="swiper-wrapper">

                                                                {
                                                                    item.get("show_list").map((ele, index) => (
                                                                        <div className="infoshow swiper-slide" key={index}>
                                                                            <div className="showdate">
                                                                                <p>{ele.get("show_time")}</p>
                                                                                <span className="dot"></span>
                                                                            </div>
                                                                            <s>
                                                                                {/* <img src={ele.get("pic")} alt=""/> */}
                                                                                {
                                                                                    (
                                                                                        (bool) => {
                                                                                            if (bool === true) {
                                                                                                return (<p onClick={this.rout.bind(this, item)}>查看更多>> </p>)
                                                                                            } else {
                                                                                                return (<img src={ele.get("pic")} alt="" onClick={this.routt.bind(this, ele)} />)
                                                                                            }
                                                                                        }

                                                                                    )(ele.get("pic"))
                                                                                }
                                                                            </s>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
          });
      
          setTimeout(() => {
              if(this.props.infolist.length!=0){
                Toast.hide();
              }
          }, 1000);
        this.props.handleAdd();
        
       
    }
    rout(item) {
        console.log(this.props);
        this.props.history.push(`/showlist/?tid=${item.get("id")}`)
        // /news/item?name=${item.name}&say=${item.say}
        // console.log(this.props);
        // console.log(item.get("id"));
    }
    routt(item) {
        // console.log(item);
        this.props.history.push(`/show/?id=${item.get("id")}`)
    }
}
// 动画swiper也要传入dispatch  解决异步
const swiperfn = () => {
    new Swiper('.swiper-container', {
        pagination: ".swiper-pagination",
        // 第一页和最后一页不在滑动留空白
        resistance: true,
        slidesPerView: 3,
        paginationClickable: true,
        observer: true,
        observeParents: false
    })
}
//  this.setState({infolist,this.props.infolist})   
const mapStateToProps = (store) => ({
    infolist: store.getIn(["Inforeducer", "infolist"]),
})


const mapDispathToProps = (dispatch) => ({
    handleAdd() {
        dispatch(GET_DATAajax(dispatch, swiperfn))
    },

    gengduo() {
        this.props.history.push("/showlist")
    }
  
   
})


export default connect(mapStateToProps, mapDispathToProps)(withRouter(Info))