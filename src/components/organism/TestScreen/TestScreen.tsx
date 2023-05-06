import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {Text} from '~/components/atom';

interface ITestScreen {
  title: string;
  body?: string;
  background?: ImageSourcePropType;
  callbackHandler?: (event: GestureResponderEvent) => void;
}

export const TestScreen = ({
  title,
  body,
  background,
  callbackHandler,
}: ITestScreen) => (
  <TouchableOpacity
    style={styles.root}
    onPress={callbackHandler}
    activeOpacity={0.6}
    disabled={!callbackHandler}>
    <Text style={styles.title}>{title}</Text>
    {body && <Text style={styles.body}>{body}</Text>}
    {background && <Image style={styles.background} source={background} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  body: {
    fontSize: 20,
    textAlign: 'center',
  },
  background: {},
});
