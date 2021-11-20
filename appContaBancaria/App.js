import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Switch, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      sexs: 0,
      sexOptions: [
        {sex: 'Masculino'},
        {sex: 'Feminino'}
      ],
      schooling: 0,
      schoolingOptions: [
        {scho: 'Fundamental Incompleto'},
        {scho: 'Fundamental Completo'},
        {scho: 'Médio Incompleto'},
        {scho: 'Médio Completo'},
        {scho: 'Superior Incompleto'},
        {scho: 'Superior Completo'}
      ],
      nationality: false,
      limit: 100,
      result: '',
      message: ''
    }

    this.result = this.result.bind(this);
  }

  result() {
    if(this.state.name == '' || this.state.age == '') 
      this.setState({message: "Preencha todos os campos!!"});
    else {
     this.setState({
          name: this.state.name,
          idade: this.state.age,
          limite: this.state.limit,
          result: `
            Nome: ${this.state.name}
            Idade: ${this.state.age}
            Sexo: ${this.state.sexOptions[this.state.sexs].sex}
            Escolaridade: ${this.state.schoolingOptions[this.state.schooling].scho}
            ${(this.state.nationality) ? "Brasileiro: Sim" : "Brasileiro: Não"}
            Limite: ${this.state.limit}
          `
      });
    } 
  }

  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
          <Text style={styles.title}>
            Conta Bancária
          </Text>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({name: text})}
          />
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
              style={styles.input}
              onChangeText={(text) => this.setState({age: text})}
              keyboardType='numeric'
          />
          <Text style={styles.label}>Gênero:</Text>
          <Picker 
            selectedValue={this.state.sexs}
            onValueChange={(itemValue, itemIndex) => this.setState({sexs: itemValue})}>
              <Picker.Item key={1} value={'Masculino'} label="Masculino" />
              <Picker.Item key={0} value={'Feminino'} label="Feminino" /> 
          </Picker>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker
            selectedValue={this.state.schooling}
            onValueChange={(item, index) => {this.setState({schooling: item})}}>
              <Picker.Item key={0} value={'Fundamental Incompleto'} label={'Fundamental Incompleto'} />
              <Picker.Item key={1} value={'Fundamental Completo'} label={'Fundamental Completo'} />
              <Picker.Item key={2} value={'Médio Incompleto'} label={'Médio Incompleto'} />
              <Picker.Item key={3} value={'Médio Completo'} label={'Médio Completo'} />
              <Picker.Item key={4} value={'Superior Incompleto'} label={'Superior Incompleto'} />
              <Picker.Item key={5} value={'Superior Completo'} label={'Superior Completo'} />
          </Picker>
          <Text style={styles.label}>Limite:</Text>
          <Slider
            minimumValue={100}
            maximumValue={1000}
            step={100}
            value={this.state.limit}
            onValueChange={(text) => this.setState({limit: text})}
          />
          <Text style={{textAlign: 'center'}}>
            {this.state.limit.toFixed(0)}
          </Text>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch 
            style={styles.switch}
            value={this.state.nationality}
            onValueChange={(text) => this.setState({nationality: text})}
          />
          <Pressable style={styles.button} onPress={this.result}>
            <Text style={styles.text}>Confirmar</Text>
          </Pressable>
          <Text style={styles.result}>{this.state.message}</Text>
          <Text>{this.state.result}</Text>
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
  }, 
  switch: {
    alignSelf: 'flex-start',
    marginTop: 8, 
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'black',
    width: '100%',
    marginTop: 20,
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