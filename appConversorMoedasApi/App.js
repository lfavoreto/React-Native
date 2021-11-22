import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      de: 'USD',
      para: 'BRL',
      result: [],
    };
    
    this.converter = this.converter.bind(this);
  }

  async converter() {
    if (this.state.valor == '') {
      this.setState({ result: 'Digite um valor válido' });
    } 
    else {
      
      let valor = parseInt(this.state.valor);
      let de = this.state.de;
      let para = this.state.para;
      
      let response = await api.get(
        `https://economia.awesomeapi.com.br/json/last/${de}-${para}`
      );

      let result = '';
      switch(true) {
        case de == 'BRL' && para == 'EUR':
          result = (response.data.BRLEUR.bid * valor);
          break;
        case de == 'BRL' && para == 'USD':
          result = (response.data.BRLUSD.bid * valor);
          break;
        case de == 'USD' && para == 'BRL':
          result = (response.data.USDBRL.bid * valor);
          break;
        case de == 'USD' && para == 'EUR':
          result = (response.data.USDEUR.bid * valor);
          break;
        case de == 'EUR' && para == 'USD':
          result = (response.data.EURUSD.bid * valor);
          break;
        case de == 'EUR' && para == 'BRL':
          result = (response.data.EURBRL.bid * valor);
          break;
        case de == 'BTC' && para == 'EUR':
          result = (response.data.BTCEUR.bid * valor)
          break;
        case de == 'BTC' && para == 'USD':
          result = (response.data.BTCUSD.bid * valor)
          break;
        case de == 'BTC' && para == 'BRL':
          result = (response.data.BTCBRL.bid * valor * 1000)
          break;
        default:
          result = 'Selecione moedas diferentes';
          break;
      }
      
      this.setState({
        result: result,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={this.state.valor}
          onChangeText={(value) => {
            this.setState({ valor: value });
          }}
        />
        <Text style={{marginTop: 15}}>De</Text>
        <Picker
          style={styles.input}
          selectedValue={this.state.de}
          onValueChange={(valor) => {
            this.setState({ de: valor });
          }}>
          <Picker.Item key={3} value={'USD'} label="Dólar" />
          <Picker.Item key={1} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
          <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
        </Picker>
        <Text style={{marginTop: 15}}>Para</Text>
        <Picker
          style={styles.input}
          selectedValue={this.state.para}
          onValueChange={(valor) => {
            this.setState({ para: valor });
          }}>
          <Picker.Item key={1} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
          <Picker.Item key={3} value={'USD'} label="Dólar" />
          <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
        </Picker>
        <Pressable style={styles.button} onPress={this.converter}>
          <Text style={styles.text}>Converter</Text>
        </Pressable>
        <Text>De: {this.state.de}</Text>
        <Text>Para: {this.state.para}</Text>
        <Text>Resultado: {this.state.result}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 40,
  },
  label: {
    marginBottom: 5,
    paddingTop: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black',
    width: '100%',
    marginVertical: 20
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;