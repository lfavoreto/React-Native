import { left } from 'inquirer/lib/utils/readline';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'Lucas Favoreto N. O. Machado da Costa';
    let niver = '29/05/1999';
    let location = 'Santos - SP, Brasil';
    let bio = 'Estuda na instituição Fatec Rubens Lara';
    let img = 'https://avatars.githubusercontent.com/u/50929929?v=4';
    return(
      <View style={{ alignItems: 'center' }}>
        <Text style={{ margin: 30, marginBottom: 15, marginTop: 40, fontSize: 22 }}>{ nome }</Text>
        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250 }}
        />
        <Text style={{ margin: 20, marginBottom: 0 }}>{ niver }</Text>
        <Text style={{ textAlign: 'left' }}>{ bio }</Text>
        <Text style={{ textAlign: 'left' }}>{ location }</Text>

        <Text style={{ marginTop: 25, fontSize: 25 }}>Projetos</Text>
        <Text style={{ marginTop: 10 }}>BusinessMarket</Text>
        <Text>Crud-Java</Text>
        <Text>meu-primeiro-app</Text>
      </View>
    )
  }
}

export default App;