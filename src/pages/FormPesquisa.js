import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default class FormPesquisa extends Component {
  state = {
    cidade: "",
    estado: ""
  };

  render() {
    const { cidade, estado } = this.state;

    return (
      <View>
        <Text>Cidade</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={cidade => this.setState({ cidade })}
          value={this.state.cidade}
        />

        <Text>Estado</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={estado => this.setState({ estado })}
          value={this.state.estado}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ListaDeCidades", {
              cidade,
              estado
            });
          }}
        >
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
