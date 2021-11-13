import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, Image } from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id: 1, 
          img: 'https://m.media-amazon.com/images/I/61EKszVKuSL._AC_SL1000_.jpg',
          nome: 'Smartphone', 
          desc: 'Zenfone Max Pro M2 - 4GB 64GB , Black Saphire', 
          price: 'R$1.044,00'
        },
        {
          id: 2, 
          img: 'https://m.media-amazon.com/images/I/71OoV05kdyL._AC_SL1200_.jpg',
          nome: 'Caixa De Som', 
          desc: 'Caixa De Som Bluetooth',
          price: 'R$149,00'
        },
        {
          id: 3, 
          img: 'https://m.media-amazon.com/images/I/51WKFjmQSKL._AC_SL1196_.jpg',
          nome: 'Fone de Ouvido', 
          desc: 'Fone de Ouvido on Ear Bluetooth, Tune 500, JBL', 
          price: 'R$247,00'
        },
        {
          id: 4, 
          img: 'https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SL1000_.jpg',
          nome: 'Controle Remoto', 
          desc: 'Fire TV Stick 4K', 
          price: 'R$426,55'
        },
      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textoPrincipal}>Anúncios</Text>
        <FlatList 
          data={this.state.feed}
          horizontal={true} 
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Anuncio data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%'
  },
  textoPrincipal:{
    fontSize: 28,
    padding: 20,
    paddingTop: 60,
    textAlign: 'center',
  },
  box: {
    alignItems: 'center',
    height: 200,
    padding: 10,
    width: 185
  },
  name:{
    paddingTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  image:{
    height: 200,
    width: 100,
  }
});

export default App;

class Anuncio extends Component{
  render(){
    return(
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{
            uri: this.props.data.img,
          }}
        />
        <Text style={styles.name}> {this.props.data.nome} </Text>
        <Text style={styles.desc}> {this.props.data.desc} </Text>
        <Text style={styles.price}> {this.props.data.price} </Text>
      </View>
    );
  }
}