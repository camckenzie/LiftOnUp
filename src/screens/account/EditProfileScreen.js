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
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SettingsScreen from "./SettingsScreen";

export default function EditProfileScreen({ navigation }) {
  // const [user, setUser] = React.useState("XYZ");
  // const [email, setEmail] = React.useState("XYZ@gmail.com");
  // const [birthday, setBirthday] = React.useState("19XX-XX-XX");
  // const [height, setHeight] = React.useState("180 cm");
  // const [weight, setWeight] = React.useState("80 kg");

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Dob, setDob] = useState();
  const [Height, setHeight] = useState();
  const [Weight, setWeight] = useState();
  const [username, setUserName] = useState();


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

  function updateData(user) {
    // console.log(user);
    firestore().collection('Users').doc(user).update({
      birthday: Dob,
      email: Email,
      height: Height,
      weight: Weight,
      username: username,

    });
    navigation.navigate("SettingsScreen");
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
    <>
      {/* The view that handle the Profile Picture and its changing link. */}
      <View style={styles.main}>
        <View style={styles.pic_link}>
          {/* <Image
            style={styles.pic}
            source={require("../assets/images/profile.png")}
          ></Image> */}
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.rigt_info}>Change Profile Picture</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Each of the following views for presnting the account info  */}
      <View style={styles.main}>
        <Text style={styles.left_info}>Username:</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUserName} />
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Email: </Text>
        <TextInput
          style={styles.input}
          value={Email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Birthday: </Text>
        <TextInput
          style={styles.input}
          value={Dob}
          onChangeText={setDob}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Height: </Text>
        <TextInput style={styles.input}
          value={Height}
          onChangeText={setHeight} />
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Weight: </Text>
        <TextInput style={styles.input}
          value={Weight}
          onChangeText={setWeight}
        />
      </View>

      {/* divider */}
      <View style={{ backgroundColor: "#e5e5e5", height: 10 }}></View>

      {/* This view to handle the save button */}
      <View style={styles.button}>
        <TouchableOpacity onPress={() => updateData(user.email)}>
          <Text style={styles.button_txt}>Save</Text>
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
  },
  // Tha style for the profile picture
  pic: {
    width: 80,
    height: 80,
    borderRadius: 200,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 30,
  },
  // The style for account info and the settings button
  input: {
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
  },
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
    marginTop: 50,
    marginLeft: 90,
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
