import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
   <View>
    <Pressable style={{paddingBottom: 10, paddingTop: 30, backgroundColor: 'rgba(0, 122, 255, 0.12)'}} onPress={ () => navigation.toggleDrawer() }>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'rgb(0, 122, 255)'}}>Menu</Text>
    </Pressable>
    <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Experiência</Text>
    <Text style={{padding: 20, paddingBottom: 0}}>Estagiário: KBRTEC - Criação de Sites Profissionais</Text>
   </View>
  );
}