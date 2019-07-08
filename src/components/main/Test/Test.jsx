import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import axios from "axios"
import './test.scss'
import styled from "styled-components"

const Obtn=styled.div`
    width: 2.88rem;
    height: 1.08rem;
    line-height: 1.08rem;
    background-color: #f5f5f5;
    
    font-size: 0.55467rem;
    color: #212121;
    text-align: center;
    border-radius: 0.10667rem;
    margin: 0.42667rem 0.256rem 0;
    padding-left: 0.10667rem;
    padding-right: 0.10667rem;
    overflow: hidden;
    white-space: nowrap;
    
    text-overflow: ellipsis;`;
///RestTicket/getTicketList///restTicket/getTicketPromotionInfo
// axios({
//   method: 'get',
//   url: 'apis/RestTicket/getTicketList',
//  params:{
//   sch_id: '101299',
//   show_id: '37531',
//   city_id: '3',
//   venue_id: '1332',
//   isFamilyCard: '0',
//    cardRuleId: '6738786',
//   isManager: '0',
  
//   version: '5.1.4',
//   referer: '2'
//  }
// }).then((res) => {
//  console.log(res);

// });
// axios({
//   method: 'post',
//   url: 'apis/getTicketPromotionInfo',
//  params:{
//   version: '5.1.4',
//   referer: '2'
  
//  }
// }).then((res) => {
//  console.log(res);

// })
class Test extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  render() {
    return (
      <Fragment>
          <div id='city' style={{height:'1000px',backgroundColor:'#fff'}}>
            <div className='header'>
              <i className="fa fa-angle-left fa-lg" ></i>
              <span>切换城市</span>
            </div>
             <div className='current'>
               <p>当前城市</p>
               <Obtn>全国</Obtn>
             </div>
            <div >
              <p>定位城市</p>
              <Obtn><span style={{color: '#ff7919'}}>定位中...</span>
                </Obtn>
            </div>
            <div>
              <p>热门城市</p>
             
            </div>
            <div>
              <p>全部城市</p>
             
            </div>
          </div>
      </Fragment>
    )
  }
  componentDidMount(){
    // this.test()
  }
  test(){
    axios({
      method: 'post',
      url: 'apis/Index/getCityList'
     
    }).then((res) => {
     console.log(res.data.city_list);
   
    })
  }
}
const mapStateToProps = (store) => ({

})
const mapDispathToProps = (distach) => ({
  handele(){

  }
})
export default connect(mapStateToProps, mapDispathToProps)(Test)