import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {
  authScreens,
  initScreenKey,
  navigatedScreens,
  tabScreens,
  utilityScreens,
} from '~/screens';

import type {NavigatedScreenProps} from '~/screens/types';
import React from 'react';
import {authTokenAtom} from '~/stores/auth';
import {useAtom} from 'jotai';

const History = createStackNavigator<NavigatedScreenProps>();

export const RootNavigator = () => {
  const [authToken] = useAtom(authTokenAtom);
  return (
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
  );
};
