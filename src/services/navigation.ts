import {Route, createNavigationContainerRef} from '@react-navigation/native';

import type {Screens} from '~/screens';
import {error} from '~/utils/commons';
import {screens} from '~/screens';

export const navigationRef = createNavigationContainerRef<any>();

export interface navigation {
  current(): Route<string, object | undefined> | undefined;
  navigate(name: Screens, params?: StringMap): void;
  setRoot(name: Screens, params?: StringMap): void;
  goBack(): void;
}

export const navigation = {
  current() {
    if (!navigationRef.isReady()) return;
    return navigationRef.getCurrentRoute();
  },
  navigate(name: Screens, params?: StringMap) {
    if (!navigationRef.isReady()) return;
    try {
      if (!screens.has(name)) return;
      navigationRef.navigate(name, params);
    } catch (e) {
      error(e);
    }
  },
  setRoot(name: Screens, params?: StringMap) {
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
