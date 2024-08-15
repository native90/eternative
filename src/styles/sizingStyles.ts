import {
  generateClassSizes,
  generateClasses,
} from '../functions/generateClasses';
import { invertedSizing, sizing as values } from "./sizing";

export const baseSizesStyles = {
  "w-auto": { width: "auto" },
  "w-full": { width: "100%" },
  "h-full": { height: "100%" },
  "w-screen": { width: "100vw" },
  "h-screen": { height: "100vh" },
};

export const widhtStyles = generateClasses({
  property: 'width',
  prefix: 'w',
  values,
});

export const heightStyles = generateClasses({
  property: 'height',
  prefix: 'h',
  values,
});

export const gapStyles = generateClasses({
  property: 'gap',
  prefix: 'gap',
  values,
});

export const gapXStyles = generateClasses({
  property: 'column-gap',
  prefix: 'gap-x',
  values,
});

export const gapYStyles = generateClasses({
  property: 'row-gap',
  prefix: 'gap-y',
  values,
});

export const sizesStyles = generateClassSizes({
  properties: ['width', 'height'],
  prefix: 'size',
  values,
});

export const bottomStyles = generateClasses({
  property: 'bottom',
  prefix: 'bottom',
  values,
});

export const topStyles = generateClasses({
  property: 'top',
  prefix: 'top',
  values,
});

export const leftStyles = generateClasses({
  property: 'left',
  prefix: 'left',
  values,
});

export const rightStyles = generateClasses({
  property: 'right',
  prefix: 'right',
  values,
});

export const bottomInvertStyles = generateClasses({
  property: "bottom",
  prefix: "-bottom",
  values: invertedSizing,
});

export const topInvertStyles = generateClasses({
  property: "top",
  prefix: "-top",
  values: invertedSizing,
});

export const leftInvertStyles = generateClasses({
  property: "left",
  prefix: "-left",
  values: invertedSizing,
});

export const rightInvertStyles = generateClasses({
  property: "right",
  prefix: "-right",
  values: invertedSizing,
});

