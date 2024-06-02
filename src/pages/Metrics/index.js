import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

import Tournament from './components/Tournament/index';

const Item = ({ atividades, sequencia, pontos }) => (
    <View style={styles.metrics}>
        <Text style={styles.item}>{atividades} Atividades Realizadas</Text>
        <Text style={styles.item}>{sequencia} Dias em Sequência</Text>
        <Text style={styles.item}>{pontos} Pontos</Text>
    </View>
);

export function Metrics() {
    return (
        <View style={styles.container}>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item
                            atividades={item.atividades}
                            sequencia={item.sequencia}
                            pontos={item.pontos}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.tournamentContainer}>
                <Tournament />
            </View>
        </View>
    );
}

const DATA = [
    {
        atividades: 5,
        sequencia: 3,
        pontos: 10,
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#04252D',
        alignItems: 'center',
        width: '100%',
    },
    flatListContainer: {
        marginBottom: '-200',
        width: '100%',
        padding: 10,
    },
    metrics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginVertical: 8,
    },
    item: {
        backgroundColor: '#1A383F',
        color: 'white',
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
        textAlign: 'center',
    },
    tournamentContainer: {
        width: '100%',
        padding: 10,
    },
});

export default Metrics;
