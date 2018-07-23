import { createStore } from "redux";
import { rootReducer } from "./reducers/index";

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store;