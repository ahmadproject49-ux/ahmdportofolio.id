
const OPENROUTER_API_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const SITE_URL = 'http://localhost';
const SITE_TITLE = "Ahmd Portfolio Debugger";

async function testConnection() {
    console.log("Testing API Key:", OPENROUTER_API_KEY);
    const payload = {
        "model": "google/gemini-2.0-flash-001",
        "messages": [{ "role": "user", "content": "Hello" }]
    };

    try {
        const response = await fetch(OPENROUTER_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': SITE_URL,
                'X-Title': SITE_TITLE,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        console.log("Status Code:", response.status);
        const data = await response.json();
        console.log("Response Body:", JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error:", error.message);
    }
}

testConnection();
