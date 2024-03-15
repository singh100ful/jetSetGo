import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ContainerAtom} from '@src/components/atoms/ContainerAtom';
import {ColorPresets} from '@src/theme/colors';

interface ScreenOrganismProps {
  children: React.ReactNode;
  paddingBottom?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
}

export const ScreenOrganism: React.FC<ScreenOrganismProps> = ({
  children,
  paddingBottom = Scale.base,
  paddingHorizontal = Scale.base,
  paddingTop = Scale.base,
  ...rest
}) => {
  return (
    <ContainerAtom style={styles.container}>
      <View
        style={[
          styles.content,
          {
            paddingBottom: paddingBottom,
            paddingHorizontal: paddingHorizontal,
            paddingTop: paddingTop,
          },
        ]}>
        {children}
      </View>
    </ContainerAtom>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPresets.white,
  },
  content: {
    flex: 1,
  },
});
