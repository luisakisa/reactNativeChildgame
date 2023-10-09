import React from 'react';
import {render} from '@testing-library/react-native';
import Toast from '../index';

test('provider/ToastProvider/Toast/snapshot', () => {
  const {toJSON} = render(<Toast index={0} message={'Toast'} toastsLength={{value: 0}} />);
  expect(toJSON()).toMatchSnapshot();
});
