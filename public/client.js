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

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Network response was not ok');
        }

        return await response.json();
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
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
