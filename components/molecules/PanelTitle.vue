<template>
  <nuxt-link :to="to" class="center block">
      <v-icon large>{{ icon }}</v-icon>
      <span>
          {{ title }}
          {{ etitle }}
      </span>
  </nuxt-link>
</template>

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
    }
  },
};
</script>