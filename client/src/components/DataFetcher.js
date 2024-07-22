import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';
import Visualization from './Visualization';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  const fetchData = (filters) => {
    const query = new URLSearchParams(filters).toString();
    axios.get(`http://localhost:5000/api/data?${query}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <Filters onFilterChange={setFilters} />
      <Visualization data={data} />
    </div>
  );
};

export default DataFetcher;
