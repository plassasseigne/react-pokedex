import {View, Image, Text, StyleSheet} from "react-native";
import React from "react";

export default function PokemonCard({name, url}) {
    const id = url.split('/')[url.split('/').length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.title}>{ name.charAt(0).toUpperCase() + name.slice(1) }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#ffffff'
    },
    title:{
        marginTop: 5,
        fontWeight: 'bold',
        color: 'black',
    }
})