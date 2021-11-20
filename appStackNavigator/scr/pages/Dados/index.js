import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Dados({route}) {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
           Dados
        </Text>

        <Text style={styles.result}>Nome: {route.params?.name}</Text>
        <Text style={styles.result}>Idade: {route.params?.age}</Text>
        <Text style={styles.result}>Sexo: {route.params?.sexs}</Text>
        <Text style={styles.result}>Escolaridade: {route.params?.schooling}</Text>
        <Text style={styles.result}>Brasileiro: {route.params?.nationality ? 'Sim' : 'Não'}</Text>
        <Text style={styles.result}>Limite: {route.params?.limit}</Text>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Voltar para tela Home</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      backgroundColor: 'black',
      width: '100%',
      marginTop: 20,
      marginBottom: 20
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      color: 'white',
    },
    result: {
      color: 'black',
      fontSize: 18
    },
    message: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18
    }
});