import React, {useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {TestScreen} from '~/components/organisms';
import {toast} from '~/utils/commons';
import {moveToSignIn} from '~/utils/navigation';

export const Initialize = () => {
  // Note: 이하는 시연용 임시 코드
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    if (ready) {
      timerId = setTimeout(() => {
        moveToSignIn();
      }, 500);
    }
    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [ready]);

  return (
    <View style={initializeStyle.root}>
      <TestScreen
        title={'Initialize'}
        body={'화면을 터치하여 로딩 완료 동작 실행'}
        callbackHandler={() => {
          toast('로딩이 완료되었다고 가정');
          setReady(true);
        }}
      />
    </View>
  );
};

const initializeStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
});
