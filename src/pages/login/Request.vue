<template>
  <div class="box">
    <h4>تایید</h4>
    <p>رمز یک‌بار مصرف به شماره {{ username }} پیامک شد</p>
    <form @submit.prevent="onSubmit">
      <div class="otp-input__container">
        <input type="tel" maxlength="1" v-model="pass1" class="otp-input" />
        <input type="tel" maxlength="1" v-model="pass2" class="otp-input" />
        <input type="tel" maxlength="1" v-model="pass3" class="otp-input" />
        <input type="tel" maxlength="1" v-model="pass4" class="otp-input" />
        <input type="tel" maxlength="1" v-model="pass5" class="otp-input" />
        <input type="tel" maxlength="1" v-model="pass6" class="otp-input" />
      </div>
      <button type="submit" class="primary-button">
        <b-spinner class="m-5" v-if="loading"></b-spinner>
        <span v-else>تایید و ادامه</span>
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { AUTH_PASSWORD } from "@/store/actions/auth";
export default {
  data() {
    return {
      pass1: "",
      pass2: "",
      pass3: "",
      pass4: "",
      pass5: "",
      pass6: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["username"]),
  },
  methods: {
    onSubmit() {
      this.loading = true;
      const { pass1, pass2, pass3, pass4, pass5, pass6, username } = this;
      const password = pass1 + pass2 + pass3 + pass4 + pass5 + pass6;
      this.$store.dispatch(AUTH_PASSWORD, { username, password }).then(() => {
        this.$router.replace({ name: "dashboard" });
      });
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
.otp-input__container {
  display: flex;
  flex-flow: row-reverse;
  margin: 24px 0;
}
.otp-input {
  height: 48px;
  width: 45px;
  border: 1px solid #80868a;
  border-radius: 5px;
  background-color: #fff;
  margin: auto 5px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
}
</style>
