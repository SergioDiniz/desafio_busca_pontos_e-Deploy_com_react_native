import { createStackNavigator } from "react-navigation";

import FormPesquisa from "./pages/FormPesquisa";
import ListaDeCidades from "./pages/ListaDeCidades";
import PontuacaoDaCidade from "./pages/PontuacaoDaCidade";

export default createStackNavigator(
  {
    FormPesquisa,
    ListaDeCidades,
    PontuacaoDaCidade
  },
  {
    navigationOptions: {
      title: "City Score"
    }
  }
);
