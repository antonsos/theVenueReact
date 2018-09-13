import React, { Component } from "react";
import Slider from "react-slick";

//image
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const styles = {
  slide: {
    height: '100vh',
    backgroundPosition: 'top',
    backgroundRepiat: 'no-repiat',
    backgroundSize: '100%',
  }
}

export class Carrousel extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinity: true,
      speed: 500
    };

    return (
      <div className="carrousel_wrapper">
        <Slider {...settings}>
          <div>
            <div
              style={{
                ...styles.slide,
                backgroundImage: `url(${slide_one})`
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                ...styles.slide,
                backgroundImage: `url(${slide_two})`
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                ...styles.slide,
                backgroundImage: `url(${slide_three})`
              }}
            ></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carrousel;
