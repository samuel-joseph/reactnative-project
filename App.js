import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

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
        "https://github.com/samuel-joseph/reactnative-project/blob/main/pokemon.json"
      );
      const json = await response.json();
      console.log(json);
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
              <Text>{/* {item.title}, {item.releaseYear} */}</Text>
            )}
          />
        )}
      </View>
    );
  }
}
