import {useAtom} from 'jotai';
import React from 'react';

import {StyleSheet, View} from 'react-native';
import {TestScreen} from '~/components/organisms';
import {authTokenAtom} from '~/stores/auth';
import {moveToLoading} from '~/utils/navigation';

export const SignIn = () => {
  const [, setAuthToken] = useAtom(authTokenAtom);
  return (
    <View style={signInStyle.root}>
      <TestScreen
        title={'SignIn'}
        body={'화면을 터치하여 로그인 동작 실행'}
        callbackHandler={() => {
          setAuthToken('X-API-KEY');
          moveToLoading({
            type: 'INIT_LOADING',
          });
        }}
      />
    </View>
  );
};

const signInStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
});
