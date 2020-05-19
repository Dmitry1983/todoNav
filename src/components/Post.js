import React from 'react'
import {
    StyleSheet, 
    View,
    Text, 
    ImageBackground, 
    TouchableOpacity 
} from 'react-native'
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
                        <Text style={textTitle}>{post.booked?1:2}</Text>
                    </View>

                    <View style={textWrap}>
                        <Text style={textTitle}>
                            {post.text}
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
        paddingHorizontal:15,
        fontSize: 18,
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        flexDirection:'row-reverse',
        alignItems: 'flex-end',
        justifyContent:'space-between',
        width: '100%',
    },
    viewPost: {
        marginVertical:2,
        marginHorizontal:4,
        overflow: 'hidden',
        //width: '100%',

    },
    image: {
        width: '100%',
        height: 300,
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
    }
})