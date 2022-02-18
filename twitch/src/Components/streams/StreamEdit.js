import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
import { Navigate } from "react-router-dom";

const StreamEdit = (props) => {
  const location = useLocation();
  const [id, setId] = useState(null);
  const [is_submitted, setIs_submitted] = useState(false);
  useEffect(() => {
    setId(location.state.id);
    props.fetchStream(location.state.id);
  }, []);
  if (!props.stream) {
    return <div>loading..</div>;
  }
  const onSubmit = (formValue) => {
    props.editStream(id, formValue)
    setIs_submitted(true)
  };
  if (is_submitted) {
    return <Navigate to="/"/>
  }

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm initialValues={_.pick(props.stream, 'title', 'description') } onSubmit={onSubmit}></StreamForm>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let path = window.location.pathname;
  return { stream: state.streams[path[path.length - 1]] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
