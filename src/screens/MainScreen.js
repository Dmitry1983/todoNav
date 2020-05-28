import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
//import { DATA } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { Post } from '../components/Post'
import { THEME } from '../theme'
import { loadPosts } from '../store/actions/postactions'

export const MainScreen = ({ navigation }) => {
    const { view, flatList } = styles

    const dispatch = useDispatch()

    useEffect(() => {
        //navigation.setOptions({ title: 'Updated!' })
        console.log('Open mainScreen ')
        dispatch(loadPosts())
    },[dispatch])

    const openPostHandler = (post) => {
        navigation.navigate('postScreen', { post: post })
    }

    const allPosts = useSelector(state=>state.post.allPosts)


    return (
        <SafeAreaView style={view}>
            <FlatList
                style={flatList}
                data={allPosts}
                //keyExtractor={post => post.id.toString()}
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