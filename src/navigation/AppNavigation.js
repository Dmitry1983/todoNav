import * as React from 'react'
import { Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen';

const forFade = ({ current, closing }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="mainScreen"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name="mainScreen"
                component={MainScreen}
                options={{
                    title: 'Main Screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' },


                }}
            />
            <Stack.Screen
                name="postScreen"
                component={PostScreen}
                options={{
                    //title: 'Post Screen',
                    headerTintColor: 'white',
                    // headerStyle: { backgroundColor: 'grey' },
                    // cardStyleInterpolator: forFade,

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