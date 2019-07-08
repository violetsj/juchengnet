import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";

class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 202,
            bool: true,
            city: '全国',
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ Citydata: nextProps.citytitle })
    }
    clickFun(text) {
        this.props.pfn(text)//这个地方把值传递给了props的事件当中
    }
    render() {
        return (
            <Fragment>
                <div className="showbox">
                    <div className="city-bg">
                        <div className="city-left"></div>
                        <div className="city-right">
                            <div className="city-list">
                                <h3 className="title">
                                    <span>城市</span>
                                    <span></span>
                                </h3>
                                <div className="list-warp">
                                    <ul>
                                        <li className={this.state.current === 202 ? 'active' : ''} onClick={() => { this.itemNav(202, '全国') }}>全国</li>
                                        {
                                            this.props.Citydata.map((el, index) => (
                                                <li key={index} className={index === this.state.current ? 'active' : ''} onClick={() => { this.itemNav(index, el.name) }}>{this.props.Citydata.item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="footer">
                                <span className={this.state.bool === false ? 'selected' : ''} onClick={() => { this.changeBoolFalse() }}>重置</span>
                                <span className={this.state.bool === true ? 'selected' : ''} onClick={() => { this.changeBoolTrue() }} onClick={this.clickFun.bind(this, this.state.city)}>确定</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    itemNav = (index, el) => {
        this.setState({
            current: index,
            city: el,
        })
    }
    changeBoolFalse = () => {
        this.setState({
            bool: false,
        })
        this.itemNav(202);

    }
    changeBoolTrue = () => {
        this.setState({
            bool: true,
        })

    }

}
export default withRouter(One)