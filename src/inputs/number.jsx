import React from 'react';

const number = (opts = {}) => {
  const InputWrapper = ({value, onChange}) => (
    <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
  );
  InputWrapper.defaultValue = 0;
  return InputWrapper;
}

export default number;
