import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import cn from 'classnames';

import './scss/TodoItem.scss';

const TodoItem = ({ item, onRemove }) => {

  const {id, title, done} = item;

  // console.log(props);

  const removeHandler = e => {
    onRemove(id);
  };

  return (
    <li className='todo-list-item'>
      <div className={cn('check-circle', {active: done})}>
        {done && <MdDone/>}
      </div>
      <span className={cn('text', {finish: done})}>{title}</span>
      <div className='remove' onClick={removeHandler}>
        <MdDelete/>
      </div>
    </li>
  );
};

export default TodoItem;