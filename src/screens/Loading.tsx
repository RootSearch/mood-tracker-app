import React, {useEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {switchToTestScreen1} from '~/utils/navigation';

import type {StackScreenProps} from '@react-navigation/stack';
import type {NavigatedScreenProps} from './types';
import {TestScreen} from '~/components/organisms';

type Props = StackScreenProps<NavigatedScreenProps, 'Loading'>;

export const Loading = ({route}: Props) => {
  useEffect(() => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    if (route.params.type === 'INIT_LOADING') {
      timer = setTimeout(() => {
        switchToTestScreen1();
      }, 500);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);
  return (
    <View style={style.root}>
      <TestScreen
        title="Loading"
        body={'500ms 이후 자동으로 TestPage1으로 이동'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
