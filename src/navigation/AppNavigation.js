import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme'
import { UnicButton } from '../components/UnicButton'

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
                        <UnicButton
                            onPress={() => alert('This is a button!')}
                            title="Right"
                            color="black"
                        />
                    ),
                    headerLeft: () => (
                        <UnicButton
                            onPress={() => alert('This is a button!')}
                            title="Left"
                            color="white"
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
                        <UnicButton
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="white"
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