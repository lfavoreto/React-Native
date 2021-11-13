import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, Image } from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id: 1, 
          nome: 'Desenvolvedor Frontend', 
          salario: 'R$2.044,00',
          desc: 'Startup na área de mobilidade elétrica admite Desenvolvedor Front-End em São Paulo (Jardins) para atuar em Tempo integral, De segunda a quinta das 8h ás 18h e de sexta feira das 8h ás 17h.', 
          contato: 'contato@contato.com'
        },
        {
          id: 2, 
          nome: 'Desenvolvedor Backend', 
          salario: 'R$3.612,00',
          desc: 'Acompanhar problemas em produção do produto e atuar em melhorias para mitigação dos problemas;', 
          contato: 'contato@contato.com'
        },
        {
          id: 3, 
          nome: 'Engenheiro de Dados', 
          salario: 'R$4.000,00',
          desc: 'Sabemos que grandes resultados só são alcançados com uma grande equipe, por isso procuramos pessoas talentosas e apaixonadas, com desejo de crescer profissionalmente e criar uma trajetória de carreira conosco.', 
          contato: 'contato@contato.com'
        },
        {
          id: 4, 
          nome: 'Flutter Developer', 
          salario: 'R$3.075,00',
          desc: 'Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor', 
          contato: 'contato@contato.com'
        },
        {
          id: 5, 
          nome: 'Estágio em FrontEnd', 
          salario: 'R$ 775,00',
          desc: 'Atuará em atividades de Desenvolvimento de Soluções de web Front End para soluções Internas de empresas clientes.', 
          contato: 'contato@contato.com'
        },
      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textoPrincipal}>Vagas</Text>
        <FlatList 
          data={this.state.feed}
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
    padding: 10,
    width: '100%'
  },
  name:{
    paddingTop: 20,
    fontSize: 25,
  },
  salario: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;

class Anuncio extends Component{
  render(){
    return(
      <View style={styles.box}>
        <Text style={styles.name}> {this.props.data.nome} </Text>
        <Text style={styles.salario}> {this.props.data.salario} </Text>
        <Text style={styles.desc}> {this.props.data.desc} </Text>
        <Text style={styles.contato}> {this.props.data.contato} </Text>
      </View>
    );
  }
}