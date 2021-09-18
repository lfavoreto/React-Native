import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput} from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num: '',
    };
    this.descobrir = this.descobrir.bind(this);
  }

  descobrir(){
    this.setState({num: Math.floor(Math.random() * 10)});
    
    return;
  }
  
  render(){
    let img = 'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/11/numeros-aleatorios.png';
    return(
      <View style={styles.area}>
        <Text style={styles.textoPrincipal}>Jogo do Número Aleatório</Text>
        <Image
          source={{ uri: img }}
          style={styles.image}
        />
        <Text style={styles.textoSecundario}>Pense em um número de 0 a 10</Text>
        <Pressable style={[styles.botao]} onPress={this.descobrir}>
          <Text style={[styles.textoBotao]}>Descobrir</Text>
        </Pressable>

        <Text style={[styles.verificar]}>{this.state.ver}</Text>
        <Text style={[styles.number]}>{this.state.num}</Text>
      </View>
    )
  }
}
 
export default App;