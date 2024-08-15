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
  styleName = "",
  style,
  children,
  ...otherProps
}) => {
  return (
    <RNScrollView style={[styleNameToNative(styleName as any), style]}>
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
