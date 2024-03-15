import {TextAtom} from '@src/components/atoms/TextAtom';
import {ColorPresets} from '@src/theme/colors';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface FlightRowProps {
  icon: string;
  title: string;
}

export const FlightRow: React.FC<FlightRowProps> = ({icon, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: Scale.base,
        paddingVertical: Scale.xs,
      }}>
      <Icon name={icon} color={ColorPresets.black2} size={Scale.base} />
      <TextAtom text={title} preset="body" />
    </View>
  );
};
