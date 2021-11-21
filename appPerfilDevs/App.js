import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, Pressable, Image } from 'react-native';
import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      inputUser: '',
      id: '',
      nome: '',
      repositorios: '',
      data: '',
      seguidores: '',
      seguindo: '',
      image: ''

    };
    this.return = this.return.bind(this);
  }

  async return() {
    let inputUser = this.state.inputUser;
    
    const response = await api.get(`/${inputUser}`);
    this.setState({ api: response.data });

    this.setState({
      image: this.state.api.avatar_url,
      id: `ID: ${this.state.api.id}`,
      nome: `Nome: ${this.state.api.name}`,
      repositorios: `Repositórios: ${this.state.api.public_repos}`,
      data: `Data de Criação: ${this.state.api.created_at}`,
      seguidores: `Seguidores: ${this.state.api.followers}`,
      seguindo: `Seguindo: ${this.state.api.following}`,
    });
    
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil Devs</Text>

        <TextInput
          placeholder="Digite seu nome de usuário"
          style={styles.input}
          onChangeText={(value) => this.setState({ inputUser: value })}
        />

        <Pressable style={styles.button} onPress={this.return}>
          <Text style={styles.text}>Pesquisar</Text>
        </Pressable>

        <View style={styles.result}>
          <Image
            source={{ uri: this.state.image }}
            style={{ width: 150, height: 150, alignSelf: 'center' }}
          />
          <Text style={{paddingTop: 10}}>{this.state.id}</Text>
          <Text>{this.state.nome}</Text>
          <Text>{this.state.repositorios}</Text>
          <Text>{this.state.data}</Text>
          <Text>{this.state.seguidores}</Text>
          <Text>{this.state.seguindo}</Text>
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