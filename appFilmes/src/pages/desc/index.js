import React from 'react';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Desc({route}) {
  const navigation = useNavigation();

  return (
    <View style={{padding: 20, marginTop: 20}}>

        <Text style={{fontSize: 15, marginBottom: 20}}>{route.params?.nome}</Text>

        <Image 
            style={{ width: '100%', height: 150 }}
            source={{uri: route.params?.foto}} 
        />

        <Text style={{marginTop: 10}}>{route.params?.sinopse}</Text>

        <Pressable style={{width: '100%', backgroundColor: 'black', padding: 12, marginTop: 20}} onPress={() => { navigation.goBack(); }} >
            <Text style={{color: 'white', alignSelf: 'center'}}>Voltar</Text>
        </Pressable>
    </View>
   )
}
