import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';

import {Nav,Navbar,NavItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {logout} from '../actions/Login.action';

class Header extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(logout(token));
  }
  render(){
    if(this.props.isLoggedIn){
      return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">GoodWorkLabs</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav className='navbar-right'>
              <NavItem onClick={this.logout}>
                Logout
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
    }
    else{
      return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">GoodWorkLabs</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav className='navbar-right'>
              <LinkContainer to="/login">
                <NavItem>
                  Login
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>
                  about
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
}

Header.propTypes = {
  dispatch : PropTypes.func
};


const mapStateToProps = state => {
    return {
      isLoggedIn : state.loginUser.get('isLoggedIn'),
    }
};

export default withRouter(connect(mapStateToProps)(Header));
