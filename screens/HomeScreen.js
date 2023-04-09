import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const sevenDayTrend = require("../assets/trend.png");

const styles = StyleSheet.create({
    stretch: {
        width: 350,
        height: 300,
        resizeMode: "stretch",
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-col">
                <View className="bg-green-500 px-4 py-5">
                    <Text className="text-white text-4xl">Hello Joe</Text>
                </View>

                <View className="flex-row px-4 justify-between h-auto py-5">
                    <Text className="text-2xl">Current Mood: 😊</Text>
                    <Button
                        title="Set Mood"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

                <View className="py-5 px-4 h-auto">
                    <Text className="text-2xl">7-Day Trend: </Text>
                    <Image style={styles.stretch} source={sevenDayTrend}>
                    </Image>
                </View>

                <View className="py-5 px-4 h-auto">
                    <Text className="text-2xl">Quote of the day: </Text>
                    <Text>"Es ist Nachts kälter als draußen" -Confuzius</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen