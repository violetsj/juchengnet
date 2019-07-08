import React, { Fragment, Component } from "react";

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class extends Component {
    render() {
        return (
            <Fragment>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: 1000    
        })
    }
}