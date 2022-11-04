import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItems.css';

function TodoItem(props) {

  // const onComplete = () => {
  //     alert('Ya completaste el todo ' + props.text);
  // };

  // const onDelete = () => {
  //     alert('Borraste el todo ' + props.text);
  // };

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };