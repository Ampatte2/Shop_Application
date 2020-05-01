import {combineReducers} from "redux";
import main from "./main";
import admin from "./admin";

export default combineReducers({
    main,
    admin
})