import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';
import style from '../../../style/main.css';
import NotFound from '../../../components/NotFound';
import Header from '../../../containers/Header';
import Footer from '../../../containers/Footer';
import LeftPanel from '../../../containers/LeftPanel';
import MasterRecords from './MasterRecords';
import EmployeeList from './EmployeeList';

import {getUserDetails} from '../Dashboard.action';
import {getMasterData} from '../../MasterData.action';


class DashboardBody extends Component{
  render(){
    return (
      <h1 className="text-center">
        Dashboard
      </h1>
    );
  }
}

class AdminDashboard extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(getUserDetails(token));
    this.props.dispatch(getMasterData(token));
  }

  render() {
    if(this.props.userDetails == null){
      return <div>Loading</div>;
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
                    <Route path ="/admin/dashboard" component={DashboardBody}/>
                    <Route path ="/employee/list" component={EmployeeList}/>
                    <Route path ="/master-data" component={MasterRecords}/>
                    <Redirect from="/*" to="/admin/dashboard" />
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

AdminDashboard.propTypes = {
  dispatch : PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.loginUser.get('isLoggedIn'),
    userDetails : state.loginUser.get('userInfo') ? state.loginUser.get('userInfo').toJS() : null,
  }
}

export default withRouter(connect(mapStateToProps)(AdminDashboard));
