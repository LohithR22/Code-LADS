const API_URL = 'http://localhost:5000/api'; // Ensure this URL matches your backend's URL

// Function to handle user registration
export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.json(); // Return the response data
};

// Function to handle user login
export const loginUser = async (userData) => {
    const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.json(); // Return the response data (e.g., user details, token)
};
