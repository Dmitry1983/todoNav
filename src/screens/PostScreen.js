import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native'
import { THEME } from '../theme'
import { UnicButton } from '../components/UnicButton';
import { AppHeaderIcon } from '../components/AppHeaderIcon'

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
    const postDate = new Date(post.date).toLocaleDateString()
    const booked = post.booked ? "ios-heart" : "ios-heart-empty"

    React.useEffect(() => {
        //navigation.setOptions({ title: post.text })

        navigation.setOptions({
            title: 'Post from ' + postDate,
            headerRight: () => (
                <AppHeaderIcon
                    onPress={() => alert('Star press button!')}
                    iconName={booked}
                    color="white"
                    size={30}
                />
            ),
        })
        console.log('Open postScreen :' + post.id)
    }, [])

    const { view, text, image, buttonView, textWrap, textTitle } = styles
    return (
        <SafeAreaView style={view}>
            {/* <Image source={{ uri: post.img }} style={image} /> */}
            <ImageBackground
                source={{ uri: post.img }} style={image}
            >
                <View style={textWrap}>
                    <Text style={textTitle}>{postDate}</Text>
                    <Text style={textTitle}>{post.booked ? 1 : 0}</Text>
                </View>

            </ImageBackground>

            <ScrollView style={{ margin: 10, }}>
                <Text style={text}>{post.text.repeat(100)}</Text>
            </ScrollView>

            <View style={buttonView}>
                <UnicButton title='DELETE' onPress={createTwoButtonAlert} color={THEME.COLOR.BLUE_IOS_BUTTON} />
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
        flexDirection: 'column-reverse',
    },
    buttonView: {
        paddingBottom: 10,
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
    },
    textTitle: {
        color: 'white',
        fontFamily: THEME.FONT.Open_REG,
        paddingHorizontal: 15,
        fontSize: 18,
    },
})