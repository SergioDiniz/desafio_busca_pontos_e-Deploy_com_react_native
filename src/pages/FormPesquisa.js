import React, { Component } from "react";
import t from "tcomb-form-native";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";


import enumEstados from "../helps/estados";
const estados = t.enums(enumEstados);

const Form = t.form.Form;

const Search = t.struct({
  cidade: t.maybe(t.String),
  estado: t.maybe(estados)
});

const options = {
  i18n: {
    optional: ""
  }
};

export default class FormPesquisa extends Component {
  handleSubmit = () => {
    const value = this.refs.form.getValue();

    if (!value.cidade && !value.estado) {
      Alert.alert(
        "Nenhum Valor",
        "Preencha ao menos um campo para realizar a consultar",
        [
          {
            text: "OK",
            onPress: () => {}
          }
        ]
      );
      return;
    }

    this.props.navigation.navigate("ListaDeCidades", {
      cidade: value.cidade,
      estado: value.estado ? enumEstados[value.estado] : null
    });
  };

  render() {
    return (
      <View style={style.container}>
        <Form ref={"form"} type={Search} options={options} />

        <TouchableOpacity
          style={style.btnPesquisar}
          onPress={this.handleSubmit}
        >
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Buscar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    flex: 1
  },
  btnPesquisar: {
    backgroundColor: "#1E88E5",
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});
