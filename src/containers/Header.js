import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route, Switch, Link, Redirect } from 'react-router-dom';

import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {logout} from '../routes/login/Login.action';

class Header extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    const token = localStorage.getItem('goodwork-accessToken-remember');
    this.props.dispatch(logout(token));
  }

  renderUserWiseMenu() {
    const {role} = this.props.userDetails;
    if(role == 1){
      return(
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">GoodWorkLabs</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className='navbar-right'>
            <LinkContainer to="/master-data">
              <NavItem>
                Master Data
              </NavItem>
            </LinkContainer>
            <NavDropdown title="Employees" id="employee-dropdown">
              <ul>
                <li><Link to="/employee/list">Employee Details</Link></li>
              </ul>
            </NavDropdown>
            <NavItem onClick={this.logout}>
              Logout
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
    else{
      return(
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
      );
    }
  }
  render(){
    if(this.props.isLoggedIn){
      if(this.props.userDetails != null){
        return (
          <div>
            {this.renderUserWiseMenu()}
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
        )
      }
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
      userDetails : state.loginUser.get('userInfo') ? state.loginUser.get('userInfo').toJS() : null,
    }
};

export default withRouter(connect(mapStateToProps)(Header));
