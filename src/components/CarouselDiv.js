import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

import style from '../style/main.css';

class CarouselDiv extends Component {
  constructor(props){
    super(props);
  }

  carouselItem(){
    const carouselItems = this.props.items;
    return carouselItems.map((item)=>{
      return (
        <Carousel.Item key={item.image}>
          <img width={1200} height={500} alt="900x500" src={'/src/images/'+item.image} />
        </Carousel.Item>
      );
    })
  }
  render() {
    return (
      <Carousel>
        {this.carouselItem()}
      </Carousel>
    );
  }
}

export default CarouselDiv;
