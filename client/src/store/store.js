import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import main from "./reducers/main";
import logger from "redux-logger";

const store = createStore(main, applyMiddleware(thunk, logger))

export default store;