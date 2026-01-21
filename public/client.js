/**
 * Helper to handle response errors
 */
async function handleResponse(response) {
    if (!response.ok) {
        let errorMessage = `Error ${response.status}: ${response.statusText}`;
        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
                errorMessage = errorData.message;
            }
        } catch (e) {
            // Cannot parse JSON, fallback to text if available
            try {
                const text = await response.text();
                if (text) errorMessage += ` - ${text}`;
            } catch (e2) {
                // Ignore text read error
            }
        }
        throw new Error(errorMessage);
    }
    return await response.json();
}

/**
 * Generic helper function to send POST requests to the API
 * @param {string} url - The API endpoint URL
 * @param {object} data - The data to send
 * @returns {Promise<object>} - The JSON response from the server
 */
async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * Generic helper function to send GET requests to the API
 * @param {string} url - The API endpoint URL
 * @returns {Promise<object>} - The JSON response from the server
 */
async function getData(url) {
    try {
        const response = await fetch(url);
        return await handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * Generic helper function to send PUT requests to the API
 * @param {string} url - The API endpoint URL
 * @param {object} data - The data to send
 * @returns {Promise<object>} - The JSON response from the server
 */
async function putData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/**
 * Generic helper function to send DELETE requests to the API
 * @param {string} url - The API endpoint URL
 * @returns {Promise<object>} - The JSON response from the server
 */
async function deleteData(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
