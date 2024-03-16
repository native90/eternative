import React from 'react';
import {
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface ImageBackgroundProps extends RNImageBackgroundProps {
  styleName?: RNImageBackgroundProps['style'] & string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  styleName = '',
  children,
  ...otherProps
}) => {
  return (
    <RNImageBackground
      style={styleNameToNative(styleName as any)}
      {...otherProps}>
      {children}
    </RNImageBackground>
  );
};

export default ImageBackground;
