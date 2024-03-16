interface GenerateClassesOptions {
  property: string;
  prefix: string;
  values: {[key: string]: any};
  suffixes?: {[key: string]: string};
}

export const generateColorClasses = (
  values: {[key: string]: any},
  color: string,
) => {
  const bgClasses = generateClasses({
    property: 'backgroundColor',
    prefix: `bg-${color}`,
    values,
  });

  const textClasses = generateClasses({
    property: 'color',
    prefix: `text-${color}`,
    values,
  });

  const borderClasses = generateClasses({
    property: 'borderColor',
    prefix: `border-${color}`,
    values,
  });

  const styles = Object?.assign?.({}, bgClasses, textClasses, borderClasses);
  return styles;
};

export const generateClasses = ({
  property,
  prefix,
  suffixes,
  values,
}: GenerateClassesOptions) => {
  const classes: {[key: string]: {[key: string]: number}} = {};

  for (const value in values) {
    const baseClassName = `${prefix}-${value}`;
    const baseStyle: {[key: string]: number} = {[property]: values[value]};
    const style: {[key: string]: number} = {[property]: values[value]};

    classes[baseClassName] = baseStyle;

    if (suffixes) {
      for (const suffix in suffixes) {
        const suffixedClassName = `${prefix}${suffix}-${value}`;
        style[`${property}${suffixes[suffix]}`] = values[value];
        classes[suffixedClassName] = {
          [`${property}${suffixes[suffix]}`]: values[value],
        };
      }
    }
  }

  return classes;
};

export const generateClassSizes = ({properties, prefix, values}: any) => {
  const classes: {[key: string]: {[key: string]: number}} = {};

  for (const value in values) {
    const baseClassName = `${prefix}-${value}`;
    const baseStyle: {[key: string]: number} = {};
    const style: {[key: string]: number} = {};
    properties.forEach((property: any) => {
      baseStyle[property] = values[value];
      style[property] = values.value;
    });

    classes[baseClassName] = baseStyle;
  }

  return classes;
};
