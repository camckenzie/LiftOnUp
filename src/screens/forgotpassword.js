import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet,TextInput,TouchableOpacity, Image, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = { 
          email: '',
          isLoading: false
        }
      }
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
  // Styles for forgetpassword screen

  resetMyPassword = () =>{
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.Alert("Emaile was sent")
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(error.message)
        // ..
      });
  }
  
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      input_box: {
        width: "75%",
        height: 40,
        marginBottom: 45,
      },
      input_title: {
        color: "#121212",
        marginTop: -30,
        marginBottom: 10,
      },
      input_placeholder: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        color: "#121212",
        backgroundColor: "rgba(230,230,230,1)",
      },
      btn_box: {
        flexDirection: "row",
        width: "75%",
        justifyContent: "center",
      },
      btn_shape: {
        borderRadius: 10,
        backgroundColor:"#004d99",
        width: "100%",
        height: 40,
        marginHorizontal: 5,
        justifyContent: "center",
      },
      btn_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
      },
      loading: {
        padding: 25,
      },
    });
    return(
        <View style={styles.container}>
        {/* Logo View in screen */}
            <Image 
	        source = {require('../../assets/LiftOnUp.png')} 
            style={{ width: 300, height: 200 }}/>

            <View style={styles.input_box}>
            <Text style={styles.input_title}>Email ID</Text>
            <TextInput
                style={styles.input_placeholder}
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={(val) => this.updateInputVal(val, 'email')}
            />

            </View>
            <View style={styles.btn_box}>
            <TouchableOpacity
                o onPress={() => this.resetMyPassword()}
                style={[styles.btn_shape,{backgroundColor: "#039BE5"}]}
            >
            <Text style={styles.btn_text}>Reset my Password</Text>
            </TouchableOpacity>
        
            </View>
        </View>

    );
  }
}

export default ForgotPassword;