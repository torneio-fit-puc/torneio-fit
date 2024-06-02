import React, { useState } from 'react';
import { Image, View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
    const [participants, setParticipants] = useState([
        { id: 1, name: 'João Silva', rank: 999 },
        { id: 2, name: 'Maria Oliveira', rank: 998 },
        { id: 3, name: 'Pedro Souza', rank: 997 },
        { id: 4, name: 'John', rank: 996 }
    ]);

    const addParticipant = (newParticipant) => {
        setParticipants([...participants, newParticipant]);
    };

    const editParticipant = (updatedParticipant) => {
        const updatedParticipants = participants.map((participant) => {
            if (participant.id === updatedParticipant.id) {
                return updatedParticipant;
            }
            return participant;
        });

        setParticipants(updatedParticipants);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Torneio</Text>
            <FlatList
                data={participants}
                renderItem={({ item }) => (
                    <View style={styles.participantItem}>
                        <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} />
                        <Text>Rank: {item.rank}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <Button title="Adicionar participante" onPress={() => navigation.navigate('AddParticipant')} />
        </View>
    );
};

const AddParticipant = ({ navigation }) => {
    const [name, setName] = useState('');
    const [rank, setRank] = useState(0);

    const saveParticipant = () => {
        const newParticipant = { id: Math.random(), name, rank };
        addParticipant(newParticipant);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar participante</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Rank"
                value={rank}
                onChangeText={(text) => setRank(parseInt(text, 10))}
                keyboardType="numeric"
            />
            <Button title="Salvar" onPress={saveParticipant} />
        </View>
    );
};