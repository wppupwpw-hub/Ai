exports.handler = async function(event, context) {
  const API_KEY = process.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: 'API key not found in environment variables. Please check the VITE_GEMINI_API_KEY setting.' })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ API_KEY: API_KEY })
  };
};
.
