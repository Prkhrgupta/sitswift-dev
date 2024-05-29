// apiClient.js

import axios from 'axios';

const baseURL = 'https://sitswift-be-dev-latest.onrender.com'; // Replace this with your API URL

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define functions for making GET and POST requests

export const getAllTransactions = async () => {
  try {
    const response = await apiClient.get('/transaction/all');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server Error:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      console.error('Network Error: No response received');
      console.error('Request Data:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
};


export const createTransaction = async (data) => {
  try {
    const response = await apiClient.post('/transaction', data);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

export default apiClient;
