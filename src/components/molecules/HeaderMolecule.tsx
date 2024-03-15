import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Scale, WINDOW_WIDTH, moderateScale} from '@src/theme/metrics';
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorPresets} from '@src/theme/colors';
import {TextAtom} from '../atoms/TextAtom';

export interface HeaderMoleculeProps {
  title?: string;
  options?: React.ReactNode[];
  onBack?(): any;
}

export const HeaderMolecule: React.FC<HeaderMoleculeProps> = ({
  title,
  options,
  onBack,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          onPress={() => (onBack ? onBack() : navigation.goBack())}
          size={Scale.lg}
          color={ColorPresets.white}
          name="chevron-back"
        />
        {title ? (
          <View style={{paddingHorizontal: Scale.md}}>
            <TextAtom
              text={title}
              preset="body"
              style={{color: ColorPresets.white2}}
            />
          </View>
        ) : null}
      </View>
      {options ? (
        <View style={styles.optionContent}>
          {options.map((data, index) => {
            return <View key={index}>{data}</View>;
          })}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPresets.primaryCTA,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WINDOW_WIDTH,
    paddingHorizontal: Scale.base,
    height: moderateScale(60, 0.25),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
