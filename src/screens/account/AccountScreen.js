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

export default function AccountScreen({ navigation }) {
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
  
  // signOut = () => {
  //   firebase.auth().signOut().then(() => {
  //     this.props.navigation.navigate('Intro')
  //   })
  //   .catch(error => this.setState({ errorMessage: error.message }))
  // }  
  return (
    
    //Whats this: <>
    <ScrollView>
      {/* The view that handle the Profile Picture and its changing link. */}
      <View style={styles.pic_link}>

          <Text>Welcome {user.email}</Text>

            <Image
              style={styles.pic}
              source={require("../../../assets/images/profile.png")}
            ></Image>
            
            <TouchableOpacity>
              <Text style={styles.rigt_info}>Change Profile Picture</Text>
            </TouchableOpacity>
          </View>
          
          {/* Each of the following views for presnting the account info  */}
          <View style={styles.main}>
            <Text style={styles.left_info}>Username:</Text>
            <Text style={styles.rigt_info}>{user.email}</Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.left_info}>Email: </Text>
            <Text style={styles.rigt_info}>{user.email}</Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.left_info}>Birthday: </Text>
            <Text style={styles.rigt_info}>19XX-XX-XX </Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.left_info}>Target Weight: </Text>
            <Text style={styles.rigt_info}>75 kg </Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.left_info}>Current Weight: </Text>
            <Text style={styles.rigt_info}>80 kg </Text>
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
                onPress={() => this.signOut()}
              >Logout</Text>
            </TouchableOpacity>

      </View>
    </ScrollView>
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
    margin: 10,
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
    width: "40%",
    height: 40,
    justifyContent: "center",
    // THIS CENTERS THE BUTTON
    alignSelf: "center",
    marginTop: 10,
  },
  button_txt: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: "center",
  },
});
