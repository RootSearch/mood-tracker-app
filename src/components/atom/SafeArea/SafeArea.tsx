import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type Props = {
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export const SafeArea: React.FC<Props> = ({children}) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};
