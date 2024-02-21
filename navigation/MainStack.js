import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"
import Lista from "../screens/Lista";
import Openai from "../screens/Openai";
import Pdf from "../screens/Pdf";
const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="Openai" component={Openai}/>
        <Stack.Screen name="Pdf" component={Pdf}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
