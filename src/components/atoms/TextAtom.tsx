import {defaultTexts} from '@src/theme/fonts';
import * as React from 'react';
import {Text, TextProps, TextStyle, View} from 'react-native';

interface TextAtomProps extends TextProps {
  text: string;
  style?: TextStyle;
  preset?: TextPresets;
}

export const TextAtom: React.FC<TextAtomProps> = ({
  text,
  style,
  preset = 'body',
  ...rest
}) => {
  const textStyle = [Presets[preset], style];
  return (
    <View>
      <Text {...rest} style={[textStyle]}>
        {text}
      </Text>
    </View>
  );
};

const Presets = {
  title: {...defaultTexts.title} as TextStyle,
  heading: {...defaultTexts.heading} as TextStyle,
  bodyBold: {...defaultTexts.bodyBold} as TextStyle,
  body: {...defaultTexts.body} as TextStyle,
  bodySubtitle: {...defaultTexts.bodySubtitle} as TextStyle,
  caption: {...defaultTexts.caption} as TextStyle,
};

export type TextPresets = keyof typeof Presets;
