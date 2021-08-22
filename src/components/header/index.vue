<template>
  <header class="header__container">
    <div class="container">
      <b-navbar toggleable="lg" class="p-4">
        <b-navbar-brand href="#">
          <img
            src="@/assets/logo.svg"
            class="d-inline-block align-top"
            alt="logo"
        /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="mr-5">
          <b-navbar-nav class="justify-content-between nav-list">
            <b-nav-item
              v-for="item in links"
              :key="item.id"
              :href="item.link"
              class="h6 text-md"
              >{{ item.title }}</b-nav-item
            >
          </b-navbar-nav>
          <router-link
            :to="{ name: `${isLoggedIn ? 'dashboard' : 'login'}` }"
            class="btn"
            >ورود به پنل مدیریت</router-link
          >
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 1, title: "ویژگی‌ها و امکانات", link: "#features" },
        { id: 2, title: "اپلیکیشن فروشندگان", link: "#application" },
        { id: 3, title: "مراحل ساخت", link: "#steps" },
        { id: 4, title: "تعرفه", link: "#pricing" },
        { id: 5, title: "پرسش‌های متداول", link: "#questions" },
      ],
      isLoggedIn: this.$cookie.get("token") ? true : false,
    };
  },
  created() {
    console.log(this.isLoggedIn);
  },
};
</script>
<style scoped lang="scss">
.header__container {
  background-color: #fff;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.01);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.nav-list {
  margin-right: 42px;
  li {
    margin: 0 12px;
  }
}
</style>
