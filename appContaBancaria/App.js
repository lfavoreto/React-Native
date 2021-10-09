import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Abertura de Conta</Text>
      <TextInput 
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(number) => this.setState({alc: number})}
          ref={input => { this.alcInput = input }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
