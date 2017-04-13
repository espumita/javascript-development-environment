import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


export function getUsers() {
    return get('users');
}

function get(url) {
    const baseUrl = getBaseUrl();
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}