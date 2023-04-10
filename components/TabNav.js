import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoryScreen from '../screens/HistoryScreen';
import MoodScreen from "../screens/MoodScreen";

const Tab = createBottomTabNavigator();

const Tabs = {
    Home: 'Home',
    History: 'History',
    Mood: 'Mood'
};

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case (Tabs.Home):
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case (Tabs.History):
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            break;
                        case (Tabs.Mood):
                            iconName = focused ? 'ios-happy' : 'ios-happy-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: 'green',
                tabBarInactiveTintColor: 'green',
            })}
        >
            <Tab.Screen name={Tabs.Home} component={HomeScreen}/>
            <Tab.Screen name={Tabs.History} component={HistoryScreen}/>
            <Tab.Screen name={Tabs.Mood} component={MoodScreen}/>
        </Tab.Navigator>
    )
}

export default TabNav