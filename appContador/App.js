import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cont: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){ 
    this.setState({cont: this.state.cont + 1}); 
  }
  diminuir(){
    if(this.state.cont > 0){
      this.setState({cont: this.state.cont - 1}); 
    }
    else{
      return
    }
  }

  render(){
    return(
      <View style={styles.area}>
        <Text style={[styles.textoPrincipal]}>Contador de Pessoas</Text>
        <Text style={[styles.contador]}>{this.state.cont}</Text>
        <Pressable style={[styles.botao, styles.aumentar]} onPress={this.aumentar}>
          <Text style={[styles.textoBotao]}>+</Text>
        </Pressable>
        <Pressable style={[styles.botao, styles.diminuir]} onPress={this.diminuir}>
          <Text style={[styles.textoBotao]}>-</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40
  },
  textoPrincipal: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center'
  },
  contador: {
    fontSize: 28,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  botao: {
    alignItems: 'center',
    height: 80,
    justifyContent: 'center',
    marginLeft: '40%',
    width: '20%',
  },
  aumentar: {
    backgroundColor: '#85FAB9',
  },
  diminuir: {
    backgroundColor: '#EB7277',
  },
  textoBotao: {
    fontSize: 35,
  }
});
 
export default App;