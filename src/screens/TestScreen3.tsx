import {BottomIconTabBar, TestScreen} from '~/components/organisms';
import {StyleSheet, View} from 'react-native';

import type {NavigatedScreenProps} from './types';
import React from 'react';
import type {StackScreenProps} from '@react-navigation/stack';
import {moveToTestScreen6} from '~/adaptors/navigation';

type Props = StackScreenProps<NavigatedScreenProps, 'TestScreen1'>;

export const TestScreen3 = ({route}: Props) => {
  return (
    <View style={style.root}>
      <View style={style.root}>
        <TestScreen
          title="Test Screen 3"
          body={JSON.stringify(route)}
          callbackHandler={() => {
            moveToTestScreen6();
          }}
        />
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