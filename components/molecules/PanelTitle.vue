<template>
  <nuxt-link :to="to" class="center block">
    <v-row align="left">
      <v-col class="icon">
        <v-icon large>{{ icon }}</v-icon>
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            {{ title }}
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            {{ etitle }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </nuxt-link>
</template>
<style scoped>
div.icon {
    max-width: 60px;
}
</style>
<script>
export default {
  name: "PanelTitle",
  props: {
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    etitle: {
      type: String,
      default: "",
    },
  },
};
</script>