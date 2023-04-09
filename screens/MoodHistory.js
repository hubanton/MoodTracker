import { Button, Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const sevenDayTrend = require("../assets/trend.png");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


const MoodHistory = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export default MoodHistory