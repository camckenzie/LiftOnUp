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
import { useIsFocused } from '@react-navigation/native'
export default function SettingsScreen({ navigation }) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Dob, setDob] = useState();
  const [Height, setHeight] = useState();
  const [Weight, setWeight] = useState();
  const [username, setUserName] = useState();
  const isFocused = useIsFocused();

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
      {/* Profile picture and the username */}
      <View style={styles.pic_link}>
        <Image
          style={styles.pic}
          source={require("../../../assets/images/profile.png")}
        ></Image>
        <Text style={styles.info}>{username}</Text>
      </View>

      <View style={styles.main}>
        {/* Edit profile button to go to the edit profile page */}
        <View style={styles.main1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfileScreen")}
          >
            <Text style={styles.txt}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
     
      </View>
    </>
  );
}
// The styles section
const styles = StyleSheet.create({
  // Tha style for the profile picture
  pic_link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pic: {
    width: 80,
    height: 80,
    borderRadius: 200,
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 10,
  },
  // The style for profile and reminders and logout buttons
  main: {
    display: "flex",
    margin: 50,
  },
  main1: {
    display: "flex",
    marginBottom: 40,
    backgroundColor: "#e5e5e5",
    padding: 10,
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
  },
  button_txt: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: "center",
  },
  info: {
    color: "#3399ff",
    fontWeight: "bold",
    fontSize: 15,
  },
  txt: {
    fontSize: 20,
    color: "black",
  },
});