import { createStore } from "redux";
import slacky from "./chat/reducer"

let store = createStore(slacky);

export default store;
