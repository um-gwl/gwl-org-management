import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertModal from '../../../containers/alertModal/AlertModal';
import style from '../../../style/main.css';

class Designation extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <AlertModal/>
          <div className='col-md-8'><h3>Company Designations</h3></div>
          <div className="col-sm-4 text-right">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
        <div className={style.underLine}></div>
        <div className={'row' + style.marginTop5}>
        </div>
      </div>
    );
  }
}

export default Designation;
