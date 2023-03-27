import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import React, {useMemo} from 'react';

import {IconButton} from '~/components/atoms';
import {Screens} from '~/screens';
import {VIEWPORT_WIDTH} from '~/app/device';

interface IIconListGroup {
  tabs: {
    checkedIcon: ImageSourcePropType;
    defaultIcon: ImageSourcePropType;
    screen: Screens;
    label: string;
    onPressHandler?: (event: GestureResponderEvent) => void;
  }[];
  height: number;
  current: Screens;
}

const labelFontSize = 14;

export const IconListGroup = ({tabs, height, current}: IIconListGroup) => {
  const iconSize = useMemo(
    () => Math.min(VIEWPORT_WIDTH / tabs.length, height - labelFontSize) * 0.75,
    [tabs],
  );
  return (
    <View style={{...styles.root, height}}>
      {tabs.map(({defaultIcon, checkedIcon, screen, label, onPressHandler}) => (
        <View key={`${label}`} style={styles.iconFrame}>
          <IconButton
            icon={screen === current ? checkedIcon : defaultIcon}
            label={label}
            iconSize={iconSize}
            fontSize={labelFontSize}
            onPressHandler={onPressHandler}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconFrame: {
    flex: 1,
    alignSelf: 'center',
  },
});
