<template>
  <v-col cols="5">
    <nuxt-link class="black--text px-1 text-decoration-none" to="/">HOME</nuxt-link>
    <nuxt-link class="black--text px-1 text-decoration-none left-divider" to="/imax">IMAX</nuxt-link>
    <nuxt-link class="black--text px-1 text-decoration-none left-divider" to="/4dx">4DX/ScreenX/4DX Screen</nuxt-link>
  </v-col>
</template>
<style scoped>
a.left-divider {
      border-left: 1px solid black;
}

</style>
<script>
export default {
  name: "ImageBanner",
};
</script>