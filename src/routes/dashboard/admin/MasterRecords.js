import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertModal from '../../../containers/alertModal/AlertModal';
import Location from './Location';
import Department from './Department';
import Designation from './Department';

class MasterRecords extends Component {
  render() {
    return (
      <div className='row'>
        <AlertModal/>
        <Location/>
        <Department/>
        <Designation/>
      </div>
    );
  }
}

export default MasterRecords;
