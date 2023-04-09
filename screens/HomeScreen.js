import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonGroup} from "@rneui/base";

const sevenDayTrend = require("../assets/trend.png");

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    stretch: {
        width: 350,
        height: 300,
        resizeMode: "stretch",
        marginLeft: "auto",
        marginRight: "auto",
    },
    container: {
        paddingBottom: 30,
        paddingTop: 30,
        display: "flex",
        height: height,
        flexDirection: "column",
    },
    header_field: {
        backgroundColor: "green",
        padding: 20
    },
    header: {
        color: "white",
        fontSize: 30,
    },
    conclusion: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    normal_text: {
        color: "black",
        fontSize: 20,
    }
});

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header_field}>
                    <Text style={styles.header}>Hello Joe</Text>
                </View>
                <View style={{padding: 30}}>
                    <View style={{width: "auto", display: "flex", alignItems: "center", marginBottom: 30}}>
                        <ButtonGroup
                            onPress={(value) => {
                                setSelectedIndex(value);
                            }}
                            selectedIndex={selectedIndex}
                            buttons={['Day', 'Week', 'Month']}
                            containerStyle={{
                                height: 30,
                                width: 300,
                                borderRadius: 12,
                            }}
                            buttonStyle={{backgroundColor: "white"}}
                            selectedButtonStyle={{backgroundColor: "green"}}
                        />
                    </View>
                    <Image style={styles.stretch} source={sevenDayTrend}>
                    </Image>
                </View>

                <View style={{padding: 30}}>
                    <Text style={styles.conclusion}>Conclusion: </Text>
                    <Text style={styles.normal_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mi bibendum, tempus lacus ac,
                        suscipit nisl. Curabitur eu velit vitae quam porttitor faucibus et sit amet sapien.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen