import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
    const { view, text } = styles

    React.useEffect(() => {
        navigation.setOptions({ title: 'Updated!' })
    })

    return (
        <View style={view}>
            <Text style={text}>MainScreen</Text>
            <Button title='Post' onPress={() => navigation.navigate('postScreen')} />
            <Button title="Push Main" onPress={() => navigation.push('mainScreen')} />
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
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