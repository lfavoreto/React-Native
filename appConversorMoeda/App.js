import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      valor: 0,
      de: 'Dólar',
      des: [
        'Real', 'Dólar', 'Euro'
      ],
      para: 'Real',
      paras: [
        'Real', 'Dólar', 'Euro'
      ],
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de = this.state.de;
    let para = this.state.para;
    let valor = parseInt(this.state.valor);
    let result = '';

    switch(true) {
      case de == 'Real' && para == 'Euro':
        result = valor * 0.16;
        break;
      case de == 'Real' && para == 'Dólar':
        result = valor * 0.18;
        break;
      case de == 'Dólar' && para == 'Real':
        result = valor * 5.46;
        break;
      case de == 'Dólar' && para == 'Euro':
        result = valor * 0.87;
        break;
      case de == 'Euro' && para == 'Dólar':
        result = valor * 1.15;
        break;
      case de == 'Euro' && para == 'Real':
        result = valor * 6.25;
        break;
      default:
        result = 'Selecione moedas diferentes';
        break;
    };

    this.setState({
      result: result
    });
  }

  render() {
    let de = this.state.des.map((key) => {
      return <Picker.Item key={key} value={key} label={key}/>
    });

    let para = this.state.paras.map((key) => {
      return <Picker.Item key={key} value={key} label={key}/>
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Conversor de Moedas
          </Text>

          <Text style={styles.label}>Digite um valor:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => this.setState({valor: text})}
          />
          <Text style={styles.label}>De:</Text>
          <Picker style={styles.input}
            selectedValue={this.state.de}
            onValueChange={(key) => this.setState({de: key})}
          >
            {de}
          </Picker>
          <Text style={styles.label}>Para:</Text>
          <Picker style={styles.input}
            selectedValue={this.state.para}
            onValueChange={(key) => this.setState({para: key})}
          >
            {para}
          </Picker>
          <Pressable style={styles.button} onPress={this.converter}>
            <Text style={styles.text}>Converter</Text>
          </Pressable>
          <Text style={styles.result}>{this.state.result}</Text>
        </ScrollView>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  result: {
    textAlign: 'center',
  }
});

export default App;