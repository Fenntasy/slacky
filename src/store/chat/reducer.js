
const initialState = {
  userName: null,
  messages: [],
  loginInputValue: "",
  chatMessageValue: ""
}

export default function slacky(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_LOGIN_INPUT_VALUE":
      return {
        ...state,
        loginInputValue: action.value
      };
    case "LOGIN":
      return {
        ...state,
        userName: action.userName,
        loginInputValue: ""
      }
    case "WS_UPDATE_MESSAGES":
      return {
        ...state,
        messages: action.messages
      }
    case "SEND_MESSAGE":
      return {
        ...state,
        chatMessageValue: ""
      }
    case "UPDATE_CHAT_INPUT_VALUE":
      return {
        ...state,
        chatMessageValue: action.value
      };
    default:
      return state;
  }
}
