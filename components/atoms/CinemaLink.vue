<template>
  <nuxt-link class="cinema-link text-decoration-none" :to="link">
    <slot></slot>
  </nuxt-link>
</template>
<style scoped>
a.cinema-link {
  color: black;
}
a.cinema-link:hover {
  color: #4da7d8;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "CinemaLink",
  props: {
    to: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    const link = props["to"];
    return { link };
  },
});
</script>
