import React from 'react';
import {SafeAreaView as RNSafeAreaView, ViewProps} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface SafeAreaViewProps extends ViewProps {
  styleName?: string;
}

const SafeAreaView: React.FC<SafeAreaViewProps> = ({styleName, children}) => {
  return (
    <RNSafeAreaView style={styleNameToNative(`${styleName}`)}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
