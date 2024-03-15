import {TextAtom} from '@src/components/atoms/TextAtom';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {ColorPresets} from '@src/theme/colors';
import * as React from 'react';
import {View} from 'react-native';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return (
    <ScreenOrganism>
      <TextAtom text="Profile 😎" preset="title" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextAtom
          text="All your settings and user details appear here ⚙️"
          style={{textAlign: 'center', color: ColorPresets.secondaryText}}
        />
      </View>
    </ScreenOrganism>
  );
};
