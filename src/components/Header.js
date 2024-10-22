// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

// Importing SVG icons
import displayIcon from '../assets/icons/Display.svg';
import threeDotMenuIcon from '../assets/icons/3 dot menu.svg';
import addIcon from '../assets/icons/add.svg';

const Header = ({ setGrouping, setSortBy }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header">
      <div className="left-header">
        <button className="display-button" onClick={toggleDropdown}>
          <img src={displayIcon} alt="Display" />
          Display
          {dropdownVisible && (
            <div className="dropdown">
              <button onClick={() => setGrouping('status')}>Group by Status</button>
              <button onClick={() => setGrouping('user')}>Group by User</button>
              <button onClick={() => setGrouping('priority')}>Group by Priority</button>
            </div>
          )}
        </button>
        <button className="add-button">
          <img src={addIcon} alt="Add" />
          Add
        </button>
      </div>
      <div className="right-header">
        <button className="sort-button" onClick={() => setSortBy('priority')}>
          Sort by Priority
        </button>
        <button className="sort-button" onClick={() => setSortBy('title')}>
          Sort by Title
        </button>
        <img className="menu-icon" src={threeDotMenuIcon} alt="Menu" />
      </div>
    </div>
  );
};

export default Header;
