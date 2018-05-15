import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';

import {logout} from '../actions/Login.action';

class LeftPanel extends Component {

  renderProfPic(){
    if(this.props.userDetails.profile_pic === null){
      return(
        <img src="/src/images/defualt-user.png" alt="prof-pic" />
      )
    }
    else{
      return(
        <img src={"http://localhost:5000/uploads/prof_pic/"+this.props.userDetails.profile_pic} alt="prof-pic" />
      )
    }
  }
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(logout(token));
  }
  render(){
    if(this.props.userDetails === null){
      return (
        <div>
          Loader
        </div>
      );
    }
    else{
      return (
          <div>
            <div className="row">
              <div className="col-md-12">
                <div href="#" className="thumbnail">
                  {this.renderProfPic()}
                  <div className="caption">
                    <h3></h3>
                    <dl>
                      <dd>
                        <h2>
                          {this.props.userDetails.user_name}
                        </h2>
                      </dd>
                      <dd>
                        {this.props.userDetails.email}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <Link className="defaultLink" to="/employee/profile">Edit Profile</Link>
              </li>
              <li className="list-group-item">
                <Link className="defaultLink" to="/my_activity">Timesheet</Link>
              </li>
              <li className="list-group-item">
                <a className="defaultLink" href="#" onClick={this.logout}>Logout</a>
              </li>
            </ul>
          </div>
      );
    }
  }
}

LeftPanel.propTypes = {
  dispatch : PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    userDetails : state.loginUser.get('userInfo') ? state.loginUser.get('userInfo').toJS() : null,
  }
}

export default withRouter(connect(mapStateToProps)(LeftPanel));
