import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import flv from "flv.js";
const StreamShow = (props) => {
  const location = useLocation();
  const [id, setId] = useState(null);
  const [is_submitted, setIs_submitted] = useState(false);
  const videoElement = useRef(null);

  useEffect(() => {
    setId(location.state.id);
    props.fetchStream(location.state.id);
    buildPlayer();
  }, []);

  function buildPlayer() {
    if (!props.stream) {
      return;
    }
    let path = window.location.pathname;
    const player = flv.createPlayer({
      type: "flv",
      url: `http://192.168.1.102:8001/live/${path[path.length - 1]}.flv`,
    });
    player.attachMediaElement(videoElement.current);
    player.load();
  }
  if (!props.stream) {
    return <div>loading..</div>;
  }
  //conosle.log(props)
  return (
    <div>
      <video ref={videoElement} style={{ width: "100%" }} controls={true} />
      <h1>{props.stream.title}</h1>
      <h2>{props.stream.description}</h2>
    </div>
  );
};
const mapStateToProps = (state) => {
  let path = window.location.pathname;
  return { stream: state.streams[path[path.length - 1]] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
