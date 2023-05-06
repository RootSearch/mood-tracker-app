import {StyleSheet, View} from 'react-native';

import {NavigatorContext} from './NavigatorContext';
import React from 'react';

export const RootContext = () => {
  return (
    <View style={style.root}>
      {/* <VideoBackground /> */}
      <NavigatorContext />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
