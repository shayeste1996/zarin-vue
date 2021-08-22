import axios from "axios";
import VueCookie from "vue-cookie";

const token = VueCookie.get("token");

const instance = axios.create({
  baseURL: "https://next.zarinpal.com",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    Cookie: `v4-access_token=${token}`,
  },
});
instance.defaults.headers.common["Authorization"] = "access-token";
instance.defaults.headers.common.Cookie = `v4-access_token=${token}`;




export default instance;

export const zarinInstance = axios.create({
  baseURL: "https://www.zarin.express/api/v1/",
});
