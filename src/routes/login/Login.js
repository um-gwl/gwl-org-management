import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {googlelogInApi} from '../../actions/Login.action';
import {GoogleLogin} from 'react-google-login';
import './login.css';

class Login extends Component {

  responseGoogle = (response) => {
    const postData = {
      googleID: response.googleId,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };
    this.props.dispatch(googlelogInApi(postData));
  }

  responseGoogleError = (response) => {
    console.log('Login failed');
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isLoggedIn){
      nextProps.history.push('/employee/dashboard');
      return null;
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 col-xs-12">
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form method="post" onSubmit={
                  (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }>
                <div className="form-group has-feedback">
                  <input type="email" className="form-control" placeholder="Email" />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input type="password" className="form-control" placeholder="Password" />
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className='text-right'>
                  <button type="submit" className="btn btn-success">Login</button>
                </div>
              </form>

              <div className="row social-auth-links text-center">
                <p className ="col-sm-12">- OR -</p>
                <GoogleLogin
                  clientId="523476796983-6l3fgkmsp3duvqqkos559djanqa2mq7b.apps.googleusercontent.com"
                  buttonText="Sign in using
                    Google+"
                  className="btn btn-danger"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogleError}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch : propTypes.func
}

const mapStateToProps = state => {
    return {
      isLoggedIn : state.loginUser.isLoggedIn
    }
};

export default connect(mapStateToProps)(Login);
