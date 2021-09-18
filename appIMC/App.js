import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pes: '',
      alt: '',
      ver: ''
    };
    this.verificar = this.verificar.bind(this);
  }

  verificar(){
    var imc = this.state.pes / (this.state.alt**2);

    if (this.state.pes === '' || this.state.alt === ''){
      alert('Digite os valores!')
      return;
    }
    else if(imc < 18.5 ){
      this.setState({ver: 'Você está abaixo do peso'});
    }
    else if(imc >= 18.5 && imc < 25 ){
      this.setState({ver: 'O seu peso está normal'});
    }
    else if(imc >= 25 && imc < 30 ){
      this.setState({ver: 'Você está com sobrepeso'});
    }
    else if(imc >= 30 && imc < 35 ){
      this.setState({ver: 'Você está com obesidade de grau I'});
    }
    else if(imc >= 35 && imc < 40 ){
      this.setState({ver: 'Você está com obesidade de grau II'});
    }
    else if(imc >= 40 ){
      this.setState({ver: 'Você está com obesidade de grau III'});
    }
    this.pesInput.clear()
    this.altInput.clear()
    
    return;
  }
  
  render(){
    let img = 'https://play-lh.googleusercontent.com/BsxeytCfCmCnuSgaRczKDzsyRSyPqsQmGZ45qfwT7S9HAT1AAHILY0gZeQqsdw1o4B9N';
    return(
      <View style={styles.area}>
        <Text style={styles.textoPrincipal}>Cálculo do IMC</Text>
        <Image
          source={{ uri: img }}
          style={styles.image}
        />

        <TextInput 
          style={styles.input}
          placeholder="Digite o seu peso "
          keyboardType="numeric"
          onChangeText={(number) => this.setState({pes: number})}
          ref={input => { this.pesInput = input }}
        />
        <TextInput 
          style={styles.input}
          placeholder="Digite a sua altura"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({alt: number})}
          ref={input => { this.altInput = input }}
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
    backgroundColor: '#02a1dc',
    marginTop: 30,
  },
  textoBotao: {
    color: '#FFF',
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