import * as React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme'

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="mainScreen"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                //headerStatusBarHeight: 60,
                headerStyle: {
                    backgroundColor: THEME.COLOR.MAIN_2,
                },
            }}
        >
            <Stack.Screen
                name="mainScreen"
                component={MainScreen}
                options={{
                    title: 'Main Screen',
                    //headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' },
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="R"
                            color="black"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="L"
                            color="black"
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="postScreen"
                component={PostScreen}
                options={{
                    title: 'Post Screen',
                    //headerTintColor: 'white',
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="black"
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}