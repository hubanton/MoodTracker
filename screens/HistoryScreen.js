import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";


const HistoryScreen = () => {

    const [entries, setEntries] = useState([])

    const navigation = useNavigation();

    const getData = async () => {
        let values = []
        try {
            const keys = await AsyncStorage.getAllKeys()
            values = await AsyncStorage.multiGet(keys)
        } catch (e) {
            console.log(e)
        }
        return values
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            const result = []
            for (let i = 0; i < data.length; i++) {
                const {text, checked} = JSON.parse(data[i][1]);
                result.push({key: data[i][0], text: text, checked: checked})
            }
            setEntries(result)
        }
        fetchData()
            .catch(console.error);
    }, [])

    const padding = 12;

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
            padding: padding,
        },
        header_field: {
            backgroundColor: "green",
            padding: 20
        },
        header: {
            color: "white",
            fontSize: 30,
        },
    });


    const views = entries.map((item, index) =>
        <View key={index} style={styles.list_item}>
            <View style={styles.top_row}>
                <Text style={{fontSize: 30}}>{item.key}</Text>
                <Text style={{fontSize: 30}}>{item.checked}/5 {parseInt(item.checked) < 3 ? '😞' : '😊'}
                </Text>
            </View>
            {item.text !== "" ? <View style={{padding: padding}}>
                <Text style={{fontSize: 20}}>
                    {item.text}
                </Text>
            </View> : <View></View>}
        </View>
    );

    return (
        <SafeAreaView>
            <View style={styles.header_field}>
                <Text style={styles.header}>Entry History</Text>
            </View>
            <ScrollView>
                {views}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HistoryScreen