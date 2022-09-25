<template>
  <v-card class="grey lighten-4 my-2 mx-2 py-5 px-6">
    <v-row align="center">
      <v-col cols="2" class="text-center">
        <v-icon>{{ icon }}</v-icon>
      </v-col>
      <v-col cols="10">
        <h3>{{ title }}</h3>
        <span>{{ description }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ExplanationCard",
  props: {
    icon: {
      type: String,
      default: "mdi-run-fast",
    },
    title: {
      type: String,
      default: "窓口よりも早くお求めいただけます",
    },
    description: {
      type: String,
      default:
        "ご鑑賞希望日の3日前0時から上映直前20分前までインターネットで受け付け。",
    },
  },
};
</script>