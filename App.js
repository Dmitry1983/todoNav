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
import { bootstap } from './src/bootstrap';
import AppNavigator from './src/navigation/AppNavigation'

const App = () => {

  return (
    <AppNavigator />
  )
}

export default App
