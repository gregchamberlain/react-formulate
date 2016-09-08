import React, { Component } from 'react';
import { merge } from 'lodash';
export color from './inputs/color';
export string from './inputs/string';
export text from './inputs/text';
export array from './inputs/array';
export object from './inputs/object';
export number from './inputs/number';

const select = (...options) => ({value, onChange}) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

const bool = ({value, onChange}) => (
  <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
);

bool.defaultValue = false;

export const colorToString = color => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}

export const shadowToString = obj => (
  `${obj.xOffset}px ${obj.yOffset}px ${obj.blurRadius}px ${colorToString(obj.color)}`
);


// export default {
//   string,
//   text,
//   number,
//   select,
//   bool,
//   array,
//   object,
//   color
// };
