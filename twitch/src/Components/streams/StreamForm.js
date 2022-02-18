import { Field, reduxForm } from "redux-form";
import React from "react";


class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValue) => {
  const error = {};

  if (!formValue.title) {
    error.title = "You must enter title";
  }
  if (!formValue.description) {
    error.description = "you must enter description";
  }
  return error;
};
const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamForm);
export default formWrapped;
