import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

import React from 'react';
import {RootNavigator} from '~/navigators/RootNavigator';
import {navigationRef} from '~/services/navigation';

export const RootFrame = () => {
  return (
    <View style={style.root}>
      {/* <VideoBackground /> */}
      <NavigationContainer ref={navigationRef} theme={navTheme}>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
