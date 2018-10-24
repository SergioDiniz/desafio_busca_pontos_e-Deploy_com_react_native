import React, { Component } from "react";
import { View, Text } from "react-native";

import api from "../services/api";

export default class PontuacaoDaCidade extends Component {
  state = {
    item: {},
    pontuacao: ""
  };

  componentDidMount() {
    const { item } = this.props.navigation.state.params;
    this.getPontuacao(item);
    this.setState({ item });
  }

  getPontuacao = async data => {
    const response = await api.post("/BuscaPontos", data);
    const pontuacao = response.data;
    this.setState({ pontuacao });
  };

  render() {
    return (
      <View>
        <Text>
          Pontuacao da cidade: {this.state.item.Nome} - {this.state.item.Estado}
        </Text>
        <Text>{this.state.pontuacao}</Text>
      </View>
    );
  }
}
