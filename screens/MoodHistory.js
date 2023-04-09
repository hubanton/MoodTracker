import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context';


const MoodHistory = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    const styles = StyleSheet.create({
        list_item: {
            width: "auto",
            height: "auto",
            borderWidth: 1,
            borderColor: "black",
            display: "flex",
            flexDirection: "column",
        },
        top_row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
        },
        top_row_text: {
            fontSize: 30
        },
        bottom_row: {
            padding: 12,
        },
        bottom_row_text: {
            fontSize: 20,
        }
    });


    const dummy_entry_1 = {
        score: 3,
        emoji: '😊',
        description_text: "We had Chicken for Lunch",
        date: new Date().toLocaleDateString("en-US")
    }

    const dummy_entry_2 = {
        score: 10,
        emoji: '😞',
        description_text: "",
        date: new Date("1995-12-17T03:24:00").toLocaleDateString("en-US")
    }

    const mood_list = [];

    for (let i = 0; i < 32; i++) {
        if (i % 2 === 0) {
            mood_list.push(dummy_entry_1)
        } else {
            mood_list.push(dummy_entry_2)
        }
    }

    const views = mood_list.map((item) =>
        <View style={styles.list_item}>
            <View style={styles.top_row}>
                <Text style={styles.top_row_text}>{item.date}</Text>
                <Text style={styles.top_row_text}>{item.score}/10 {item.emoji}</Text>
            </View>
            {item.description_text !== "" ? <View style={styles.bottom_row}>
                <Text style={styles.bottom_row_text}>
                    {item.description_text}
                </Text>
            </View> : <View></View>}
        </View>
    );

    return (
        <SafeAreaView>
            <View>
            </View>
            <ScrollView>
                {views}
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoodHistory