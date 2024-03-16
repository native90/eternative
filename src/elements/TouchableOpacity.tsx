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
  styleName = '',
  children,
  ...otherProps
}) => {
  return (
    <RNTouchableOpacity
      style={styleNameToNative(styleName as any)}
      {...otherProps}>
      {children}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
