import {TextAtom} from '@src/components/atoms/TextAtom';
import {HeaderMolecule} from '@src/components/molecules/HeaderMolecule';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {Scale} from '@src/theme/metrics';
import {format} from 'date-fns';
import * as React from 'react';
import {Text, View} from 'react-native';
import {FlightRow} from './components/FlightRow';
import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {RouteKeys} from '@src/navigation/RouteKeys';

interface FlightDetailScreenProps extends GenericNavigation {}

export const FlightDetailScreen: React.FC<FlightDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const flightData: ResponseData = route.params?.item;
  return (
    <ScreenOrganism paddingHorizontal={0} paddingTop={0} paddingBottom={0}>
      <HeaderMolecule title="Flight Details" />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{padding: Scale.base}}>
          <TextAtom
            text={flightData.airline + ' - ' + flightData.flightNumber}
            preset="heading"
          />
          <TextAtom
            text={
              flightData.origin +
              ' to ' +
              flightData.destination +
              ', ' +
              format(flightData.departureTime, 'dd MMM')
            }
          />
          <TextAtom text={flightData.duration} preset="bodyBold" />
          <TextAtom text={'Gate No.: ' + flightData.gate} preset="bodyBold" />
          <TextAtom
            text={
              'Boarding: ' + format(flightData.departureTime, 'EEEE HH:mm a')
            }
          />
          <TextAtom
            text={'Arrival: ' + format(flightData.arrivalTime, 'EEEE HH:mm a')}
          />
          <View style={{paddingVertical: Scale.base}}>
            <FlightRow icon="airplane" title={flightData.aircraft} />
            <FlightRow icon="wifi" title={'Streaming Entertainment'} />
            <FlightRow icon="tv" title={'Netflix streaming (Fee)'} />
            <FlightRow icon="power" title={'Power & USB outlets'} />
            <FlightRow icon="fast-food" title={'Preorder meal (fee)'} />
          </View>
        </View>
        <ButtonAtom
          title={'Book Now @ ' + flightData.price + ' INR'}
          onPress={() =>
            navigation.navigate(RouteKeys.BookingScreen, {item: flightData})
          }
        />
      </View>
    </ScreenOrganism>
  );
};
