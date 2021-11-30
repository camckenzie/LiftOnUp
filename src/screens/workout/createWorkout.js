import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,

} from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CheckBox from "@react-native-community/checkbox";
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const createWorkout = ({ navigation, route }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //const [agree, setAgree] = useState(false);
  const [Monday, setMonday] = useState(false);
  const [Tuesday, setTuesday] = useState(false);
  const [Wednesday, setWednesday] = useState(false);
  const [Thursday, setThursday] = useState(false);
  const [Friday, setFriday] = useState(false);
  const [Saturday, setSaturday] = useState(false);
  const [Sunday, setSunday] = useState(false);
  // const Page = route.params.userExist;
  const [doc, setDoc] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    console.log("dslkjfosdjflksjffdsklfjl")
    if (route.params.userExist == true) {
      console.log("yes");
      getData(user.email);
    }
    else {
      console.log("no")
    }
    if (initializing) setInitializing(false);
  }


  async function addUserWorkout() {
    // const ref = firestore().collection('UserWorkout').doc(email);
    // console.log(Plan);
    await firestore().collection('UserWorkout').add({
      userEmail: user.email,
      Monday: Monday,
      Tuesday: Tuesday,
      Wednesday: Wednesday,
      Thursday: Thursday,
      Friday: Friday,
      Saturday: Saturday,
      Sunday: Sunday,
      Date: new Date(),
    });
    // console.log(Monday);

  } //
  async function updateUserWorkout() {
    // const ref = firestore().collection('UserWorkout').doc(email);
    // console.log(Plan);
    await firestore().collection('UserWorkout').doc(doc).update({
      userEmail: user.email,
      Monday: Monday,
      Tuesday: Tuesday,
      Wednesday: Wednesday,
      Thursday: Thursday,
      Friday: Friday,
      Saturday: Saturday,
      Sunday: Sunday,
      Date: new Date(),
    });
    // console.log(Monday);

  }

  async function getData(user) {
    firestore().collection('UserWorkout').where('userEmail', '==', user).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        setDoc(doc.id);
        setMonday(doc.data().Monday);
        setTuesday(doc.data().Tuesday);
        setWednesday(doc.data().Wednesday);
        setThursday(doc.data().Thursday);
        setFriday(doc.data().Friday);
        setSaturday(doc.data().Saturday);
        setSunday(doc.data().Sunday);
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Please select Days
      </Text>
      <SafeAreaView style={styles.body}>

        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Monday}
            onChange={() => setMonday(!Monday)} />
        ) : (
          <CheckBox value={Monday} onChange={() => setMonday(!Monday)} />
        )}
        <Text style={styles.next_text}>
          Monday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Tuesday}
            onChange={() => setTuesday(!Tuesday)} />
        ) : (
          <CheckBox value={Tuesday} onChange={() => setTuesday(!Tuesday)} />
        )}
        <Text style={styles.next_text}>
          Tuesday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Wednesday}
            onChange={() => setWednesday(!Wednesday)} />
        ) : (
          <CheckBox value={Wednesday} onChange={() => setWednesday(!Wednesday)} />
        )}
        <Text style={styles.next_text}>
          Wednesday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Thursday}
            onChange={() => setThursday(!Thursday)} />
        ) : (
          <CheckBox value={Thursday} onChange={() => setThursday(!Thursday)} />
        )}
        <Text style={styles.next_text}>
          Thursday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Friday}
            onChange={() => setFriday(!Friday)} />
        ) : (
          <CheckBox value={Friday} onChange={() => setFriday(!Friday)} />
        )}
        <Text style={styles.next_text}>
          Friday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Saturday}
            onChange={() => setSaturday(!Saturday)} />
        ) : (
          <CheckBox value={Saturday} onChange={() => setSaturday(!Saturday)} />
        )}
        <Text style={styles.next_text}>
          Saturday
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        {Platform.OS === 'ios' ? (
          <CheckBox
            boxType="square"
            value={Sunday}
            onChange={() => setSunday(!Sunday)} />
        ) : (
          <CheckBox value={Sunday} onChange={() => setSunday(!Sunday)} />
        )}
        <Text style={styles.next_text}>
          Sunday
        </Text>
      </SafeAreaView>
      <TouchableOpacity style={styles.start_shape} >
      <Button 
        title="Create Plan"
        color="rgba(255,255,255,1)"
        textAlign='center'
        onPress={() => {
          if (route.params.userExist == true) {
            if (!Tuesday &&
              !Wednesday &&
              !Thursday &&
              !Friday &&
              !Saturday &&
              !Sunday &&
              !Monday) {
              Alert.alert('Please select at least one exercise');
            } else {
              updateUserWorkout();
              navigation.navigate('Workout');
              // navigation.goBack();
            }
          } else {
            if (!Tuesday &&
              !Wednesday &&
              !Thursday &&
              !Friday &&
              !Saturday &&
              !Sunday &&
              !Monday) {
              Alert.alert('Please select at least one exercise');
            } else {
              addUserWorkout();
              navigation.navigate('Workout');
              // navigation.goBack();
            }
          }

        }} /> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    textAlign: "center",
    padding:20,
    fontSize:20,
    fontWeight:"bold",
    color:"#5F5F64"
  },
 //For days contanier  
  body: {
   marginHorizontal:30,
   marginVertical:5,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

//checkbox
  next_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: '40%',
    height: 40,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  //Days
  next_text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    padding:15,
    //alignContent: 'center',
  },
  start_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: '41%',
    height: 45,
    marginHorizontal: 5,
    marginVertical: 55,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },

});

export default createWorkout;