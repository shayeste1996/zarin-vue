<template>
  <header class="panel-header__container">
    <div class="panel-header__background">
      <div class="container">
        <div class="panel-header__row">
          <img
            src="@/assets/logo.svg"
            class="d-inline-block align-top"
            alt="logo"
          />
          <button type="button" class="btn" @click="logout">
            خروج از حساب
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { AUTH_LOGOUT } from "@/store/actions/auth";

export default {
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT);
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-header {
  &__container {
    position: sticky;
    left: 0;
    top: 0;
    right: 0;
    z-index: 102;
  }
  &__background {
    background-color: #ffffff;
    position: relative;
    z-index: 1000;
    @media screen and (min-width: 62em) {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.06);
    }
    @media screen and (max-width: 61.99em) {
      box-shadow: 0px 1px 0px #eeeeee;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    height: 80px;
  }
}
</style>
