import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task, deleteElement }) => {
  return (
    <li className='d-flex justify-content-between my-2'>
      {task.name}
      <Button className='btn-light' onClick={() => deleteElement(task._id)}>
        x
      </Button>
    </li>
  );
};

export default Task;
