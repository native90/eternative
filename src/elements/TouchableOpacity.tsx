import React from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface TouchableOpacityProps extends RNTouchableOpacityProps {
  styleName?: string;
}

const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  styleName = "",
  style,
  children,
  ...otherProps
}) => {
  return (
    <RNTouchableOpacity
      style={[styleNameToNative(styleName as any), style]}
      {...otherProps}
    >
      {children}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
