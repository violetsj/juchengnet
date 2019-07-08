import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios"
const tabs = [
    { title: '全部',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" },
    { title: 'First Tab',category_id: "36" }
  
   
];
class TabExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            tabs,
            list:[]
        }
    }
    render() {
        return (
            <Fragment>
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    onChange={(tab, index) => { 
                        // console.log('onChange', index, tab); 

                    }}
                    onTabClick={(tab, index) => { 
                        // console.log('onTabClick', index, tab);
                        axios({
                            method: 'get',
                            url: 'apis/Search/getShowList',
                            data: {
                                category: tab.category_id,
                                city_id: '0',
                                page: '1',
                                version: '5.1.4',
                                referer: '2'
                            }
                        }).then((res) => {//category_id
                            // console.log(res.data.data.list);
                            this.setState({
                                list:res.data.data.list
                            })
                        })
                     }}
                    >//{this.state.list.pic}
                </Tabs>
                <WhiteSpace />
            </Fragment>
        )
    }
    componentDidMount(){
        this.send();
     }
    send(){
        axios({
            method: 'get',
            url: 'apis/Search/getShowCategory',
            data: {
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {//category_id
             const arr=res.data.data.show_category_list;
              var tabs=[...this.state.tabs];
           for(var i=0;i<arr.length;i++){
               tabs[i+1].title=arr[i].name;
               tabs[i+1].category_id=arr[i].category_id;
           }
          this.setState({tabs})
        })
    }
}

const mapStateToProps = (store) => ({

})
const mapDispathToProps = (distach) => ({
  handele(){

  }
})
export default connect(mapStateToProps, mapDispathToProps)(TabExample)
// export default TabExample