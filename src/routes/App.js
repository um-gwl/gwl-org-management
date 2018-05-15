import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import Landing from './landing/Landing';

class App extends Component {
  render() {
    const authToken = localStorage.getItem('goodwork-accessToken-remember');
    if(authToken){
      return <Dashboard/>;
    }
    else{
      return <Landing />;
    }
  }
}

export default withRouter(connect()(App));
