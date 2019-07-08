import React,{Component} from 'react';
import Routers from "@/router/index"
import { withRouter  } from "react-router-dom";
// 引入css样式Ant Design Mobile
import 'antd-mobile/dist/antd-mobile.css';
import  TabBar from  '@/components/main/tabbar/tabBar';
class App extends Component {
  constructor(props){
    super(props);
    this.state={   
    }
}
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <Routers />
        {
          ((bool)=>{
            if(bool==='/info'||bool==='/news'){
              return(<TabBar/>)
            }else{
              return
            }
          })(this.props.location.pathname)
        }
        
      </header>
    </div>
  );
 }
}
export default withRouter(App)
