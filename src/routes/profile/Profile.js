import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class EmployeeProfile extends Component {
  constructor(props){
    super(props);
  }

  renderFormField(field){
    const { meta : { touched,error}} = field;
    const validationClass = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={validationClass}>
        <h5>{field.label}:</h5>
        <input type="text" name = {field.name} className="form-control" value="" {...field.input}/>
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
      console.log(values);
      const postData = {
        title:values.postTitle,
        description:values.description,
        category:values.category
      };
  }

  render() {

    const {handleSubmit} = this.props;

    return (
        <div className='row'>
          <div className='col-md-12'>&nbsp;</div>
          <div className='col-md-12'>&nbsp;</div>
          <div className='col-md-3'>
          </div>
          <div className='col-md-6'>
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label = "Name"
                name = "postTitle"
                component = {this.renderFormField}
              />
              <Field
                label = "Address"
                name = "category"
                component = {this.renderFormField}
              />
              <Field
                label = "Qualification"
                name = "description"
                component = {this.renderFormField}
              />
              <Field
                label = "Gender"
                name = "description"
                component = {this.renderFormField}
              />
              <Field
                label = "Designation"
                name = "description"
                component = {this.renderFormField}
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

  if(!values.postTitle){
    errors.postTitle = "Please enter the title";
  }
  if(!values.category){
    errors.category = "Please enter the category";
  }
  if(!values.description){
    errors.description = "Please enter the description";
  }
  // console.log(errors);
  return errors;
}

export default reduxForm({
  validate,
  form :'postFormCreate'
})(
  connect()(EmployeeProfile)
);
