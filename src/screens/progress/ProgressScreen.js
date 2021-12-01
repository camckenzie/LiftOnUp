import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from '../../constants';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import CheckBox from "@react-native-community/checkbox";
import { add } from 'react-native-reanimated';
import WorkoutScreen from '../workout/WorkoutScreen';
import { useIsFocused } from '@react-navigation/native'



export default function ProgressScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userProfile, setUserProfile] = useState();
  const [userworkout, setUserworkout] = useState();
  const [exist, setExist] = useState(false);
  const [workout = [], setWorkout] = useState();
  const workoutcount = [];
  const isFocused = useIsFocused();


  function onAuthStateChanged(user) {
    setUser(user);
    getdays(user.email);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [isFocused]);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }

  function getdays(user) {
    firestore().collection('UserWorkout').where('userEmail', '==', user).get().then((querySnapshot2) => {
      querySnapshot2.forEach((doc) => {
        for (const key in doc.data()) {
          if (doc.data()[key] === Boolean(true)) {
            console.log(key);
            getWorkout(user, key);
          }
        }
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  function getWorkout(user, key) {

    firestore().collection('Users').doc(user).collection('Exercises').where('day', '==', key).get().then((querySnapshot3) => {
      querySnapshot3.forEach((doc) => {
        count = 0;
        doc.data().workout.forEach((data) => {
          if (data.value) {
            count++;
          }
        });
        if (doc.id != "") {
          workoutcount.push({
            day: doc.data().day,
            workout: count,
          });
        }

      });
      setWorkout(workoutcount);
      // console.log(workout);
    })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  const Item = ({ item }) => (
    <View style={styles.cardContent}>
     
      <Text style={styles.name}>{item.day}</Text>
      <Text style={styles.line}>--</Text>
      <Text style={styles.numberEx}> {item.workout} Exercise/day</Text>
    </View>
    
  );
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <Item item={item} />
    );
  };

  if (workout != []) {
    return (

      <View>
       <Text h1 style={styles.title}>Here's your weekly workout status</Text>
       <TouchableOpacity style={styles.card}>
        <FlatList data={workout} renderItem={renderItem} keyExtractor={(item) => item} />
        </TouchableOpacity>
      </View>

    );
  } else {
    return (
      <View>
        <Text>No data available yet</Text>
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
  cardContent: {
    marginHorizontal:10,
    marginVertical:20,
    flexDirection:"row"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "white",
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
  },
  line :{
    flexDirection:"column",
    alignSelf: 'flex-start',
    color: "#121212",
    fontWeight: 'bold',
    marginHorizontal:29,

  },
  numberEx: {
    flexDirection:"column",
    fontSize: 15,
    alignSelf: 'center',
    color: "#121212",
    marginHorizontal:19,
    width:120,
  },
  name: {
    flexDirection:"column",
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: "#121212",
    marginHorizontal:20,
    width:45,

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
    width: 100,
    padding: 10,
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

  title: {
    textAlign: "center",
    padding:20,
    fontSize:20,
    fontWeight:"bold",
    color:"#5F5F64"
  },
  start_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: '45%',
    height: 43,
    // marginHorizontal: 5,
    // marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  start_text: {
    fontSize: 15,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: 'center',
  },
});
