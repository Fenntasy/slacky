export function getLoginInputValue(state) {
  return {
    loginInputValue: state.loginInputValue
  }
}

export function getChatMessages(state) {
  return {
    chatMessageValue: state.chatMessageValue,
    messages: state.messages
  }
}
