import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {ColorPresets} from '@src/theme/colors';
import {Scale, moderateScale} from '@src/theme/metrics';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

interface CustomTabBarProps extends BottomTabBarProps {}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={index}
            onPress={onPress}
            style={[
              styles.tab,
              {
                backgroundColor: ColorPresets.gray2,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <View
              style={{
                padding: Scale.xs,
                marginHorizontal: Scale.base,
              }}>
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused
                    ? ColorPresets.primaryCTA
                    : ColorPresets.gray,
                  size: Scale.lg,
                })}
            </View>
            <TextAtom
              preset="caption"
              style={isFocused ? styles.tabActive : styles.tabInactive}
              text={label.toString()}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ColorPresets.white,
    height: moderateScale(70),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    color: ColorPresets.primaryCTA,
    paddingTop: Scale.xs,
  },
  tabInactive: {
    color: ColorPresets.gray,
    paddingTop: Scale.xs,
  },
});
