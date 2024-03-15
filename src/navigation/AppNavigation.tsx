import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RouteKeys} from './RouteKeys';
import {HomeTab} from './routes/HomeTab';
import {SearchResultScreen} from '@src/screens/search/ResultScreen';
import {FlightDetailScreen} from '@src/screens/search/FlightDetailScreen';
import {BookingScreen} from '@src/screens/booking/BookingScreen';

interface AppNavigationProps {}

export interface GenericNavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={RouteKeys.HomeScreen}
          component={HomeTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={RouteKeys.ResultScreen}
          component={SearchResultScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={RouteKeys.FlightDetailScreen}
          component={FlightDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={RouteKeys.BookingScreen}
          component={BookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
