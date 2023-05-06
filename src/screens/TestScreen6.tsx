import {StyleSheet, View} from 'react-native';

import React from 'react';
import {TestScreen} from '~/components/organism';
import {navigation} from '~/modules/navigator/base';

export const TestScreen6 = () => {
  return (
    <View style={style.root}>
      <View style={style.root}>
        <TestScreen title="Test Screen 6" body={'컨텐츠'} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
