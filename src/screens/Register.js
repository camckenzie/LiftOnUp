import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert ,Image,TouchableOpacity} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default function Register({ navigation }) {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showLoading, setShowLoading] = useState(false);

const register = async() => {
    setShowLoading(true);
    try {
        const doRegister = await auth().createUserWithEmailAndPassword(email, password);
        setShowLoading(false);
        if(doRegister.user) {
            navigation.navigate('Home');
        }
    } catch (e) {
        setShowLoading(false);
        Alert.alert(
            e.message
        );
    }
};

    return (
        <View style={styles.container}>
               <View>
            <Image 
            source = {require('./LiftOnUp.png')} 
          style={{width:300,height:200}}/> 
            </View>
        <View style={styles.formContainer}>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 28, height: 50 }}>Register Here!</Text>
            </View> */}
            <View style={styles.subContainer}>
                <Input
                    style={styles.textInput}
                    placeholder='Your Username'
                    leftIcon={
                        <Icon
                        name='user'
                        type='font-awesome'
                        color="#004d99"
                        size={24}
                        />
                    }
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.subContainer}>
                <Input
                    style={styles.textInput}
                    placeholder='Your Email'
                    leftIcon={
                        <Icon
                        name='mail'
                        color="#004d99"
                        size={24}
                        />
                    }
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.subContainer}>
                <Input
                    style={styles.textInput}
                    placeholder='Create Password'
                    leftIcon={
                        <Icon
                        name='lock'
                        color="#004d99"
                        size={24}
                        />
                    }
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {/* <View style={styles.subContainer}>
                <Button
                    style={styles.textInput}
                    icon={
                        <Icon
                            name="check-circle"
                            size={15}
                            color="white"
                        />
                    }
                    title="Register"
                    onPress={() => register()} />
            </View> */}

                {/*Below handles the register button, onpress*/}
                <View style={styles.btn_box }>
                    
                    <TouchableOpacity
                         title="Register"
                         onPress={() => register()}
                          style={styles.btn_shape }
                          >
                        <View style={styles.btn_box }>
                        
                        <Text style={styles.btn_text}>Register</Text>    
                        </View>   
                    </TouchableOpacity>     
                </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Already a user?</Text>
            </View>
            {/* <View style={styles.subContainer}>
                <Button
                    style={styles.textInput}
                    icon={
                        <Icon
                            name="input"
                            size={15}
                            color="white"
                        />
                    }
                    title="Login"
                    onPress={() => {
                        navigation.navigate('Login');
                    }} />
            </View> */}
            {showLoading &&
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 200,
        width:"80%",
        padding: 10,
        top:60,
        justifyContent: 'center',

    },
    subContainer: {
        marginBottom: 10,
        padding: 5,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200
    }, 
    btn_box: {
        flexDirection: "row",
        // width: "100%",
        justifyContent: "center",
        alignContent:"center",
      },
    btn_shape: {
        borderRadius: 5,
        backgroundColor: '#00264d',
        width: 200,
        height: 40,
        marginHorizontal: 15,
        justifyContent: "center",
        alignContent:"center",
        
      },
    btn_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
      },
})
Register.navigationOptions = ({ navigation }) => ({
    title: 'Register',
    headerShown: true,
});