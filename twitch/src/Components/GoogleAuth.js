import React from "react";
import GoogleOneTapLogin from "react-google-one-tap-login";
import { Login, Logout } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1089673027855-c652cno0e6cuh3t46umsn38ivul1ldk2.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
        });
    });
  }

  handleSignIn() {
    this.auth.signIn();
    this.props.Login(this.auth.currentUser.get().getId());
  }
  handleSignOut() {
    this.auth.signOut();
    this.props.Logout();
  }
  render() {
    return (
      <div>
        {!this.props.isSignedIn && (
          <GoogleOneTapLogin
            onError={(error) => console.log(error)}
            onSuccess={(response) =>
              this.props.Login(this.auth.currentUser.get().getId())
            }
            googleAccountConfigs={{
              client_id:
                "1089673027855-c652cno0e6cuh3t46umsn38ivul1ldk2.apps.googleusercontent.com",
            }}
          />
        )}
        {!this.props.isSignedIn ? (
          <div>
            <button onClick={this.handleSignIn.bind(this)}>
              Google Sign IN
            </button>
          </div>
        ) : (
          <div>
            <button onClick={this.handleSignOut.bind(this)}>
              Google Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { Login, Logout })(GoogleAuth);
