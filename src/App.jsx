import { useEffect, useState } from 'react';
import './App.css';
import CardCustom from './components/CardCustom';
import { API_URL } from './constants/back';
import { useGetTask } from './hook/useGetTask';

function App() {
  const { task } = useGetTask();

  if (!task) {
    return <h1>Cargando</h1>;
  }

  return (
    <>
      <CardCustom task={task} />
    </>
  );
}

export default App;
