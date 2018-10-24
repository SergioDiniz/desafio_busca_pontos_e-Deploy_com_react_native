import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

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

    if (estado) {
      filtroPesquisa = filtroPesquisa.filter(e => {
        return e.Estado === estado;
      });
    }
    if (cidade) {
      filtroPesquisa = filtroPesquisa.filter(e => {
        const re = new RegExp(cidade, "gi");
        return e.Nome.match(re) != null;
      });
    }

    this.setState({ filtroPesquisa });
  };

  renderItem = ({ item }) => {
    return (
      <View style={style.listItemContainer}>
        <TouchableOpacity
          style={style.btnContainer}
          onPress={() => {
            this.props.navigation.navigate("PontuacaoDaCidade", { item });
          }}
        >
          <View style={style.listItemContent}>
            <Text>Cidade: {item.Nome}</Text>
            <Text>Estado: {item.Estado}</Text>
          </View>
          <View style={style.listItemBtn}>
            <Text>></Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <FlatList
          contentContainerStyle={style.listContainer}
          data={this.state.filtroPesquisa}
          keyExtractor={item => item.Nome + item.Estado}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  listItemContainer: {
    backgroundColor: "#fff",
    marginBottom: 20
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listItemContent: {
    padding: 20
  },
  listItemBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});
