import React from 'react';

const select = (options) => (opts = {}) => {
  const InputWrapper = ({value, onChange}) => (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => <option value={option} key={option}>{option}</option>)}
    </select>
  );
  InputWrapper.defaultValue = [];
  return InputWrapper;
};

export default select;
