import axios from "axios";
import { parseCookies } from "nookies";

const uid = parseCookies().uid;

const apiRoutes = axios.create({
  baseURL: "/api",
  headers: {
    uid,
  },
});

export { apiRoutes };
