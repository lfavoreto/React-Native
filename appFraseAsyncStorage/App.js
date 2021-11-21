import React, { Component } from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      darkMode: false,
      font: false
    };
  }

  async componentDidMount(){
    await AsyncStorage.getItem('darkMode').then((value)=> {
      this.setState({darkMode: value});
    })
    await AsyncStorage.getItem('font').then((value)=> {
      this.setState({font: value});
    })
  }
 
  async componentDidUpdate(_, prevState){
    const darkMode = this.state.darkMode;
    const font = this.state.font;
 
    if(prevState !== darkMode){
      await AsyncStorage.setItem('darkMode', darkMode);
    }
    if(prevState !== font){
      await AsyncStorage.setItem('font', font);
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Frases</Text>

        <View style={styles.viewInput}>
          <View style={{width: '50%', padding: 10, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize:20}}>
              Dia
            </Text>
            <Switch
              style={{transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}}
              value={this.state.darkMode}
              onValueChange={ (valorSwitch) => this.setState({darkMode: valorSwitch})}
            />
          </View>
          <View style={{width: '50%', padding: 10, alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize:20}}>
            Pequeno
          </Text>
          <Switch
            style={{transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}}
            value={this.state.font}
            onValueChange={ (valorSwitch) => this.setState({font: valorSwitch})}
          />
          </View>
        </View>

        <View 
          style={{
            backgroundColor: this.state.darkMode ? 'white' : 'dimgray',
            flex: 1, 
            marginTop: 15, 
            borderWidth: 1, 
            borderColor: "gray", 
            borderRadius: 5, 
            width: '85%', 
            marginBottom: 100,
            padding: 10
          }}
        >
          <Text 
            style={{
              color: this.state.darkMode ? 'black' : 'white',
              fontSize: this.state.font ? 15 : 25
            }}
          >
            "A vingança nunca é plena mata a alma e envenena" (Seu Madruga)
          </Text>
        </View>
      </View>    
    );
 
  }
 
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});
