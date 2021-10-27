// import * as React from "react";
import {
  //Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  onPress,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
// import { Button } from "react-native-elements/dist/buttons/Button";
// import firebase from '../../config/config.js';
import { ListItem, Avatar } from 'react-native-elements'

import React, { useState, useEffect } from 'react';

import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export class MyPlan extends React.Component {
 
  static navigationOptions = {
    title: "Day 1",
  };
  
  render() {
    return(

      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.wo_btn}
            onPress={onPress}
            >
              <View style={{alignItems: "flex-end"}}>
                <Text>Barbell Press</Text>
                <Text style={styles.innerText}>Sets: 3</Text>
                <Text style={styles.innerText}>Reps: 15</Text>
                <Text style={styles.innerText}>Lbs: 125</Text>
              </View>
          </TouchableOpacity>
        </View>

        <Separator />




        <View>
          <Image
            source = {require('../../assets/LiftOnUp.png')}
            style={{width:50, height:50}}/>
          <TouchableOpacity
            style={styles.wo_btn}
            onPress={onPress}
            >
              <Text>Deadlift</Text>
          </TouchableOpacity>
        </View>





        <Separator />
        <View>
          <TouchableOpacity
            style={styles.wo_btn}
            onPress={onPress}
            >
              <Text>Front Squat</Text>
              <Text>
                <View style={{borderWidth:1}}>
                  <Text style={styles.innerText}>Sets: 3</Text>
                </View>
                <View style={{borderWidth:1}}>
                  <Text style={styles.innerText}>Reps: 15</Text>
                </View>
                <View style={{borderWidth:1, borderRadius: 20}}>
                  <Text style={styles.innerText}>Weight: 125</Text>
                </View>

              </Text>

              
          </TouchableOpacity>
        </View>
        <Separator />
        <View>
          <TouchableOpacity
            style={styles.wo_btn}
            onPress={onPress}
            >
              <Text>Leg Press</Text>
          </TouchableOpacity>
        </View>
        <Separator />

        <View>
          <TouchableOpacity
            style={styles.wo_btn}
            onPress={onPress}
            >
              <ListItem>
                <Image 
                    source = {require('../../assets/LiftOnUp.png')} 
                  style={{width:60,height:60}}/>
                <ListItem.Content>
                  <ListItem.Title>Leg Curl</ListItem.Title>
                  <View >
                    <Text >3x15 reps</Text>
                  </View>
                </ListItem.Content>
              
                  <View >
                    <Text >3x15 reps</Text>
                  </View>
               
            </ListItem>
          </TouchableOpacity>
        </View>
        <Separator /> 
        
      </View>

    );
  }
}

//Separates each line of buttons
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },

  title: {
    textAlign: "left",
    marginVertical: 8,
  },
  fixtoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  innerText: {
    fontSize:10,
  },

  wo_btn: {
    
    backgroundColor: "#DDDDDD",
    padding: 10,
  },

})


export default MyPlan