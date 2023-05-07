import React, {useEffect} from 'react';

import {RootContext} from '~/contexts';
import SplashScreen from 'react-native-splash-screen';
import {Toast} from '~/components/organism';

// import {Modal} from './src/screen/Modal';

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000);
  // });

  return (
    <>
      {/* <CustomStatusBar barStyle="light-content" backgroundColor="black" /> */}
      <RootContext />
      <Toast />
    </>
  );
}

export default App;
