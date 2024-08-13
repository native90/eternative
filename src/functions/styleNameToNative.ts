import * as flexStyles from '../styles/flexStyles';
import * as layoutStyles from '../styles/layoutStyles';
import * as sizingStyles from '../styles/sizingStyles';
import * as spacingStyles from '../styles/spacingStyles';
import * as borderStyles from '../styles/borderStyles';
import * as colorStyles from '../styles/colorStyles';
import * as textStyles from '../styles/textStyles';
import * as transformStyles from '../styles/transformStyles';
import {Appearance, Platform} from 'react-native';
import { userColors } from "./userConfig";
import { generateColorClasses } from "./generateClasses";

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === "dark";
const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

const customColors = {};

Object.keys(userColors)?.map((colorKey) => {
  customColors[colorKey] = generateColorClasses(userColors[colorKey], colorKey);
});

const combined = (data: any) => {
  const objs = Object.assign({}, ...data);
  const styleMap = Object.assign({}, ...Object.values(objs));
  return styleMap;
};

export const styleNameToNative = (tailwindClasses = '') => {
  // Mapeo de clases de Tailwind a estilos de React Native
  const styleMap = combined([
    flexStyles,
    layoutStyles,
    sizingStyles,
    spacingStyles,
    borderStyles,
    colorStyles,
    textStyles,
    transformStyles,
    customColors,
  ]);

  // Dividir las clases por espacio y aplicar los estilos correspondientes
  const styles = tailwindClasses
    ?.split?.(' ')
    ?.map?.(className => {
      if (className.startsWith('dark:')) {
        const darkClassName = className.substring(5);
        return isDarkMode ? styleMap[darkClassName] : null;
      }
      if (className.startsWith('ios:')) {
        const iosClassName = className.substring(4);
        return isIos ? styleMap[iosClassName] : null;
      }

      if (className.startsWith('android:')) {
        const iosClassName = className.substring(4);
        return isAndroid ? styleMap[iosClassName] : null;
      }
      return styleMap[className];
    })
    .filter?.(Boolean);

  const combinedStyles = styles && Object?.assign?.({}, ...styles);

  return combinedStyles;
};
