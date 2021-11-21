import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Formacao() {
  const navigation = useNavigation();
 return (
   <View>
    <Pressable style={{paddingBottom: 10, paddingTop: 30, backgroundColor: 'rgba(0, 122, 255, 0.12)'}} onPress={ () => navigation.toggleDrawer() }>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'rgb(0, 122, 255)'}}>Menu</Text>
    </Pressable>
    <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Formação</Text>
    <Text style={{padding: 20, paddingBottom: 0}}>Fundamentao/Médio: Colégio Afonso Pena</Text>
    <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Curso: Curso de Inglês - CNA </Text>
    <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Técnico: Colégio Afonso Pena - Técnico em Informática</Text>
    <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Superior: Fatec Rubens Lara - Sistemas para internet</Text>
   </View>
  );
}