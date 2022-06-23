<template>
  <nuxt-link
    :to="to"
    class="center block"
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

<style>
</style>
<script>
export default {
  name: "CampaignLink",
  props: {
    to: {
      type: String,
      default: "",
    },
    image_path: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>