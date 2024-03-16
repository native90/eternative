import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ListRenderItem,
} from 'react-native';
import {styleNameToNative} from '../functions/styleNameToNative';

interface FlatListProps extends RNFlatListProps<RNFlatList> {
  styleName?: string;
  data: any[];
  renderItem: ListRenderItem<RNFlatList> | null | undefined;
}

const FlatList: React.FC<FlatListProps> = ({styleName, data, renderItem}) => {
  return (
    <RNFlatList
      data={data}
      renderItem={renderItem}
      style={styleNameToNative(`${styleName}`)}
    />
  );
};

export default FlatList;
