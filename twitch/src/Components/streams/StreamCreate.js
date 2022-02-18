import React from "react";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Navigate } from "react-router-dom";

class StreamCreate extends React.Component {
  state = {
    is_submit: false,
  };
  onSubmit = (formValue) => {
    this.props.createStream(formValue);
    this.setState({ is_submit: true });
  }
  render() {
    if (this.state.is_submit) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
