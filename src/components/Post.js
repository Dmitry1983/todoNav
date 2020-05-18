import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'

export const Post = ({ post, onOpen }) => {
    const { textTitle, viewPost, image, textWrap } = styles
    return (
        <View style={viewPost}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
                <ImageBackground
                    source={{ uri: post.img }}
                    style={image}
                >
                    <View style={textWrap}>
                        <Text style={textTitle}>
                            {new Date(post.date).toLocaleDateString()}
                        </Text>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        color: 'white',
        fontFamily: THEME.FONT.Open_REG,
        paddingRight: 10,
        fontSize: 18,
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: 'flex-end',
        width: '100%',
    },
    viewPost: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        //width: '100%',

    },
    image: {
        width: '100%',
        height: 300,
        flexDirection: 'column-reverse'
    }
})