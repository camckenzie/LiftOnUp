import React from "react";
import {View, Text} from 'react-native'

export default class Landing extends React.Component{
    render() {
        return(
            <View style={{flex:1, aligItem:'center', justifyContent:'center'}}>
                <Text>Welcome Screen</Text>
            </View>
        );
    }
}