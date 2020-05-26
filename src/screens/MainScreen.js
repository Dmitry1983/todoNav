import React from 'react'
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { THEME } from '../theme'
import Icon from 'react-native-vector-icons/Ionicons';

export const MainScreen = ({ navigation }) => {
    const { view, flatList } = styles

    React.useEffect(() => {
        //navigation.setOptions({ title: 'Updated!' })
        console.log('Open mainScreen ')
    })

    const openPostHandler = (post) => {
        navigation.navigate('postScreen', { post: post })
    }



    return (
        <SafeAreaView style={view}>
            <FlatList
                style={flatList}
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLOR.BLACK
    },
    flatList: {
        width: '100%'
    }
})