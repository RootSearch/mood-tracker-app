import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomIconTabBar, TestScreen} from '~/components/organisms';

import type {StackScreenProps} from '@react-navigation/stack';
import type {NavigatedScreenProps} from './types';

type Props = StackScreenProps<NavigatedScreenProps, 'TestScreen1'>;

export const TestScreen5 = ({route}: Props) => {
  return (
    <View style={style.root}>
      <View style={style.root}>
        <TestScreen title="Test Screen 5" body={JSON.stringify(route)} />
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
