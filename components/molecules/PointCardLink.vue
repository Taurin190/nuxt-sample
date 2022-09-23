<template>
  <nuxt-link
    :to="to"
    class="center block"
  >
    <v-row dense>
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
  props: {
    to: {
      type: String,
      default: "/pointcard",
    },
    image_path: {
      type: String,
      default: "/creditcard_nonumber_black.png",
    },
    description: {
      type: String,
      default: "５回見たら１回半額！お得な特典がいっぱい！",
    },
  },
};
</script>