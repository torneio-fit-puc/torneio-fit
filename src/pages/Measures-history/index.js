import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';


export default function MeasuresHistory() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);


  const saveData = async () => {
    if (key.trim() === '' || value.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira uma chave e um valor.');
      return;
    }

    const newData = [...data, { key, value }];
    await AsyncStorage.setItem(key, value);
    setData(newData);
    setKey('');
    setValue('');
  };

  const loadData = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const stores = await AsyncStorage.multiGet(keys);
    const loadedData = stores.map(([key, value]) => ({ key, value }));
    setData(loadedData);
  };

  const clearData = async () => {
    await AsyncStorage.clear();
    setData([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Measures history</Text>
      <TextInput
        style={styles.input}
        value={key}
        onChangeText={setKey}
        placeholder="body part"
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="measure"
      />
      <Button title="Salvar" onPress={saveData} />
      <Button title="Limpar Dados" onPress={clearData} color="red" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}: {item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A383F',
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    color: "#FFF",
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    color: "#FFF",
    backgroundColor: '#1A383F',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    color: "#FFF",
    fontSize: 18,
  },
});
