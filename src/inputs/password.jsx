import React from 'react';

const password = (opts = {}) => {
  const InputWrapper = ({value = "", onChange, children}) => (
    <label>
      {opts.label}
      <input type="password" onChange={e => onChange(e.target.value)} value={value} />
      {children}
    </label>
  );
  InputWrapper.defaultValue = "";
  return InputWrapper;
};

export default password;
