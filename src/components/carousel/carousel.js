import React, {Component} from 'react';
import { Carousel } from 'antd';
import './../../style/menuLineTop.css';
export default class Carousels extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div>
                <Carousel {...settings} className="ant-carousel">
                    <div className="slick-slide"><h1>1</h1></div>
                    <div className="slick-slide"><h1>2</h1></div>
                    <div className="slick-slide"><h1>3</h1></div>
                    <div className="slick-slide"><h1>4</h1></div>
                </Carousel>
            </div>
        )
    }
}