// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  SafeAreaView
} from 'react-native';
import EditDay1 from './editDay1.js';
import CreateWorkout from './createWorkout.js';
import firestore from '@react-native-firebase/firestore'; import { Appbar, TextInput } from 'react-native-paper';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export default function WorkoutScreen({ navigation }) {
  deleteItem = (count) => {

    this.setState({
     data: this.state.data.filter(item => item.count !== count)
    }) 
 }
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [workout = [], setWorkout] = useState();
  const workoutName = [];
  const isFocused = useIsFocused();
  const [userExist, setUserExist] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    getdata(user.email);
    if (initializing) setInitializing(false);
  }

  getdata = (user) => {
    firestore().collection('UserWorkout').where('userEmail', '==', user).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        for (const key in doc.data()) {
          if (doc.data()[key] === Boolean(true)) {
            if (key == "Monday") {
              count = 1;
            }
            else if (key == "Tuesday") {
              count = 2;
            }
            else if (key == "Wednesday") {
              count = 3;
            }
            else if (key == "Thursday") {
              count = 4;
            }
            else if (key == "Friday") {
              count = 5;
            }
            else if (key == "Saturday") {
              count = 6;
            }
            else if (key == "Sunday") {
              count = 7;
            }
            workoutName.push({
              count: count,
              Day: key
            });
          }
        }
        setUserExist(true);
        setWorkout(workoutName.sort((a, b) => {
          return a.count - b.count;
        }));
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [isFocused]);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }
  
  const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Details", { data: item.Day })} >
      {/* <Image source={require('../../../assets/Workouts/1.jpeg')} style={styles.image} /> */}
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.Day}</Text>
      
      </View>
     
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    return (
      <Item item={item} onPress={() => { }} />
    );
  };
 
  if (userExist) {
    return (
      <View style={styles.container}>
        
        <FlatList data={workout} renderItem={renderItem} keyExtractor={(item) => item} />
        {/* Work Name Create */}
        <View styles={styles.footer}>
          <TouchableOpacity style={styles.start_shape} onPress={() => navigation.navigate("Create", { userExist: true, })}>
            <Text style={styles.start_text}>Update Routine</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }
  else {
    return (
      <View styles={styles.footer}>
       <Text h1 style={styles.title}>Please create a plan...</Text>
        {/* Work Name Create */}
    
          <TouchableOpacity style={styles.start_shape} onPress={() => navigation.navigate("Create", { userExist: false, })}>
            <Text style={styles.start_text}>Create Routine</Text>
          </TouchableOpacity>
      </View>

    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  },
  create:{
    marginVertical:290,
    justifyContent:"center",
     alignContent: 'center'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },
  title: {
    textAlign: "center",
    padding:20,
    fontSize:20,
    fontWeight:"bold",
    color:"#5F5F64"
  },
  card: {
    width:"90%",
    height:50,
    shadowColor: '#00000021',
    justifyContent:"flex-start",
    alignContent:"center",
    shadowOffset: {
      width: 0,
      height: 6,
     
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical:10,
marginHorizontal:20,
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },

  name: {
    flexDirection:"column",
    
    fontSize: 18,
    color: "#3399ff",
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 90,
    padding: 10,
    marginLeft:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
  start_shape: {
    bottom:10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: '40%',
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  start_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: 'center',
  },
  footer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
  },
});
