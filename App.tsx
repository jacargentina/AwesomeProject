/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { GlobalStore } from './GlobalStore';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const localeStore = new GlobalStore<string, any>('default', {
  asyncStorageKey: 'locale',
});

const useLocaleStore = localeStore.getHook();

function App(): JSX.Element {
  const [locale, setLocale, { isAsyncStorageReady }] = useLocaleStore();

  console.log({ isAsyncStorageReady, locale });

  const loc = useAsyncStorage('locale');

  return (
    <SafeAreaView>
      {isAsyncStorageReady ?
        <>
          <Text>Locale</Text>
          <Text>{locale}</Text>
          <Button onPress={() => setLocale('es')} title="To Spanish"></Button>
          <Button onPress={() => loc.removeItem()} title="Remove"></Button>
        </> : <Text>Loading...</Text>}
    </SafeAreaView>
  );
}
export default App;
