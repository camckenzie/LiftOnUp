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

export default function SettingsScreen({ navigation }) {

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
  

  return (
    <>
      {/* Profile picture and the username */}
      <View style={styles.pic_link}>
        <Image
          style={styles.pic}
          source={require("../../../assets/images/profile.png")}
        ></Image>
        <Text style={styles.info}>UserName</Text>
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
        {/* Edit profile button to go to the manage reminders page 
        which is not finished yet */}
        <View style={styles.main1}>
          <TouchableOpacity>
            <Text style={styles.txt}>Manage Reminders</Text>
          </TouchableOpacity>
        </View>
        {/* Logout button  */}
        <View style={{ marginTop: 200 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_txt}
            onPress={() => { auth().signOut() }}>Logout</Text>
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
