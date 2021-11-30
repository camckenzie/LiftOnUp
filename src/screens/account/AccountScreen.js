import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  onPress,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import SettingsScreen from "./SettingsScreen";
import { useIsFocused } from '@react-navigation/native'

export default function AccountScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Dob, setDob] = useState();
  const [Height, setHeight] = useState();
  const [Weight, setWeight] = useState();
  const [username, setUserName] = useState();
  const isFocused = useIsFocused();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   // console.log(user.email);
  //   getData(user.email);
  //   if (initializing) setInitializing(false);
  // }
  function onAuthStateChanged(user) {
    setUser(user);
    getData(user.email);
    if (initializing) setInitializing(false);
  }

  function getData(user) {
    console.log(user);
    firestore().collection('Users').where('email', '==', user).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        setEmail(doc.data().email);
        setDob(doc.data().birthday);
        setHeight(doc.data().height);
        setWeight(doc.data().weight);
        setUserName(doc.data().username);
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }
  return (
    <>
      {/* The view that handle the Profile Picture and its changing link. */}
      <View style={styles.pic_link}>
        <Text>Welcome {user.email}</Text>

        <Image
          style={styles.pic}
          source={require("../../../assets/images/profile.png")}
        ></Image>
        
      </View>
      {/* Each of the following views for presnting the account info  */}
      <View style={styles.main}>
        <Text style={styles.left_info}>Username:</Text>
        <Text style={styles.rigt_info}>{username}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Email: </Text>
        <Text style={styles.rigt_info}>{Email}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Birthday: </Text>
        <Text style={styles.rigt_info}>{Dob} </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Height: </Text>
        <Text style={styles.rigt_info}> {Height} cms</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Weight: </Text>
        <Text style={styles.rigt_info}>{Weight} kgs </Text>
      </View>

      {/* divider */}
      <View style={{ backgroundColor: "#e5e5e5", height: 10 }}></View>

      {/* This view to handle the setting and logout buttons */}
      <View style={styles.main1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.button_txt}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_txt}
            onPress={() => { auth().signOut() }}
          >Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
// The styles section
const styles = StyleSheet.create({
  // Tha style for the changing profile link
  pic_link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Tha style for the profile picture
  pic: {
    width: 80,
    height: 80,
    borderRadius: 200,
    marginTop: 20,
    marginBottom: 10,
  },
  // The style for account info and the settings/logout button
  main: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
  },
  main1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  rigt_info: {
    color: "#3399ff",
    fontWeight: "bold",
    fontSize: 15,
  },
  left_info: {
    marginRight: "auto",
    fontWeight: "700",
    color: "black",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: "45%",
    height: 43,
    justifyContent: "center",
    // THIS CENTERS THE BUTTON
    alignSelf: "center",
    marginTop: 20,
  },
  button_txt: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: "center",
  },
});