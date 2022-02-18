import axios from "axios";
import { api_server_url } from "../urls";
export default axios.create({
  baseURL: api_server_url,
});
