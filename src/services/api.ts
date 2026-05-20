import axios from "axios";

// Instância única do axios usada no projeto inteiro.
// A baseURL aponta para o json-server local que serve os dados do db.json.
// Para iniciar o servidor de dados: json-server --watch db.json
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
