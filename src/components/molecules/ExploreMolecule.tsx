import {ColorPresets} from '@src/theme/colors';
import {Scale, WINDOW_WIDTH} from '@src/theme/metrics';
import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';

interface ExploreMoleculeProps {
  type: 'portrait' | 'landscape';
  image: string;
  title: string;
}

export const ExploreMolecule: React.FC<ExploreMoleculeProps> = ({
  image,
  title,
  type,
}) => {
  return (
    <ImageBackground
      source={{uri: image}}
      imageStyle={{borderRadius: Scale.base}}
      style={{
        width:
          type === 'portrait'
            ? WINDOW_WIDTH / 2.5
            : WINDOW_WIDTH - Scale.base * 2,
        aspectRatio: type === 'portrait' ? 0.6 : 2,
        borderRadius: Scale.base,
        justifyContent: 'flex-end',
      }}>
      <TextAtom
        style={{
          color: ColorPresets.white,
          padding: Scale.md,
        }}
        text={title}
      />
    </ImageBackground>
  );
};
