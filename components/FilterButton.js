import React, { useState } from 'react';
import styles from './FilterButton.module.scss';

const FilterButton = ({ onFilterChange, filtersMap }) => {
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
          <label>
            <label>
              <input
                checked={filtersMap.complete}
                type="checkbox"
                name="complete"
                onChange={handleFilterChange}
              />
              Complete
            </label>
            <label>
              <input
                checked={filtersMap.incomplete}
                type="checkbox"
                name="incomplete"
                onChange={handleFilterChange}
              />
              Incomplete
            </label>
            <label>
              <input
                checked={filtersMap.none}
                type="checkbox"
                name="none"
                onChange={handleFilterChange}
              />
              None
            </label>
            <input
              checked={filtersMap.red}
              type="checkbox"
              name="red"
              onChange={handleFilterChange}
            />
            Red
          </label>
          <label>
            <input
              type="checkbox"
              checked={filtersMap.orange}
              name="orange"
              onChange={handleFilterChange}
            />
            Orange
          </label>
          <label>
            <input
              checked={filtersMap.yellow}
              type="checkbox"
              name="yellow"
              onChange={handleFilterChange}
            />
            Yellow
          </label>
          <label>
            <input
              checked={filtersMap.green}
              type="checkbox"
              name="green"
              onChange={handleFilterChange}
            />
            Green
          </label>
          <label>
            <input
              checked={filtersMap.blue}
              type="checkbox"
              name="blue"
              onChange={handleFilterChange}
            />
            Blue
          </label>
          <label>
            <input
              checked={filtersMap.purple}
              type="checkbox"
              name="purple"
              onChange={handleFilterChange}
            />
            Purple
          </label>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
