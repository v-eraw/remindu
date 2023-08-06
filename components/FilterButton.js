import React, { useState } from 'react';
import styles from './FilterButton.module.css'; // Import your styles

const FilterButton = ({ onFilterChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <div className={styles.filterButton}>
      <button onClick={handleDropdownToggle} className={styles.toggleButton}>
        Filter <i className="fas fa-caret-down"></i>
      </button>
      {dropdownVisible && (
        <div className={styles.dropdown}>
          <label>
            <input type="checkbox" name="red" onChange={handleFilterChange} />
            Red
          </label>
          {/* Add other checkbox options here */}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
