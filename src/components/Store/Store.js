import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user } from "./Reducer/User";

let store = createStore(user, applyMiddleware(thunk));


export default store;