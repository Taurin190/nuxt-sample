<template>
  <nuxt-link
    :to="to"
    class="center block"
    v-bind:class="light_mode ? 'light' : ''"
  >
    <v-row align="left" dense>
      <v-col cols="6">
        <v-img :src="image_path" />
      </v-col>
      <v-col cols="6">
        <span>
          {{ description }}
        </span>
      </v-col>
    </v-row>
  </nuxt-link>
</template>
<script>
export default {
  name: "PointCardLink",
  data() {
    return {
      to: "/pointcard",
      image_path: "/creditcard_nonumber_black.png",
      description: "５回見たら１回半額！お得な特典がいっぱい！",
    };
  },
};
</script>