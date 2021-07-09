import * as React from "react";
import {StyleSheet, Text} from "react-native";
import Cactus_img from "../img/cactus_img";
import * as Font from 'expo-font';
import {useEffect, useState} from "react";
import { Button } from 'native-base';
import {NativeBaseProvider} from "native-base";
import { AsyncStorage } from 'react-native';


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: -100
    },

    gametitle: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 50,
        color: "#707070",
        padding: 21,
        paddingTop: 70,
        textAlign: 'center'

    },

    highscore: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 27,
        color: "#707070",
        paddingTop: 50,
        paddingBottom: 150,
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#D5884C',
        width: '40.6%',
        height: '7.2%',
        alignSelf: 'center'
    },

    buttonstyle: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
        color: '#4B4B4B'
    }
});

async function loadFonts() {
    const [fontsloaded, setFontsloaded] = useState(false)
    await Font.loadAsync({
        // Load a font `RobotoSlab` from a static resource
        RobotoSlab: require('../assets/fonts/RobotoSlab-Regular.ttf'),

        // Any string can be used as the fontFamily name. Here we use an object to provide more control
        'RobotoSlab-Regular': {
            uri: require('../assets/fonts/RobotoSlab-Regular.ttf'),
            display: Font.FontDisplay.FALLBACK,
        },
    });

    setFontsloaded(true);
}

function HomeScreen({navigation}) {
    const [fontsloaded, setFontsloaded] = useState(false);

    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('SCORE');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    useEffect(() => {
        loadFonts();
    }, [])

    async function loadFonts() {

        await Font.loadAsync({
            // Load a font `RobotoSlab` from a static resource
            RobotoSlab: require('../assets/fonts/RobotoSlab-Regular.ttf'),

            // Any string can be used as the fontFamily name. Here we use an object to provide more control
            'RobotoSlab-Regular': {
                uri: require('../assets/fonts/RobotoSlab-Regular.ttf'),
                display: Font.FontDisplay.FALLBACK,
            },
        });

        setFontsloaded(true);
    }


    if (!fontsloaded) {
        return (
            <Text>Fonts not loaded!</Text>
        )
    }

    let highscore;
    highscore = _retrieveData();

    return (
        <NativeBaseProvider style={styles.screen}>
            <Text style={styles.gametitle}>Fastest Finger in the West</Text>
            <Text style={styles.highscore}>Highscore: </Text>
            <Button style={styles.button} onPress={() => navigation.push('Game')}><Text style={styles.buttonstyle}>PLAY</Text></Button>
            <Cactus_img/>
        </NativeBaseProvider>
    );
}

export default HomeScreen;