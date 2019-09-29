import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;



/*
https://www.valentinog.com/blog/redux/
A reducer is just a JavaScript function. A reducer takes two parameters: the current state and an action

*/