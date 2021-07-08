import * as React from "react";
import {Button, Text, View} from "react-native";

function GameScreen({navigation}) {
    const{navigate,push,goBack,popToTop} =navigation;
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Details Screen</Text>
            <Button title="Go to Home"onPress={() =>navigate("Home")}/>
        </View>
    );
}

export default GameScreen;