import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const PostScreen = ({ }) => {
    const { view, text } = styles
    return (
        <View style={view}>
            <Text style={text}>PostScreen</Text>
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: '1234'
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