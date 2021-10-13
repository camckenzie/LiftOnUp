import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from '../../config/config.js';
import 'firebase/auth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  static navigationOptions = {
    title: "Log In",
  };

  goToForgotPassword = () => this.props.navigation.navigate('ForgotPassword')

// Styles for Login screen
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
        marginBottom:10,
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
        width: "40%",
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


return (
    <View style={styles.container}>
    {/* Logo View in screen */}
      <Image 
	source = {require('../../assets/LiftOnUp.png')} 
    style={{ width: 300, height: 200 }}/> 

  {/* Input Emaild and Password feild */}
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Email ID</Text>
        <TextInput
          style={styles.input_placeholder}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
      </View>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Password</Text>
        <TextInput
          secureTextEntry={true}
          autoCorrect={false}
          style={styles.input_placeholder}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
        />
      </View>
      <View style={styles.btn_box}>
        <TouchableOpacity
          o onPress={() => this.userLogin()}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Log In</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.btn_box}>
        <TouchableOpacity
          o onPress={() => this.goToForgotPassword()}
          style={[styles.btn_shape,{backgroundColor: "#039BE5"}]}
        >
          <Text style={styles.btn_text}>Forgot Password?</Text>
        </TouchableOpacity>
        
      </View>
      <ActivityIndicator
        animating={this.state.loading}
        style={styles.loading}
        size="large"
      />
    </View>
  );
}
}

export default Login;