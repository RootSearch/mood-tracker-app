import React from 'react';
import {Text as OriginalText} from 'react-native';

export const Text = (props: any) => (
  <OriginalText allowFontScaling={false} {...props} />
);
