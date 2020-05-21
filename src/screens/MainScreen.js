import React from 'react'
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'
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
            //renderItem={({ item }) => <Item title={item.text} />}

            />
            {/* <Text style={text}>MainScreen</Text>
            <Button title='Post' onPress={() => navigation.navigate('postScreen')} />
            <Button title="Push Main" onPress={() => navigation.push('mainScreen')} />
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            /> */}
            <Icon name="md-add" size={30} color="#900" />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%'
    }
})