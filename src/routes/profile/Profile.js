import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {sendProfileDetails} from '../../actions/Profile';

class EmployeeProfile extends Component {
  constructor(props){
    super(props);
  }

  renderInputField(field){
    const { meta : { touched,error}} = field;
    const validationClass = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={validationClass}>
        <h5>{field.label}:</h5>
        <input type="text" name = {field.name} className="form-control" {...field.input}/>
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderSelectField(field){
    const renderOptions = (options) => {
      if(options){
        return options.map((option) => {
          return <option key={option.id}  value={option.id}>{option.name}</option>
        });
      }
      return false;
    };
    const { meta : { touched,error}} = field;
    const validationClass = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={validationClass}>
        <h5>{field.label}:</h5>
        <select className="form-control" name = {field.name} {...field.input}>
          <option value ="">Select Option</option>
          {renderOptions(field.options)}
        </select>
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderFileField(field){
    return (
      <div className="form-group">
        <h5>{field.label}:</h5>
        <input type="file" className="form-control" name = {field.name} {...field.input} value = {undefined}/>
      </div>
    );
  }

  onSubmit(values){
      console.log(values);
      let formData = new FormData();
      formData.append('name', values.name)
      formData.append('address', values.address)
      formData.append('qualification', values.qualification)
      formData.append('gender', values.gender)
      formData.append('profile_pic_file', values.profile_pic_file[0])
      sendProfileDetails(formData);
  }

  render() {
    const {handleSubmit} = this.props;
    const genderOption = [{id : 'MALE',name : 'MALE'} , {id : 'FEMALE',name : 'FEMALE'}];
    return (
        <div className='row'>
          <div className='col-md-12'><h3>Profile Details</h3></div>
          <div className='col-md-12'>&nbsp;</div>
          <div className='col-md-3'>
          </div>
          <div className='col-md-6'>
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label = "Name"
                name = "name"
                component = {this.renderInputField}
              />
              <Field
                label = "Address"
                name = "address"
                component = {this.renderInputField}
              />
              <Field
                label = "Qualification"
                name = "qualification"
                component = {this.renderInputField}
              />
              <Field
                label = "Gender"
                name = "gender"
                options = {genderOption}
                component = {this.renderSelectField}
              />
              <Field
                label = "Profile Pic"
                name = "profile_pic_file"
                component = {this.renderFileField}
              />

              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
          <div className='col-md-3'>
          </div>
        </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.user_name){
    errors.user_name = "Please enter the name";
  }
  if(!values.gender){
    errors.gender = "Please select your gender";
  }
  if(!values.designation_id){
    errors.designation_id = "Please select your designation";
  }
  // console.log(errors);
  return errors;
}


const mapStateToProps = (state) => {
  return {
    initialValues : state.loginUser.get('userInfo') ? state.loginUser.get('userInfo').toJS() : null,
  }
}

EmployeeProfile = reduxForm({
  form: "postFormCreate" // a unique identifier for this form
})(EmployeeProfile);

// You have to connect() to any reducers that you wish to connect to yourself
EmployeeProfile = connect(mapStateToProps)(EmployeeProfile);

export default EmployeeProfile;
