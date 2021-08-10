import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getMovies() {
    try {
      const response = await fetch(
        "https://samuel-joseph.github.io/jsonapi/pokemon.json"
      );
      const json = await response.json();
      console.log(json.pokemon[0].moves[0].animation);
      this.setState({ data: json.pokemon });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View key={item.id}>
                <Image
                  source={{ uri: `${item.frontImage}` }}
                  style={{ width: 80, height: 80 }}
                />
                <Image
                  source={{ uri: `${item.backImage}` }}
                  style={{ width: 80, height: 80 }}
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
