import React from 'react';
import { merge } from 'lodash';

const defaultOpts = {
  onChange: e => e.target.checked
};

const bool = (opts = {}) => {
  opts = merge(defaultOpts, opts);
  const InputWrapper = ({value, onChange, children}) => (

    <label>
      {opts.label}
      <input type="checkbox" checked={value} onChange={e => onChange(opts.onChange(e))} />
      {children}
    </label>

  );
  InputWrapper.defaultValue = false;
  return InputWrapper;
};

export default bool;
