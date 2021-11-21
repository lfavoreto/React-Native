import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, Pressable } from "react-native";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("compras.db");
 
const App = () => {
  const [qt, setQt] = useState("");
  const [compra, setCompra] = useState("");
  const [compras, setCompras] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), qt VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirCompra = () => {
    if (!qt) {
      alert("Informe uma quantidade");
      return false;
    }
    if (!compra) {
      alert("Informe uma compra");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (qt, nome) VALUES (?,?)`,
        [qt],
        [compra],
        (sqlTxn, res) => {
          console.log(`${qt} ${compra} adicionado(s) com sucesso(s)!`);
          setCompra("");
          setQt("");
          getCompras();
        },
        error => {
          console.log("Erro ao inserir uma Compra " + error.message);
        },
      );
    });
  };

  const excluirCompra = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `delete from compras where id = ?`, 
        [id],
        (sqlTxn, res) => {
          console.log(`${compra} Compra deletada com sucesso!`)
          getCompras();
          setCompra("");
        },
        error => {
          console.log("Erro ao deletar uma Compra " + error.message);
        },
      );
    })
  };
 
  const getCompras = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, qt: item.qt, nome: item.nome });
            }
 
            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter Compras " + error.message);
        },
      );
    });
  };
 
  const renderCompra = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ width: '5%', marginRight: 9 }} >{item.qt}</Text>
        <Text style={{ width: '90%' }}>{item.nome}</Text>
        <Button title="X" onPress={() => {excluirCompra(item.id)}}></Button>
      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getCompras();
  }, []);
 
  return (
    <View>
      <Text style={{alignSelf: 'center', padding: 20, fontSize: 20, fontWeight: 'bold'}}>Compras</Text>
      <StatusBar backgroundColor="#222" />

      <View style={{width: '100%'}}>
        <TextInput
          placeholder="Quantidade"
          value={qt}
          onChangeText={setQt}
          style={{ 
            height: 45,
            borderWidth: 1,
            borderColor: '#222',
            marginLeft: 0,
            fontSize: 20,
            padding: 10,
            width: '100%',
          }}
          keyboardType="number-pad"
        />
        <TextInput
          placeholder="Informe uma compra"
          value={compra}
          onChangeText={setCompra}
          style={{ 
            marginHorizontal: 8, 
            height: 45,
            borderWidth: 1,
            borderColor: '#222',
            marginLeft: 0,
            fontSize: 20,
            padding: 10,
            width: '100%'
          }}
        />
      </View>
 
      <Button title="Salvar" onPress={incluirCompra} />
 
      <FlatList
        data={(qt, compras)}
        renderItem={renderCompra}
        key={t => t.id}
      />
    </View>
  );
};
 
export default App;