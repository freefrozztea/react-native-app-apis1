import { handleHttpError } from '../utils/handleHttpError';

export async function safeFetch(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Manejo de errores HTTP (4xx / 5xx)
        handleHttpError(response);

        // Intentar parsear JSON
        try {
            return await response.json();
        } catch {
            throw new Error('La respuesta del servidor no es un JSON válido.');
        }

    } catch (error) {
        console.error('API ERROR:', {
            url,
            message: error.message,
            status: error.status
        });

        throw error;
    }
}
