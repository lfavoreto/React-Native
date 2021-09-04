import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      n1: '',
      n2: '',
      n3: '',
      conta: '',
    };
    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    if (this.state.n1 === '' || this.state.n2 === ''){
      alert('Preencha os campos!')
      return;
    }
    this.setState({n3: this.state.n1 * this.state.n2});
    this.setState({conta: this.state.n1 + ' x ' + this.state.n2 + ' = '});
  }


  render(){
    return(
      <View style={styles.area}>

        <Text style={[styles.textoPrincipal]}>Multiplicador de números</Text>

        <TextInput 
          style={styles.input}
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({n1: number})}
        />

        <Text style={[styles.alinharCentro]}>X</Text>

        <TextInput 
          style={styles.input}
          placeholder="Digite o multiplicador"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({n2: number})}
        />

        <Pressable style={[styles.botao]} onPress={this.calcular}>
          <Text style={[styles.textoBotao]}>calcular</Text>
        </Pressable>
        <Text style={[styles.resultado, styles.alinharCentro]}>{this.state.conta + this.state.n3}</Text>
      </View>
    )
  }
}
 
export default App;