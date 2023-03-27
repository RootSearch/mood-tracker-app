import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  authScreens,
  tabScreens,
  navigatedScreens,
  initScreenKey,
  utilityScreens,
} from '~/screens';
import {useAtom} from 'jotai';
import {authTokenAtom} from '~/stores/auth';
import type {NavigatedScreenProps} from '~/screens/types';

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
      {Object.entries(utilityScreens).map(([key, screen]: any) => (
        <History.Screen key={key} name={key} component={screen} />
      ))}
      {!authToken &&
        Object.entries(authScreens).map(([key, screen]: any) => (
          <History.Screen
            key={key}
            name={key}
            component={screen}
            options={{
              animationTypeForReplace: 'pop',
            }}
          />
        ))}
      {Object.entries(tabScreens).map(([key, screen]: any) => (
        <History.Screen
          key={key}
          name={key}
          component={screen}
          options={{
            animationEnabled: false,
          }}
        />
      ))}
      {Object.entries(navigatedScreens).map(([key, screen]: any) => (
        <History.Screen key={key} name={key} component={screen} />
      ))}
    </History.Navigator>
  );
};
