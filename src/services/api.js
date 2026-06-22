import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  /**
   * Submit contact form
   * @param {Object} data - Contact form data
   * @param {string} data.name - User's name
   * @param {string} data.email - User's email
   * @param {string} data.subject - Message subject
   * @param {string} data.message - Message content
   * @returns {Promise} API response
   */
  submit: async (data) => {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },

  /**
   * Get all contacts (admin only)
   * @param {Object} params - Query parameters
   * @returns {Promise} API response
   */
  getAll: async (params = {}) => {
    const response = await apiClient.get('/admin/contacts', { params });
    return response.data;
  },

  /**
   * Get single contact (admin only)
   * @param {number} id - Contact ID
   * @returns {Promise} API response
   */
  getById: async (id) => {
    const response = await apiClient.get(`/admin/contacts/${id}`);
    return response.data;
  },

  /**
   * Update contact status (admin only)
   * @param {number} id - Contact ID
   * @param {string} status - New status (new, read, replied)
   * @returns {Promise} API response
   */
  updateStatus: async (id, status) => {
    const response = await apiClient.patch(`/admin/contacts/${id}/status`, { status });
    return response.data;
  },
};

export default apiClient;
