import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";
import Start from "./component/Start";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      isLoading: true,
    };
  }

  capture = (pokemon) => {
    console.log("*********************************************************");
    this.setState((prevState) => ({
      ...prevState,
      pokemon,
    }));
  };

  render() {
    const { pokemon, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {console.log(pokemon)}
        {pokemon.length === 0 ? (
          <Start capture={this.capture} userPokemon={pokemon} />
        ) : (
          <FlatList
            data={pokemon}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View key={item.id}>
                <Image
                  source={{ uri: `${item.frontImage}` }}
                  style={{ width: 100, height: 90 }}
                />
                <Text key={item.id}>{item.name}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

// pokemon[0].moves[0].animation
