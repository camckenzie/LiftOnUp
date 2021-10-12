import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import firebase from '../../config/config.js';

export class Registration extends React.Component {
    constructor() {
        super();
        this.state = { 
          displayName: '',
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
    
      registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
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
      }   
      static navigationOptions = {
        title: "Sign In",
      };
  render() {
      return (
          //KeyboardAvoidingView prevents keyboard from blocking off input parts of screen
          <KeyboardAvoidingView
          style={styles.KeyboardAvoidingView}
          behavior={'padding'}
          enabled
          //iOS is a little different
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64: 84}>
              <ScrollView
              style={styles.container}
              keyboardShouldPersistTaps="handled">

                  {/* For the image  */}
                  <View style={styles.headerContainer}>
                      <Image
                      source= {require('../../assets/LiftOnUp.png')}
                      style={{ width: 300, height: 200}} />

                      {/* Below handles all the text fields */}
                        <View style={styles.input_box}>
                            <Text style={styles.input_title}>First Name</Text>
                            <TextInput
                            style={styles.input_placeholder}
                            autoCapitalize="none"
                            placeholder="First Name"
                            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                        
                        />
                        </View>

                        <View style={styles.input_box}>
                            <Text style={styles.input_title}>Last Name</Text>
                            <TextInput
                            style={styles.input_placeholder}
                            autoCapitalize="none"
                            placeholder="Last Name"
                            onChangeText={(input) => {
                                this.setState({ last: input });
                        }}
                        />
                        </View>
                      
                      <View style={styles.input_box}>
                        <Text style={styles.input_title}>Email Address</Text>
                        <TextInput
                        style={styles.input_placeholder}
                        autoCapitalize="none"
                        placeholder="Email address"
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                        />
                        </View>
                        <View style={styles.input_box}>
                            <Text style={styles.input_title}>Create Password</Text>
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

                    {/*Below handles the register button, onpress*/}
                    <View style={styles.btn_box}>
                    
                        <TouchableOpacity
                              onPress={() => this.registerUser()}
                              style={[
                                styles.btn_shape,
                                { backgroundColor: "#00264d" },
                              ]}>
                            <Text style={styles.btn_text}>Sign Up</Text>
                        </TouchableOpacity>     
                    </View>
                </View>
                <ActivityIndicator
                        animating={this.state.loading}
                        style={styles.loading}
                        size="large"
                    />
              </ScrollView>
          </KeyboardAvoidingView>
      );
  }

}

const styles = StyleSheet.create({
    // This is scrollview?
    container: {
        backgroundColor: '#F4F6FA',
        height: '100%',
    },

    //The image
    headerContainer: {
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

    // Check this
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    btn_shape: {
        borderRadius: 10,
        backgroundColor:"#004d99",
        width: 200,
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
    contentView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainerStyle: {
        marginTop: 16,
        width: '90%',
    },
    KeyboardAvoidingView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default Registration