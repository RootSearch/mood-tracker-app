import {
  ContentsChecked,
  ContentsDefault,
  HistoryChecked,
  HistoryDefault,
  HomeChecked,
  HomeDefault,
  InterviewChecked,
  InterviewDefault,
  MenuChecked,
  MenuDefault,
} from '~/assets/image/icon';
import {StyleSheet, View} from 'react-native';
import {
  switchToTestScreen1,
  switchToTestScreen2,
  switchToTestScreen3,
  switchToTestScreen4,
  switchToTestScreen5,
} from '~/modules/navigator';

import {IconListGroup} from '~/components/molecule';
import React from 'react';
import {Screens} from '~/screens';
import {isIOS} from '~/app/device';

const tabs: Parameters<typeof IconListGroup>[0]['tabs'] = [
  {
    checkedIcon: HomeChecked,
    defaultIcon: HomeDefault,
    label: 'Home',
    screen: 'TestScreen1',
    onPressHandler: () => {
      switchToTestScreen1();
    },
  },
  {
    checkedIcon: HistoryChecked,
    defaultIcon: HistoryDefault,
    label: 'History',
    screen: 'TestScreen2',
    onPressHandler: () => {
      switchToTestScreen2();
    },
  },
  {
    checkedIcon: ContentsChecked,
    defaultIcon: ContentsDefault,
    label: 'Contents',
    screen: 'TestScreen3',
    onPressHandler: () => {
      switchToTestScreen3();
    },
  },
  {
    checkedIcon: InterviewChecked,
    defaultIcon: InterviewDefault,
    label: 'Interview',
    screen: 'TestScreen4',
    onPressHandler: () => {
      switchToTestScreen4();
    },
  },
  {
    checkedIcon: MenuChecked,
    defaultIcon: MenuDefault,
    label: 'Menu',
    screen: 'TestScreen5',
    onPressHandler: () => {
      switchToTestScreen5();
    },
  },
];

interface IBottomIconTabBar {
  current: Screens;
}

const barHeight = isIOS ? 75 : 60;

export const BottomIconTabBar = ({current}: IBottomIconTabBar) => (
  <View style={styles.root}>
    <IconListGroup tabs={tabs} current={current} height={barHeight} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FF000050',
    height: barHeight + (isIOS ? 10 : 0),
  },
});
