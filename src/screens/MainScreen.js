import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
    const { view, text } = styles

    const goToPost = () => {
        navigation.navigate('postScreen')
    }
    return (
        <View style={view}>
            <Text style={text}>MainScreen</Text>
            <Button title='Post' onPress={goToPost} />
        </View>
    )
}



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