import React, { useRef, useState } from 'react';
import '../styles/cardCustom.css';
import Task from './Task';
import { setTaks } from '../services/task';

const CardCustom = ({ task }) => {
  const [tarea, setTarea] = useState([]);

  const refInput = useRef();

  const onKeyEnter = (e) => {
    if (e.key == 'Enter') {
      if (e.target.value.trim().length !== 0) {
        setTaks(e);
        refInput.current.value = '';
      } else {
        alert('Ingrese una tarea.');
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='content p-5'>
        <div className='text-center'>
          <h1 className='fs-1'>Bienvenido</h1>
          <h3 className='fs-5'>Ingresa tus tareas</h3>
          <input
            type='text'
            placeholder='Tarea 1...'
            onKeyDown={onKeyEnter}
            ref={refInput}
          />
        </div>
        <div>
          <ul>
            {task.map((element) => (
              <Task
                task={element}
                key={element._id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
