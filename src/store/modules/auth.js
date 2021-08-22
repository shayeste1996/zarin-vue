import {
  AUTH_REQUEST,
  AUTH_PASSWORD,
  AUTH_SENT_REQUEST,
  AUTH_USER_DATA,
  AUTH_LOGOUT,
  AUTH_IS_LOGGED_IN,
} from "../actions/auth";
import instance from "../../axiosInstance";
import VueCookie from "vue-cookie";
const state = {
  username: "",
  user: {
    isSentRequest: false,
    isLoggedIn: false,
    data: [],
  },
};
const getters = {
  username(state) {
    return state.username;
  },
  isSentRequest(state) {
    return state.user.isSentRequest;
  },
};
const mutations = {
  [AUTH_REQUEST]: (state, username) => {
    state.username = username;
  },
  [AUTH_SENT_REQUEST]: (state, status) => {
    state.user.isSentRequest = status;
  },
  [AUTH_USER_DATA]: (state, userData) => {
    state.user.data = userData;
    VueCookie.set(
      "token",
      userData.data.access_token,
      userData.data.expires_in
    );
    instance.defaults.headers.common["Authorization"] = "access-token";
  },
  [AUTH_LOGOUT]: () => {
    VueCookie.delete("token");
    location.reload();
  },
  [AUTH_IS_LOGGED_IN]: (state) => {
    state.user.isLoggedIn = true;
  },
};
const actions = {
  [AUTH_REQUEST]: ({ commit }, username) => {
    return instance.post("/api/oauth/initialize", { username }).then(() => {
      commit(AUTH_REQUEST, username);
      commit(AUTH_SENT_REQUEST, true);
    });
  },
  [AUTH_PASSWORD]: ({ commit }, userData) => {
    const formData = {
      client_id: 2,
      grant_type: "password",
      password: userData.password,
      scope: "*",
      username: userData.username,
    };
    return instance.post("/api/oauth/token", formData).then((res) => {
      commit(AUTH_USER_DATA, res);
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    commit(AUTH_LOGOUT);
  },
};
export default { state, mutations, actions, getters };
