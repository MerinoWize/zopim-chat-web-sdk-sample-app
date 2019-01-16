'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding-top: 16px;
  position: relative;
`;

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon() {
    const isString = typeof(this.props.icon) === 'string';
    return (
      <div className="card-icon">
        {!isString && this.props.icon}
      </div>
    );
  }

  render() {
    return (
      <CardWrapper>
        <div className={'card-content'}>
          <div className="card-title">{this.props.title}</div>
          {this.props.children}
        </div>
      </CardWrapper>
    );
  }
}

CardContainer.displayName = 'CardContainer';
CardContainer.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  title: PropTypes.string,
  addClass: PropTypes.string,
  contentAddClass: PropTypes.string
}
export default CardContainer;
