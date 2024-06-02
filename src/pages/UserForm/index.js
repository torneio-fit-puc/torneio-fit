import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function UserForm () {
  const [nomeAtividade, setNomeAtividade] = useState('');
  const [tipoAtividade, setTipodAtividade] = useState('');
  const [data, setData] = useState('');
  const [localAtividade, setLocalAtividade] = useState('');


  const handleSalvar = () => {
    if (formatDate != Number) {
      alert('Preencha todos os campos Obrigatorios ');
    }
    const formattedDate = formatDate(data);
    console.log(
      'Confirmar:',
      nomeAtividade,
      tipoAtividade,
      formattedDate,
      localAtividade
    );
  };

  const formatDate = (dateString) => {
    return dateString;
  };

  const handleLimpar = () => {
    setNomeAtividade('');
    setTipodAtividade('');
    setData('');
    setLocalAtividade('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Nova Atividade</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da Atividade"
          onChangeText={setNomeAtividade}
          value={nomeAtividade}
        />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Atividade"
        onChangeText={setTipodAtividade}
        value={tipoAtividade}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da Atividade (YYYY-MM-DD format)"
        onChangeText={setData}
        value={data}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Local da Atividade"
        onChangeText={setLocalAtividade}
        value={localAtividade}
      />
      <View style={styles.botoes}>
        <Button title="Limpar" onPress={handleLimpar} color="#FF0000" />
        <Button title="Salvar" onPress={handleSalvar} color="#008000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#04252D',
  },
  titulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: '#FFF',
    backgroundColor: '#1A383F',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
