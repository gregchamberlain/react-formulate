import React, { Component } from 'react';
import { merge } from 'lodash';
export color from './inputs/color';
export string from './inputs/string';
export text from './inputs/text';
export array from './inputs/array';
export object from './inputs/object';
export number from './inputs/number';
export select from './inputs/select';
export boolean from './inputs/bool';
export password from './inputs/password';
export fromObject from './utils/from_object';
import Form from './utils/form';

export default Form;

export const colorToString = color => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

export const shadowToString = obj => (
  `${obj.xOffset}px ${obj.yOffset}px ${obj.blurRadius}px ${colorToString(obj.color)}`
);
