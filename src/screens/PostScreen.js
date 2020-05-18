import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button, Image,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native'
import { THEME } from '../theme'

const createTwoButtonAlert = () =>
    Alert.alert(
        "DELETE POST?",
        "Do you want to delete post?",
        [
            {
                text: "Cancel",
                onPress: () => { console.log("Delete Cancel Pressed") },
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => { console.log("Delete OK Pressed") },
                style: 'destructive'
            }
        ],
        { cancelable: false }
    );

export const PostScreen = ({ navigation, route }) => {
    const post = route.params.post
    //console.log(post.text)

    React.useEffect(() => {
        //navigation.setOptions({ title: post.text })
        navigation.setOptions({ title: new Date(post.date).toLocaleDateString() })
        console.log('Open postScreen ' + post.text)
    })

    const { view, text, image } = styles
    return (
        <SafeAreaView style={view}>
            <Image source={{ uri: post.img }} style={image} />
            <ScrollView style={{ margin: 10, }}>
                <Text style={text}>{post.text.repeat(100)}</Text>
            </ScrollView>
            <View>
                <Button title='DELETE' onPress={createTwoButtonAlert} />
            </View>

            {/* <Button title="Push Post ...again" onPress={() => navigation.push('postScreen')} /> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        fontFamily: THEME.FONT.Open_REG,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 300,
    }
})