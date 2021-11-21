import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, Pressable } from 'react-native';
import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      inputCep: '',
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: ''

    };
    this.return = this.return.bind(this);
  }

  async return() {
    let inputCep = this.state.inputCep;
    const response = await api.get(`/ws/${inputCep}/json`);
    this.setState({ api: response.data });

    this.setState({
      cep: `CEP: ${this.state.api.cep}`,
      logradouro: `Logradouro: ${this.state.api.logradouro}`,
      bairro: `Bairro: ${this.state.api.bairro}`,
      cidade: `Cidade: ${this.state.api.localidade}`,
      estado: `Estado: ${this.state.api.uf}`,
    });
    
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CEP x Endereço</Text>

        <TextInput
          placeholder="Digite seu CEP"
          style={styles.input}
          onChangeText={(value) => this.setState({ inputCep: value })}
          keyboardType="numeric"
        />

        <Pressable style={styles.button} onPress={this.return}>
          <Text style={styles.text}>Pesquisar</Text>
        </Pressable>

        <View style={styles.result}>
          <Text>{this.state.cep}</Text>
          <Text>{this.state.logradouro}</Text>
          <Text>{this.state.bairro}</Text>
          <Text>{this.state.cidade}</Text>
          <Text>{this.state.estado}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 40,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    marginTop: 16,
    padding: 5,
    marginBottom: 20,
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 20
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  result: {
    backgroundColor: 'lightgray',
    padding: 20
  }
});

export default App;