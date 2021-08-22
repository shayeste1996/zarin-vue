<template>
  <aside class="panel-sidebar">
    <div class="panel-sidebar__cart panel-sidebar__profile">
      <div class="panel-sidebar__avatar">
        <img
          src="https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e/?s=128&r=g&d=mm"
          alt=""
        />
        <span class="panel-sidebar__zpcode">123456788</span>
      </div>
      <div class="panel-sidebar__name">
        شایسته
      </div>
    </div>
    <div class="panel-sidebar__cart">
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link
            :to="{ name: item.link }"
            :class="`panel-sidebar__link icon ${item.class}`"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import Logic from "./logic.js";
import "./style.scss";
export default Logic;
</script>

<style lang="scss" scoped></style>
