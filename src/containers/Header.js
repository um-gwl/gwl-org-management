import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  render(){
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

export default Header;
