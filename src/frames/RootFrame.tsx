import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '~/infra/navigation';
import {RootNavigator} from '~/navigations/RootNavigator';

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
