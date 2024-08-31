import * as flexStyles from '../styles/flexStyles';
import * as layoutStyles from '../styles/layoutStyles';
import * as sizingStyles from '../styles/sizingStyles';
import * as spacingStyles from '../styles/spacingStyles';
import * as borderStyles from '../styles/borderStyles';
import * as colorStyles from '../styles/colorStyles';
import * as textStyles from '../styles/textStyles';
import * as transformStyles from '../styles/transformStyles';
import { Appearance, Platform } from "react-native";
import { generateColorClasses } from "./generateClasses";

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === "dark";
const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

// Variable para almacenar colores personalizados
let customColors = {};
let styleMap = {};

export const initializeEternative = (config = {}) => {
  const userColors = config.theme?.colors || {};

  customColors = {}; // Reiniciar customColors cada vez que se inicializa

  Object.keys(userColors)?.forEach((colorKey) => {
    customColors[colorKey] = generateColorClasses(
      userColors[colorKey],
      colorKey
    );
  });

  updateStyleMap(); // Actualiza el styleMap con los nuevos colores
};

const combineStyles = (data) => {
  const objs = Object.assign({}, ...data);
  return Object.assign({}, ...Object.values(objs));
};

const updateStyleMap = () => {
  styleMap = combineStyles([
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
};

// Inicializar el styleMap al cargar la librería
updateStyleMap();

export const styleNameToNative = (tailwindClasses = "") => {
  const styles = tailwindClasses
    ?.split?.(" ")
    ?.map?.((className) => {
      if (className.startsWith("dark:")) {
        const darkClassName = className.substring(5);
        return isDarkMode ? styleMap[darkClassName] : null;
      }
      if (className.startsWith("ios:")) {
        const iosClassName = className.substring(4);
        return isIos ? styleMap[iosClassName] : null;
      }

      if (className.startsWith("android:")) {
        const androidClassName = className.substring(8);
        return isAndroid ? styleMap[androidClassName] : null;
      }
      return styleMap[className];
    })
    .filter?.(Boolean);

  const combinedStyles = styles && Object?.assign?.({}, ...styles);

  return combinedStyles;
};
