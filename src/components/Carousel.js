'use strict';

import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="carousel-container">{this.props.children}</div>;
  }
}

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  addClass: React.PropTypes.string,
  contentAddClass: React.PropTypes.string
}

export default Carousel;
