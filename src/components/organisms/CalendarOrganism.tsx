import {ColorPresets} from '@src/theme/colors';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {InputAtom} from '../atoms/InputAtom';
import {TextAtom} from '../atoms/TextAtom';
import {HeaderMolecule} from '../molecules/HeaderMolecule';
import {CalendarList, DateData} from 'react-native-calendars';
import {addDays, differenceInDays, format} from 'date-fns';
import {FONT_BOLD, FONT_MEDIUM} from '@src/theme/fonts';
import {DayAtom} from '../atoms/DayAtom';
import {ButtonAtom} from '../atoms/ButtonAtom';
import {SelectedDates} from '@src/utils/types/main';

interface CalendarOrganismProps {}

const initState = {start: null, end: null};
const minDate = new Date().toString();

export const CalendarOrganism: React.FC<CalendarOrganismProps> = ({}) => {
  const [modal, setModal] = React.useState(false);
  const [selectedDates, setSelectedDates] =
    React.useState<SelectedDates>(initState);

  const markedDates: any = React.useMemo(() => {
    const {start, end} = selectedDates;
    const marked: any = {};

    const formattedStart = start
      ? format(new Date(start.timestamp), 'yyyy-MM-dd')
      : null;
    const formattedEnd = end
      ? format(new Date(end.timestamp), 'yyyy-MM-dd')
      : null;

    if (formattedStart) {
      marked[formattedStart.toString()] = {
        ...(marked[formattedStart] || {}),
        selected: true,
        startingDay: true,
        color: ColorPresets.primaryCTA,
      };
    }
    if (formattedEnd) {
      marked[formattedEnd] = {
        ...(marked[formattedEnd] || {}),
        endingDay: true,
        selected: true,
        color: ColorPresets.primaryCTA,
      };
    }

    if (formattedStart && formattedEnd) {
      const diff = Math.abs(
        differenceInDays(new Date(end.timestamp), new Date(start.timestamp)),
      );
      if (diff >= 1) {
        for (let i = 1; i <= diff; i++) {
          let temp = addDays(new Date(start.timestamp), i);
          const dateKey = format(temp, 'yyyy-MM-dd');
          marked[dateKey] = {
            ...(marked[dateKey] || {}),
            color: ColorPresets.primaryCTAOpacity,
          };
        }
      }
    }

    return marked;
  }, [selectedDates]);

  const handleDayPress = (day: DateData) => {
    let dayData: DateData = {
      dateString: day.dateString,
      day: day.day,
      month: day.month,
      timestamp: day.timestamp,
      year: day.year,
    };
    if (selectedDates.start && selectedDates.end) {
      setSelectedDates(initState);
      setSelectedDates(prev => ({
        ...prev,
        start: dayData,
      }));
    } else {
      if (!selectedDates.start) {
        setSelectedDates(prev => ({
          ...prev,
          start: dayData,
        }));
      } else if (!selectedDates.end) {
        setSelectedDates(prev => ({
          ...prev,
          end: dayData,
        }));
      }
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modal}
        onRequestClose={() => setModal(!modal)}>
        <View style={{flex: 1, backgroundColor: ColorPresets.white}}>
          <HeaderMolecule onBack={() => setModal(false)} title="Select dates" />
          <View style={styles.weekWrapper}>
            <TextAtom preset="body" text="S" />
            <TextAtom preset="body" text="M" />
            <TextAtom preset="body" text="T" />
            <TextAtom preset="body" text="W" />
            <TextAtom preset="body" text="T" />
            <TextAtom preset="body" text="F" />
            <TextAtom preset="body" text="S" />
          </View>
          <CalendarList
            hideDayNames={true}
            markingType="period"
            markedDates={markedDates}
            monthFormat="MMMM"
            pastScrollRange={0}
            futureScrollRange={6}
            style={{height: '70%', zIndex: 1}}
            minDate={minDate}
            removeClippedSubviews={false}
            dayComponent={(props: any) => (
              <DayAtom {...props} onPress={handleDayPress} />
            )}
            theme={{
              textDisabledColor: ColorPresets.disabled,
              todayTextColor: ColorPresets.primaryCTA,
              monthTextColor: ColorPresets.primaryCTA,
              textMonthFontFamily: FONT_BOLD,
              textMonthFontWeight: '700',
              textMonthFontSize: 16,
              textDayFontFamily: FONT_MEDIUM,
              textDayFontSize: 16,
            }}
            nestedScrollEnabled
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: Scale.base,
              backgroundColor: ColorPresets.gray2,
            }}>
            {selectedDates.start ? (
              <TextAtom
                text={format(selectedDates.start?.timestamp, 'dd-MM-yyyy')}
              />
            ) : (
              <TextAtom text="Start date" />
            )}
            {selectedDates.end ? (
              <TextAtom
                text={format(selectedDates.end?.timestamp, 'dd-MM-yyyy')}
              />
            ) : (
              <TextAtom text="End date" />
            )}
          </View>
          <ButtonAtom
            disabled={!(selectedDates.start && selectedDates.end)}
            title="Submit"
            onPress={() => setModal(false)}
          />
        </View>
      </Modal>
      <View
        style={{
          paddingHorizontal: Scale.base,
          paddingVertical: Scale.md,
          backgroundColor: ColorPresets.primaryCTA,
        }}>
        <Pressable onPress={() => setModal(true)}>
          <InputAtom
            editable={false}
            placeholder="Select dates"
            value={
              selectedDates.start && selectedDates.end
                ? format(selectedDates.start?.timestamp, 'dd MMM') +
                  ' - ' +
                  format(selectedDates.end?.timestamp, 'dd MMM')
                : ''
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: Scale.base,
    paddingVertical: Scale.md,
    borderBottomColor: ColorPresets.border,
    borderBottomWidth: 1,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: ColorPresets.white,
    zIndex: 100,
  },
  buttonWrapper: {
    paddingHorizontal: Scale.base,
    flexDirection: 'row',
    paddingVertical: Scale.md,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
