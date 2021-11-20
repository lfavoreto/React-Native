import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
 
export default function Home() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sexs, setSexs] = useState(0);
    const [schooling, setSchooling] = useState(0);
    const [nationality, setNationality] = useState(0);
    const [limit, setLimit] = useState(0);

    function nextScreen() {
        navigation.navigate('Dados', {name, age, sexs, schooling, nationality, limit });
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Conta Bancária
          </Text>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
          />
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
              style={styles.input}
              onChangeText={(text) => setAge(text)}
              keyboardType='numeric'
          />
          <Text style={styles.label}>Gênero:</Text>
          <Picker 
            selectedValue={sexs}
            onValueChange={(text) => setSexs(text)}>
              <Picker.Item key={1} value={'Masculino'} label="Masculino" />
              <Picker.Item key={0} value={'Feminino'} label="Feminino" /> 
          </Picker>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker
            selectedValue={schooling}
            onValueChange={(text) => setSchooling(text)}>
              <Picker.Item key={0} value={'Fundamental Incompleto'} label={'Fundamental Incompleto'} />
              <Picker.Item key={1} value={'Fundamental Completo'} label={'Fundamental Completo'} />
              <Picker.Item key={2} value={'Médio Incompleto'} label={'Médio Incompleto'} />
              <Picker.Item key={3} value={'Médio Completo'} label={'Médio Completo'} />
              <Picker.Item key={4} value={'Superior Incompleto'} label={'Superior Incompleto'} />
              <Picker.Item key={5} value={'Superior Completo'} label={'Superior Completo'} />
          </Picker>
          <Text style={styles.label}>Limite:</Text>
          <Slider
            minimumValue={100}
            maximumValue={1000}
            step={100}
            value={limit}
            onValueChange={(text) => setLimit(text)}
          />
          <Text style={{textAlign: 'center'}}>
            {limit.toFixed(0)}
          </Text>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch 
            style={styles.switch}
            value={nationality}
            onValueChange={(text) => setNationality(text)}
          />
          <Pressable style={styles.button} onPress={nextScreen}>
            <Text style={styles.text}>Confirmar</Text>
          </Pressable>
        </ScrollView>
      </View>
    );
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
    fontWeight: 'bold',
    fontSize: 28,
  },
  label: {
    marginBottom: 5,
    paddingTop: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
  }, 
  switch: {
    alignSelf: 'flex-start',
    marginTop: 8, 
    marginBottom: 20
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  result: {
    textAlign: 'center',
  }
});