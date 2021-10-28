import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, onPress,FlatList, Image,StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPlan from './myPlan.js'
import { ListItem, Avatar } from 'react-native-elements'
import HomeBottomTabs from '../components/homeBottomTabs';

const Workout = [
    {
      id: 1,
      name: "Day 1",
      excercise: "    Training",
      state: "    Not Started",
    },
    {
      id: 2,
      name: "Day 2",
      excercise: "    Cardio",
      state: "    Not Started",
    },
    {
      id: 3,
      name: "Day 3",
      excercise: "    Training",
      state: "    Not Started",
    },
    {
      id: 4,
      name: "Day 4",
      excercise: "    Cardio",
      state: "    Not Started",
    },
    {
      id: 5,
      name: "Day 5",
      excercise: "    Training",
      state: "    Not Started",
    },
    {
      id: 6,
      name: "Day 6",
      excercise: "    Cardio",
      state: "    Not Started",
    },
    {
      id: 7,
      name: "Day 7",
      excercise: "    Training",
      state: "    Not Started",
    },
  ];
  function Item({name,excercise,state,navigation}){
  	const gotoTestStackScreen = () => {
      navigation.navigate('MyPlan');
    };
    return(
      <TouchableOpacity 
      style={styles.listItem}>
        <Text styles={styles.listName}>{name}</Text>
        <Text styles={styles.listExcercise}>{excercise}</Text>
        <Text styles={styles.listState}>{state}</Text>
      </TouchableOpacity>
      // <View>
      //    < Button title="Add me"    onPress={(gotoTestStackScreen)} />
                
      // </View>
    );
  }
  function WorkoutScreen() {
    return (
      <View style={{ flex: 1 }}>
        <View>
        {/* <Text style={styles.headerText}>Current</Text> */}
        {/* <Button title="Add me"    onPress={() =>navigation.navigate('MyPlan')} /> */}
        <FlatList 
        data={Workout} 
        renderItem={({item}) => (
            <Item name={item.name} excercise={item.excercise} state={item.state} 
            />
        )} 
      />
    </View>
      </View>
    );
  }
  
function ProfileScreen() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        {/* <Text>Welcome {user.email}</Text> */}
      </View>
    );
  }
  
  function DiscoverScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  function ExercisesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Exercises!</Text>
      </View>
    );
  }
  function ProgressScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Progress!</Text>
      </View>
    );
  }
  const styles = StyleSheet.create(
    {
      headerText:{ textAlign:"center", fontWeight:"bold"},
      listItem: {
        backgroundColor:"#ddd",
        flexDirection:"row",
        marginVertical: 10,
        padding: 10,
      },
      listName: {
        flex: 0.5,
        alignItems:"center",
        textAlign: "center",
        fontSize:33,
      },
      listExcercise: {
        flex: 0.5,
        alignItems:"center",
        textAlign: "center",
      },
      listState: {
        flex: 0.5,
        alignItems:"flex-end",
      },
    }
  )
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator>
               <Tab.Screen name="Workout" component={WorkoutScreen} 
       options={{
        tabBarLabel: 'Workout',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}  />
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}  />
        <Tab.Screen name="Discover" component={DiscoverScreen} 
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Icon name="compass"    type='font-awesome' color={color} size={size} />
          ),
        }} />
 
        <Tab.Screen name="Exercises" component={ExercisesScreen} 
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color, size }) => (
            <Icon name="fa-dumbbell"  type='font-awesome'  color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Progress" component={ProgressScreen} 
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} />
  
      </Tab.Navigator>
    );
  }
  
  
  export default function Home({ navigation }) {
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
  }, []);
  
  if (initializing) return null;
  
  if (!user) {
      return navigation.navigate('Login');
  }
  const navigationOptions = {
    title: 'Intro',
    headerShown: false,
  };
  
  return (
   
    <NavigationContainer>
       <View>
    <Button title="Add me"    onPress={() =>navigation.navigate('MyPlan')} />
    
   </View>  
    <MyTabs />
    </NavigationContainer>
  );
      // return (
    
      //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Welcome {user.email}</Text>
      // </View>
      // );
  }
  
  
  MyTabs.navigationOptions = ({ navigation }) => ({
      title: Tab.Screen,
      headerRight: () => <Button
              buttonStyle={{ padding: 0, marginRight: 20, backgroundColor: 'transparent' }}
              icon={
                  <Icon
                      name="cancel"
                      size={28}
                      color="white"
                  />
              }
              onPress={() => {auth().signOut()}} />,
  });
  