import { updateToken } from "../stores/slices/userSlice";
import localStorage from "./localStorage";


const BASE_URL = "https://actnow.wmdd4950.com";

export const makeRequest = async (path, method, params, rawBody = false, dispatch?) => {
    const fullUrl = `${BASE_URL}${path}`
    const storedToken = await localStorage.getItem('token');
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`,
            ...params.headers
        },
        body: rawBody ? params.body : JSON.stringify(params.body)
    }
    const resp = await fetch(fullUrl, options);
    const data = await resp.json();
    if (data.statusCode == 401) {
        console.info('token expired')
        await localStorage.removeItem('token');
        dispatch?.(updateToken(''))
    }
    return data
};


