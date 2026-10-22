import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bom dia!</Text>
      <View style={styles.BtContainer}>
      <TextInput placeholder="Digite uma tarefa" style={styles.textInput} />
      <TouchableOpacity style={styles.bt}><Text>+</Text></TouchableOpacity>
      </View>
      <View style={styles.cor1}></View>
      <View style={styles.cor2}></View>
      <View style={styles.cor3}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  cor1: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
  },
  cor2: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 10,
  },
  cor3: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  BtContainer: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  bt: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
