import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const { view, text } = styles
  return (
    <View style={view}>
      <Text style={text}>
        Hello
      </Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-Light'
  }
})
