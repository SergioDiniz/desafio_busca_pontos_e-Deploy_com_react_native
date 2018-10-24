import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import api from "../services/api";

export default class ListaDeCidades extends Component {
  state = {
    filtroPesquisa: []
  };

  componentDidMount() {
    const { cidade, estado } = this.props.navigation.state.params;
    this.getTodasCidades(cidade, estado);
  }

  getTodasCidades = async (cidade, estado) => {
    const response = await api.get("/BuscaTodasCidades");
    let filtroPesquisa = response.data;

    this.setState({ filtroPesquisa });
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <Text>Cidade: {item.Nome}</Text>
        <Text>Estado: {item.Estado}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("PontuacaoDaCidade", { item });
          }}
        >
          <Text>Detalhar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.filtroPesquisa}
          keyExtractor={item => item.Nome + item.Estado}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
