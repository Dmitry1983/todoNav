import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export const PostScreen = ({ navigation }) => {
    const { view, text } = styles

    return (
        <View style={view}>
            <Text style={text}>PostScreen</Text>
            <Button title="Push Post ...again" onPress={() => navigation.push('postScreen')} />
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