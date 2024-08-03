// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('overview');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} d-flex flex-column align-items-center bg-dark text-white`}>
      <div className="sidebar-header d-flex align-items-center justify-content-between w-100 p-2" onClick={toggleSidebar}>
        <img src="logo.png" alt="Company Logo" className="logo" />
        {isOpen && <span className="company-name">Company</span>}
      </div>
      {isOpen && (
        <div className="sidebar-menu d-flex flex-column w-100 mt-2">
          <a
            href="#overview"
            className={`menu-item ${activePage === 'overview' ? 'active' : ''} text-white p-2 rounded`}
            onClick={() => handlePageChange('overview')}
          >
                        Overview
          </a>
          <a
            href="#tasks"
            className={`menu-item ${activePage === 'tasks' ? 'active' : ''} text-white p-2 rounded`}
            onClick={() => handlePageChange('tasks')}
          >
            Tasks
          </a>
          <a
            href="#profile"
            className={`menu-item ${activePage === 'profile' ? 'active' : ''} text-white p-2 rounded`}
            onClick={() => handlePageChange('profile')}
          >
            Profile
          </a>
          <a
            href="#logout"
            className={`menu-item ${activePage === 'logout' ? 'active' : ''} text-white p-2 rounded`}
            onClick={() => handlePageChange('logout')}
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

    
