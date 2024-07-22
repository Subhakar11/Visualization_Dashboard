import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    end_year: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label>End Year:</label>
        <input type="text" name="end_year" value={filters.end_year} onChange={handleChange} />
      </div>
      <div>
        <label>Topic:</label>
        <input type="text" name="topic" value={filters.topic} onChange={handleChange} />
      </div>
      <div>
        <label>Sector:</label>
        <input type="text" name="sector" value={filters.sector} onChange={handleChange} />
      </div>
      <div>
        <label>Region:</label>
        <input type="text" name="region" value={filters.region} onChange={handleChange} />
      </div>
      <div>
        <label>PEST:</label>
        <input type="text" name="pestle" value={filters.pestle} onChange={handleChange} />
      </div>
      <div>
        <label>Source:</label>
        <input type="text" name="source" value={filters.source} onChange={handleChange} />
      </div>
      <div>
        <label>SWOT:</label>
        <input type="text" name="swot" value={filters.swot} onChange={handleChange} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" value={filters.country} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={filters.city} onChange={handleChange} />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
