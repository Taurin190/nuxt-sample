<template>
  <nuxt-link
    :to="to"
    class="center block"
    v-bind:class="light_mode ? 'light' : ''"
  >
    <v-row align="left">
      <v-col class="icon">
        <v-icon large v-bind:class="light_mode ? 'lightblue' : ''">{{
          icon
        }}</v-icon>
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            <span class="title" v-bind:class="light_mode ? 'light' : ''">{{
              title
            }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <span class="e-title" v-bind:class="light_mode ? 'light' : ''">{{
              etitle
            }}</span>
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
span.title.light {
  color: white;
}
span.e-title {
  display: block;
  font-size: 12px;
  color: gray;
}
span.e-title.light {
  color: lightgray;
}

.light {
  color: white;
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
    light_mode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>