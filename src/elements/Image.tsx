import React from 'react';
import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface ImageProps extends RNImageProps {
  styleName?: string;
}

const Image: React.FC<ImageProps> = ({
  styleName = "",
  style,
  ...otherProps
}) => {
  return (
    <RNImage
      style={[styleNameToNative(styleName as any), style]}
      {...otherProps}
    />
  );
};

export default Image;
