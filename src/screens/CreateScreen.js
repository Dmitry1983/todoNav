import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const CreateScreen = ({ navigation }) => {
    const { view, text } = styles
    return (
        <View style={view}>
            <Text style={text}>CreateScreen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
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