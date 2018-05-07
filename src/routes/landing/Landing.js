import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {Carousel} from 'react-bootstrap';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import CarouselDiv from '../../components/CarouselDiv';
import Login from '../login/Login';
import NotFound from '../../components/NotFound';

import style from './Landing.css';

class LandingBody extends Component {
  render(){
    const items = [
      {image:'Banner_Goodworklabs_Billgates_.png',title:'bill gates',description:'asdasd'},
      {image:'High-growth-companies-asia-pacific-2018-by-Financial-times.png',title:'asdasd',description:'asdasd'},
      {image:'Top-ux-ui-design-studio-agency-goodworklabs.png',title:'asdasd',description:'asdasd'},
    ];

    return (
      <div className={style.containerBg+' container'}>
        <CarouselDiv items = {items}/>
        <div className='row'>
        <div className='col-sm-12'>
          &nbsp;
        </div>
          <div className='col-sm-12'>
            <div className='text-center'>
              <h3>Brilliant team and superior product delivery!</h3>
              <p>GoodWorkLABS built our in-store mobile app that powers our stores worldwide
              <br/> - Megha Malgatti, Corporate Strategy, ST Dupont, Paris.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Landing extends Component {

  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path ="/login" component={Login}/>
          <Route exact path="/" component={LandingBody} />
          <Redirect from="/employee/*" to="/login" />
          <Route path="/*" component={NotFound} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

Landing.propTypes = {
  dispatch : PropTypes.func
};

export default withRouter(connect()(Landing));
