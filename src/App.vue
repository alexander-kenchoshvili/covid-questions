<template>
  <the-header v-if="!showHeader && !showLastPage"></the-header>

  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  computed: {
    showHeader() {
      return this.$route.path === "/";
    },
    showLastPage() {
      return this.$route.path === "/thanks";
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: geo;
}
</style>
