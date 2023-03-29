import React, {useEffect} from 'react';

import {RootFrame} from '~/frames';
import SplashScreen from 'react-native-splash-screen';
import {Toast} from '~/components/organisms';

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
      <RootFrame />
      {/* <Modal /> */}
      <Toast />
    </>
  );
}

export default App;
