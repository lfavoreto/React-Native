import React from 'react';
import { View, Text } from 'react-native';
 
export default function Formacao() {
 return (
   <View>
     <Text style={{padding: 20, paddingTop: 40, fontSize: 20, fontWeight: 'bold'}}>Formação</Text>
     <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Fundamentao/Médio: Colégio Afonso Pena</Text>
     <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Curso: Curso de Inglês - CNA </Text>
     <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Técnico: Colégio Afonso Pena - Técnico em Informática</Text>
     <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Superior: Fatec Rubens Lara - Sistemas para internet</Text>
   </View>
  );
}
