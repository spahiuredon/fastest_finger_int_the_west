import * as React from "react";
import {Button, Text, View} from "react-native";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home Screen</Text>
            <Button title="Play"
                    onPress={() => navigation.push('Game')}
            />
        </View>
    );
}

export default HomeScreen;