import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomIconTabBar, TestScreen} from '~/components/organisms';

import type {StackScreenProps} from '@react-navigation/stack';
import type {NavigatedScreenProps} from './types';

type Props = StackScreenProps<NavigatedScreenProps, 'TestScreen1'>;

export const TestScreen1 = ({route}: Props) => {
  return (
    <View style={style.root}>
      <TestScreen title="Test Screen 1" body={JSON.stringify(route)} />
      <BottomIconTabBar current={route.name} />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
