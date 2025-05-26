import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import address from "./address";
import Bottom from "./Bottom";
import favourite from "./favourite";
import Logo from "./Logo";
import Notification from "./Notification";
import product from "./product";
import RegisteLogrScreen from "./RegisterScreen";
import Screen from "./Screen";
import search from "./search";
import Signin from './Signin';
import Succeccfully from "./Succeccfully";
import Thank from "./Thank";
import Verification from "./Verification";
const Loginscreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Logo" component={Logo}/>
          <Stack.Screen name="Screen" component={Screen}/>
          <Stack.Screen name="Singin" component={Signin}/>
          <Stack.Screen name="Succeccfully" component={Succeccfully}/>
          <Stack.Screen name="RegisteLogrScreen" component={RegisteLogrScreen}/>
          <Stack.Screen name="Verification" component={Verification}/>
          <Stack.Screen name="product" component={product}/>
          <Stack.Screen name="address" component={address}/>
          <Stack.Screen name="Thank" component={Thank}/>
          <Stack.Screen name="favorite" component={favourite}/>
          <Stack.Screen name="Bottom" component={Bottom}/>
          <Stack.Screen name="Notification" component={Notification}/>
          <Stack.Screen name="search" component={search}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  
});