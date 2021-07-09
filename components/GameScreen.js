import * as React from "react";
import {Share, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Button, NativeBaseProvider} from "native-base";
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
        backgroundColor: '#D5884C',
        width: '40.6%',
        height: '7.2%',
        alignSelf: 'center'
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
    }
});

function GameScreen() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const [prepCountdown, setPrepCountdown] = React.useState(5);

    useEffect(() => {
        if (prepCountdown > 0) {
            setTimeout(() => setPrepCountdown(prepCountdown - 1), 1000);
        } else {
            componentDidMount();
        }
    });


    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Hello "+count,
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

    function componentDidMount() {
        RNShake.addListener(() => {
        });
    };

    function componentWillUnmount() {
        RNShake.removeListener();
    };

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
            <Button onPress={()=>onShare()} title="Share" />
        </NativeBaseProvider>
    );
}

export default GameScreen;