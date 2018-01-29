import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessageToWS } from "../../utils/websocket"
import { getChatMessages } from "../../store/chat/selectors"
import { chatActions } from "../../store/chat/actions"

class Chat extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    sendMessageToWS(this.props.chatMessageValue);
    this.props.sendMessage();
  };

  componentDidUpdate() {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // This will make the list of messages scroll to the bottom each time
    // the component update, that way, the last message will always be visible
    this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  }

  render() {
    return (
      <div className="Chat">
        <div
          className="Chat-messages"
          ref={(node) => {
            // refs allows you to have a reference to an element of the DOM
            // You should use this parcimoniously and don't change the DOM or React
            // will go crazy
            // See https://reactjs.org/docs/refs-and-the-dom.html
            this.messageListDiv = node;
          }}
        >
          {this.props.messages.map((message, index) =>
            (
              <div className="message-container" key={index}>
                <span className="author">{message.userName}</span>
                <span className="message">{message.message}</span>
              </div>
            )
          )}
        </div>
        <div className="Chat-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.props.chatMessageValue}
              onChange={this.props.updateChatMessageValue}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(getChatMessages, chatActions)(Chat);
