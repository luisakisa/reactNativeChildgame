import React, {useContext} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ToastProvider, {ToastContext} from '../index';
import {StyleSheet, View} from 'react-native';
import ActionButton from '../../../components/buttons/ActionButton';

const story: ComponentMeta<typeof ToastProvider> = {
  title: 'ToastProvider',
  component: ToastProvider,
};

export default story;

export const Basic: ComponentStory<typeof ToastProvider> = () => {
  return (
    <ToastProvider>
      <Content />
    </ToastProvider>
  );
};

function Content(): React.FunctionComponentElement<void> {
  const {toast} = useContext(ToastContext);

  return (
    <View style={styles.container}>
      <ActionButton title={'Show toast'} onPress={(): void => toast("Hi i'm toast message!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    width: '100%',
    height: 400,
  },
});
