import * as React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {TextAtom} from './TextAtom';
import {Scale} from '@src/theme/metrics';
import {ColorPresets} from '@src/theme/colors';

interface ButtonAtomProps extends PressableProps {
  title: string;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({title, ...rest}) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: rest.disabled
            ? ColorPresets.secondaryText
            : ColorPresets.primaryCTA,
        },
        styles.buttonContainer,
      ]}>
      <TextAtom
        text={title}
        preset="bodyBold"
        style={{color: ColorPresets.white}}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    borderRadius: Scale.md,
    padding: Scale.base,
    margin: Scale.base,
  },
});
