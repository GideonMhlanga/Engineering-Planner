import React, { useState } from 'react';
import axios from 'axios';

const TaskClosure = ({ taskId }) => {
  const [resolution, setResolution] = useState('');

  const handleCloseTask = (e) => {
    e.preventDefault();
    axios.post(`/api/tasks/${taskId}/close`, { resolution })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleCloseTask}>
      <textarea
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
        placeholder="Resolution details"
      />
      <button type="submit">Close Task</button>
    </form>
  );
};

export default TaskClosure;
