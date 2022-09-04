<template>
  <v-row>
    <v-col cols="8"> 
      <h3>{{ title }}</h3>
    </v-col>
    <v-col cols="4">
      <list-page-link :to="to" /> 
    </v-col>
  </v-row>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
import ListPageLink from './ListPageLink.vue';
export default {
  components: { ListPageLink },
  name: "CardTitle",
  props: {
    title: {
      type: String,
      default: "よくあるご質問",
    },
    to: {
      type: String,
      default: "/",
    }
  },
};
</script>