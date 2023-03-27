import {Animated, Easing, StyleSheet} from 'react-native';

import CONSTANTS from '~/app/constants.json';
import React from 'react';
import {Text} from '~/components/atoms';

export class Toast extends React.Component<any, any> {
  static instance: Toast;
  opacity = new Animated.Value(0);
  fadeOut: number | null = null;
  fadeIn: number | null = null;

  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      text: '',
    };
    Toast.instance = this;
  }
  componentWillUnmount() {
    this.fadeOut && clearTimeout(this.fadeOut);
    this.fadeIn && clearTimeout(this.fadeIn);
  }

  static show(
    content: string,
    duration: number = CONSTANTS.TOAST_SHOW_DURATION,
  ) {
    Toast.instance._show(content, duration);
  }

  _show(text: string, duration: number) {
    this.fadeOut && clearTimeout(this.fadeOut);
    this.setState({visible: true, text});
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: CONSTANTS.TOAST_ANIMATION_DURATION,
      easing: Easing.out(Easing.linear),
      useNativeDriver: true,
    }).start();
    this.fadeIn = setTimeout(() => {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: CONSTANTS.TOAST_ANIMATION_DURATION,
        easing: Easing.out(Easing.linear),
        useNativeDriver: true,
      }).start();
      this.fadeOut = setTimeout(() => {
        this.setState({visible: false, text: ''});
        this.fadeOut = null;
        this.fadeIn = null;
      }, CONSTANTS.TOAST_ANIMATION_DURATION);
    }, duration);
  }

  render() {
    const {visible, text} = this.state;
    if (!visible) {
      return null;
    }
    return (
      <Animated.View
        pointerEvents="none"
        style={[styles.layout, {opacity: this.opacity}]}>
        <Text style={styles.toastText}>{text}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
  },
  toastText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
