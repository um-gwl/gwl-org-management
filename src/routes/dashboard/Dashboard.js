import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../../app.css';

class Dashboard extends Component {
  render() {
    return (
      <div className={style.App}>
        <p className={style.AppIntro}>
          Dashboard
        </p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch : PropTypes.func
};

export default connect()(Dashboard);
