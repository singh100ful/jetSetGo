import {ButtonAtom} from '@src/components/atoms/ButtonAtom';
import {InputAtom} from '@src/components/atoms/InputAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {HeaderMolecule} from '@src/components/molecules/HeaderMolecule';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {RouteKeys} from '@src/navigation/RouteKeys';
import {ColorPresets} from '@src/theme/colors';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

interface BookingScreenProps extends GenericNavigation {}

export const BookingScreen: React.FC<BookingScreenProps> = ({
  route,
  navigation,
}) => {
  const flightData: ResponseData = route.params?.item;
  return (
    <ScreenOrganism paddingHorizontal={0} paddingTop={0} paddingBottom={0}>
      <HeaderMolecule />
      <ScrollView
        contentContainerStyle={{padding: Scale.base, gap: Scale.base}}>
        <InputAtom label="First Name" placeholder="first name" />
        <InputAtom label="Last Name" placeholder="last name" />
        <InputAtom label="Age" placeholder="age" />
        <InputAtom label="Nationality" placeholder="nationality" />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: Scale.base,
        }}>
        <View style={{flex: 1}}>
          <TextAtom text="Total price :" />
          <TextAtom
            text={flightData.price.toString() + ' INR'}
            preset="bodyBold"
            style={{color: ColorPresets.success}}
          />
        </View>
        <View style={{flex: 1}}>
          <ButtonAtom
            title="Book"
            onPress={() => navigation.navigate(RouteKeys.HomeScreen)}
          />
        </View>
      </View>
    </ScreenOrganism>
  );
};
