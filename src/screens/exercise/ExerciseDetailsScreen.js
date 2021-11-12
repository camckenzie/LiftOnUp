import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../../constants';

const ExerciseDetailsScreen = ({route}) => {
  const [exercise, setExercise] = useState(route.params.exercise);
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'#C7B8F5'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.4 * SIZES.height,
          padding: 20,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>
        <Text style={{fontSize: 30, lineHeight: 45}}>{exercise.name}</Text>
        <Text style={{fontSize: 16, opacity: 1, marginVertical: 5}}>
          <Text>Primary Muscles: </Text>
          {exercise.primaryMuscles}
        </Text>
        <Text style={{fontSize: 16, opacity: 1, marginVertical: 5}}>
          <Text>Equipment: </Text>
          {exercise.equipment}
        </Text>
        <Text style={{fontSize: 12, width: '85%'}}>
          <Text>Instructions: </Text>
          {exercise.instructions}
          </Text>

      </View>
      <View></View>
      <View style={styles.btn_box}>
        <TouchableOpacity
          onPress={() => login()}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Add Exercise</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
  },
btn_box: {
      flexDirection: "row",
      // width: "100%",
      justifyContent: "center",
      alignContent:"flex-end",
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
export default ExerciseDetailsScreen;