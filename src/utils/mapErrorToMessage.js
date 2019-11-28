const E_500 = 'Internal Server Error.';
const E_400 = 'Bad Request.';
const E_404 = 'Resource not found.';
const E_DEFAULT = 'Unknown error.';

export default function mapErrorToMessage(e) {
    
    if (e.response) {
        const {status} = e.response;
        console.log('status: ', status)
        switch (status) {
            case 400: {
                return E_400;
            }
            case 404: {
                return E_404;
            }
            case 500: {
                return E_500;
            }
            default: {
                return E_DEFAULT;
            }
        }
    } else if (e.message) {
        return `${e.message}.`;
    }
    return E_DEFAULT;
    
}