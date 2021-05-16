import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Bottom } from "../conststants/global";
import Me from "./Me";
import Charts from "./Charts";
import Library from "./Library";
import Add from './Add'
import Info from './Info'
import ImageLibrary from "./ImageLibrary";

const Stack = createStackNavigator();

const libraryStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Library"
                component={Library}
                options={{ headerShown: false, tabBarLabel: 'Library' }}
            />
            <Stack.Screen
                name="Add"
                component={Add}
            />
            <Stack.Screen
                name="Info"
                component={Info}
            />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={Bottom}>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Me"
            >
                <Tab.Screen
                    name="Me"
                    component={Me}
                    options={{
                        tabBarLabel: 'Me',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'maxcdn'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Charts"
                    component={Charts}
                    options={{
                        tabBarLabel: 'Charts',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'css3'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Library'
                    component={libraryStack}
                    options={{
                        tabBarLabel: 'Library',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'codepen'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Image'
                    component={ImageLibrary}
                    options={{
                        tabBarLabel: 'Image',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'yelp'}
                                />
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
