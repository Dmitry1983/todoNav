import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabMainScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'MainScreen':
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                            break
                        case 'BookedScreen':
                            iconName = focused ? 'ios-list-box' : 'ios-list'
                            break
                    }
                    return <Icon name={iconName} size={25} color={color} />
                },
            })
            }
            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'gray',
                // activeBackgroundColor: 'black',
                // inactiveBackgroundColor: '#222222',
                style: {
                    backgroundColor: 'black',
                    paddingHorizontal: 20,

                },
                labelStyle: {
                    fontSize: 16,

                },
                tabStyle: {

                }
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: 'Main screen'
                }}
            />
            <Tab.Screen
                name="BookedScreen"
                component={BookedScreen}
                options={{
                    title: 'Booked screen'
                }}
            />
        </Tab.Navigator>
    )
}

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
                //component={MainScreen}
                component={TabMainScreen}
                options={{
                    title: 'Main Screen',
                    //headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' },
                    headerRight: () => (
                        <AppHeaderIcon
                            onPress={() => alert('Add press button!')}
                            iconName="ios-camera"
                            color="white"
                            size={45}
                        />

                    ),
                    headerLeft: () => (
                        <AppHeaderIcon
                            onPress={() => alert('Menu press button!')}
                            iconName="ios-menu"
                            color="white"
                            size={45}
                        />

                    ),
                }}
            />
            <Stack.Screen
                name="postScreen"
                component={PostScreen}
                options={{
                    title: 'Post Screen',
                    headerTintColor: 'white',
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