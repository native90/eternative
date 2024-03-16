import React from 'react';
import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface ImageProps extends RNImageProps {
  styleName?: string;
}

const Image: React.FC<ImageProps> = ({styleName = '', ...otherProps}) => {
  return (
    <RNImage style={styleNameToNative(styleName as any)} {...otherProps} />
  );
};

export default Image;
