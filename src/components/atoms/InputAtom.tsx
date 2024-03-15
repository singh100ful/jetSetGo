import {ColorPresets} from '@src/theme/colors';
import {defaultTexts} from '@src/theme/fonts';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {TextAtom} from './TextAtom';

interface InputAtomProps extends TextInputProps {
  label?: string;
}

export const InputAtom: React.FC<InputAtomProps> = ({label, ...rest}) => {
  return (
    <View>
      {label ? <TextAtom text={label} /> : null}
      <TextInput
        {...rest}
        placeholderTextColor={ColorPresets.placeholderText}
        placeholder={rest.placeholder}
        blurOnSubmit
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    ...defaultTexts.placeHolder,
    backgroundColor: ColorPresets.white2,
    borderRadius: Scale.sm,
    borderColor: ColorPresets.gray2,
    borderWidth: 1,
    paddingHorizontal: Scale.base,
    paddingVertical: Scale.md,
  },
});
