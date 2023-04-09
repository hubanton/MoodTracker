
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case ('Home'):
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                            break;
                        case ('Settings'):
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            break;
                        case ('More'):
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            break;
                        case ('Stuff'):
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
            <Tab.Screen name="More" component={HomeScreen} />
            <Tab.Screen name="Stuff" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default TabNav