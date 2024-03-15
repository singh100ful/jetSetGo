import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {TabKeys} from '../RouteKeys';
import {SearchScreen} from '@src/screens/search/SearchScreen';
import {ExploreScreen} from '@src/screens/explore/ExploreScreen';
import {TripScreen} from '@src/screens/trips/TripScreen';
import {ProfileScreen} from '@src/screens/profile/ProfileScreen';
import {CustomTabBar} from '../components/CustomTabBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {defaultTexts} from '@src/theme/fonts';
import {ColorPresets} from '@src/theme/colors';

interface HomeTabProps {}

const Tab = createBottomTabNavigator();

export const HomeTab: React.FC<HomeTabProps> = ({}) => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          if (route.name === TabKeys.SearchScreen) {
            return <Icon name="search" color={color} size={size} />;
          } else if (route.name === TabKeys.ExploreScreen) {
            return <Icon name="compass" color={color} size={size} />;
          } else if (route.name === TabKeys.TripScreen) {
            return <Icon name="bag" color={color} size={size} />;
          } else if (route.name === TabKeys.ProfileScreen) {
            return <Icon name="person" color={color} size={size} />;
          }
        },
        tabBarStyle: {backgroundColor: ColorPresets.gray2},
        tabBarLabelStyle: {...defaultTexts.tabLabel},
        tabBarActiveTintColor: ColorPresets.primaryCTA,
        tabBarInactiveTintColor: ColorPresets.gray,
      })}>
      <Tab.Screen component={SearchScreen} name={TabKeys.SearchScreen} />
      <Tab.Screen component={ExploreScreen} name={TabKeys.ExploreScreen} />
      <Tab.Screen component={TripScreen} name={TabKeys.TripScreen} />
      <Tab.Screen component={ProfileScreen} name={TabKeys.ProfileScreen} />
    </Tab.Navigator>
  );
};
