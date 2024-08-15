import React from 'react';
import {View as RNView, ViewProps as RNViewProps} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface ViewProps extends RNViewProps {
  styleName?: string;
}

const View: React.FC<ViewProps> = ({
  styleName = "",
  style,
  children,
  ...otherProps
}) => {
  return (
    <RNView
      style={[styleNameToNative(styleName as any), style]}
      {...otherProps}
    >
      {children}
    </RNView>
  );
};

export default View;
