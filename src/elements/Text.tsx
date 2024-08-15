import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface TextProps extends RNTextProps {
  styleName?: string;
}

const Text: React.FC<TextProps> = ({
  styleName = "",
  style,
  children,
  ...otherProps
}) => {
  return (
    <RNText style={[styleNameToNative(styleName as any), style]}>
      {children}
    </RNText>
  );
};

export default Text;
