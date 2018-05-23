import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlertModal from '../../../containers/alertModal/AlertModal';
import style from '../../../style/main.css';

class Department extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <AlertModal/>
          <div className='col-md-8'><h3>Company Departments</h3></div>
          <div className="col-sm-4 text-right">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
        <div className={style.underLine}></div>
        <div className={'row' + style.marginTop5}>
          <div className="col-sm-4">
            <div className="panel panel-default">
              <div className="panel-heading">Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Department;
