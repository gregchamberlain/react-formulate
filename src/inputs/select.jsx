import React from 'react';

const select = (opts = {}) => {
  const InputWrapper = (...options) => ({value, onChange}) => (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => <option value={option} key={option}>{option}</option>)}
    </select>
  );
  InputWrapper.defaultValue = [];
  return InputWrapper;
};

export default select;
