import {ColorPresets} from '@src/theme/colors';
import {Scale, WINDOW_WIDTH, moderateScale} from '@src/theme/metrics';
import * as React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {DayProps} from 'react-native-calendars/src/calendar/day';
import {TextAtom} from './TextAtom';

interface DayAtomProps extends DayProps {
  onPress: (date: any) => void;
}

export const DayAtom: React.FC<DayAtomProps> = props => {
  const Wrapper = props.state === 'disabled' ? View : Pressable;

  const selected = props.marking
    ? props.marking.selected
      ? props.marking.selected
      : false
    : false;

  const start = props.marking
    ? props.marking.startingDay
      ? props.marking.startingDay
      : false
    : false;
  const end = props.marking
    ? props.marking.endingDay
      ? props.marking.endingDay
      : false
    : false;

  const cellStyles: ViewStyle = {
    height: moderateScale(48),
    width: (WINDOW_WIDTH - 30) / 7,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: selected
      ? ColorPresets.primaryCTAOpacity
      : props.marking?.color
      ? props.marking?.color
      : undefined,
    borderTopLeftRadius: selected ? (start ? Scale.xl : undefined) : undefined,
    borderBottomLeftRadius: selected
      ? start
        ? Scale.xl
        : undefined
      : undefined,
    borderTopRightRadius: selected ? (end ? Scale.xl : undefined) : undefined,
    borderBottomRightRadius: selected
      ? end
        ? Scale.xl
        : undefined
      : undefined,
  };
  const wrapperProps = {
    style: cellStyles,
    onPress: () => props.onPress(props.date),
  };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selected ? ColorPresets.primaryCTA : undefined,
            width: '100%',
            height: '100%',
            padding: Scale.md,
            borderRadius: selected ? Scale.xl : undefined,
          }}>
          <TextAtom
            style={{
              color:
                props.state === 'disabled'
                  ? ColorPresets.disabled
                  : selected
                  ? ColorPresets.white
                  : ColorPresets.primaryText,
            }}
            preset="body"
            text={props.date.day}
          />
        </View>
      </Wrapper>
    </>
  );
};
