export function handleHttpError(response) {
    if (!response.ok) {
        const status = response.status;

        let message = 'Error desconocido';

        if (status >= 500) {
            message = 'Error interno del servidor (5xx). Intentalo más tarde.';
        } else if (status === 404) {
            message = 'Recurso no encontrado (404).';
        } else if (status === 401 || status === 403) {
            message = 'No autorizado o acceso denegado.';
        } else if (status >= 400) {
            message = 'Solicitud inválida al servidor.';
        }

        const error = new Error(message);
        error.status = status;
        throw error;
    }
}
