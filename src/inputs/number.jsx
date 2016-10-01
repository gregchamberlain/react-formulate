import React from 'react';
import { merge } from 'lodash';
const defaultOpts = {
  step: 'any',
  min: null,
  max: null
};

const number = (opts = {}) => {
  opts = merge(defaultOpts, opts);
  const InputWrapper = ({value, onChange, children}) => (
    <label>
      {opts.label}
      <input type="number" onChange={e => onChange(parseFloat(e.target.value))} value={value} step={opts.step} min={opts.min} max={opts.max}/>
      {children}
    </label>
  );
  InputWrapper.defaultValue = 0;
  return InputWrapper;
};

export default number;
