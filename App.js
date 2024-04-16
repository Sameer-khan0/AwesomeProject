import React from "react";
import Home from './component/Home';
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./component/minicomponents/Header";
import About from './component/About'
import Contect from "./component/Contect";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: 'Home',
              headerRight: () => <NavBar />,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={({ navigation }) => ({
              headerTitle: 'About',
              headerRight: () => <NavBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Contect"
            component={Contect}
            options={({ navigation }) => ({
              headerTitle: "Contect",
              headerRight: () => <NavBar navigation={navigation} active="Contact" />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
  },
});

export default App;
