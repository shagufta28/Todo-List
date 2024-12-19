import axios from 'axios';

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get('/api');
    console.log('API Response:', response.data); 
    dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEES_FAILURE', payload: error.message });
  }
};
