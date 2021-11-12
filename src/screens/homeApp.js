import "react-native-gesture-handler";
import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkoutScreen from "./workout/WorkoutScreen";
import AccountScreen from "./account/AccountScreen";
import SettingsScreen from "./account/SettingsScreen";
import EditProfileScreen from "./account/EditProfileScreen";
import EditDay1 from "./workout/editDay1";
import ProgressScreen from "./progress/ProgressScreen";
import ExerciseHomeScreen from "./exercise/ExerciseHomeScreen";
import ExerciseDetailsScreen from "../screens/exercise/ExerciseDetailsScreen";
import CreateWorkout from './workout/createWorkout';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Workout"
      screenOptions={{
        headerStyle: { backgroundColor: "#004d99" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{ title: "Workout" }}
      />
      <Stack.Screen
        name="Details"
        component={EditDay1}
        options={{ title: "MyPlan" }}
      />
          <Stack.Screen
          name="Create"
          component={CreateWorkout}
          options={{ title: 'Create Workout' }} />
    </Stack.Navigator>
  );
}

function ExerciseStack() {
  return (
    <Stack.Navigator
      initialRouteName="Exercise"
      screenOptions={{
        headerStyle: { backgroundColor: "#004d99" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Exercise"
        component={ExerciseHomeScreen}
        options={{ title: "Exercise Page" }}
      />
      <Stack.Screen
        name="ExerciseDetailsScreen"
        component={ExerciseDetailsScreen}
        options={{ title: "ExerciseDetailsScreen" }}
      />
    </Stack.Navigator>
  );
}

function ProgressStack() {
  return (
    <Stack.Navigator
      initialRouteName="Progress"
      screenOptions={{
        headerStyle: { backgroundColor: "#004d99" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ title: "Progress Page" }}
      />
    </Stack.Navigator>
  );
}
function AccountStack() {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerStyle: { backgroundColor: "#004d99" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Settings Page" }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ title: "Edit Profile Page" }}
      />
    </Stack.Navigator>
  );
}

function homeApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Workout"
        tabBarOptions={{
          activeTintColor: "#004d99",
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "Workout",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ExerciseStack"
          component={ExerciseStack}
          options={{
            tabBarLabel: "Exercise",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="weight-lifter"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressStack}
          options={{
            tabBarLabel: "Progress",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
homeApp.navigationOptions = ({ navigation }) => ({
  // title: 'Login',
  headerShown: false,
  
});

export default homeApp;
