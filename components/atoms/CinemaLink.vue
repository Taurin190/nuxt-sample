<template>
  <nuxt-link class="cinema-link text-decoration-none" :to="to">
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
export default {
  name: "CinemaLink",
  props: {
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>
