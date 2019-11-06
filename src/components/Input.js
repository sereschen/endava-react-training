import React from 'react';

const Input = ({ value, placeholder, onChange }) => {
  return (
    <input
      style={styles}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const styles = {
  height: 33,
  marginRight: 5,
};

export default Input;
