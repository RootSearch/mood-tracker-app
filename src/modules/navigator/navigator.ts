import {navigation} from '~/modules/navigator/base';

export function moveToSignIn() {
  navigation.setRoot('SignIn');
}

export function moveToLoading(params: StringMap) {
  navigation.setRoot('Loading', params);
}

export function switchToTestScreen1() {
  if (navigation.current()?.name !== 'TestScreen1') {
    navigation.setRoot('TestScreen1');
  }
}

export function switchToTestScreen2() {
  if (navigation.current()?.name !== 'TestScreen2') {
    navigation.setRoot('TestScreen2');
  }
}

export function switchToTestScreen3() {
  if (navigation.current()?.name !== 'TestScreen3') {
    navigation.setRoot('TestScreen3');
  }
}

export function switchToTestScreen4() {
  if (navigation.current()?.name !== 'TestScreen4') {
    navigation.setRoot('TestScreen4');
  }
}

export function switchToTestScreen5() {
  if (navigation.current()?.name !== 'TestScreen5') {
    navigation.setRoot('TestScreen5');
  }
}

export function moveToTestScreen6() {
  navigation.navigate('TestScreen6');
}

export function goBack() {
  navigation.goBack();
}

export function getCurrentScreen() {
  return navigation.current()?.name;
}
