import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList'; // Import the CSS file

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch employee data from public API
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((response) => {
        setEmployees(response.data.data); // Access `data` array from the API response
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch employee data');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="employee-list">
      <h1 className="employee-list-title">Employee List</h1>
      <div className="employee-cards">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <img
              src={employee.avatar}
              alt={`${employee.first_name} ${employee.last_name}`}
              className="employee-avatar"
            />
            <div className="employee-info">
              <h2 className="employee-name">{`${employee.first_name} ${employee.last_name}`}</h2>
              <p className="employee-email">{employee.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
