<template>
  <div class="box">
    <h4>ورود به زرین‌پال</h4>
    <form @submit.prevent="onSubmit">
      <label for="">شماره همراه یا ایمیل</label>
      <input type="text" name="username" v-model="username" />
      <button type="submit" class="primary-button">
        <b-spinner class="m-5" v-if="loading"></b-spinner>
        <span v-else>ورود</span>
      </button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "@/store/actions/auth";
export default {
  name: "login",
  data() {
    return {
      username: "",
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      const { username, hideLoading } = this;
      this.$store.dispatch(AUTH_REQUEST, username, hideLoading).then(() => {
        this.$router.replace({ name: "request" });
      });
    },
    hideLoading() {
      this.loading = true;
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  background-color: #ffffff;
  @media screen and (min-width: 62em) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 396px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    padding: 32px;
  }
  @media screen and (max-width: 61.99em) {
    padding: 32px 16px;
  }
}
h4 {
  text-align: center;
  margin-bottom: 32px;
}
form {
  max-width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 16px;
  margin-bottom: 12px;
  display: flex;
  font-weight: bold;
}
input {
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  font-size: 1.166rem;
  line-height: 16px;
  width: 100%;
  height: 40px;
  line-height: normal;
  -webkit-appearance: none;
}
</style>
