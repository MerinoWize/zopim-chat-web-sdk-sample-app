'use strict';

import React, { Component } from 'react';
import { runInThisContext } from 'vm';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
    this.totalItems = this.props.items.length;
  }

  moveCarouselFoward = () => {
    if (this.state.currentItem ===  this.totalItems - 1) {
      this.setState({currentItem: 0});
    } else {
      this.setState({currentItem: this.state.currentItem + 1});
    }
  }

  moveCarouselBack = () => {
    if (this.state.currentItem === 0) {
      this.setState({currentItem: this.totalItems - 1});
    } else {
      this.setState({currentItem: this.state.currentItem - 1});
    }
  }

  moveCarousel = () => {
    this.refs[this.state.currentItem].scrollIntoView({behavior: 'smooth'});
  }

  componentDidUpdate() {
    this.moveCarousel();
  }

  render() {
    return (
      <div>
        <button onClick={this.moveCarouselBack}>prev</button>
        <button onClick={this.moveCarouselFoward}>next</button>
        <div className="carousel-container">
          {this.props.items.map((item, i) => (
            <div className="carousel-item" ref={i} key={i}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  addClass: React.PropTypes.string,
  contentAddClass: React.PropTypes.string,
  items: React.PropTypes.array
}

export default Carousel;
