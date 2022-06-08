<template>
<div>
    <panel-title :to="to" :icon="icon" :title="title" :etitle="etitle" />
</div>
</template>

<script>
import PanelTitle from '../molecules/PanelTitle.vue';
export default {
  components: { PanelTitle },
  name: "MovieListPanel",
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