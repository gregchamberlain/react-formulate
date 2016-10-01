import { merge } from 'lodash';

export const fromDefault = opts => merge({style: {}}, opts);
