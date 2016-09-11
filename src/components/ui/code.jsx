import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
  mode: 'jsx',
  lineNumbers: true,
  theme: 'monokai',
  tabSize: 2
};


const Code = ({ value, onChange, readOnly = false }) => (
  <div className="code">
  <Codemirror
    value={value}
    options={{...options, ...{readOnly}}}
    onChange={onChange}/>
  </div>
);

export default Code;
