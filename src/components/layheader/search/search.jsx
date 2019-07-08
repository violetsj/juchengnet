/* eslint-disable no-dupe-class-members */
import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import './search.scss'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from 'axios';
import { withRouter } from "react-router-dom"; // onPress 编程式跳转hostory

class SearchBarExample extends React.Component {
    state = {
        value: '',
        HotWord: [],
        maplist: []
    };
    componentDidMount() {
        this.autoFocusInst.focus();

    }
    onChange = (value) => {
        this.setState({ value });
        if(value=="") {
            this.setState({maplist:[]})
        }else{
            axios({
                method: "get",
                url: "apis/Search/getShowList",
                params: {
                    keywords: value,
                    page: '1',
                    sort_type: "1",
                    version: "5.1.4",
                    referer: "1"
                }
            }).then((res) => {
                // console.log(res.data.data.list)
                this.setState({ maplist: res.data.data.list })
            })
        }
      

        
    };
    clear = () => {
        this.setState({ value: '' });
        this.setState({ maplist: '' })
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (
        <div>
            <SearchBar
                value={this.state.value}
                placeholder="搜索热门演出"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => this.props.history.push('/news')}
                showCancelButton
                onChange={this.onChange}
            />

            <div className="default-wrap" style={this.state.maplist.length == 0 ? { display: 'block' } : { display: 'none' }}>
                <section className="default hot-search">
                    <h3 className="left">热门搜索</h3>
                    <ul className="list">
                        {this.state.HotWord.map((item, index) => (
                            <li key={index} className="li1">
                                <span onClick={this.list.bind(this,item)}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>


            <div>
                <ul className="ul1">
                    {this.state.maplist.map((item, index) => (
                        <li key={index} className="li1">
                            <img src={item.pic} alt="" className="imgs" onClick={this.tzxq.bind(this, item)} />
                            <div className="item-right">
                                <p className="time">{item.show_time_top}</p>
                                <h3 className="name" dangerouslySetInnerHTML={{ __html: item.name }}>
                                </h3>

                                <p className="cityname">
                                    <span>{item.city_name}|</span>
                                    <span dangerouslySetInnerHTML={{ __html: item.venue_name }}></span>
                                </p>
                                
                                <p className="price">
                                    <span className="price1">￥</span>
                                    <span className="price2">{item.min_price}</span>
                                    <span className="price3">起</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>)
    }

    list(item){
        console.log(item);
        this.setState({value:item})
        
        axios({
            method: "get",
            url: "apis/Search/getShowList",
            params: {
                keywords: item,
                page: '1',
                sort_type: "1",
                version: "5.1.4",
                referer: "1"
            }
        }).then((res) => {
            // console.log(res.data.data.list)
            this.setState({ maplist: res.data.data.list })
        })
     
    }
    componentDidMount() {
        axios.get('https://m.juooo.com/Search/getHotWord?&version=5.1.4&referer=2').then((res) => {
            this.setState({ HotWord: res.data.data })
            // console.log(this.state.HotWord)
        });
        
    }
    tzxq(item) {
        this.props.history.push(`/show?id=${item.schedular_id}`)
    }
}


export default withRouter(SearchBarExample);

