import {Images} from '@src/assets';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {ExploreMolecule} from '@src/components/molecules/ExploreMolecule';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {ColorPresets} from '@src/theme/colors';
import {Scale, WINDOW_WIDTH} from '@src/theme/metrics';
import * as React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

interface ExploreScreenProps {}

const exploreData = [
  {key: '1', title: 'Beach', image: Images.beach},
  {key: '2', title: 'Mountain', image: Images.mountain},
  {key: '3', title: 'City', image: Images.city},
  {key: '4', title: 'Desert', image: Images.desert},
  {key: '5', title: 'Forest', image: Images.forest},
  {key: '6', title: 'Lake', image: Images.lake},
  {key: '7', title: 'River', image: Images.river},
  {key: '8', title: 'Snow', image: Images.snow},
];

export const ExploreScreen: React.FC<ExploreScreenProps> = ({}) => {
  return (
    <ScreenOrganism paddingBottom={0}>
      <TextAtom text="Explore 🧭" preset="title" />

      <ScrollView
        contentContainerStyle={{gap: Scale.base, paddingVertical: Scale.base}}>
        {exploreData.map((item, index) => {
          return (
            <ExploreMolecule
              type="landscape"
              key={index}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </ScrollView>
    </ScreenOrganism>
  );
};
