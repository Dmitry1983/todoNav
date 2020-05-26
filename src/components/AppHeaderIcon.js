import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export const AppHeaderIcon = ({ onPress, iconName, size, color }) => {
    const { button, icon } = styles
    return (
        <TouchableOpacity style={button} onPress={onPress}>
            <Icon style={icon} name={iconName} size={size ? size : 40} color={color} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
    },
    icon: {

    }
})