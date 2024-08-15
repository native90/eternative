interface GenerateClassesOptions {
  property: string;
  prefix: string;
  values: {[key: string]: any};
  suffixes?: {[key: string]: string};
}

const styleColorDefinitions = [
  ["bg", "backgroundColor"],
  ["text", "color"],
  ["border", "borderColor"],
  ["tint", "tintColor"],
];

export const generateColorClasses = (
  values: { [key: string]: any },
  color: string
) => {
  const styles = {};

  styleColorDefinitions.forEach(([prefix, styleProp]) => {
    const colorClasses = generateClasses({
      property: styleProp,
      prefix: `${prefix}-${color}`,
      values,
    });

    Object.assign(styles, colorClasses);
  });

  return styles;
};

export const generateClasses = ({
  property,
  prefix,
  suffixes,
  values,
}: GenerateClassesOptions) => {
  const classes: { [key: string]: { [key: string]: number } } = {};

  for (const value in values) {
    const baseClassName = `${prefix}-${value}`;
    const baseStyle: { [key: string]: number } = { [property]: values[value] };
    const style: { [key: string]: number } = { [property]: values[value] };

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

export const generateClassSizes = ({ properties, prefix, values }: any) => {
  const classes: { [key: string]: { [key: string]: number } } = {};

  for (const value in values) {
    const baseClassName = `${prefix}-${value}`;
    const baseStyle: { [key: string]: number } = {};
    const style: { [key: string]: number } = {};
    properties.forEach((property: any) => {
      baseStyle[property] = values[value];
      style[property] = values.value;
    });

    classes[baseClassName] = baseStyle;
  }

  return classes;
};

export const generateBaseColorClasses = (colors) => {
  const styles = {};

  styleColorDefinitions.forEach(([prefix, styleProp]) => {
    Object.keys(colors).forEach((colorName) => {
      const colorValue = colors[colorName];
      styles[`${prefix}-${colorName}`] = { [styleProp]: colorValue };
    });
  });

  return styles;
};
