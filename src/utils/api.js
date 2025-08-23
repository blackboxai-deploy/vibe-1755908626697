// API utility functions with intentional build issues

import axios from 'axios';
import { config } from './config';

// Missing import - this will cause a build error
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptor with undefined variable
    this.client.interceptors.request.use(
      (config) => {
        const token = getAuthToken(); // Function not defined
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async get(endpoint, params = {}) {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await this.client.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Method with syntax error
  async put(endpoint, data) {
    try {
      const response = await this.client.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(endpoint) {
    try {
      const response = await this.client.delete(endpoint);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      return {
        status,
        message: data.message || 'Server error occurred',
        details: data.details || null,
      };
    } else if (error.request) {
      // Request made but no response received
      return {
        status: 0,
        message: 'Network error - no response received',
        details: null,
      };
    } else {
      // Something else happened
      return {
        status: -1,
        message: error.message || 'Unknown error occurred',
        details: null,
      };
    }
  }
}

// Export with wrong syntax
export const apiClient = new ApiClient();

// Function that uses undefined variables
export const fetchUserData = async (userId) => {
  try {
    const userData = await apiClient.get(`/users/${userId}`);
    const processedData = processUserData(userData); // Function not defined
    return processedData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};

// Missing closing brace for function
export const updateUserProfile = async (userId, profileData) => {
  try {
    const updatedUser = await apiClient.put(`/users/${userId}`, profileData);
    return updatedUser;
  } catch (error) {
    console.error('Failed to update user profile:', error);
    throw error;
  }
// Missing closing brace here

export const deleteUser = async (userId) => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  try {
    await apiClient.delete(`/users/${userId}`);
    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error('Failed to delete user:', error);
    throw error;
  }
};

// Async function without proper error handling
export const batchUpdateUsers = async (userUpdates) => {
  const promises = userUpdates.map(update => 
    apiClient.put(`/users/${update.id}`, update.data)
  );
  
  // This will cause issues if any request fails
  const results = await Promise.all(promises);
  return results;
};