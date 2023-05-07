import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';

import React from 'react';
import {Text} from '~/components/atom';

interface IIconButton {
  icon: ImageSourcePropType;
  label?: string;
  iconSize?: number;
  fontSize?: number;
  onPressHandler?: (event: GestureResponderEvent) => void;
}

export const IconButton = ({
  icon,
  label,
  iconSize,
  fontSize,
  onPressHandler,
}: IIconButton) => (
  <Pressable style={styles.root} onPress={onPressHandler}>
    <Image
      style={{
        ...styles.icon,
        ...(iconSize ? {width: iconSize, height: iconSize} : {}),
      }}
      source={icon}
    />
    <Text style={{...styles.label, ...(fontSize ? {fontSize} : {})}}>
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'center',
  },
});
