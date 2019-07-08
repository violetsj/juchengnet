/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Fragment,Component} from "react";
import { withRouter  } from "react-router-dom"; // onPress 编程式跳转hostory
import { TabBar } from 'antd-mobile';
import logo1 from '../../../images/002.png'
import logo2 from '../../../images/01.png'
import logo3 from '../../../images/003.png'
import logo4 from '../../../images/02.png'
import logo5 from '../../../images/004.png'
import logo6 from '../../../images/005.png'

class TabBarExample extends  React.Component {
  constructor(props) {
   // console.log(props)
      super(props);
      this.state = {
        selectedTab: 'blueTab',
        hidden: false,
        fullScreen: true,
      };
    }
  
    renderContent(pageText) {
      
    }
  
    render() {
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: -3 ,zIndex:100} : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="bottom" 
          >
            <TabBar.Item
              title="首页"
              key="Life"
              icon={<div style={{
                width: '30px',
                height: '30px',
                background: `url(${logo1}) center center /  30px 30px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '35px',
                height: '35px',
                background: `url(${logo2}) center center /  35px 35px no-repeat` }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={0} //显示数量
              onPress={() => {
                this.props.history.push("/news")
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
             
            </TabBar.Item>

            <TabBar.Item
               icon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo3}) center center /  30px 30px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo4}) center center / 30px 30px no-repeat` }}
                />
              }
              title="剧院"
              key="Friend"
            //  dot   小红点
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.props.history.push("/info")
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            >
            </TabBar.Item>


            <TabBar.Item
              icon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo5}) center center /  30px 30px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo5}) center center /  30px 30px no-repeat`}}
                />
              }
              title="票夹"
              key="Friend"
            //  dot   小红点
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.props.history.push("/search")
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
            </TabBar.Item>

            <TabBar.Item
               icon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo6}) center center /  30px 30px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: `url(${logo6}) center center /  30px 30px no-repeat`}}
                />
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.props.history.push("/mine")
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
            </TabBar.Item>

          </TabBar>
        </div>
      );
    }
  }
  export default withRouter(TabBarExample);
//   tabBarPosition="bottom"  控制固定在上面还是下面
  // badge={0}  显示数量  加在 TabBar.Item
  // badge={'新消息'}  显示消息  不显示  空字符串