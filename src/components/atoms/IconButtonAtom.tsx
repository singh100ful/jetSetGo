import {ColorPresets} from '@src/theme/colors';
import * as React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextAtom} from './TextAtom';
import Icon from 'react-native-vector-icons/Ionicons';
import {Scale} from '@src/theme/metrics';

interface IconButtonAtomProps extends PressableProps {
  icon: string;
  loading?: boolean;
}

export const IconButtonAtom: React.FC<IconButtonAtomProps> = ({
  icon,
  loading,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: rest.disabled
            ? ColorPresets.secondaryText
            : ColorPresets.gray,
        },
        styles.buttonContainer,
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={ColorPresets.white} />
      ) : (
        <Icon name={icon} size={Scale.lg} color={ColorPresets.white} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    borderRadius: Scale.xxl,
    padding: Scale.base,
    margin: Scale.base,
  },
});
