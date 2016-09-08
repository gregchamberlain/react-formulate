import React from 'react';

const text = (opts = {}) => {
  const InputWrapper = ({value = "", onChange, children}) => (
    <label>
      {opts.label}
      <textarea onChange={e => onChange(e.target.value)} value={value} />
      {children}
    </label>
  );
  InputWrapper.defaultValue = ""
  return InputWrapper;
}

export default text;
