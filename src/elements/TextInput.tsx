import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface TextInputProps extends RNTextInputProps {
  styleName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  styleName = '',
  ...otherProps
}) => {
  return (
    <RNTextInput style={styleNameToNative(styleName as any)} {...otherProps} />
  );
};

export default TextInput;
