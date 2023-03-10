import axios from "axios";

const handleUnauthorized = () => {//TODO: CHANGES FOR TOKEN AND LOCATION
    const { pathname, search } = window.location;
    //removeAccessToken();
    const currentUrl = encodeURIComponent(pathname.concat(search));
    //window.location.href = `${ROUTES.login}?redirect=${currentUrl}`;
  };

const handleResponse = (response) => {
    if (response.error) {
      if (response.status === 401) {
        handleUnauthorized();
      }
  
      const errorMessage = response.data?.message || response.statusText;
      console.error(errorMessage);
      // TODO: Give visual feedback
    }
  
    return response;
  };
  
  const handleError = (error) => {
    if (error.response?.status === 401) {
      console.log('Not authorized for execute this operation (401)');
      handleUnauthorized();
    }else{
      console.log('An error has ocurred connecting with the API', error)
    }
    return {
      status: error.response?.status,
      message: error.response?.data?.message,
    };
  };

const request = (url: string, data?, method: string = 'GET', options = {}) => {
    const authToken = `myToken`/*getAccessToken()*/;//TODO: ADD TOKEN LOGIC
    const requestOptions = {
      url,
      method,
      data,
      headers: {},
    };
  
    if (authToken && url.indexOf('/auth/')==-1) {
      requestOptions.headers.Authorization = `Bearer ${authToken}`;
    }
  
    return axios({ ...requestOptions, ...options })
      .then(handleResponse)
      .catch(handleError);
  };
  
  const server = {
    get: (url) => request(url),
    post: (url, body) => request(url, body, 'POST'),
    put: (url, body) => request(url, body, 'PUT'),
    delete: (url, body) => request(url, body, 'DELETE'),
  };
  
  export default server;