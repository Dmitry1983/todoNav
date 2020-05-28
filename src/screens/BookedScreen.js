import React, {useEffect} from 'react'
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
import { DATA } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { Post } from '../components/Post'
import { THEME } from '../theme'
import { loadPosts } from '../store/actions/postactions'

export const BookedScreen = ({ navigation }) => {
    const { view, flatList } = styles

    const openPostHandler = (post) => {
        navigation.navigate('postScreen', { post: post })
    }
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Open BookedScreen ')
        dispatch(loadPosts())
    },[dispatch])

    const bookedPosts = useSelector(state=>state.post.bookedPosts)

    return (
        <SafeAreaView style={view}>
            <FlatList
                style={flatList}
                data={bookedPosts}
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