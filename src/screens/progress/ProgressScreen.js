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
    // console.log(user.email);
    getuser(user.email);
    getdays(user.email);
    console.log(workout, "ah ryu lala");
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

  function getuser(user) {
    firestore().collection('Users').doc(user).get().then((querySnapshot) => {
      // console.log(querySnapshot.data());
      setUserProfile(querySnapshot.data());
      setExist(true);
    })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    // console.log();
  }

  function getdays(user) {
    firestore().collection('UserWorkout').where('userEmail', '==', user).get().then((querySnapshot2) => {
      querySnapshot2.forEach((doc) => {
        for (const key in doc.data()) {
          if (doc.data()[key] === Boolean(true)) {
            // workoutName.push({
            //   Day: key
            // });
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
            // console.log(data.name);
            count++;
          }
        });
        workoutcount.push({
          day: doc.data().day,
          workout: count,
        });
      });
      setWorkout(workoutcount);
    })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  const Item = ({ item }) => (
    // <View style={styles.cardContent}>
    <Text style={styles.name}>{item.day} -------- {item.workout} Exercise/day</Text>
    // </View>
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
        <Text style={styles.start_text}>Here's your weekly workout status</Text>
        <FlatList renderItem={renderItem} keyExtractor={(item) => item} />workout
      </View>

    );
  } else {
    return (
      <></>
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
    marginLeft: 20,
    marginTop: 10
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

    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "white",
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#3399ff",
    fontWeight: 'bold'
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
