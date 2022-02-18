import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { reducer as formreducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    form: formreducer,
    streams: streamReducer
})