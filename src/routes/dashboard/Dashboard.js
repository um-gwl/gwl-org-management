import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';
import style from '../../app.css';
import NotFound from '../../components/NotFound';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import {checkAuth} from '../../actions/Login.action';


class DashboardBody extends Component{
  render(){
    return (
      <p className={style.AppIntro}>
        Dashboard
      </p>
    );
  }
}

class Dashboard extends Component {
  componentWillMount(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(checkAuth(token));
  }

  componentDidMount(){
    console.log(this.props.isLoggedIn);
    if(!this.props.isLoggedIn){
      localStorage.setItem('goodwork-accessToken-remember', '');
      this.props.history.push('/login');
      return null;
    }
  }

  render() {
    return (
      <div className={style.App}>
        <Header/>
        <Switch>
          <Route path ="/employee/dashboard" component={DashboardBody}/>
          <Redirect from="/*" to="/employee/dashboard" />
        </Switch>
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
    isLoggedIn : state.loginUser.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
