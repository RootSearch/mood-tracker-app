import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {
  authScreens,
  initScreenKey,
  navigatedScreens,
  tabScreens,
  utilityScreens,
} from '~/screens';

import type {NavigatedScreenProps} from '~/screens/type';
import React from 'react';
import {authTokenAtom} from '~/stores/auth';
import {navigationRef} from '~/modules/navigator/base';
import {useAtom} from 'jotai';

const History = createStackNavigator<NavigatedScreenProps>();

export const NavigationContext = () => {
  const [authToken] = useAtom(authTokenAtom);
  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <History.Navigator
        initialRouteName={initScreenKey}
        screenOptions={() => ({
          ...TransitionPresets.ScaleFromCenterAndroid,
          headerShown: false,
        })}>
        <History.Group>
          {Object.entries(utilityScreens).map(([key, screen]: any) => (
            <History.Screen key={key} name={key} component={screen} />
          ))}
        </History.Group>
        {!authToken && (
          <History.Group
            screenOptions={{
              animationTypeForReplace: 'pop',
            }}>
            {Object.entries(authScreens).map(([key, screen]: any) => (
              <History.Screen key={key} name={key} component={screen} />
            ))}
          </History.Group>
        )}
        <History.Group
          screenOptions={{
            animationEnabled: false,
          }}>
          {Object.entries(tabScreens).map(([key, screen]: any) => (
            <History.Screen key={key} name={key} component={screen} />
          ))}
        </History.Group>
        <History.Group>
          {Object.entries(navigatedScreens).map(([key, screen]: any) => (
            <History.Screen key={key} name={key} component={screen} />
          ))}
        </History.Group>
      </History.Navigator>
    </NavigationContainer>
  );
};
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
