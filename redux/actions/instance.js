import axios from "axios";
const instance = axios.create({
  baseURL: "https://6e1a0986.ngrok.io/"
});
export default instance;
