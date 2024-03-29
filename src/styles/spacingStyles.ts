import {generateClasses} from '../functions/generateClasses';
import {sizing as values} from './sizing';

const suffixes: any = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  y: 'Vertical',
  x: 'Horizontal',
};

function invertValues(obj: any) {
  const result: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = -obj[key];
    }
  }

  return result;
}
export const baseSpacingStyles = {
  "mx-auto": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  "ml-auto": {
    marginLeft: "auto",
  },
  "mr-auto": {
    marginRight: "auto",
  },
};

export const paddingStyles = generateClasses({
  property: 'padding',
  prefix: 'p',
  suffixes,
  values,
});

export const marginStyles = generateClasses({
  property: 'margin',
  prefix: 'm',
  suffixes,
  values,
});

export const marginNegative = generateClasses({
  property: 'margin',
  prefix: '-m',
  suffixes,
  values: invertValues(values),
});
