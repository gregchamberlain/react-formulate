import React from 'react';

const string = (opts = {}) => {
  const InputWrapper = ({value = "", onChange, children}) => (
    <label>
      {opts.label}
      <input type="text" onChange={e => onChange(e.target.value)} value={value} />
      {children}
    </label>
  );
  InputWrapper.defaultValue = "";
  return InputWrapper;
};

export default string;
