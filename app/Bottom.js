import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text } from "react-native";
import cart from "./cart";
import Favourite from "./favourite";
import Goods from "./Goods";
import profile from "./Profile";
const Bottom = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Goods"
        component={Goods}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? "red" : "black", fontSize: focused ? 12 : 10,}}>
                Home</Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image source={{ uri: focused
                    ? "https://img.icons8.com/?size=100&id=2797&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=73&format=png&color=000000",
                }}
                style={{ height: focused ? 25 : 20, width: focused ? 25 : 20,  tintColor: focused ? "red" : "black"}}/>
            );
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={cart}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? "red" : "black", fontSize: focused ? 12 : 10, }}>Carts</Text>
            );
          },
          tabBarIcon: ({ focused, size, color }) => {
            return (
             <Image source={{ uri: focused
                    ? "https://img.icons8.com/?size=100&id=85080&format=png&color=FA5252"
                    : "https://img.icons8.com/?size=100&id=85080&format=png&color=1A1A1A",
                }}
                style={{ height: focused ? 25 : 20, width: focused ? 25 : 20, tintColor: focused ? "red" : "black"}}/>
            );
          },
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? "red" : "black", fontSize: focused ? 12 : 10, }}>Favourite</Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image source={{ uri: focused
                    ? "https://img.icons8.com/?size=100&id=59805&format=png&color=FA5252"
                    : "https://img.icons8.com/?size=100&id=59805&format=png&color=1A1A1A",
                }}
                style={{ height: focused ? 25 : 20, width: focused ? 25 : 20, tintColor: focused ? "red" : "black"}}/>
            );
          },
        }}
      />

         <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? "red" : "black", fontSize: focused ? 12 : 10, }} >profile </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image source={{ uri: focused
                    ? "https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=FA5252"
                    : "https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=1A1A1A",
                }}
                style={{ height: focused ? 25 : 20, width: focused ? 25 : 20, tintColor: focused ? "red" : "black" }}/>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});