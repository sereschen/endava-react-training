import React from 'react';

const TasksFrom = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div style={styles.container}>{children}</div>
    </form>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100%',
  },
};

export default TasksFrom;
