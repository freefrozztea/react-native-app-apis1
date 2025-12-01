import { safeFetch } from './safeFetch.js';
import { BASE_URL, DEFAULT_HEADERS } from '../config/api.config.js';

export function fetchUsersApi(page = 1) {
    return safeFetch(`${BASE_URL}/users?page=${page}`, {
        headers: DEFAULT_HEADERS
    });
}

export function createUserApi(name, job) {
    return safeFetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            ...DEFAULT_HEADERS,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, job })
    });
}
