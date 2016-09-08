import React, { Component } from 'react';
import { merge } from 'lodash';
import { ChromePicker } from 'react-color';
import color from './inputs/color';
import string from './inputs/string';
import text from './inputs/text';
import array from './inputs/array';
import object from './inputs/object';

const number = ({value, onChange}) => (
  <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
);

number.defaultValue = 0;

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

export default {
  string,
  text,
  number,
  select,
  bool,
  array,
  object,
  color
};
