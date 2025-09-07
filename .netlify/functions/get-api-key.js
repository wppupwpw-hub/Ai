exports.handler = async function(event, context) {
    const API_KEY = process.env.VITE_GEMINI_API_KEY;
    if (!API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not found in environment variables.' })
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ API_KEY: API_KEY })
    };
};
