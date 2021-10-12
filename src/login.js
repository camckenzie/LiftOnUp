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
import * as firebase from "firebase/app";
import 'firebase/auth';
import react, { createContext } from 'react';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
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
  };
  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName
          })
          console.log('User registered successfully!')
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: ''
          })
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  };

  static navigationOptions = {
    title: "Log In",
  };



  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      icon: {
        fontSize: 161,
        textAlign: "center",
        marginBottom: 25,
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
      btn_box2: {
        flexDirection: "row",
        width: "150%",
        justifyContent: "center",
      },

      btn_shape: {
        // backgroundColor: "rgba(99,206,237,1)",
        borderRadius: 10,
        backgroundColor: "#00264d",
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
        {/* <Text style={styles.icon}>🏃</Text> */}
        <Image
          source={require('./LiftOnUp.png')}
          style={{ width: 300, height: 200 }} />
        <View style={styles.input_box}>
          <Text style={styles.input_title}>Username</Text>
          <TextInput
            style={styles.input_placeholder}
            autoCapitalize="none"
            placeholder="abcd@example.com"
            keyboardType="email-address"
            value={this.state.email}
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
            placeholder="enter password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn_box}>
          <TouchableOpacity
            onPress={this.userLogin()}
            style={styles.btn_shape}
          >
            <Text style={styles.btn_text}>Login</Text>
          </TouchableOpacity>

        </View>

        {/* <View style={styles.btn_box2}>
        <TouchableOpacity
          onPress={this.userLogin}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Sign Up</Text>
        </TouchableOpacity>

      </View> */}
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>

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