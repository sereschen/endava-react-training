import React from 'react';
import Button from './Button';

function TaskItem({ task, onDelete }) {
  return (
    <li key={task} style={styles}>
      <span>{task}</span>
      <Button type="secondary" onClick={onDelete}>
        Delete
      </Button>
    </li>
  );
}

export default TaskItem;

const styles = {
  display: 'flex',
  width: '70%',
  justifyContent: 'space-around',
};
