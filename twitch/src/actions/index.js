import streams from "../apis/streams";
import { useNavigate } from "react-router-dom";

export const Login = (payload) => {
  return { type: "LOGIN", payload: payload };
};

export const Logout = () => {
    return {type: "LOGOUT" };
}

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await streams.post('/streams', {...formValues, userId});
  dispatch({type:'CREATE_STREAM', payload: response.data})
}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('streams');
  dispatch({type:'FETCH_STREAMS', payload: response.data})
}

export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`streams/${id}`);
  dispatch({type:'FETCH_STREAM', payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`streams/${id}`, formValues);
  dispatch({type:'EDIT_STREAM', payload: response.data})
}
export const deleteStream = (id) => async dispatch => {
  const response = await streams.delete(`streams/${id}`);
  dispatch({type:'FETCH_STREAM', payload: id })
}