import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button style={styles} onClick={onClick} type="button">
      {children}
    </button>
  );
};

const styles = {
  border: '1px solid #3e64ff',
  backgroundColor: '#3e64ff',
  color: '#ecfcff',
  width: 80,
  height: 35,
  borderRadius: 5,
};

export default Button;
