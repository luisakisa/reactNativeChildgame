import React from 'react';
import {render} from '@testing-library/react-native';
import ToastProvider from '../index';

test('provider/ToastProvider/snapshot', () => {
  const {toJSON} = render(<ToastProvider />);
  expect(toJSON()).toMatchSnapshot();
});
