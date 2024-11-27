import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;

}
  
  function clickMe(){
    alert("this is the click me button"); 
    Alert.alert("this is the click me button"); 
  
    const sswdGradePoints = gradePoints[sswd] || 0;
    const obGradePoints = gradePoints[ob] || 0; 

    const totalGradeScores = (sswdGradePoints + obGradePoints) * credits;

    const gpa = totalGradeScores / totalPossibleCredits;

    Alert.alert(`Your GPA is: ${gpa.toFixed(2)}`);


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: "5%",
        backgroundColor: "#9df9ef"
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "5%",
      },
      label: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: "5%",
      },
      textInput: {
        padding: "5%",
        marginRight: "5%",
      }
    }); 


return (
    <SafeAreaView>
      <View><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>
      <View>
        <Text>Maths</Text>
        <TextInput  placeholder="Grade" onChangeText={(val) => setSswd(val)}/>
      </View>
      <View >
        <Text>Organisational Behaviour</Text>
        <TextInput placeholder="Grade" onChangeText={(val) => setOb(val)}/>
      </View>
      <View >
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}

