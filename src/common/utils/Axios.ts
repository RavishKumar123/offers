import axios from "axios";

const headers = {
};

const instance = axios.create({
  baseURL: "http://cdn.sixt.io/codingtask",
  headers,
});

export default instance;