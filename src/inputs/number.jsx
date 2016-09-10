import React from 'react';

const number = (opts = {}) => {
  const InputWrapper = ({value, onChange, children}) => (
    <label>
      {opts.label}
      <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
      {children}
    </label>
  );
  InputWrapper.defaultValue = 0;
  return InputWrapper;
};

export default number;
