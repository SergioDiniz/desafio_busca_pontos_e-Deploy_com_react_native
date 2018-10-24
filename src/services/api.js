import axios from "axios";

// /BuscaTodasCidades
// /BuscaPontos

const api = axios.create({
  baseURL: "http://wsteste.devedp.com.br/Master/CidadeServico.svc/rest"
});

export default api;
