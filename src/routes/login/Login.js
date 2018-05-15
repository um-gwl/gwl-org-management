import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {googlelogInApi,manualLogInApi} from './Login.action';
import {GoogleLogin} from 'react-google-login';
import './login.css';
import {Field,reduxForm} from 'redux-form';
import md5 from 'md5';



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

  renderInputField(field){
    const { meta : { touched,error}} = field;
    const validationClass = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={validationClass}>
        <input type={field.type} name = {field.name} className="form-control" {...field.input}/>
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    const request = {
      email : values.email,
      password : md5(values.password)
    }
    this.props.dispatch(manualLogInApi(request));
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 col-xs-12">
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form method="post" onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label = "Email"
                  name = "email"
                  type = "text"
                  component = {this.renderInputField}
                />
                <Field
                  label = "Passsword"
                  name = "password"
                  type = "password"
                  component = {this.renderInputField}
                />
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

function validate(values){
  const errors = {};

  if(!values.email){
    errors.email = "Please enter the email";
  }
  if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Please enter a valid email";
  }
  if(!values.password){
    errors.password = "Please enter your password";
  }
  if(values.password && values.password.length < 6){
    errors.password = "Must be at least six caharacter";
  }
  // console.log(errors);
  return errors;
}


export default reduxForm({
  validate,
  form: "postFormLogin" // a unique identifier for this form
})(connect()(Login));
