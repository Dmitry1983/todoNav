import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';

export const UnicButton = ({ title, onPress, color }) => {
    const { text } = styles
    return (
        <View>
            <TouchableOpacity onPress={onPress} activeOpacity={0.1}>
                <Text style={{ ...text, ...(color != '' && color != undefined) ? { color } : '' }}>{title}</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({


    text: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft:15,
        paddingRight:15,
        textAlign: 'center',
        fontFamily: THEME.FONT.Open_REG,
        color: THEME.COLOR.BLUE_IOS_BUTTON,
        fontSize: Platform.OS === 'ios' ? 19 : 19

    }

})