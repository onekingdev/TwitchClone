import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const navi = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(null);
  const [is_submitted, setIs_submitted] = useState(false);
  console.log(props);
  useEffect(() => {
    setId(location.state.id);
    props.fetchStream(location.state.id);
  }, []);

  const handleDelete = () => {
    props.deleteStream(id);
    navi("/");
  };

  const actions = (
    <React.Fragment>
      <button onClick={handleDelete} className="ui button negative">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );
  if (!props.stream) {
    return <div>loading..</div>;
  }
  const content = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title:  ${props.stream.title}`;
  };
  return (
    <div>
      <Modal
        title="Delete Stream"
        content={content()}
        actions={actions}
        onDismiss={() => {
          navi("/");
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  let path = window.location.pathname;
  return { stream: state.streams[path[path.length - 1]] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
