import React from "react";
import { connect } from "react-redux";
import { connectWebsocket } from "../../utils/websocket"
import { getLoginInputValue } from "../../store/chat/selectors"
import { loginActions } from "../../store/chat/actions"

function Login(props) {
  return (
    <form className="Login" onSubmit={event => {
      event.preventDefault();
      props.login(props.loginInputValue);
      connectWebsocket();
    }}>
      <div>
        Please choose a login name
      </div>
      <input
        type="text"
        onChange={props.updateLoginInputValue}
        value={props.loginInputValue}
      />
      <button type="submit">Log in</button>
    </form>
  );
}

export default connect(getLoginInputValue, loginActions)(Login);

// <Connect handleUserName={funct} loginInputValue updateLoginInputValue  >
//   <Login handleUserName={funct} loginInputValue updateLoginInputValue />
// </Connect>
