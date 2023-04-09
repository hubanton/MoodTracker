import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import TabNav from './components/TabNav';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <TabNav></TabNav>
        </NavigationContainer>
    );
}