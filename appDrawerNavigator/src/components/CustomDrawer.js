import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
 
export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props} >
      <View style={{
      width: '100%', height: 120, alignItems: 'center', justifyContent: 'center',
      marginTop: 25
      }}>
        <Image
        source={require('../img/Perfil.jpeg')}
        style={{width: 100, height: 100}}
        />
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 15}}>
          Lucas Favoreto
        </Text>
      </View>
 
      <DrawerItemList {...props} />
      </DrawerContentScrollView>
  );
}
