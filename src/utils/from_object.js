import * as InputTypes from '../';

const fromObject = obj => {
  const inputs = {};
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    inputs[key] = getInputType(val)({label: labelFromKey(key)});
  });
  return InputTypes.object(inputs);
};

const getInputType = val => {
  switch (typeof val) {
    case "object":
      if (Array.isArray(val)) {
        return InputTypes.array(getInputType(val[0])());
      } else {
        return fromObject(val);
      }
    default:
      return InputTypes[typeof val] || InputTypes.string;
  }
};

const labelFromKey = label => (
  label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
);

export default fromObject;
