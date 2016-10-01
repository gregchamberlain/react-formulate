import React from 'react';
import { fromDefault } from '../utils/defaults';
import { merge } from 'lodash';

const string = (opts = {}) => {
  opts = fromDefault(opts);
  const InputWrapper = ({value = "", onChange, children, style = {}}) => (
    <label style={merge(style.label, opts.style.label)}>
      {opts.label}
      <input type="text" onChange={e => onChange(e.target.value)} value={value} style={merge(style.input, opts.style.input)}/>
      {children}
    </label>
  );
  InputWrapper.defaultValue = "";
  return InputWrapper;
};

export default string;
