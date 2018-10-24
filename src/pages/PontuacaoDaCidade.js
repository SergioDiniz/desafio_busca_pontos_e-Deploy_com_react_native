import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
      <View style={style.container}>
        <Text style={style.text}>
          Pontuacao da cidade: {this.state.item.Nome} - {this.state.item.Estado}
        </Text>
        <Text style={style.score}>{this.state.pontuacao}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  },
  score: {
    fontSize: 34,
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
