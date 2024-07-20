import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerformanceDashboard = () => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    axios.get('/api/performance')
      .then(response => setPerformance(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Performance Dashboard</h1>
      <ul>
        {performance.map(user => (
          <li key={user.id}>
            {user.name}: {user.completionPercentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceDashboard;
