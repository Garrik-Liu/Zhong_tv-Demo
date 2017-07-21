/**
 * Created by xiangliu on 19/07/2017.
 */
import React, {Component} from 'react';

import './style.css';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: 0,
    }
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide(curIndex, delta) {
    let index = curIndex + delta,
        maxIndex = this.props.data.length - 1;

    if(index > maxIndex) {
      index = 0;
    } else if(index < 0) {
      index = maxIndex;
    };

    this.setState({
      showIndex: index,
    });
  }

  render() {
    const data = this.props.data;

    const slides = data.map((item, index) => {
      let displayState = 'none';
      if(index === this.state.showIndex) {
        displayState = 'block';
      }
      return (
        <div className="component-SlideShow__slide" key={index} style={{display: displayState}}>
          <img src={item.img} alt={item.name} />
        </div>
      );
    });

    const currentSlide = data[this.state.showIndex];

    return (
      <div className="component-SlideShow">
        <div className="component-SlideShow__slides">
          {slides}
          <div className="prev-next-group">
            <a
              className="component-SlideShow__prev"
              id="componentSlideShowPrev"
              onClick={() => {
                this.changeSlide(this.state.showIndex, -1);
              }}
            >
              &#10094;
            </a>
            <a
              className="component-SlideShow__link"
              href={currentSlide.link}
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
              className="component-SlideShow__next"
              id="componentSlideShowNext"
              onClick={() => {
                this.changeSlide(this.state.showIndex, +1);
              }}
            >
              &#10095;
            </a>
            <div className="component-SlideShow__describe">
              <h1>{currentSlide.title}</h1>
              <p>
                {currentSlide.describe}
              </p>
            </div>
          </div>
        </div>
        <div className="component-SlideShow__detail"></div>
      </div>
    );
  }
}