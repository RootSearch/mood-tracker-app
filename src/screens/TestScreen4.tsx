import {BottomIconTabBar, TestScreen} from '~/components/organism';
import {StyleSheet, View} from 'react-native';

import type {NavigatedScreenProps} from './type';
import React from 'react';
import type {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<NavigatedScreenProps, 'TestScreen1'>;

export const TestScreen4 = ({route}: Props) => {
  return (
    <View style={style.root}>
      <View style={style.root}>
        <TestScreen title="Test Screen 4" body={JSON.stringify(route)} />
        <BottomIconTabBar current={route.name} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
