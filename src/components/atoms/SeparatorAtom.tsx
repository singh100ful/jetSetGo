import {ColorPresets} from '@src/theme/colors';
import * as React from 'react';
import {Text, View} from 'react-native';

interface SeparatorAtomProps {}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({}) => {
  return <View style={{backgroundColor: ColorPresets.border, height: 1}} />;
};
