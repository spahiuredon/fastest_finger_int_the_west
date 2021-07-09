import * as React from "react";
import {AsyncStorage, Share, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Button, Icon, NativeBaseProvider} from "native-base";
import {useEffect, useState} from "react";
import RNShake from 'react-native-shake';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: -100
    },

    gametitle: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 27,
        color: "#707070",
        padding: 21,
        paddingTop: 30,
        paddingBottom: 0,
        textAlign: 'center'

    },

    button: {
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#D5884C',
        borderRadius: 50,
    },

    touch: {
        marginTop: 30,
        marginBottom: 0,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        borderColor: '#D5884C',
        flex: 1,
        borderWidth: 4,
        borderStyle: 'solid',

    },

    score: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
        color: "#707070",
        marginLeft: 20,
        marginBottom: 100,
        marginTop: 20,
        textAlign: 'left'
    },

    sharebtn: {
        fontFamily: "RobotoSlab-Regular",
        fontSize: 15,
        color: "#707070",
        padding: 0,
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'center'

    },
});

function GameScreen(type, handler) {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const _storeData = async () => {
        if (count > await AsyncStorage.getItem('SCORE'))
            try {
                await AsyncStorage.setItem(
                    'SCORE',
                    {count}
                );
            } catch (error) {
                // Error saving data
            }
    };

    const [prepCountdown, setPrepCountdown] = React.useState(5);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Hello " + count,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    function shakeHandler() {
        console.log("Phone did shake");
        if (prepCountdown > 0) {
            setTimeout(() => setPrepCountdown(prepCountdown - 1), 1000);
        } else {
            setPrepCountdown('BOOOOM!');
        }
    }

    useEffect(() => {
        console.log("UseEffect:")
        RNShake.addListener(() => {
            console.log("shke")
            shakeHandler()
        });
        return () => RNShake.removeListener(() => {
            console.log("removed listener")
        });
    }, []);

    return (
        <NativeBaseProvider style={styles.screen}>
            <Text style={styles.gametitle}>Shake to start!</Text>
            <Text style={styles.gametitle}>{prepCountdown}</Text>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.touch}
                onPress={onPress}
            >
            </TouchableOpacity>
            <Text style={styles.score}>{count}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onShare()}
            >
                <Text style={styles.sharebtn}>SHARE</Text>
            </TouchableOpacity>
        </NativeBaseProvider>
    );

}

export default GameScreen;