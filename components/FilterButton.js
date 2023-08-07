import React, { useState } from 'react';
import styles from '../styles/FilterButton.module.scss';

const FilterButton = ({ onFilterChange, filtersMap, priorityMap }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  function getActiveFilters(filtersMap) {
    const activeFilters = [];
    for (const filter in filtersMap) {
      if (filtersMap[filter]) {
        activeFilters.push(filter);
      }
    }
    return activeFilters;
  }

  return (
    <div className={styles.filterButton}>
      <button onClick={handleDropdownToggle} className={styles.toggleButton}>
        Filter ({getActiveFilters(filtersMap).length})
        <i className="fas fa-caret-down"></i>
      </button>
      {dropdownVisible && (
        <div className={styles.dropdown}>
          {Object.keys(priorityMap).map((priority) => (
            <label key={priority}>
              <input
                checked={filtersMap[priority]}
                type="checkbox"
                name={priority}
                onChange={handleFilterChange}
              />
              {priorityMap[priority].title}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
