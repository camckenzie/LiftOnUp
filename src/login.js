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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

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
        // backgroundColor: "rgba(99,206,237,1)",
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
      {/* <Text style={styles.icon}>🏃</Text> */}
      <Image 
	source = {require('./LiftOnUp-logos_transparent.png')} 
    style={{ width: 200, height: 300 }}/> 
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Username</Text>
        <TextInput
          style={styles.input_placeholder}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={(input) => {
            this.setState({ username: input });
          }}
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
          onChangeText={(input) => {
            this.setState({ password: input });
          }}
        />
      </View>
      <View style={styles.btn_box}>
        <TouchableOpacity
          onPress={() => this.logIn()}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.signUp()}
          style={[
            styles.btn_shape,
            { backgroundColor: "#00264d" },
          ]}
        >
          <Text style={styles.btn_text}>Sign Up</Text>
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