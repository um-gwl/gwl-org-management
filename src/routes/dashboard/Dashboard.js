import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';
import style from '../../style/main.css';
import NotFound from '../../components/NotFound';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import LeftPanel from '../../containers/LeftPanel';
import EmployeeProfile from '../profile/Profile';
import AdminDashboard from './admin/AdminDashboard';

import {getUserDetails} from './Dashboard.action';
import {logout} from '../login/Login.action';
import {getMasterData} from '../MasterData.action';


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
    this.props.dispatch(getMasterData(token));
  }

  logout(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(logout(token));
  }

  render() {
    if(this.props.userDetails == null){
      return <div>Loading</div>;
    }
    else{
      if(this.props.userDetails.role == 1){
        return <AdminDashboard/>;
      }
      else{
        return (
          <div>
            <Header/>
            <div className={'container '+ style.bottomPaddingContainer}>
              <div className="row">
                <div className="col-md-3">
                  <LeftPanel/>
                </div>
                <div className="col-md-9">
                  <Switch>
                    <Route path ="/dashboard" component={DashboardBody}/>
                    <Route path ="/employee/profile" component={EmployeeProfile}/>
                    <Redirect from="/*" to="/dashboard" />
                  </Switch>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        );
      }
    }
  }
}

Dashboard.propTypes = {
  dispatch : PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.loginUser.get('isLoggedIn'),
    userDetails : state.loginUser.get('userInfo') ? state.loginUser.get('userInfo').toJS() : null,
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
