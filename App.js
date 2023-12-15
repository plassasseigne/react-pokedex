import axios from 'axios';
import {StyleSheet, Text, View, FlatList,} from 'react-native';
import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import PokemonCard from "./components/PokemonCard.js";

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })

  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome on the Pokedex</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <FlatList 
          numColumns={3}
          data={data.results}
          renderItem={({item}) => <PokemonCard name={item.name} url={item.url}/> }
          keyExtractor={item => item.name}
        />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 0,
        marginTop: 50,
        paddingBottom: 30,
        backgroundColor: '#ebedef',
    },
    header: {
        backgroundColor: '#ab0000',
        padding: 10,
        marginTop: 50,
    },
    titre: {
        color: '#fff',
        fontWeight: "bold"
    },
});