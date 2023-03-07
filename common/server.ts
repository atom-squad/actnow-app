import axios from "axios";
import { updateToken } from "../stores/slices/userSlice";
import localStorage from "./localStorage";

const handleUnauthorized = async (dispatch) => {
    await localStorage.removeItem('token');
    dispatch?.(updateToken(''))
  };

const handleResponse = (response, dispatch) => {
  if (response.error) {
    if (response.status === 401) {
      handleUnauthorized(dispatch);
    }

    const errorMessage = response.data?.message || response.statusText;
    console.error(errorMessage);
    // TODO: Give visual feedback
  }

  return response;
};
  
const handleError = (error, dispatch) => {
  if (error.response?.status === 401) {
    console.log('Not authorized for execute this operation (401)');
    handleUnauthorized(dispatch);
  }
  return {
    status: error.response?.status,
    message: error.response?.data?.message || "There was an unexpected problem, please contact support",
  };
};
  
const request = async (url: string, data = {}, method: string = 'GET', options?) => {
  const authToken = await localStorage.getItem('token')
  const { headers = {}, dispatch, ...otherOptions } = options || {};
  const requestOptions = {
    url,
    method,
    data,
    headers: {
      ...headers
    },
  };

  if (authToken) {
    requestOptions.headers.Authorization = `Bearer ${authToken}`;
  }

  return axios({ ...requestOptions, ...otherOptions })
    .then(response => handleResponse(response, dispatch))
    .catch(response => handleError(response, dispatch));
};

const server = {
  get: (url, options) => request(url, undefined, 'GET', options),
  post: (url, body, options) => request(url, body, 'POST', options),
  put: (url, body, options) => request(url, body, 'PUT', options),
  delete: (url, body, options) => request(url, body, 'DELETE', options),
};

export default server;