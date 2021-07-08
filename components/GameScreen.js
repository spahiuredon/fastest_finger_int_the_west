import * as React from "react";
import {Text, View} from "react-native";

function GameScreen() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Shake to start!</Text>
        </View>
    );
}

export default GameScreen;