import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


export const AppHeaderIconCreater = ({ iconName, size, color }) => {
    const { button, icon } = styles
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={button} onPress={() => navigation.navigate('createScreen')}>
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