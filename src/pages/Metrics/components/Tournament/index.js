import React from 'react';
import { Image } from 'react-native';

import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
} from 'react-native';

const Item = ({ titulo }) => (
    <View style={styles.container}>
        {/* <Image
            style={styles.tinyLogo}
            source={require('@expo/snack-static/react-native-logo.png')}
        /> */}
        <Text style={styles.conteudo}> {titulo} </Text>
    </View>
);

export default function Torneios() {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        titulo={item.titulo}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const DATA = [
    {
        titulo: 'Titulo do Torneio'
    },
    {
        titulo: 'Torneio 2'
    },
    {
        titulo: 'Torneio 3'
    },
    {
        titulo: 'Torneio 4'
    }
];

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A383F',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '100%',
    },
    conteudo: {
        flex: 1,
        marginLeft: '25px',
        color: 'white'
    },
    tinyLogo: {
        maxHeight: 30,
        maxWidth: 30
    },
});
