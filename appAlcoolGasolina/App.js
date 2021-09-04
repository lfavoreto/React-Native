import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alc: '',
      gas: '',
      ver: ''
    };
    this.verificar = this.verificar.bind(this);
  }

  verificar(){
    if (this.state.alc === '' || this.state.gas === ''){
      alert('Digite os valores!')
      return;
    }
    if(this.state.alc / this.state.gas < 0.7){
      this.setState({ver: 'O Álcool está valendo mais a pena'});
    }
    else{
      this.setState({ver: 'A Gasolina está valendo mais a pena'});
    }
    this.alcInput.clear()
    this.gasInput.clear()
    
    return;
  }
  
  render(){
    let img = 'https://cdn.pixabay.com/photo/2013/07/12/16/32/gasoline-pump-151115_960_720.png';
    return(
      <View style={styles.area}>
        <Text style={styles.textoPrincipal}>Álcool ou Gasolina</Text>
        <Image
          source={{ uri: img }}
          style={styles.image}
        />

        <TextInput 
          style={styles.input}
          placeholder="Digite o preço do álcool"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({alc: number})}
          ref={input => { this.alcInput = input }}
        />
        <TextInput 
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({gas: number})}
          ref={input => { this.gasInput = input }}
        />

        <Pressable style={[styles.botao]} onPress={this.verificar}>
          <Text style={[styles.textoBotao]}>Verificar</Text>
        </Pressable>

        <Text style={[styles.verificar]}>{this.state.ver}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    alignItems: 'center',
    marginTop: 40
  },
  textoPrincipal: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 25,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 30,
    fontSize: 20,
    padding: 10,
    width: 300
  },
  botao: {
    backgroundColor: '#28F79A',
    marginTop: 30,
  },
  textoBotao: {
    color: '#158251',
    padding: 10,
    width: 225,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    width: 300
  },
  verificar: {
    fontSize: 17,
    marginTop: 30
  }
});
 
export default App;