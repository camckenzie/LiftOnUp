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

            //The parent container that controls the general format
            <View style={styles.container}>
            {/* ScrollView allows scrolling */}
            <ScrollView>
              {/* Container that handles to body */}
              <View style={styles.contentContainer}>
                {/* Below are a set of 6 buttons:
                Exercise: AxB reps, C lbs */}
                <TouchableOpacity
                  style={styles.wo_btn}
                  onPress={onPress}
                  >
                    <ListItem>
                      <Image
                        source={require('../../assets/Workouts/Deadlift.png')}
                        style={{width:60, height:60}}/>
                        <ListItem.Content>
                          <ListItem.Title>Deadlift</ListItem.Title>
                            <Text>3x15 reps</Text>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.wo_btn}
                  onPress={onPress}
                  >
                    <ListItem>
                      <Image
                        source={require('../../assets/Workouts/Squat.png')}
                        style={{width:60, height:60}}/>
                        <ListItem.Content>
                          <ListItem.Title>Squat</ListItem.Title>
                            <Text>3x15 reps</Text>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.wo_btn}
                  onPress={onPress}
                  >
                    <ListItem>
                      <Image
                        source={require('../../assets/Workouts/LegExtension.jpg')}
                        style={{width:60, height:60}}/>
                        <ListItem.Content>
                          <ListItem.Title>Leg Extension</ListItem.Title>
                            <Text>3x15 reps</Text>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.wo_btn}
                  onPress={onPress}
                  >
                    <ListItem>
                      <Image
                        source={require('../../assets/Workouts/LegCurl.jpg')}
                        style={{width:60, height:60}}/>
                        <ListItem.Content>
                          <ListItem.Title>Leg Curl</ListItem.Title>
                            <Text>3x15 reps</Text>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
    
    
              </View>
    
                {/* This is the footer, the buttons at bottom */}
                <View styles={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EditDay1')}
                    style={styles.start_shape}>
                      <Text style={styles.start_text}>Edit</Text>
                    </TouchableOpacity>
                  <TouchableOpacity
                    onPress={onPress}
                    style={styles.start_shape}>
                      <Text style={styles.start_text}>Start</Text>
                    </TouchableOpacity>
                </View>
              </ScrollView>
          </View>
    
    
        );
      }
    
    }
    
    
    const styles = StyleSheet.create({
      title: {
        textAlign: "left",
        marginVertical: 8,
      },
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 16,
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      wo_btn: {
        //alignItems: "flex-start",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 5,
      },
      innerText: {
        fontSize:10,
      },
    
      footer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
      },
      start_shape: {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:"#004d99",
        width: '40%',
        height: 40,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        // THIS CENTERS THE BUTTON
        alignSelf: 'center'
      },
      start_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        alignContent: 'center',
      },
    })
    


export default MyPlan