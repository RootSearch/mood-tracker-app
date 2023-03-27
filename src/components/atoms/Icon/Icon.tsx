import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

interface IIcon {
  icon: ImageSourcePropType;
  iconSize?: number;
}

export const Icon = ({icon, iconSize}: IIcon) => (
  <View style={styles.root}>
    <Image
      style={{
        ...styles.icon,
        ...(iconSize ? {width: iconSize, height: iconSize} : {}),
      }}
      source={icon}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
  },
});
