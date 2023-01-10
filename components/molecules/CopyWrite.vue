<template>
  <v-col cols="12" class="white--text text-center"> {{ text }} </v-col>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "CopyWrite",
  props: {
    text: {
      type: String,
      default: "© 2022 Taurin190.com.",
    },
  },
  setup(props) {
    const text = props["text"];

    return { text };
  },
});
</script>