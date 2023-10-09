import React, {createContext, useEffect, useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import styles from './styles';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from './Toast';
import {TOAST_LIFETIME_DURATION} from './config';
import {Mutex} from 'async-mutex';
import {useDebounce} from '../../hooks/useDebounce';

const mutex = new Mutex();

interface ToastProviderType {
  toast: (message: string) => void;
}

export const ToastContext = createContext<ToastProviderType>({
  toast: (): void => {},
});

export default function ToastProvider(props: any): JSX.Element {
  const safeAreaInsets = useSafeAreaInsets();

  const [toasts, setToasts] = useState<string[]>([]);

  const toastsLength = useSharedValue<number>(0);

  useEffect(() => {
    toastsLength.value = toasts.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  function showToast(message: string): void {
    mutex.acquire().then(release => {
      setToasts(prev => [...prev, message]);
      setTimeout(release, 500);
    });
  }

  useDebounce(
    () => {
      if (toasts.length > 0) {
        setToasts([]);
      }
    },
    TOAST_LIFETIME_DURATION,
    [toasts],
  );

  return (
    <ToastContext.Provider value={{toast: showToast}}>
      {props.children}
      <View style={[styles.container, {bottom: safeAreaInsets.bottom + 24}]}>
        {toasts.map((message, index) => {
          return (
            <Toast
              key={`toast-${index}`}
              message={message}
              index={index}
              toastsLength={toastsLength}
            />
          );
        })}
      </View>
    </ToastContext.Provider>
  );
}
