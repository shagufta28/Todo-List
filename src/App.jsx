import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';
import './App.css'; // Import the CSS file for navigation styling

const App = () => (
  <Router>
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Todo List</Link>
        <Link to="/employees" className="nav-link">Employee List</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  </Router>
);

export default App;
