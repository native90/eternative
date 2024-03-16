import React from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface ScrollViewProps extends RNScrollViewProps {
  styleName?: string;
}

const ScrollView: React.FC<ScrollViewProps> = ({
  styleName = '',
  children,
  ...otherProps
}) => {
  return (
    <RNScrollView style={styleNameToNative(styleName as any)} {...otherProps}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
