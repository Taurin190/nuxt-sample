<template>
  <v-col cols="12" class="white--text text-center"> {{ text }} </v-col>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
export default {
  name: "CopyWrite",
  props: {
    text: {
      type: String,
      default: "© 2022 Taurin190.com.",
    },
  },
};
</script>