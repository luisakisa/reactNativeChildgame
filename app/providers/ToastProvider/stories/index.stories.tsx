import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ToastProvider from '../index';

storiesOf('ToastProvider', module).add('basic', () => {
  return <ToastProvider />;
});
