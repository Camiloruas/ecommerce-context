import axios from "axios";

/* Para deixar o servidor rodando digitar no cmd: json-server --watch db.json */
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
