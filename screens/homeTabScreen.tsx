import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import UploadScreen from "./UploadScreen";

const Tab = createBottomTabNavigator();
export default function HomeTabScreen() {
  return <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Upload" component={UploadScreen}/>
  </Tab.Navigator>
}
