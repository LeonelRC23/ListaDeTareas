import { useState, useEffect } from 'react';
import { API_URL, HEADER_FETCH } from '../constants/back';

export const useTask = () => {
  const [task, setTask] = useState(null);
  const getDataDB = async () => {
    const response = await fetch(`${API_URL}task`);
    const data = await response.json();
    setTask(data);
  };

  const setTasks = (e) => {
    fetch(`${API_URL}task`, {
      method: 'POST',
      headers: HEADER_FETCH,
      body: JSON.stringify({
        name: e.target.value,
      }),
    }).then(() => getDataDB());
  };

  const deleteElement = (id) => {
    fetch(`${API_URL}task/${id}`, {
      method: 'DELETE',
      headers: HEADER_FETCH,
    }).then(() => getDataDB());
  };

  useEffect(() => {
    getDataDB();
  }, []);

  return { task, setTasks, deleteElement };
};
