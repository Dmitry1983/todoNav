import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'


import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'

import Icon from 'react-native-vector-icons/Ionicons'
import { THEME } from '../theme'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { AppHeaderIconDrawer } from '../components/AppHeaderIconDrawer'
import { AppHeaderIconCreater } from '../components/AppHeaderIconCreater'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerScreen() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen
                name="Posts"
                component={TabMainScreen}
            />
            <Drawer.Screen
                name="Add Posts"
                component={CreateScreen}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
            />
        </Drawer.Navigator>
    );
}


function TabMainScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'MainScreen':
                            iconName = focused ? 'ios-albums' : 'ios-albums'

                            break
                        case 'BookedScreen':
                            iconName = focused ? 'ios-heart' : 'ios-heart'

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
                    fontSize: 14,

                },
                tabStyle: {
                    paddingTop: 5

                }
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: 'Posts'
                }}
            />
            <Tab.Screen
                name="BookedScreen"
                component={BookedScreen}
                options={{
                    title: 'Booked'
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
                component={DrawerScreen}
                options={{
                    title: 'Posts',
                    //headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' },
                    headerRight: () => (
                        // <AppHeaderIcon
                        //     onPress={() => { }}
                        //     iconName="ios-camera"
                        //     color="white"
                        //     size={45}
                        // />
                        <AppHeaderIconCreater

                            iconName="ios-camera"
                            color="white"
                            size={45}
                        />

                    ),
                    headerLeft: () => (
                        // <AppHeaderIcon
                        //     onPress={() => { }}
                        //     iconName="ios-menu"
                        //     color="white"
                        //     size={45}
                        // />
                        <AppHeaderIconDrawer

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

            <Stack.Screen
                name="createScreen"
                component={CreateScreen}
                options={{
                    title: 'Create Screen',
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
            {/* <DrawerScreen /> */}
            {/* <TabMainScreen /> */}
        </NavigationContainer>
    )
}