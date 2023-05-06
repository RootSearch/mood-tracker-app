import {StyleSheet, View} from 'react-native';

import {NavigationContext} from './NavigatorContext';
import React from 'react';

export const RootContext = () => {
  return (
    <View style={style.root}>
      {/* <VideoBackground /> */}
      <NavigationContext />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
