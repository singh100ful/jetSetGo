import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorPresets} from '@src/theme/colors';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import {RouteKeys} from '@src/navigation/RouteKeys';

interface ResultMoleculeProps {
  item: ResponseData;
}

export const ResultMolecule: React.FC<ResultMoleculeProps> = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(RouteKeys.FlightDetailScreen, {item: item})
      }>
      <View style={styles.header}>
        <Icon
          name="paper-plane"
          color={ColorPresets.black2}
          size={Scale.base}
        />
        <TextAtom text={item.airline} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <TextAtom
            text={
              format(new Date(item.departureTime), 'h:mm a') +
              ' - ' +
              format(new Date(item.arrivalTime), 'h:mm a')
            }
          />
          <TextAtom text="Non-stop" />
        </View>
        <View style={styles.content}>
          <TextAtom
            text={item.origin + '-' + item.destination}
            preset="caption"
          />
          <TextAtom text={item.duration} preset="caption" />
        </View>
        <View style={styles.price}>
          <TextAtom
            text={'INR' + item.price.toString()}
            style={{color: ColorPresets.success}}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: Scale.md,
    borderTopRightRadius: Scale.md,
    paddingHorizontal: Scale.base,
    paddingVertical: Scale.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Scale.base,
    backgroundColor: ColorPresets.primaryCTAOpacity,
  },
  contentContainer: {
    borderBottomLeftRadius: Scale.md,
    borderBottomRightRadius: Scale.md,
    borderColor: ColorPresets.gray2,
    borderWidth: 1,
    padding: Scale.base,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {alignItems: 'flex-end', paddingTop: Scale.base},
});
