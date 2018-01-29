export function loginActions(dispatch) {
  return {
    updateLoginInputValue: (event) => dispatch({
      type: "UPDATE_LOGIN_INPUT_VALUE",
      value: event.target.value
    }),
    login: (userName) => dispatch({
      type: "LOGIN",
      userName: userName
    })
  }
}

export function chatActions(dispatch) {
  return {
    updateChatMessageValue: (event) => dispatch({
      type: "UPDATE_CHAT_INPUT_VALUE",
      value: event.target.value
    }),
    sendMessage: () => dispatch({
      type: "SEND_MESSAGE"
    })
  }
}
