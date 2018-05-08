import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';
import style from '../../app.css';
import NotFound from '../../components/NotFound';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import LeftPanel from '../../containers/LeftPanel';
import EmployeeProfile from '../profile/Profile';

import {getUserDetails} from '../../actions/Dashboard.action';
import {logout} from '../../actions/Login.action';

class DashboardBody extends Component{
  render(){
    return (
      <h1 className="text-center">
        Dashboard
      </h1>
    );
  }
}

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(getUserDetails(token));
  }

  logout(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(logout(token));
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LeftPanel/>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path ="/employee/dashboard" component={DashboardBody}/>
                <Route path ="/employee/profile" component={EmployeeProfile}/>
                <Redirect from="/*" to="/employee/dashboard" />
              </Switch>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch : PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.loginUser.get('isLoggedIn'),

  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
