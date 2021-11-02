import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert,Image ,TouchableOpacity} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default function RestPassword({ navigation }) {

	const [email, setEmail] = useState('');
const [showLoading, setShowLoading] = useState(false);

const reset = async() => {
    setShowLoading(true);
    try {
        await auth().sendPasswordResetEmail(email);
        setShowLoading(false);
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
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 28, height: 50  }}>Reset Password!</Text>
            </View> */}
            <View style={styles.subContainer}>
                <Input
                    style={styles.textInput}
                    placeholder='Your Email'
                    leftIcon={
                        <Icon
                        name='mail'
                        size={24}
                        color="#004d99"
                        />
                    }
                    value={email}
                    onChangeText={setEmail}
                />
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
                    title="Reset"
                    onPress={() => reset()} />
            </View> */}
             <View style={styles.btn_box}>
            <TouchableOpacity
              title="Reset"
         onPress={() => reset()}//The button will intrigue the sendPasswordResetEmail function with the value parsed through the input box
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Reset Password</Text>
        </TouchableOpacity>
        
      </View>
{/* 
            <View style={styles.subContainer}>
                <Button
                    style={styles.textInput}
                    icon={
                        <Icon
                            name="check-circle"
                            size={15}
                            color="white"
                        />
                    }
                    title="Back to Login"
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
        // height: 300,
		width:"80%",
        padding: 10,
        top:0,
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
      },
    btn_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
      },
})
RestPassword.navigationOptions = ({ navigation }) => ({
    title: 'Rest Password',
    headerShown: true,
});