import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input}/>
        <Button title="ADD" />
      </View>

      <View>
      
      </View>
    
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  },
  input: { 
    width: "70%", 
    borderColor: "black", borderWidth: 1, 
    padding: 10
  }
});