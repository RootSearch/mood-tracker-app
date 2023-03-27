import {createNavigationContainerRef} from '@react-navigation/native';

import {screens} from '~/screens';
import type {Screens} from '~/screens';
import {error} from '~/utils/commons';

export const navigationRef = createNavigationContainerRef<any>();

export const navigation = {
  current() {
    if (!navigationRef.isReady()) return;
    return navigationRef.getCurrentRoute();
  },
  navigate(name: Screens, params?: object) {
    if (!navigationRef.isReady()) return;
    try {
      if (!screens.has(name)) return;
      navigationRef.navigate(name, params);
    } catch (e) {
      error(e);
    }
  },
  setRoot(name: Screens, params?: object) {
    if (!navigationRef.isReady()) return;
    try {
      if (!screens.has(name)) return;
      navigationRef.reset({
        index: 0,
        routes: [{name, params}],
      });
    } catch (e) {
      error(e);
    }
  },
  goBack() {
    if (!navigationRef.isReady()) return;
    try {
      navigationRef.goBack();
    } catch (e) {
      error(e);
    }
  },
};
