<template>
  <nuxt-link :to="to" class="center block">
    <v-row align="left">
      <v-col class="icon">
        <v-icon large>{{ icon }}</v-icon>
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            <span class="title">{{ title }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <span class="e-title">{{ etitle }}</span>
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
div > a {
  text-decoration: none;
}
span.title {
  display: block;
  font-size: 13px;
  color: black;
}
span.e-title {
  display: block;
  font-size: 12px;
  color: gray;
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