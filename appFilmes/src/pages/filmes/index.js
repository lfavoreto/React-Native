import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Pressable} from 'react-native';

import api from '../../../src/services/api.js';

export default function Filmes({navigation}) {
    const [filmes, setFilmes] = useState([]);

    useEffect( async() =>{
        const response = await api.get("/r-api/?api=filmes");
        setFilmes(response.data)
    },[])

    return (
        <View>
        <FlatList 
            data={filmes}
            keyExtractor={item => item.id.toString() }
            renderItem={ ({item}) => (
                <View style={{marginVertical: 10, paddingHorizontal: 20}}>
                    <ScrollView>
                        <Text style={{fontSize: 15, marginBottom: 10}}>{item.nome}</Text>
                        <Image 
                            style={{ width: '100%', height: 150 }}
                            source={{uri: item.foto}} 
                        />
                        <Pressable 
                            style={{width: '100%', backgroundColor: 'black', padding: 12, marginTop: 10}}
                            onPress={()=>{navigation.navigate('Desc', {sinopse: item.sinopse, foto: item.foto, nome: item.nome} )}}>
                            <Text style={{color: 'white', alignSelf: 'center'}}>Saiba mais</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            ) }
        />
        </View>
    );
}