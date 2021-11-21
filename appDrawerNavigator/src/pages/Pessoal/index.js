import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View>
    <Pressable style={{paddingBottom: 10, paddingTop: 30, backgroundColor: 'rgba(0, 122, 255, 0.12)'}} onPress={ () => navigation.toggleDrawer() }>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'rgb(0, 122, 255)'}}>Menu</Text>
    </Pressable>
    <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Pessoal</Text>
    <Text style={{padding: 20, paddingBottom: 0}}>Nome: Lucas Favoreto Novoa Otero Machado da Costa</Text>
    <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>Data de Nasc.: 29/05/1999</Text>
    <Text style={{padding: 20, paddingBottom: 0, paddingTop: 0}}>E-mail: lfavoreto@hotmail.com</Text>
   </View>
  );
}