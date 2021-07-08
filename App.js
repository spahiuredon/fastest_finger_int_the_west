import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Overview", headerShown: false}}/>
          <Stack.Screen name="Game" component={GameScreen} options={{ title: "This is the Game Screen"}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
