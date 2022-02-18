import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { Login, Logout } from "../actions";
import {connect} from 'react-redux'
const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Stream
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}

}
export default connect(mapStateToProps, {Login, Logout})(Header);
