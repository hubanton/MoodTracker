import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Dimensions, StyleSheet, Text, View} from "react-native";
import {RadioButton, TextInput} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoodScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    const height = Dimensions.get("window").height

    const styles = StyleSheet.create({
        header_field: {
            backgroundColor: "green",
            padding: 20
        },
        header: {
            color: "white",
            fontSize: 30,
        },
        mood_field: {
            padding: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center"
        },
    });

    const [checked, setChecked] = React.useState('1');
    const [text, setText] = React.useState("");

    const mood_list = [];
    for (let i = 1; i < 6; i++) {
        mood_list.push(i.toString());
    }

    const radioGroup = mood_list.map((item) => (

        <View style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <RadioButton
                value={item}
                color={"green"}
                status={checked === item ? 'checked' : 'unchecked'}
                onPress={() => setChecked(item)}
            />
            <Text>{item}</Text>
        </View>
    ))

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            console.log(jsonValue)
            await AsyncStorage.clear();
            await AsyncStorage.setItem(new Date().toLocaleDateString(), jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header_field}>
                    <Text style={styles.header}>Today's Mood</Text>
                </View>
                <View style={styles.mood_field}>
                    <Text style={{fontSize: 30}}>😞</Text>
                    {radioGroup}
                    <Text style={{fontSize: 30}}>😊</Text>
                </View>
                <View style={{padding: 30}}>
                    <TextInput onChangeText={text => setText(text)}
                               multiline={true}
                               label={"Additional Info"}>
                    </TextInput>
                </View>
                <View style={{padding: 30}}>
                    <Button onPress={() => storeData({text, checked})} color={"green"} title={"Save"}></Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MoodScreen