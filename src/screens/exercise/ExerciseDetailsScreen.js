import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from '../../constants';

const ExerciseDetailsScreen = ({ route }) => {
  const [exercise, setExercise] = useState(route.params.exercise);
  const image = require('../../../assets/Workouts/1.jpeg');
  const [page, setPage] = useState(route.params.page);
  // console.log(page, "ksjdhfkjshd");
  if (page === 'push') {
  }
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, position: 'relative' }}>
        <StatusBar
          backgroundColor={'#C7B8F5'}
          barStyle={'dark-content'}
          animated={true}
        />
        <Image style={styles.image} source={image} />
        <View
          style={{
            width: '100%',
            height: 0.75 * SIZES.height,
            padding: 20,
            position: 'relative',
          }}>
          <Text style={{ fontSize: 30, lineHeight: 45 ,alignSelf:"center" ,fontWeight:"500"}}>{exercise.name}</Text>
          <View
        style={{
          height: 0.9,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}/>
          <Text style={{ fontSize: 18, opacity: 1, marginVertical: 8 }}>
         
            <Text>Primary Muscles: </Text>
            {exercise.primaryMuscles}
          </Text>
         
          <Text style={{ fontSize: 15, width: '100%' }}>
            <Text>Instructions: </Text>
            {exercise.instructions}
          </Text>

        </View>
       
        <View></View>
     
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

 
  image: {
    width: 390,
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },
})

export default ExerciseDetailsScreen;