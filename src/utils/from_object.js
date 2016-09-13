import * as InputTypes from '../';

const fromObject = (obj, opts) => {
  const inputs = {};
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    inputs[key] = getInputType(val, {label: labelFromKey(key)}, key);
  });
  return InputTypes.object(inputs, opts);
};

const getInputType = (val, opts, key) => {
  switch (typeof val) {
    case "object":
      if (Array.isArray(val)) {
        return InputTypes.array(getInputType(val[0]), opts);
      } else {
        return fromObject(val);
      }
    case "string":
      if (key === 'password') {
        return InputTypes.password(opts);
      } else if (val.length > 30) {
        return InputTypes.text(opts);
      } else {
        return InputTypes.string(opts);
      }
    default:
      return InputTypes[typeof val](opts) || InputTypes.string(opts);
  }
};

const labelFromKey = label => (
  label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
);

export default fromObject;
