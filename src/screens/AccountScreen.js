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
  return (
    <>
      {/* The view that handle the Profile Picture and its changing link. */}
      <View style={styles.pic_link}>
        <Image
          style={styles.pic}
          source={require("../../assets/images/profile.png")}
        ></Image>
        <TouchableOpacity>
          <Text style={styles.rigt_info}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      {/* Each of the following views for presnting the account info  */}
      <View style={styles.main}>
        <Text style={styles.left_info}>Username:</Text>
        <Text style={styles.rigt_info}>XYZ</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Email: </Text>
        <Text style={styles.rigt_info}>XYZ@gmail.com</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Birthday: </Text>
        <Text style={styles.rigt_info}>19XX-XX-XX </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Hight: </Text>
        <Text style={styles.rigt_info}>180 cm </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.left_info}>Weight: </Text>
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
          <Text style={styles.button_txt}>Logout</Text>
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
