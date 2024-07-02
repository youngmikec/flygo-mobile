import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { store } from './store/index';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppNavigator />
      </View>    
    </Provider>
    // <View style={styles.container}>
    //   <AppNavigator />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
