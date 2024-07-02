import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/dashboard/HomeScreen";

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Explore" component={HomeScreen} />
      <Tab.Screen name="Booking" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default DashboardNavigation;