import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertModal from '../../../containers/alertModal/AlertModal';


class Designation extends Component {
  render() {
    return (
      <div className='row'>
        <AlertModal/>
        <div className='col-md-12'><h3>Employees</h3></div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-2">
              Name
            </div>
            <div className="col-sm-2">
              Skills 
            </div>
            <div className="col-sm-2">
              Designation
            </div>
            <div className="col-sm-2">
              Department
            </div>
            <div className="col-sm-2">
              Action
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Designation;
