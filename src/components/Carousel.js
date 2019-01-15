'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  text-align: center;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  height: auto;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

const CarouselItem = styled.div`
  width: 95%;
  padding: 0 2.5% 0 2.5%;
  flex: 0 0 auto;
`;

class Carousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
    this.totalItems = this.props.items.length;
  }

  moveCarouselFoward = () => {
    if (this.state.currentItem === this.totalItems - 1) {
      this.setState({ currentItem: 0 });
    } else {
      this.setState({ currentItem: this.state.currentItem + 1 });
    }
  }

  moveCarouselBack = () => {
    if (this.state.currentItem === 0) {
      this.setState({ currentItem: this.totalItems - 1 });
    } else {
      this.setState({ currentItem: this.state.currentItem - 1 });
    }
  }

  moveCarousel = () => {
    this.refs[this.state.currentItem].scrollIntoView({ behavior: 'smooth' });
  }

  componentDidUpdate() {
    this.moveCarousel();
  }

  render() {
    return (
      <CarouselWrapper>
        <button onClick={this.moveCarouselBack}>
        {'<'}
        </button>
        <CarouselContainer>
          {this.props.items.map((item, i) => (
            <CarouselItem ref={i} key={i}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContainer>
        <button onClick={this.moveCarouselFoward}>
          {'>'}
        </button>
      </CarouselWrapper>
    );
  }
}

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  addClass: PropTypes.string,
  contentAddClass: PropTypes.string,
  items: PropTypes.array
}

export default Carousel;
