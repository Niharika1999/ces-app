// Header.js
import React, { useState } from 'react';
import './Header.css';

function Header({ toggleDarkMode, darkMode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="header d-flex justify-content-end align-items-center fixed-top bg-dark text-white p-2 shadow">
      <div className="header-right d-flex align-items-center">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <div className="icon scan-code mx-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/qr-code.png" alt="Scan Code" />
        </div>
        <div className={`search-container ${searchOpen ? 'open' : ''} bg-secondary rounded p-1`}>
          <div className="icon search-icon mx-2" onClick={toggleSearch}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/search.png" alt="Search" />
          </div>
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input bg-dark text-white border-0"
              onBlur={() => setSearchOpen(false)}
            />
          )}
        </div>
        <div className="icon notifications mx-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders.png" alt="Notifications" />
        </div>
      </div>
    </div>
  );
}

export default Header;
