import {Images} from '@src/assets';
import {InputAtom} from '@src/components/atoms/InputAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {ExploreMolecule} from '@src/components/molecules/ExploreMolecule';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {GenericNavigation} from '@src/navigation/AppNavigation';
import {RouteKeys, TabKeys} from '@src/navigation/RouteKeys';
import {ColorPresets} from '@src/theme/colors';
import {Scale, WINDOW_WIDTH, moderateScale} from '@src/theme/metrics';
import * as React from 'react';
import {ImageBackground, Pressable, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchScreenProps extends GenericNavigation {}

const exploreData = [
  {key: '1', title: 'Beach', image: Images.beach},
  {key: '2', title: 'Mountain', image: Images.mountain},
  {key: '3', title: 'City', image: Images.city},
  {key: '4', title: 'Desert', image: Images.desert},
];

export const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
  return (
    <ScreenOrganism paddingHorizontal={0} paddingTop={0}>
      <ImageBackground
        source={Images.headerBg}
        style={{
          width: WINDOW_WIDTH,
          height: moderateScale(318),
        }}>
        <View style={{padding: Scale.base}}>
          <TextAtom preset="title" text="Plan a trip 🚀✨ " />
        </View>
      </ImageBackground>
      <View style={{paddingHorizontal: Scale.base, top: -20}}>
        <Pressable onPress={() => navigation.navigate(RouteKeys.ResultScreen)}>
          <InputAtom editable={false} placeholder={`Let's go`} value="" />
        </Pressable>
      </View>
      <View>
        <TextAtom
          style={{paddingHorizontal: Scale.base}}
          preset="bodyBold"
          text="Explore"
        />
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: Scale.base,
            paddingVertical: Scale.md2,
            paddingLeft: Scale.base,
            paddingRight: Scale.base,
          }}>
          {exploreData.map((item, index) => {
            return (
              <ExploreMolecule
                type="portrait"
                key={index}
                image={item.image}
                title={item.title}
              />
            );
          })}
          <Pressable
            onPress={() => navigation.navigate(TabKeys.ExploreScreen)}
            style={{
              width: WINDOW_WIDTH / 2.5,
              aspectRatio: 0.6,
              borderRadius: Scale.base,
              backgroundColor: ColorPresets.gray2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="chevron-forward" size={Scale.xxxl} />
            <TextAtom text="View All" style={{color: ColorPresets.gray}} />
          </Pressable>
        </ScrollView>
      </View>
    </ScreenOrganism>
  );
};
