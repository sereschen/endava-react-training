import React from 'react';

const Button = ({
  children,
  onClick,
  buttonType = 'button',
  type = 'primary',
}) => {
  const styles = {
    border: `1px solid ${type === 'primary' ? '#3e64ff' : '#f44336'}`,
    backgroundColor: type === 'primary' ? '#3e64ff' : '#f44336',
    color: '#ecfcff',
    width: 80,
    height: 35,
    borderRadius: 5,
  };
  return (
    <button style={styles} onClick={onClick} type={buttonType}>
      {children}
    </button>
  );
};

export default Button;
