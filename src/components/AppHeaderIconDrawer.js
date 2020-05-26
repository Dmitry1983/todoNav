import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, DrawerActions } from '@react-navigation/native'


export const AppHeaderIconDrawer = ({ iconName, size, color }) => {
    const { button, icon } = styles
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={button} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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