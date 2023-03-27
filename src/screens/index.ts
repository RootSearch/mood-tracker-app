import {Initialize} from './Initialize';
import {Loading} from './Loading';
import {SignIn} from './SignIn';
import {TestScreen1} from './TestScreen1';
import {TestScreen2} from './TestScreen2';
import {TestScreen3} from './TestScreen3';
import {TestScreen4} from './TestScreen4';
import {TestScreen5} from './TestScreen5';
import {TestScreen6} from './TestScreen6';

export const initScreenKey = 'Initialize';

export const utilityScreens = {
  Initialize,
  Loading,
};

export const authScreens = {
  SignIn,
} as const;

export const tabScreens = {
  TestScreen1,
  TestScreen2,
  TestScreen3,
  TestScreen4,
  TestScreen5,
} as const;

export const navigatedScreens = {
  TestScreen6,
};

const __screens__ = {
  ...utilityScreens,
  ...authScreens,
  ...tabScreens,
  ...navigatedScreens,
};

export const screens = new Set([...Object.keys(__screens__)]);
export type Screens = keyof typeof __screens__;
