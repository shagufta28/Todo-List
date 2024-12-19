const initialState = {
    data: [],
    error: null,
  };
  
  export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_SUCCESS':
        return { ...state, data: action.payload };
      case 'FETCH_EMPLOYEES_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  