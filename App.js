import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
import { bootstap } from './src/bootstrap';
import AppNavigator from './src/navigation/AppNavigation'

const App = () => {

  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  )
}

export default App
