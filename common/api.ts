

const BASE_URL = "https://actnow.wmdd4950.com";

const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}


export const makeRequest = async (path, method, params, rawBody = false) => {
    const fullUrl = `${BASE_URL}${path}`
    const resp = await fetch(fullUrl, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...params.headers
        },
        body: rawBody ? params.body : JSON.stringify(params.body)
    });
    const data = await resp.json();
    return data
};


