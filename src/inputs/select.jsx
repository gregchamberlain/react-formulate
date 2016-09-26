import React from 'react';

const select = (options = [], opts = {}) => {
  const renderOptions = () => {
    if (typeof options[0] === 'object') {
      return options.map(option => (
        <option value={option.value} key={option.name}>{option.name}</option>
      ));
    } else {
      return options.map(option => (
        <option value={option} key={option}>{option}</option>
      ));
    }
  };
  const InputWrapper = ({value, onChange, children}) => (
    <label>
      {opts.label}
      <select value={value} onChange={e => onChange(e.target.value)}>
        {renderOptions()}
      </select>
      {children}
    </label>
  );
  InputWrapper.defaultValue = [];
  return InputWrapper;
};

export default select;
