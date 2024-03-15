import {TextAtom} from '@src/components/atoms/TextAtom';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {ColorPresets} from '@src/theme/colors';
import * as React from 'react';
import {View} from 'react-native';

interface TripScreenProps {}

export const TripScreen: React.FC<TripScreenProps> = ({}) => {
  return (
    <ScreenOrganism>
      <TextAtom text="Trips 🗺️" preset="title" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextAtom
          text="All your past and upcoming trips will appear here 📍"
          style={{textAlign: 'center', color: ColorPresets.secondaryText}}
        />
      </View>
    </ScreenOrganism>
  );
};
