/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
        <View style={Styles.container} >
          <Text>{'tạo thử thư viện react'}</Text>
      </View>
      )
  }
}

const Styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})

export default App;
