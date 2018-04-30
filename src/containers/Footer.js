import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';

import style from '../style/main.css';

class Footer extends Component {
  render() {
    return (
      <div className={style.footer + ' ' + 'fixed-bottom'}>
        <Nav className='navbar-right'>
          <NavItem href="#">
            All Rights Reserved. © GoodWorkLabs Services Pvt. Ltd.  &nbsp;&nbsp;
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Footer;
