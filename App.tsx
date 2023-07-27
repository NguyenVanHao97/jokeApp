/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screen/home';
import codePush from 'react-native-code-push';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

export default codePush(App);
