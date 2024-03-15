import { useState, useEffect } from 'react';
import { API_URL } from '../constants/back';

export const useGetTask = () => {
  const [task, setTask] = useState(null);
  const getDataDB = async () => {
    const response = await fetch(`${API_URL}task`);
    const data = await response.json();
    setTask(data);
  };

  useEffect(() => {
    getDataDB();
  }, []);

  return { task };
};
